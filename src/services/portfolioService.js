import { db } from '../firebase';
import { doc, getDoc } from 'firebase/firestore';

export const fetchPortfolioData = async () => {
    try {
        const docRef = doc(db, "content", "portfolio");
        const docSnap = await getDoc(docRef);
        
        if (docSnap.exists()) {
            return docSnap.data();
        } else {
            console.warn("No such document found in Firestore!");
            return null;
        }
    } catch (error) {
        throw error;
    }
};