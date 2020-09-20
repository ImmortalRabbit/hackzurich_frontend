import React, { useCallback, useContext, useState } from 'react';
import { 
  IonHeader,
  IonToolbar,
  IonPage,
  IonTitle,
  IonContent,
  IonButtons,
  IonButton, 
  IonInput, 
  IonItem, 
  IonLabel,
  IonIcon,
  IonRouterLink,
  NavContext,
  IonText
} from '@ionic/react';
import { football } from 'ionicons/icons';
import { useForm, Controller } from "react-hook-form";
import { register as registerUser } from './utils';

const Login: React.FC = () => {
  let initialValues = {
    phone: "",
    name: "",
    surname: "",
    password: "",
  };

  const { control, register, handleSubmit } = useForm({
    defaultValues: initialValues
  });

  const [error, setError] = useState();
  const {navigate} = useContext(NavContext);

  const onSubmit = useCallback(async (data: any) => {
    // TO-DO sent to backend and get response
    const response = await registerUser(data);
    console.log(response === "SUCCESS");
    if (response == 'SUCCESS') {
      (() => navigate('/login', 'forward'))();
    }
    setError(data);
  }, [navigate]);
  
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="dark">
          <IonButtons slot="start">
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
          <IonItem>
            <IonIcon icon={football} />
            <IonTitle>ReceiptGO</IonTitle>
          </IonItem>
          <form className="ion-padding loginForm" onSubmit={handleSubmit(onSubmit)}>

          <IonItem>
              <IonLabel position="floating">Phone</IonLabel>
              <Controller
                  as={
                    <IonInput name="phone" ref={register({ required: true })} />
                  }
                  control={control}
                  onChangeName="onIonChange"
                  onChange={([selected]: any) => {
                    return selected.detail.value;
                  }}
                  name="phone"
                  rules={{ required: true }}
                />
            </IonItem>

            <IonItem>
              <IonLabel position="floating">Name</IonLabel>
              <Controller
                  as={
                    <IonInput name="name" ref={register({ required: true })} />
                  }
                  control={control}
                  onChangeName="onIonChange"
                  onChange={([selected]: any) => {
                    return selected.detail.value;
                  }}
                  name="name"
                  rules={{ required: true }}
                />
            </IonItem>

            <IonItem>
              <IonLabel position="floating">Phone</IonLabel>
              <Controller
                  as={
                    <IonInput name="surname" ref={register({ required: true })} />
                  }
                  control={control}
                  onChangeName="onIonChange"
                  onChange={([selected]: any) => {
                    return selected.detail.value;
                  }}
                  name="surname"
                  rules={{ required: true }}
                />
            </IonItem>
            <IonItem>
                <IonLabel position="floating">Password</IonLabel>
                <Controller
                  as={
                    <IonInput name="password" type="password" ref={register({ required: true })} />
                  }
                  control={control}
                  onChangeName="onIonChange"
                  onChange={([selected]: any) => {
                    return selected.detail.value;
                  }}
                  name="password"
                  rules={{ required: true }}
                />
            </IonItem>
            <IonButton color="dark" className="ion-margin-top" type="submit" expand="block">
              Sign in
            </IonButton>
            <IonItem lines="none" routerLink="/create-account">
              <IonRouterLink color="medium">You don't have an account?</IonRouterLink>
            </IonItem>
            <IonItem>
              <IonText color="warning">{error}</IonText>
            </IonItem>
          </form>
      </IonContent>
    </IonPage>
  );
};

export default Login;
