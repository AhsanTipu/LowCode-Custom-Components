import { text, withKnobs } from '@storybook/addon-knobs';

import LcsExtensionsCaseCalendarByAhsan from './index.jsx';

export default {
  title: 'LcsExtensionsCaseCalendarByAhsan',
  decorators: [withKnobs],
  component: LcsExtensionsCaseCalendarByAhsan
};

if (!window.PCore) {
  window.PCore = {};
}

window.PCore.getDataPageUtils = () => {
  return {
    getDataAsync: () => {
      return Promise.resolve({
        fetchDateTime: '2023-11-03T02:34:55.810Z',
        pxObjClass: 'Pega-API-DataExploration-Data',
        resultCount: 4,
        data: [
          {
            pxSaveDateTime: null,
            pxUpdateSystemID: 'pega',
            EndTime: '07:00:00',
            pxUpdateDateTime: '2023-11-03T02:09:42.885Z',
            SessionEndDate: '2023-11-05',
            StartTime: '06:00:00',
            pxUpdateOpName: 'ahsan.ali',
            EventName: 'Infrastructure Session',
            pxUpdateOperator: 'ahsan.ali@lowcodesol.com',
            pxObjClass: 'OJN2D0-Playgrou-Data-Appointment',
            pxCreateOperator: 'ahsan.ali@lowcodesol.com',
            SessionStartDate: '2023-11-05',
            pxCreateDateTime: '2023-11-03T02:09:06.845Z',
            pxCreateSystemID: 'pega',
            pyGUID: '0faa83b7-5505-42a3-b585-28a35b4733da',
            pxCommitDateTime: null,
            pxCreateOpName: 'ahsan.ali'
          },
          {
            pxSaveDateTime: null,
            pxUpdateSystemID: 'pega',
            EndTime: '13:30:00',
            pxUpdateDateTime: '2023-11-03T02:10:44.946Z',
            SessionEndDate: '2023-11-06',
            StartTime: '12:50:00',
            pxUpdateOpName: 'ahsan.ali',
            EventName: 'Daily Standup',
            pxUpdateOperator: 'ahsan.ali@lowcodesol.com',
            pxObjClass: 'OJN2D0-Playgrou-Data-Appointment',
            pxCreateOperator: 'ahsan.ali@lowcodesol.com',
            SessionStartDate: '2023-11-06',
            pxCreateDateTime: '2023-11-03T02:09:44.200Z',
            pxCreateSystemID: 'pega',
            pyGUID: 'b6abc15f-f0d2-4348-bb16-ab0992b7d49e',
            pxCommitDateTime: null,
            pxCreateOpName: 'ahsan.ali'
          },
          {
            pxSaveDateTime: null,
            pxUpdateSystemID: 'pega',
            EndTime: '02:00:00',
            pxUpdateDateTime: '2023-11-03T02:08:25.343Z',
            SessionEndDate: '2023-11-03',
            StartTime: '01:30:00',
            pxUpdateOpName: 'ahsan.ali',
            EventName: 'LCS Session',
            pxUpdateOperator: 'ahsan.ali@lowcodesol.com',
            pxObjClass: 'OJN2D0-Playgrou-Data-Appointment',
            pxCreateOperator: 'ahsan.ali@lowcodesol.com',
            SessionStartDate: '2023-11-03',
            pxCreateDateTime: '2023-11-03T02:07:10.679Z',
            pxCreateSystemID: 'pega',
            pyGUID: 'b9beda54-6220-42d8-b4b6-6e1223b9ea99',
            pxCommitDateTime: null,
            pxCreateOpName: 'ahsan.ali'
          },
          {
            pxSaveDateTime: null,
            pxUpdateSystemID: 'pega',
            EndTime: '04:00:00',
            pxUpdateDateTime: '2023-11-03T02:09:05.203Z',
            SessionEndDate: '2023-11-04',
            StartTime: '03:00:00',
            pxUpdateOpName: 'ahsan.ali',
            EventName: 'Constellation Session',
            pxUpdateOperator: 'ahsan.ali@lowcodesol.com',
            pxObjClass: 'OJN2D0-Playgrou-Data-Appointment',
            pxCreateOperator: 'ahsan.ali@lowcodesol.com',
            SessionStartDate: '2023-11-04',
            pxCreateDateTime: '2023-11-03T02:08:27.815Z',
            pxCreateSystemID: 'pega',
            pyGUID: 'f25f55a5-1376-4ae0-8ad7-ebcafbe0a947',
            pxCommitDateTime: null,
            pxCreateOpName: 'ahsan.ali'
          }
        ],
        hasMoreResults: false,
        status: 200
      });
    }
  };
};
export const baseLcsExtensionsCaseCalendarByAhsan = () => {
  const props = {
    title: text('title', 'Calendar By Ahsan'),

    getPConnect: () => {
      return {
        getActionsApi: () => {
          return {};
        },
        getContextName: () => {
          return 'TestContext';
        }
      };
    }
  };

  return (
    <>
      <LcsExtensionsCaseCalendarByAhsan {...props} />
    </>
  );
};
