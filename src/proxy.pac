function FindProxyForURL(url, host)
{
    var domens = ["kaspersky.ru",
                  "kaspersky.ua",
                  "drweb.ru",
                  "auto.ru",
                  "mail.ru",
                  "ok.ru",
                  "vk.com",
                  "vk.cc",
                  "yandex.ru",
                  "yandex.ua",
                  "yandex.com",
                  "kinopoisk.ru",
                  "yandexdatafactory.com",
                  "disk-o.cloud",
                  "yadi.sk",
                  "mail.tikhenko.com"];

    for (var i = 0; i < domens.length; i++) {
        if (dnsDomainIs(host, domens[i])) {
            return "SOCKS5 socks.zaborona.help:1488";
        }
    }
    return "DIRECT";
}
