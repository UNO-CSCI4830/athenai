import React, { useEffect, useState } from 'react';
import groupImage from '../assets/athenaiLogo.jpg';
import groupBanner from '../assets/groupBanner.jpg'
import Header from '../components/Header';
import Footer from '~/components/Footer';
import { firestore } from "../firebase";
import { doc, addDoc, setDoc, collection, getDocs } from "firebase/firestore";

interface CommentsType {
  name:string,
  message:string
}
export function PostCard({docIds, username, content, avatarColor, degree}:{docIds:string[], username:string, content:string, avatarColor?:string, degree:string}) {
    const [data, setData] = useState<CommentsType[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    useEffect(() => {
      const fetchData = async () => {
          const result = await getMyData();
          setData(result);
          setLoading(false);
      };
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
    console.log(myData);
    return myData;
  };


  const [likes, setLikes] = useState(0);
  const [expanded, setExpanded] = useState(false);

  const handleLike = () => setLikes((prev) => prev + 1);
  const toggleExpand = () => setExpanded((prev) => !prev);

  return (
    <div
  className="bg-gray-700 p-4 rounded-lg shadow-md flex flex-col cursor-pointer"
  onClick={toggleExpand}
>
  {/* Top Row: Content + Like Button */}
  <div className="flex justify-between items-start">
    <div className="flex">
      <div className={`w-16 h-16 ${avatarColor} mr-4 rounded`} />
      <div>
        <h3 className="font-semibold">{username}</h3>
        <p className="text-sm text-gray-400">{degree}</p>
        <p className="mt-2 text-gray-200">{content}</p>
      </div>
    </div>

    {/* Like Button (always visible) */}
    <button
      className="text-sm text-blue-400 hover:underline ml-4"
      onClick={(e) => {
        e.stopPropagation();
        handleLike();
      }}
    >
      👍 Like ({likes})
    </button>
  </div>

  {/* Expanded Section: Replies & Input */}
  {expanded && (
    <div className="mt-4 border-t border-gray-600 pt-4">
      {/* Reply Box */}
      <div>
        <input
          type="text"
          placeholder="Write a reply..."
          className="w-full p-2 rounded bg-gray-800 border border-gray-600 text-white"
          onClick={(e) => e.stopPropagation()}
        />
      </div>

      {/* Fake Replies */}
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
