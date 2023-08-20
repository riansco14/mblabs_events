import * as AddCalendarEvent from "react-native-add-calendar-event";
import { Linking, Platform, Share } from "react-native";
import { EventCardType } from "../../common/types";
import moment from "moment"
interface CoordsInterface {
  latitude: string;
  longitude: string;
  label: string;
}

export function openMaps({ latitude, longitude, label }: CoordsInterface) {
  const url = Platform.select({
    ios: "maps:" + latitude + "," + longitude + "?q=" + label,
    android: "geo:" + latitude + "," + longitude + "?q=" + label,
  });
  Linking.openURL(url);
}

interface EventCalendarInterface {
  title: string;
  startDate?: string;
  endDate?: string;
}

export function createEventInCalendar(eventConfig: EventCalendarInterface) {
  console.log(eventConfig);
  
  
  AddCalendarEvent.presentEventCreatingDialog(eventConfig)
    .then(
      (eventInfo: {
        calendarItemIdentifier: string;
        eventIdentifier: string;
      }): void => {
        // handle success - receives an object with `calendarItemIdentifier` and `eventIdentifier` keys, both of type string.
        // These are two different identifiers on iOS.
        // On Android, where they are both equal and represent the event id, also strings.
        // when { action: 'CANCELED' } is returned, the dialog was dismissed
        console.warn(JSON.stringify(eventInfo));
      }
    )
    .catch((error: string) => {
      // handle error such as when user rejected permissions
      console.warn(error);
    });
}

export function shareEvent(eventData: EventCardType) {
  const shareOptions = {
      title: "Compartilhar Evento",
      message: `Você sabia que vai ter o evento ${eventData.eventName} no ${
        eventData.locationName
      } no dia ${moment(eventData.dateInfo.startDate).format("D/MM à\\s kk:mm")}`,
      subject: "Subject",
  };
  
  Share.share(shareOptions);
}







