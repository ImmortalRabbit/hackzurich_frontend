import React from 'react';
import { IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonButton, IonImg, IonText } from '@ionic/react';

interface Card{
    parsedText: string;
    imageSrc: string;
    onApprove: () => void;
    onReject: () => void;
}

export const Card: React.FC<Card> = props => {
    const { parsedText, imageSrc, onApprove, onReject } = props;

    return (
        <>
            <IonCard className="Card">
                <IonCardHeader>
                    <IonCardTitle>Your recipe: </IonCardTitle>
                </IonCardHeader>

                <IonCardContent>
                    <IonImg style={{ 'border': '1px solid black', 'minHeight': '80px', 'minWidth': '80px', }} src={imageSrc} />
                    <IonText>
                        {parsedText}
                    </IonText>
                    <IonButton color="dark" fill="outline" size="large" expand="block" onClick={onApprove}>Send picture</IonButton>
                    <IonButton color="dark" fill="outline" size="large" expand="block" onClick={onReject}>Cancel</IonButton>
                </IonCardContent>
            </IonCard>
        </>
    );
};