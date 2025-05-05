import React, { useEffect, useState } from 'react';
import groupBanner from '../assets/groupBanner.jpg'
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
  const [isOpen, setIsOpen] = useState(false);
  const [newGroupName, setNewGroupName] = useState("");
  const [newGroupDesc, setNewGroupDesc] = useState("");
  const [newGroupPic, setNewGroupPic] = useState("");

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

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setNewGroupPic(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const submitGroup = async () => {
    const data: GroupDataType = {
      name:newGroupName,
      description:newGroupDesc,
      profilePic:newGroupPic
    }
    await writeData(data);
    setNewGroupName("");
    setNewGroupDesc("");
    setNewGroupPic("");
    setIsOpen(false);
  }

  const writeData = async (data: GroupDataType): Promise<void> => { //used for writing
    try {
      const groupsCollectionRef = collection(firestore, 'groups');
      addDoc(groupsCollectionRef, data);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }

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
          className="h-48 bg-cover bg-center flex "
          style={{ backgroundImage: `url(${groupBanner})` }}
        />
        <div className="h-28 bg-gray-800 border-b border-gray-700 flex flex-row justify-center items-center space-x-4">
          <div>
            <div className='text-3xl font-bold'>Welcome to the <span className='text-blue-400'>Groups</span> page!</div>
            <div className='text-sm text-gray-300 pl-4 pt-1'>Browse existing groups or create one of your own!</div>
          </div>
          <button 
            className='items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 cursor-pointer'
            onClick={() => setIsOpen(true)}
          >
            Create a group!
          </button>

        </div>


        {data.map((item, index) => <GroupCard key={item.name+index} docId={docIdArr[index]} name={item.name} description={item.description} groupPic={item.profilePic}/>)}

        <Footer />
      </div>

      {isOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50" onClick={() => setIsOpen(false)}>
          <div className="bg-gray-700 rounded-lg shadow-lg p-6 w-96 relative" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-2 right-2 p-1 text-white hover:text-gray-200 border border-gray-700 cursor-pointer"
            >
              &times;
            </button>
            <h2 className="text-xl font-semibold mb-4">Create a group!</h2>
            <input
              type="text"
              placeholder="Enter a name"
              className="w-full p-2 rounded bg-gray-800 border border-gray-600 text-white mb-2"
              value={newGroupName}
              onClick={(e) => e.stopPropagation()}
              onChange={e => setNewGroupName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Enter a description"
              className="w-full p-2 rounded bg-gray-800 border border-gray-600 text-white mb-2"
              value={newGroupDesc}
              onClick={(e) => e.stopPropagation()}
              onChange={e => setNewGroupDesc(e.target.value)}
            />
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="block w-full bg-white/10 p-2 rounded text-sm mb-2 cursor-pointer"
            />
            <button 
              className='inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 cursor-pointer'
              onClick={() => submitGroup()}
            >
              Create
            </button>
            
          </div>
        </div>
      )}

    </div>
  );
}
