import React, { useEffect, useState } from 'react';
import { firestore, auth } from "../firebase";
import { doc, addDoc, setDoc, collection, getDocs, getDoc } from "firebase/firestore";

interface CommentsType {
  name:string,
  message:string
}
interface PostDataType {
  likes:number,
  message:string,
  name:string
}
export function PostCard({docIds, username, content, avatarColor, degree, likes}:{docIds:string[], username:string, content:string, avatarColor?:string, degree:string, likes:number}) {
  const [data, setData] = useState<CommentsType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [profileData, setProfileData] = useState<any>(null);
  const [reactLikes, setReactLikes] = useState(likes);
  const [expanded, setExpanded] = useState(false);
  const [replyInput, setReplyInput] = useState("");

  useEffect(() => { //Grab profile data
  const unsubscribe = auth.onAuthStateChanged(async (user) => {
    if (user) {
      const profileRef = doc(firestore, "users", user.uid);
      const profileSnap = await getDoc(profileRef);
      if (profileSnap.exists()) {
        setProfileData(profileSnap.data());
      }
    }
  });

  return () => unsubscribe();
  }, []);

  const fetchData = async () => {
    const result = await getMyData();
    setData(result);
    setLoading(false);
};

  useEffect(() => { //Grab replies data
  fetchData();
  }, []);


  const getMyData = async (): Promise<CommentsType[]> => { //Used for reading from database
    const myData: CommentsType[] = [];
    const projectDocRef = doc(firestore, 'groups', docIds[0], 'posts', docIds[1]);
    const collectionRef = collection(projectDocRef, 'comments');
    const querySnapshot = await getDocs(collectionRef);
    
    querySnapshot.forEach((doc) => {
      myData.push(doc.data() as CommentsType);
    });
    return myData;
  };

  const submitReply = async () => {
    let uName;
    if(profileData) {
      uName = profileData.name;
    } else {
      uName = "Anonymous";
    }
    const data: CommentsType = {
      message: replyInput,
      name: uName
    }
    await writeData(data);
    await fetchData();
  }

  const writeData = async (data: CommentsType): Promise<void> => { //used for writing
    try {
      const projectDocRef = doc(firestore, 'groups', docIds[0], 'posts', docIds[1]);
      const collectionRef = collection(projectDocRef, 'comments');
      addDoc(collectionRef, data);
      setReplyInput("");
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }
  
  const handleLike = async () => {
    let temp = reactLikes + 1;
    setReactLikes(temp);
    const data: PostDataType = {
      likes: temp,
      message: content,
      name: username
    }
    const specificDoc = doc(firestore, 'groups', docIds[0], 'posts', docIds[1])
    setDoc(specificDoc, data);
  }

  return (
    <div className="bg-gray-700 p-4 rounded-lg shadow-md flex flex-col ">
      {/* Top Row: Content + Like Button */}
      <div 
        className="flex justify-between items-start cursor-pointer"
        onClick={() => setExpanded((prev) => !prev)}
      >
        <div className="flex">
          <div className={`w-16 h-16 bg-${avatarColor}-500 mr-4 rounded`} /> {/*style={{backgroundColor: avatarColor}}*/}
          <div>
            <h3 className="font-semibold">{username}</h3>
            <p className="text-sm text-gray-400">{degree}</p>
            <p className="mt-2 text-gray-200">{content}</p>
          </div>
        </div>

        {/* Like Button (always visible) */}
        <button
          className="text-sm text-blue-400 hover:underline ml-4 cursor-pointer"
          onClick={(e) => {
            e.stopPropagation();
            handleLike();
          }}
        >
          👍 Like ({reactLikes})
        </button>
      </div>

      {/* Expanded Section: Replies & Input */}
      {expanded && (
        <div className="mt-4 border-t border-gray-600 pt-4">
          {/* Reply Box */}
          <div className='flex flex-row space-x-4'>
            <input
              type="text"
              placeholder="Write a reply!"
              className="w-full p-2 rounded bg-gray-800 border border-gray-600 text-white"
              value={replyInput}
              onClick={(e) => e.stopPropagation()}
              onChange={e => setReplyInput(e.target.value)}
            />
            <button 
              className='inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 cursor-pointer'
              onClick={() => submitReply()}
            >
              Reply
            </button>
          </div>

          {/* Replies */}
          <div className="mt-4 space-y-3 pl-6 text-sm text-gray-300">
            {data.map((item, index) => (
              <div key={item.name+index} className="border-l-2 border-gray-600 pl-4">
                <p className="font-medium text-gray-200">{item.name}</p>
                <p>{item.message}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
