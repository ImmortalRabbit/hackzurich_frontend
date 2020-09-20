import React, { useCallback } from 'react';
import { 
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonIcon,
  IonItem, 
  IonLabel, 
  IonList, 
  IonMenu,
} from '@ionic/react';
import { contact, aperture, logOut } from 'ionicons/icons';

export const Menu: React.FC = () => {
    const handleOnClickSignOut = useCallback(() => {
        // TO-DO sign out action
        console.log('sign out');
    }, []);


    return (        
            <IonMenu contentId="main" side="start" menuId="custom" className='clickable'>
                <IonHeader>
                    <IonToolbar>
                        <IonTitle>Receipt GO</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonContent>
                    <IonList>
                        <IonItem routerLink="/scanReceipt" type="button">
                            <IonIcon icon={aperture} slot="start" />
                            <IonLabel>Scan receipt</IonLabel>
                        </IonItem>
                        <IonItem routerLink="/profile" type="button">
                            <IonIcon icon={contact} slot="start" />
                            <IonLabel>Profile</IonLabel>
                        </IonItem>
                        <IonItem routerLink="/login" type="button">
                            <IonIcon icon={logOut} slot="start" />
                            <IonLabel>Sign out</IonLabel>
                        </IonItem>
                    </IonList>
                </IonContent>
            </IonMenu>
    );
};
