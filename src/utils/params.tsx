interface Params {
    access_token?: string
    token_type?: string
    expires_in?: string
}
export const getUrlParams = (search: string): Params => {
    let hashes = search.slice(search.indexOf('#') + 1).split('&');
    return hashes.reduce((params, hash) => {
        let [key, val] = hash.split('=');
        return Object.assign(params, {[key]: decodeURIComponent(val)})
    }, {});
};