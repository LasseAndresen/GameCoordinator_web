import {GeoPoint, Timestamp, serverTimestamp } from '@angular/fire/firestore';

export class ObjectUtilities {
  public static deepCopyObject(object: {}) {
    const toReturn = {};
    for (const field in object) {
      let value = object[field];
      if (Array.isArray(value)) {
        value = this.deepCopyObject(value);
      } else if (field === 'timestamp') {
        value = serverTimestamp();
      } else if (typeof value === 'object') {
        if (!!value.lat && !!value.long) {
          value = new GeoPoint(value.lat, value.long);
        } else {
          value = this.deepCopyObject(value);
        }
      }
      toReturn[field] = value;
    }
    return toReturn;
  }

  public static convertDate(firebaseObject: any) {
    if (!firebaseObject) return null;

    for (const [key, value] of Object.entries(firebaseObject)) {
      // covert items inside array
      if (value && Array.isArray(value))
        firebaseObject[key] = value.map((item) => this.convertDate(item));

      // convert inner objects
      if (value && typeof value === 'object') {
        firebaseObject[key] = this.convertDate(value);
      }

      // convert simple properties
      if (value && value.hasOwnProperty('seconds'))
        firebaseObject[key] = (value as Timestamp).toDate();
    }
    return firebaseObject;
  }
}
