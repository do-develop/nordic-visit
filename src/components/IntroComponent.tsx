import { ReactNode } from "react";
import { Icon } from "react-bootstrap-icons";

interface CardProps {
    icon: ReactNode;
    title: string;
    logo: ReactNode;
    content: string;
}


export const IntroComponent: React.FC<CardProps> = ({icon, title, logo, content}) => {
    return (
        <div>
            <div>{icon}</div>
            <h3 className="text-primary">{logo} {title}</h3>
            <p className="text-info">{content}</p>
        </div>
    );
}
