
import * as React from 'react';
import { RootViewModel } from '../../../view-models/root-view-model';
import GroupHeader from '../group-header';
import { LocalesNames } from '../../../locales-names';
import { getHost } from 'ournet.links';

export default class HoroscopeGroup extends React.Component<RootViewModel> {
    render() {
        const { links, __, lang, country } = this.props;
        if (!links.horoscope) {
            return null;
        }

        const host = 'http://' + getHost('horoscope', country);

        return (
            <div className='c-group'>
                <GroupHeader name={__(LocalesNames.horoscope)} link={host + links.horoscope.home({ ul: lang })} type='important' />
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" display="none"><symbol id="svg-zs-icon-1" viewBox="0 0 20 20"><path d="M10.32 3.32c-.12.12-.22.25-.32.38-.1-.13-.2-.26-.32-.38a4.5 4.5 0 0 0-6.75 5.92.5.5 0 0 0 .76.06l.71-.7a.5.5 0 0 0 .07-.64 2.5 2.5 0 0 1 3.25-3.65A2.5 2.5 0 0 1 9 6.5v11c0 .28.21.5.5.5h1a.5.5 0 0 0 .5-.5v-11a2.5 2.5 0 0 1 3.73-2.18 2.5 2.5 0 0 1 .8 3.64.5.5 0 0 0 .07.64l.7.7a.5.5 0 0 0 .77-.06 4.46 4.46 0 0 0-.39-5.92 4.5 4.5 0 0 0-6.36 0" fill-rule="evenodd"></path></symbol><symbol id="svg-zs-icon-2" viewBox="0 0 20 20"><path d="M6 12a4 4 0 1 1 8 0 4 4 0 0 1-8 0m9.48-10h-1.02c-.26 0-.46.2-.49.46a4 4 0 0 1-7.94 0 .5.5 0 0 0-.5-.46h-1a.5.5 0 0 0-.5.52A6 6 0 0 0 6.7 7a6 6 0 1 0 6.62 0 6 6 0 0 0 2.67-4.48.5.5 0 0 0-.5-.52" fill-rule="evenodd"></path></symbol><symbol id="svg-zs-icon-3" viewBox="0 0 20 20"><path d="M14 5.6v8.82c1.28.25 2.52.63 3.7 1.14.18.08.3.27.3.47v1.09a.5.5 0 0 1-.72.44 17.75 17.75 0 0 0-14.56 0 .5.5 0 0 1-.72-.44v-1.1c0-.2.12-.38.3-.46 1.18-.51 2.42-.89 3.7-1.14V5.6a18.35 18.35 0 0 1-3.7-1.15.5.5 0 0 1-.3-.47V2.9c0-.37.38-.6.72-.44a17.75 17.75 0 0 0 14.56 0 .5.5 0 0 1 .72.44V4a.5.5 0 0 1-.3.46A18.7 18.7 0 0 1 14 5.61m-2 8.53V5.89c-1.33.13-2.67.13-4 0v8.24a19 19 0 0 1 4 0" fill-rule="evenodd"></path></symbol><symbol id="svg-zs-icon-4" viewBox="0 0 20 20"><path d="M14 9a2 2 0 0 1-2-2 2 2 0 0 1 2.49-1.94A2 2 0 0 1 14 9m-4-2a4.02 4.02 0 0 0 5.44 3.75 3.96 3.96 0 0 0 2.55-4.05l-.03-.22c-.21-1.33-1.22-2.49-2.74-3.29A11.22 11.22 0 0 0 10.07 2H10c-2.82 0-5.52.9-7.8 2.58-.12.1-.2.25-.2.4v1.3c0 .41.49.65.81.38a11.14 11.14 0 0 1 8.47-2.59A3.97 3.97 0 0 0 10 7m-4 4a2 2 0 0 1 2 2 2 2 0 0 1-2.49 1.94A2 2 0 0 1 6 11m4 2c0-2.65-2.57-4.7-5.36-3.78A3.95 3.95 0 0 0 2 13v.1l.01.2.03.22c.21 1.33 1.22 2.49 2.74 3.29 1.4.74 3.18 1.18 5.15 1.19H10c2.82 0 5.52-.9 7.8-2.57.12-.1.2-.26.2-.42v-1.28a.5.5 0 0 0-.81-.39 11.14 11.14 0 0 1-8.47 2.59A3.97 3.97 0 0 0 10 13" fill-rule="evenodd"></path></symbol><symbol id="svg-zs-icon-5" viewBox="0 0 20 20"><path d="M15 14c0-1.16.42-2.04.9-3.07A8.82 8.82 0 0 0 17 7 5 5 0 0 0 7 7c0 1.2.33 2.2.7 3.07A4 4 0 1 0 11 14c0-1.6-.58-2.84-1.1-3.93C9.42 9.04 9 8.16 9 7a3 3 0 0 1 6 0c0 1.16-.42 2.04-.9 3.07A8.82 8.82 0 0 0 13 14a4 4 0 0 0 3.41 3.96.5.5 0 0 0 .59-.5v-1.02a.48.48 0 0 0-.38-.48A2 2 0 0 1 15 14M5 14a2 2 0 1 1 4 0 2 2 0 0 1-4 0" fill-rule="evenodd"></path></symbol><symbol id="svg-zs-icon-6" viewBox="0 0 20 20"><path d="M15 14v-4a1 1 0 0 1 2 0c0 1.75-.76 3.32-1.95 4.42A1.98 1.98 0 0 1 15 14m3.95-3.14c.16-1.46-.46-2.94-1.78-3.58a2.7 2.7 0 0 0-2.17-.1v-1c0-2-1.4-3.83-3.4-4.13A3.96 3.96 0 0 0 8 3.38a3.96 3.96 0 0 0-3.6-1.33A4.13 4.13 0 0 0 1 6.18v7.32c0 .28.21.5.5.5h1a.5.5 0 0 0 .5-.5V6.1c0-1 .68-1.92 1.66-2.08A2 2 0 0 1 7 6v7.5c0 .28.21.5.5.5h1a.5.5 0 0 0 .5-.5V6.1c0-1 .68-1.92 1.66-2.08A2 2 0 0 1 13 6v8c0 .54.11 1.06.3 1.54-.56.24-1.18.39-1.82.44a.5.5 0 0 0-.48.5v1c0 .28.24.52.52.5a7.97 7.97 0 0 0 3.04-.83 4 4 0 0 0 1.85.8.5.5 0 0 0 .59-.5v-1a.51.51 0 0 0-.41-.5 2.66 2.66 0 0 1-.2-.05 8 8 0 0 0 2.56-5.04" fill-rule="evenodd"></path></symbol><symbol id="svg-zs-icon-7" viewBox="0 0 20 20"><path d="M2 16.5c0-.29.22-.5.5-.5h15c.27 0 .5.23.5.5v1a.5.5 0 0 1-.5.5h-15a.5.5 0 0 1-.5-.5v-1zm16-3a.5.5 0 0 1-.5.5h-6a.5.5 0 0 1-.5-.5v-1.24c0-.2.12-.38.3-.46l.15-.07c1.4-.6 2.42-1.9 2.54-3.42a4 4 0 1 0-5.55 3.38l.3.13c.2.07.31.26.31.46v1.22a.5.5 0 0 1-.5.5H2.5a.5.5 0 0 1-.51-.5v-1c0-.27.23-.5.49-.5h3.04A6.03 6.03 0 0 1 4.2 6.4 6.01 6.01 0 1 1 14.47 12h3.04a.5.5 0 0 1 .49.5v1z" fill-rule="evenodd"></path></symbol><symbol id="svg-zs-icon-8" viewBox="0 0 20 20"><path d="M19.644 17.356a.505.505 0 0 0 0-.712l-2.288-2.288c-.197-.197-.356-.142-.356.149V16c-1.103 0-2-.897-2-2V6c0-2.206-1.794-4-4-4-1.2 0-2.266.542-3 1.382A3.975 3.975 0 0 0 5 2C2.794 2 1 3.794 1 6v7.5c0 .276.214.5.505.5h.99A.507.507 0 0 0 3 13.5V6c0-1.103.897-2 2-2s2 .897 2 2v7.5c0 .276.214.5.505.5h.99A.507.507 0 0 0 9 13.5V6c0-1.103.897-2 2-2s2 .897 2 2v8c0 2.206 1.794 4 4 4v1.495c0 .279.161.344.356.149l2.288-2.288z" fill-rule="evenodd"></path></symbol><symbol id="svg-zs-icon-9" viewBox="0 0 20 20"><path d="M17.5 2c.27 0 .5.23.5.5v10a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5V5.41L9.4 12l1.94 1.94c.2.2.2.5 0 .71l-.7.7a.5.5 0 0 1-.72 0L8 13.4l-3.94 3.95a.5.5 0 0 1-.71-.01l-.7-.7a.5.5 0 0 1 0-.7L6.57 12l-1.93-1.94a.5.5 0 0 1 0-.71l.7-.7c.2-.2.52-.2.71 0L8 10.6 14.58 4H7.5a.5.5 0 0 1-.5-.5v-1c0-.27.23-.5.5-.5h10z" fill-rule="evenodd"></path></symbol><symbol id="svg-zs-icon-10" viewBox="0 0 20 20"><path d="M12 14a2 2 0 1 1 4 0 2 2 0 0 1-4 0m0-3.44V6.18c0-2-1.4-3.83-3.4-4.13A3.97 3.97 0 0 0 5 3.38a4 4 0 0 0-2.4-1.33.51.51 0 0 0-.6.5v1c0 .24.16.44.38.49A2 2 0 0 1 4 6v7.5c0 .28.21.5.5.5h1a.5.5 0 0 0 .5-.5V6.1c0-1 .68-1.92 1.66-2.08A2 2 0 0 1 10 6v8a2 2 0 0 1-1.62 1.96.48.48 0 0 0-.38.48v1.02c0 .31.29.54.6.5a4 4 0 0 0 2.4-1.34 3.97 3.97 0 0 0 6.9-1.69A4 4 0 0 0 14 10c-.73 0-1.4.21-2 .56" fill-rule="evenodd"></path></symbol><symbol id="svg-zs-icon-11" viewBox="0 0 20 20"><path d="M13 12.6l-2.65-2.65a.5.5 0 0 0-.7 0L7 12.59 4.35 9.95a.5.5 0 0 0-.7 0l-2.5 2.5a.5.5 0 0 0-.15.35v1.4c0 .45.54.67.85.36L4 12.4l2.65 2.65c.2.2.5.2.7 0L10 12.4l2.65 2.65c.2.2.5.2.7 0L16 12.4l2.15 2.15c.31.31.85.1.85-.35v-1.4a.5.5 0 0 0-.15-.35l-2.5-2.5a.5.5 0 0 0-.7 0L13 12.59zm3.35-8.65l2.5 2.5c.1.09.15.22.15.35v1.4a.5.5 0 0 1-.85.36L16 6.4l-2.65 2.65a.5.5 0 0 1-.7 0L10 6.4 7.35 9.06a.5.5 0 0 1-.7 0L4 6.4 1.85 8.56A.5.5 0 0 1 1 8.2V6.8a.5.5 0 0 1 .15-.35l2.5-2.5c.2-.2.5-.2.7 0L7 6.59l2.65-2.64c.2-.2.5-.2.7 0L13 6.59l2.65-2.64c.2-.2.5-.2.7 0z" fill-rule="evenodd"></path></symbol><symbol id="svg-zs-icon-12" viewBox="0 0 20 20"><path d="M14.02 9h3.48c.28 0 .5.22.5.5v1a.5.5 0 0 1-.5.5h-3.48c.12 2.2.63 4.37 1.54 6.28a.5.5 0 0 1-.44.72h-1.1a.5.5 0 0 1-.46-.3c-.9-2.07-1.4-4.37-1.51-6.7h-4.1a19.36 19.36 0 0 1-1.5 6.7.5.5 0 0 1-.47.3h-1.1a.5.5 0 0 1-.44-.72c.9-1.91 1.42-4.08 1.54-6.28H2.5a.5.5 0 0 1-.5-.5v-1c0-.28.22-.5.5-.5h3.48c-.12-2.2-.63-4.37-1.54-6.28A.5.5 0 0 1 4.88 2h1.1c.2 0 .38.12.46.3A19.2 19.2 0 0 1 7.95 9h4.1c.11-2.33.61-4.63 1.5-6.7a.5.5 0 0 1 .47-.3h1.1c.37 0 .6.38.44.72A16.93 16.93 0 0 0 14.02 9" fill-rule="evenodd"></path></symbol></svg>
                <div className='o-pack'>
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(id => (
                        <div className='o-pack__item'>
                            <div className="c-zs-icon">
                                <a href={host + links.horoscope.sign(id.toString(), { ul: lang })}>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><use href={`#svg-zs-icon-${id}`}></use></svg>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div >
        )
    }
}
