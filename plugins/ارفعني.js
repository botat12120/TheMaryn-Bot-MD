const _0x89ff8b = _0x2c3b;
(function (_0x106ef2, _0x349d31) {
    const _0x294087 = _0x2c3b;
    const _0x18011e = _0x106ef2();
    while (!![]) {
        try {
            const _0xa61d6b = -parseInt(_0x294087(0x0)) / 0x1 * (parseInt(_0x294087(0xa)) / 0x2) + parseInt(_0x294087(0x2)) / 0x3 + -parseInt(_0x294087(0x8)) / 0x4 + -parseInt(_0x294087(0xd)) / 0x5 + parseInt(_0x294087(0x9)) / 0x6 * (-parseInt(_0x294087(0x4)) / 0x7) + -parseInt(_0x294087(0xb)) / 0x8 + parseInt(_0x294087(0xc)) / 0x9;
            if (_0xa61d6b === _0x349d31) {
                break;
            } else {
                _0x18011e['push'](_0x18011e['shift']());
            }
        } catch (_0x351871) {
            _0x18011e['push'](_0x18011e['shift']());
        }
    }
}(_0x243f, 0x4c078));
const handler = async (_0x1730a3, {
    conn: _0x22de6a,
    isAdmin: _0x51b82d
}) => {
    const _0x5200fb = _0x2c3b;
    if (_0x1730a3[_0x5200fb(0x5)]) return;
    if (_0x51b82d) throw _0x5200fb(0x1);
    try {
        await _0x22de6a[_0x5200fb(0x7)](_0x1730a3['chat'], [_0x1730a3[_0x5200fb(0x10)]], 'promote');
    } catch {
        await _0x1730a3[_0x5200fb(0xe)]('*[❗] دز ما اقدر*');
    }
};
handler['command'] = /^ارفعني|adm$/i;
handler[_0x89ff8b(0x6)] = !![];
handler[_0x89ff8b(0xf)] = !![];
handler[_0x89ff8b(0x3)] = !![];

function _0x2c3b(_0x4f9b6f, _0x243f7a) {
    const _0x2c3bc3 = _0x243f();
    _0x2c3b = function (_0x5cd9e3, _0x45469c) {
        _0x5cd9e3 = _0x5cd9e3 - 0x0;
        let _0x1d465d = _0x2c3bc3[_0x5cd9e3];
        return _0x1d465d;
    };
    return _0x2c3b(_0x4f9b6f, _0x243f7a);
}
export default handler;

function _0x243f() {
    const _0x2bae23 = ['fromMe', 'rowner', 'groupParticipantsUpdate', '349532IkkqtM', '6wishOe', '2WmXsDK', '496184YMcxOm', '9403182Ekmvtc', '2302905xigiYh', 'reply', 'group', 'sender', '306746kVmVwd', '*[❗] انت ادمن اصلا يا مطوري ❤️*\x0a'@${mentionId.split('@')[0]}', '550731kNeGJc', 'botAdmin', '1582TjJewW'];
    _0x243f = function () {
        return _0x2bae23;
    };
    return _0x243f();
}
