import { I18nFn } from "./locale";

export enum LocalesNames {
    back_color = "back_color",
    base_color = "base_color",
    border_color = "border_color",
    configuration = "configuration",
    contact = "contact",
    country_md = "country_md",
    country_ro = "country_ro",
    country_ru = "country_ru",
    days = "days",
    error_description = "error_description",
    error_title = "error_title",
    exchange = "exchange",
    exchange_rates = "exchange_rates",
    forecast_on_email_place = "forecast_on_email_place",
    generate = "generate",
    head_back_color = "head_back_color",
    head_text_color = "head_text_color",
    home = "home",
    home_title_format = "home_title_format",
    horizontal = "horizontal",
    horoscope = "horoscope",
    html_code = "html_code",
    humidity = "humidity",
    info = "info",
    international = "international",
    invalid_email = "invalid_email",
    item_color = "item_color",
    item_conditions = "item_conditions",
    item_pressure = "item_pressure",
    item_temperatire = "item_temperatire",
    item_wind_dir = "item_wind_dir",
    item_wind_speed = "item_wind_speed",
    item_wind_speed_ms = "item_wind_speed_ms",
    language_en = "language_en",
    language_ro = "language_ro",
    language_ru = "language_ru",
    latest_news = "latest_news",
    line_color = "line_color",
    load_more_places = "load_more_places",
    max = "max",
    min = "min",
    mm = "mm",
    news = "news",
    no_days = "no_days",
    no_thanks = "no_thanks",
    opinia = "opinia",
    other_n_places_format = "other_n_places_format",
    place = "place",
    place_weather_details_info = "place_weather_details_info",
    places = "places",
    position = "position",
    preview = "preview",
    project_name = "project_name",
    recent_search = "recent_search",
    report_hour = "report_hour",
    search_place_format = "search_place_format",
    search_place_in_cn = "search_place_in_cn",
    search_place_in_cn_format = "search_place_in_cn_format",
    search_text = "search_text",
    share_on_format = "share_on_format",
    share_with_your_friends = "share_with_your_friends",
    show_header = "show_header",
    subscribe = "subscribe",
    temperature = "temperature",
    text_color = "text_color",
    today = "today",
    total_subscribers_format = "total_subscribers_format",
    useful = "useful",
    vertical = "vertical",
    weather = "weather",
    weather2 = "weather2",
    weather_cright = "weather_cright",
    weather_for_10days = "weather_for_10days",
    weather_in_cn_summary = "weather_in_cn_summary",
    weather_in_format = "weather_in_format",
    weather_item_head_description_format = "weather_item_head_description_format",
    weather_item_head_title_format = "weather_item_head_title_format",
    weather_item_head_title_format_10days = "weather_item_head_title_format_10days",
    weather_on_your_site = "weather_on_your_site",
    weather_on_your_site_info = "weather_on_your_site_info",
    weather_title_format = "weather_title_format",
    width = "width",
    wind = "wind",
}

export class LocalesHelper {
    static getCountryName(__: I18nFn, countryCode: string) {
        return __(`country_${countryCode}`);
    }

    static getLanguageName(__: I18nFn, languageCode: string) {
        return __(`language_${languageCode}`);
    }
}
