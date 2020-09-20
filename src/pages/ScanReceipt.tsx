import React, { useCallback, useState } from 'react';
import { 
  IonHeader,
  IonToolbar,
  IonPage,
  IonTitle,
  IonContent,
  IonFab,
  IonFabButton,
  IonIcon,
  IonButtons, 
  IonMenuButton, 
  IonFooter,
  IonCol,
  IonSpinner, IonText
} from '@ionic/react';
import { Card } from '../common/Card';
import { Plugins, CameraResultType } from '@capacitor/core';
import { sendApprove, sendReceipt, getCurrentUser, getBlock } from './utils';
import { expand } from 'ionicons/icons';
import { Menu } from '../common/Menu';


const { Camera } = Plugins;

const ScanReceipt: React.FC = () => {
  const [imageWebPath, setImageWebPath] = useState('');
  const [parsedText, setParsedText] = useState('');
  const [response, setResponse] = useState('');
  const [isLoading, setLoading] = useState(false);

  const handleGetPhoto = useCallback(async () => {
    setLoading(true);
    const documentUrl = await Camera.getPhoto({
      quality: 80,
      resultType: CameraResultType.Uri,
      saveToGallery: true,
    });

    if (documentUrl.webPath) {
      setImageWebPath(documentUrl.webPath);
      // setParsedText(JSON.stringify(await sendReceipt(documentUrl.webPath)));
    }
    setLoading(false);
  }, [setImageWebPath]);

  const handleOnAprrove = useCallback(async () => {
    console.log(await getBlock());
    const response = JSON.stringify(getBlock());
    console.log(response);
    setResponse(response);
    setImageWebPath('');
  }, [imageWebPath])

  const handleOnReject = useCallback(async () => {
    setImageWebPath('');
  }, []);

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
          { imageWebPath && <Card parsedText={parsedText} imageSrc={imageWebPath} onApprove={handleOnAprrove} onReject={handleOnReject} /> }
          {
            imageWebPath.length === 0 && 
            <IonCol>
                <IonTitle size="large">Scan your receipt...</IonTitle>
            </IonCol>
          }
          {isLoading && <IonSpinner />}
          <IonText>
             {response}
          </IonText>
      </IonContent>
      <IonFooter>
          <IonFab color="dark" vertical="bottom" horizontal="center" slot="fixed">
            <IonFabButton color="dark" onClick={handleGetPhoto}>
              <IonIcon icon={expand} />
            </IonFabButton>
          </IonFab>
      </IonFooter>
    </IonPage>
  );
};

export default ScanReceipt;
