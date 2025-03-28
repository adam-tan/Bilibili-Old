import { objUrl } from "../utils/format/url";
import { IPlayurlDash, IPlayurlDurl } from "./api-playurl";

export async function apiBiliplusPlayurl(data: IBiliplusPlayurl) {
    const response = await fetch(objUrl('//www.biliplus.com/BPplayurl.php', <any>data));
    return <IPlayurlDash | IPlayurlDurl>await response.json();
}

interface IBiliplusPlayurl {
    module: 'movie' | 'bangumi' | 'pgc';
}