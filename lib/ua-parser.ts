const mobile = !!ua.match(/.*Mobile.*/) //是否为移动终端,也包含了ipad
const isWeixin = /MicroMessenger/i.test(ua)
const isIpad = /ipad/i.test(ua)
const isIphoneOs = /iphone os/i.test(ua)
const isMidp = /midp/i.test(ua)
const isUc7 = /rv:1.2.3.4/i.test(ua)
const isUc = /ucweb/i.test(ua)
const isAndroid = /android/i.test(ua)
const isCE = /windows ce/i.test(ua)
const isWM = /windows mobile/i.test(ua)
const isMobile =
  isIpad || isIphoneOs || isMidp || isUc7 || isUc || isAndroid || isCE || isWM
