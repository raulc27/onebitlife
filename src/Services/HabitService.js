import db from "../Database";

const createHabit = (obj) => {
  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        "INSERT INTO habits (habitArea, habitName, habitFrequency, habitHasNotification, habitNotificationFrequency, habitNotificationTime, lastCheck, daysWithoutChecks, progressBar, habitIsChecked, habitChecks) values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);",
        [
          obj.habitArea,
          obj.habitName,
          obj.habitFrequency,
          obj.habitHasNotification,
          obj.habitNotificationFrequency,
          obj.habitNotificationTime,
          obj.lastCheck,
          obj.daysWithoutChecks,
          obj.progressBar,
          obj.habitIsChecked,
          obj.habitChecks,
        ],
        (_, { rowsAffected, insertId }) => {
          if (rowsAffected > 0) resolve(insertId);
          else reject("Error inserting obj: " + JSON.stringify(obj));
        },
        (_, error) => reject(error)
      );
    });
  });
};

export default {
  createHabit,
};