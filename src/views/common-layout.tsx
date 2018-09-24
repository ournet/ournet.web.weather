import * as React from 'react';
import { WeatherViewModel } from '../view-models/weather-view-model';
import RootLayout from './root-layout';
import ExploreMenu from './components/explore-menu';
import HoroscopeGroup from './components/horoscope/horoscope-group';

export default class CommonLayout extends React.Component<WeatherViewModel> {
    render() {
        const { mainPlaces, links, __, config } = this.props;

        return (
            <RootLayout {...this.props}>
                <div className="o-layout">
                    <div className="o-layout__item u-1/5 u-hide-mobile u-1/6@desktop">
                        <ExploreMenu root={this.props} canonical={this.props.head.canonical} places={mainPlaces} />
                    </div>
                    <div className="o-layout__item u-4/5@tablet u-3/6@desktop">
                        {this.props.children}
                        {config.projects.includes('horoscope') && <HoroscopeGroup {...this.props} />}
                    </div>
                    <div className="o-layout__item u-2/6@desktop">
                        <div className='c-ad'>
                            <ins className='adsbygoogle' style={{ display: 'block' }} data-ad-client='ca-pub-3959589883092051' data-ad-slot='1115823833' data-ad-format='auto'></ins>
                            <script>(adsbygoogle = window.adsbygoogle || []).push({});</script>
                        </div>
                    </div>
                </div>
            </RootLayout>
        )
    }
}
