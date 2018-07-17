
import * as React from 'react';
import { LocalesNames } from '../../locales';
import { IRootViewModel } from '../../view-models/root-view-model';

export default class HeaderSearchComponent extends React.Component<IRootViewModel> {
    render() {
        const { links, __, lang } = this.props;
        return (
            <form method='get' className='c-search' action={links.weather.search({ ul: lang })}>
                <input type='text' name='q' className='c-search__input' placeholder={__(LocalesNames.search_text)} />
                <a className='c-search__btn js-search__btn' href='#' />
            </form>
        )
    }
}