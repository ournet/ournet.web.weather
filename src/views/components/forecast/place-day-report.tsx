
import * as React from 'react';
import { Place, HoursForecastDataBlock } from '@ournet/api-client';
import ForecastIcon from './forecast-icon';
// import { ForecastHelpers } from '@ournet/weather-domain';
import * as moment from 'moment-timezone';
import ForecastTemp from './forecast-temp';
import { ForecastHelper } from '@ournet/weather-domain';
import { RootViewModel } from '../../../view-models/root-view-model';
import { LocalesNames } from '../../../locales-names';
import { toBeaufort } from '../../../utils';

export type PlaceDayReportViewData = {
    root: RootViewModel
    place: Place
    report: HoursForecastDataBlock
    filter: boolean
}

export default class PlaceDayReport extends React.Component<PlaceDayReportViewData> {
    render() {
        const { place, report, root, filter } = this.props;
        const { lang, __ } = root;
        const timezone = place.timezone;
        const dayDate = moment(report.data[report.data.length - 1].time * 1000).tz(timezone).locale(lang);

        let data = report.data;
        if (filter) {
            const currentUnixTime = moment().tz(timezone).unix();
            data = data.filter(item => item.time >= currentUnixTime);
        }
        const isWeekend = [6, 7].includes(dayDate.isoWeekday());

        const items = data.map((item, index) => {
            const date = moment(item.time * 1000).tz(timezone);
            // const nextDate = index < data.length - 1 ? moment(data[index + 1].time * 1000).tz(timezone) : undefined;
            const symbolName = ForecastHelper.iconName(item.icon, lang);
            return (
                <div key={index} className='dr-row'>
                    <div className='dr-r dr-r-date'>{date.format('HH:00')}</div>
                    <div className='dr-r dr-r-temp'>
                        <ForecastIcon icon={item.icon} root={root} />
                        <ForecastTemp temperature={item.temperature} />
                        <span className='symbol-name'>{symbolName}</span>
                    </div>
                    <div className='dr-r dr-r-wind'>
                        <span className={'wind-speed beaufort-' + toBeaufort(item.windSpeed || 1)}>{item.windSpeed + __(LocalesNames.item_wind_speed_ms)}</span>
                        <span className={'wind-dir wind-dir-'}>&rarr;</span>
                    </div>
                    <div className='dr-r dr-r-hum'>{(Math.round((item.humidity || 0) * 100)) + '%'}</div>
                </div>
            );
        });

        return (
            <div className='day-report' >
                <div className={'dr-caption' + (isWeekend ? ' weekend' : '')}>
                    <div className='dr-c-date'>
                        {dayDate.format('dddd') + ' , ' + dayDate.format('D MMMM')}
                    </div>
                </div>
                <div className='dr-head'>
                    <div className='dr-h dr-h-date'>{__(LocalesNames.report_hour)}</div>
                    <div className='dr-h dr-h-temp'>{__(LocalesNames.temperature) + ' °C'}</div>
                    <div className='dr-h dr-h-wind'>{__(LocalesNames.wind)}</div>
                    <div className='dr-h dr-h-hum'>{__(LocalesNames.humidity)}</div>
                </div>
                {items}
            </div>
        )
    }
}
