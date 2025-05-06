import React, { useEffect, useState } from 'react';
import { PostCard } from '../components/PostCard';
import { firestore, auth } from "../firebase";
import { doc, addDoc, setDoc, collection, getDocs, getDoc } from "firebase/firestore";

interface PostDataType {
    likes:number,
    message:string,
    name:string
}
const tailwindColors = [
  "red",
  "orange",
  "yellow",
  "green",
  "teal",
  "blue",
  "violet",
  "pink",
];

export function GroupCard({docId, name, description, groupPic}:{docId:string, name:string, description:string, groupPic:string}) {
  const [showPosts, setShowPosts] = useState(false);
  const [profileData, setProfileData] = useState<any>(null);

  const [data, setData] = useState<PostDataType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [docIdArr, setDocIdArr] = useState<string[]>([]);
  const [postInput, setPostInput] = useState("");
  const tailwindColorsLength = tailwindColors.length

  const fetchData = async () => {
    const result = await getMyData();
    setData(result);
    setLoading(false);
  };

  useEffect(() => { //Grab posts data
  fetchData();
  }, []);

  useEffect(() => {
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

  const getMyData = async (): Promise<PostDataType[]> => { //Used for reading from database
    const myData: PostDataType[] = [];
    const projectDocRef = doc(firestore, 'groups', docId);
    const tasksCollectionRef = collection(projectDocRef, 'posts');
    const postsSnapshot = await getDocs(tasksCollectionRef);

    postsSnapshot.forEach((doc) => {
      myData.push(doc.data() as PostDataType);
      docIdArr.push(doc.id as string);
    });

    return myData;  
  };

  const submitPost = async () => {
    let uName;
    if(profileData) {
      uName = profileData.name;
    } else {
      uName = "Anonymous";
    }
    const data: PostDataType = {
      likes: 0,
      message: postInput,
      name: uName
    }
    await writeData(data);
    await fetchData();
  }

  const writeData = async (data: PostDataType): Promise<void> => { //used for writing
    try {
      const projectDocRef = doc(firestore, 'groups', docId);
      const groupsCollectionRef = collection(projectDocRef, 'posts');
      addDoc(groupsCollectionRef, data);
      setPostInput("");
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }

  const getRandomColor = () => {
    return `${tailwindColors[Math.floor(Math.random() * tailwindColorsLength)]}`
    //return `bg-${tailwindColorFamilies[Math.floor(Math.random() * tailwindColorFamiliesLength)]}-500`
  }

  return (
    <>
      <div className="bg-gray-800 px-10 py-6 border-b border-gray-700 flex items-center gap-6 cursor-pointer" onClick={() => setShowPosts(!showPosts)}>
        {groupPic && <img
          src={groupPic}
          alt="Group Icon"
          className="w-24 h-24 rounded-full object-cover "
        />}
        {!groupPic && <div className="w-24 h-24 rounded-full object-cover" style={{backgroundColor: getRandomColor()}}/>}
        <div>
          <h1 className="text-3xl font-bold justify-center">{name}</h1>
          <p className="text-sm text-gray-300 justify-center">{description}</p>
        </div>
      </div>
      {showPosts && 
      <div className="flex-1 overflow-y-auto px-10 py-8 flex flex-col items-center">
        <div className="space-y-6 w-full max-w-2xl">
          <div className='flex flex-row space-x-4'>
            <input
              type="text"
              placeholder="Write a post!"
              className="w-full p-2 rounded bg-gray-800 border border-gray-600 text-white"
              value={postInput}
              onClick={(e) => e.stopPropagation()}
              onChange={e => setPostInput(e.target.value)}
            />
            <button 
              className='inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 cursor-pointer'
              onClick={() => submitPost()}
            >
              Post
            </button>
          </div>
        
          {data.map((item, index) => 
            <PostCard
              docIds={[docId, docIdArr[index]]}
              key={item.name+index}
              username={item.name}
              degree="AthenAI User"
              content={item.message}
              avatarColor={getRandomColor()}
              likes={item.likes}
            />
          )}
        </div>
      </div>}
      <div className={`bg-red-500`}/>
      <div className={`bg-orange-500`}/>
      <div className={`bg-yellow-500`}/>
      <div className={`bg-green-500`}/>
      <div className={`bg-teal-500`}/>
      <div className={`bg-purple-500`}/>
      <div className={`bg-violet-500`}/>
      <div className={`bg-pink-500`}/>
    </>
  );
}
