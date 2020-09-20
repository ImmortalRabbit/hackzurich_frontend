import React from 'react';
import { 
  IonHeader,
  IonToolbar,
  IonPage,
  IonTitle,
  IonContent,
  IonIcon,
  IonButtons,
  IonMenuButton,
  IonCol,
  IonGrid, IonRow, IonItemDivider
} from '@ionic/react';
import { gift } from 'ionicons/icons';
import { Menu } from '../common/Menu';

const useGetUserData = () => {
    return {
      name: "Demezhan",
      surname: "Marikov",
      phone: "87755126348",
      coins: {
        'Richmond': 50,
        'KFC': 20,
        'Apple': 3,
      }
    }
};

const Profile: React.FC = () => {
  const userData = useGetUserData();
  const name = userData.name;
  const surname = userData.surname;
  const phone = userData.phone;
  const coins = userData.coins;

  return (
    <IonPage>
      <Menu />
      <IonHeader>
        <IonToolbar color="dark">
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Receipt GO</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonTitle>Earned coins: </IonTitle>
        <IonGrid>
          <IonRow>
            <IonCol>Name:</IonCol>
            <IonCol>{name}</IonCol>
          </IonRow>
          <IonRow>
            <IonCol>Surname:</IonCol>
            <IonCol>{surname}</IonCol>
          </IonRow>
          <IonRow>
            <IonCol>Phone:</IonCol>
            <IonCol>{phone}</IonCol>
          </IonRow>
          <IonItemDivider></IonItemDivider>
          <IonRow>
            <IonCol>coins:</IonCol>
            <IonCol><IonIcon icon={gift} /></IonCol>
          </IonRow>
          {
            Object.entries(coins).map(([key, value]) => {
              return (
                <IonRow>
                  <IonCol>{key}</IonCol>
                  <IonCol>{value}</IonCol>
                </IonRow>
              );
            })
          }
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Profile;
