import { useEffect, useState } from 'react';
import { DateTime } from 'luxon';
import { InfoForDay } from './InfoForDay';
import { ChangeDateButton } from './ChangeDateButton';
import { getDataForDay } from 'utils/date';
import copy from 'consts/copy';

export function InfoForDayFacade() {
  const [daysOffset, setDaysOffset] = useState(0);
  const [tomorrowDataAvailable, setTomorrowDataAvailable] = useState(true);
  const dateToCheck = DateTime.now().plus({ days: daysOffset });
  const tomorrowsData = getDataForDay({
    date: DateTime.now().plus({ days: daysOffset + 1 }),
  });
  const dataToDisplay = getDataForDay({ date: dateToCheck });

  useEffect(() => {
    if (!tomorrowsData) {
      setTomorrowDataAvailable(false);
    } else {
      setTomorrowDataAvailable(true);
    }
  }, [tomorrowsData]);

  return dataToDisplay ? (
    <div>
      <InfoForDay
        data={dataToDisplay}
        controls={
          <div>
            <ChangeDateButton
              type="prev"
              onClick={() => setDaysOffset(daysOffset - 1)}
            />
            <ChangeDateButton
              type="next"
              disabled={!tomorrowDataAvailable}
              onClick={() => setDaysOffset(daysOffset + 1)}
            />
          </div>
        }
      />
    </div>
  ) : (
    <>{copy.notToday}</>
  );
}
