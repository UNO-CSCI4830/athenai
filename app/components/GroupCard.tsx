import React, { useEffect, useState } from 'react';
import { PostCard } from '../components/PostCard';
import groupImage from '../assets/athenaiLogo.jpg';
import groupBanner from '../assets/groupBanner.jpg'
import Header from '../components/Header';
import Footer from '~/components/Footer';
import { firestore } from "../firebase";
import { doc, addDoc, setDoc, collection, getDocs } from "firebase/firestore";

interface PostDataType {
    likes:number,
    message:string,
    name:string
}
interface CommentsType {
  name:string,
  message:string
}
export function GroupCard({docId, name, description, groupPic}:{docId:string, name:string, description:string, groupPic:string}) {
    const [showPosts, setShowPosts] = useState(false);

    const [data, setData] = useState<PostDataType[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [docIdArr, setDocIdArr] = useState<string[]>([]);
    useEffect(() => {
      const fetchData = async () => {
          const result = await getMyData();
          setData(result);
          setLoading(false);
      };
    fetchData();
    
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

    return (
        <>
            <div className="bg-gray-800 px-10 py-6 border-b border-gray-700 flex items-center gap-6 cursor-pointer" onClick={() => setShowPosts(!showPosts)}>
                <img
                    src={groupImage}
                    alt="Group Icon"
                    className="w-24 h-24 rounded-full object-cover border border-gray-500"
                />
              <div>
                <h1 className="text-3xl font-bold justify-center">{name}</h1>
                <p className="text-sm text-gray-300 justify-center">{description}</p>
              </div>
            </div>
            {showPosts && 
            <div className="flex-1 overflow-y-auto px-10 py-8 flex flex-col items-center">
                <div className="space-y-6 w-full max-w-2xl">
                {data.map((item, index) => 
                    <PostCard
                        docIds={[docId, docIdArr[index]]}
                        key={item.name+index}
                        username={item.name}
                        degree="User"
                        content={item.message}
                        avatarColor="bg-blue-600"
                    />)
                }
                </div>
            </div>
            }
        </>
    );
}
