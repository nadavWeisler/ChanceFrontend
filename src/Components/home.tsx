import { ReactElement } from "react"
import img from 'C:/Weisler/Programming/ChanceFrontend/src/assets/Untitled.png';
import img2 from 'C:/Weisler/Programming/ChanceFrontend/src/assets/Untitled2.png';


export const Home = (): ReactElement => {
    return (
        <div style={{ display: 'flex' }}>
            <img style={{ justifyContent: 'flex-end' }} height="450px" src={img2} />
            <img style={{ justifyContent: 'flex-start' }} height="450px" src={img} />
        </div>
    );
}