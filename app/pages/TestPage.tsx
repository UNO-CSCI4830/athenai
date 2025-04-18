import { useRef, useState, useEffect } from "react";
import { firestore } from "../firebase";
import { doc, addDoc, setDoc, collection, getDocs } from "firebase/firestore";

interface TestDataType { //Used for reading and writing - should match fields in firestore
    Thing: string;
    Num: number;
}

export function TestPage() {
    const [userThing, setUserThing] = useState<string>("");
    const [userNum, setUserNum] = useState<number>(0);

    const writeData = async (data: TestDataType): Promise<void> => { //used for writing
        try {
            const docRef = collection(firestore, "test2");
            addDoc(docRef, data);
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    }

    const handleSubmit = async (e: React.FormEvent) => { //used for writing
        e.preventDefault();

        const data: TestDataType = {
            Thing: userThing,
            Num: userNum
        }
        await writeData(data);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}> {/*Used to write data*/}
                <label>Enter Thing:
                    <input type="text" value={userThing} onChange={(e) => setUserThing(e.target.value)}/>
                </label>
                <br/>
                <label>Enter Num:
                    <input type="number" value={userNum} onChange={(e) => setUserNum(parseInt(e.target.value))}/>
                </label>
                <br/>
                <button type="submit">Submit</button>
            </form>
            <br/>

            <MyComponent/> {/*Reading from database and displaying on website*/}
        </div>
    );
}

function MyComponent() { //Reading data from database
    const [data, setData] = useState<TestDataType[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    useEffect(() => {
        const fetchData = async () => {
            const result = await getMyData();
            setData(result);
            setLoading(false);
        };
      fetchData();
    }, []);

    if (loading) {
      return <p>Loading...</p>;
    }
  
    return (
      <div>
        {data.map((item, i) => (
            <div key={item.Thing+" i="+i}>
                <p>Thingamajig: {item.Thing}</p>
                <p>Stuff: {item.Num}</p>
            </div>
        ))}
      </div>
    );
}

//async function getMyData() {  is another way of creating this function
const getMyData = async (): Promise<TestDataType[]> => { //Used for reading from database
    const myData: TestDataType[] = [];
    const querySnapshot = await getDocs(collection(firestore, "test2"));
    querySnapshot.forEach((doc) => {
        myData.push(doc.data() as TestDataType);
    });
    return myData;  
};
