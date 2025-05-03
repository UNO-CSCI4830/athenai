import React, { useEffect, useState } from 'react';
import { PostCard }from '../components/PostCard';
import groupBanner from '../assets/groupBanner.jpg'
import groupImage from '../assets/athenaiLogo.jpg'
import Header from '../components/Header';
import Footer from '~/components/Footer';
import { firestore } from "../firebase";
import { doc, addDoc, setDoc, collection, getDocs } from "firebase/firestore";
import { GroupCard } from '~/components/GroupCard';

interface GroupDataType {
  name:string,
  description:string,
  profilePic:string
}

export function GroupsPage() {
  const [data, setData] = useState<GroupDataType[]>([]);
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

  const getMyData = async (): Promise<GroupDataType[]> => { //Used for reading from database
    const myData: GroupDataType[] = [];
    const querySnapshot = await getDocs(collection(firestore, "groups"));
    querySnapshot.forEach((doc) => {
      myData.push(doc.data() as GroupDataType);
      docIdArr.push(doc.id as string);
    });
    return myData;  
  };

  if (loading) {
    return (
      <>
        <Header/>
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-800 to-gray-900 text-white">
          Loading...
        </div>
        <Footer/>
      </>
    );
  }

  return (
    <div className="min-h-screen flex font-sans text-white bg-gray-900">
      {/* Main Section */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        {/* Group Banner */}
        <div
          className="h-48 bg-cover bg-center"
          style={{ backgroundImage: `url(${groupBanner})` }}
        />

        {data.map((item, index) => <GroupCard key={item.name+index} docId={docIdArr[index]} name={item.name} description={item.description} groupPic={item.profilePic}/>)}

        <Footer />
      </div>
    </div>
  );
}


function SidebarLink({ href, icon, label }: { href: string; icon: string; label: string }) {
  return (
    <li className="flex items-center gap-2 hover:translate-x-1 transition cursor-pointer">
      <a href={href} className="flex items-center gap-2">
        <span>{icon}</span> {label}
      </a>
    </li>
  );
}
