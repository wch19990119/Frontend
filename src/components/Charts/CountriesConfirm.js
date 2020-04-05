/* eslint-disable global-require */
/* eslint-disable import/no-unresolved */
import React, { Component } from 'react';
import ReactEcharts from 'echarts-for-react';
import 'echarts/map/js/world.js';

export default class CountriesConfirm extends Component {
    state = {};

    getOption = () => {
        const { data, isCurr } = this.props;
        console.log(data)
        const myLabel = {
            show: true,
            color: isCurr ? 'black' : 'white',
            fontSize: '5',
        };
        const myLabel1 = {
            show: false
        }
        const myLabel2 = {
            show: true,
            color: 'black',
            fontSize: '5',
        };
        const myItemStyle = {
            label: {
                normal: myLabel,
                emphasis: myLabel2,
            },
            areaColor: 'lightyellow',
        };
        const formatString = isCurr ? '地区: {b} <br/> 现存确诊：{c}' : '地区: {b} <br/> 累计确诊：{c}';
        return {
            tooltip: {
                // 提示框
                trigger: 'item',
                formatter: formatString,
            },
            series: [
                {
                    type: 'map',
                    map: 'world',
                    roam: true,
                    zoom: 1.2,
                    nameMap: {
                        "Afghanistan": "阿富汗",
                        "Aland": "奥兰",
                        "Albania": "阿尔巴尼亚",
                        "Algeria": "阿尔及利亚",
                        "American Samoa": "美属萨摩亚",
                        "Andorra": "安道尔",
                        "Angola": "安哥拉",
                        "Antigua and Barb.": "安提瓜和巴布达",
                        "Argentina": "阿根廷",
                        "Armenia": "亚美尼亚",
                        "Australia": "澳大利亚",
                        "Austria": "奥地利",
                        "Azerbaijan": "阿塞拜疆",
                        "Bahamas": "巴哈马",
                        "Bahrain": "巴林",
                        "Bangladesh": "孟加拉国",
                        "Barbados": "巴巴多斯",
                        "Belarus": "白俄罗斯",
                        "Belgium": "比利时",
                        "Belize": "伯利兹",
                        "Benin": "贝宁",
                        "Bermuda": "百慕大群岛",
                        "Bhutan": "不丹",
                        "Bolivia": "玻利维亚",
                        "Bosnia and Herz.": "波黑",
                        "Botswana": "博茨瓦纳",
                        "Brazil": "巴西",
                        "British Virgin Islands": "英属维京群岛",
                        "Brunei": "文莱",
                        "Br. Indian Ocean Ter.": "英属印度洋领地",
                        "Bulgaria": "保加利亚",
                        "Burkina Faso": "布基纳法索",
                        "Burundi": "布隆迪",
                        "Cambodia": "柬埔寨",
                        "Cameroon": "喀麦隆",
                        "Canada": "加拿大",
                        "Cape Verde": "佛得角",
                        "Cayman Is.": "开曼群岛",
                        "Central African Rep.": "中非共和国",
                        "Chad": "乍得",
                        "Chile": "智利",
                        "China": "中国",
                        "Colombia": "哥伦比亚",
                        "Comoros": "科摩罗",
                        "Congo": "刚果（布）",
                        "Costa Rica": "哥斯达黎加",
                        "Croatia": "克罗地亚",
                        "Cuba": "古巴",
                        "Curaçao": "库拉索",
                        "Cyprus": "塞浦路斯",
                        "Czech Rep.": "捷克",
                        "Côte d'Ivoire": "科特迪瓦",
                        "Dem. Rep. Congo": "刚果（金）",
                        "Dem. Rep. Korea": "朝鲜",
                        "Denmark": "丹麦",
                        "Djibouti": "吉布提",
                        "Dominica": "多米尼克",
                        "Dominican Rep.": "多米尼加",
                        "Ecuador": "厄瓜多尔",
                        "Egypt": "埃及",
                        "El Salvador": "萨尔瓦多",
                        "Eq. Guinea": "赤道几内亚",
                        "Eritrea": "厄立特里亚",
                        "Estonia": "爱沙尼亚",
                        "Ethiopia": "埃塞俄比亚",
                        "Faeroe Is.": "法罗群岛",
                        "Falkland Is.": "福克兰群岛",
                        "Fiji": "斐济",
                        "Finland": "芬兰",
                        "Fr. Polynesia": "法属波利尼西亚",
                        "Fr. S. Antarctic Lands": "法属南部和南极",
                        "France": "法国",
                        "Gabon": "加蓬",
                        "Gambia": "冈比亚",
                        "Georgia": "格鲁吉亚",
                        "Germany": "德国",
                        "Ghana": "加纳",
                        "Greece": "希腊",
                        "Greenland": "格陵兰",
                        "Grenada": "格林纳达",
                        "Guam": "关岛",
                        "Guatemala": "危地马拉",
                        "Guinea": "几内亚",
                        "Guinea-Bissau": "几内亚比绍",
                        "Guyana": "圭亚那",
                        "Haiti": "海地",
                        "Heard I. and McDonald Is.": "赫德岛和麦克唐纳群岛",
                        "Honduras": "洪都拉斯",
                        "Hungary": "匈牙利",
                        "Iceland": "冰岛",
                        "India": "印度",
                        "Indonesia": "印度尼西亚",
                        "Iran": "伊朗",
                        "Iraq": "伊拉克",
                        "Ireland": "爱尔兰",
                        "Isle of Man": "马恩岛",
                        "Israel": "以色列",
                        "Italy": "意大利",
                        "Jamaica": "牙买加",
                        "Japan": "日本",
                        "Jersey": "泽西",
                        "Jordan": "约旦",
                        "Kazakhstan": "哈萨克斯坦",
                        "Kenya": "肯尼亚",
                        "Kiribati": "基里巴斯",
                        "Korea": "韩国",
                        "Kuwait": "科威特",
                        "Kyrgyzstan": "吉尔吉斯斯坦",
                        "Lao PDR": "老挝",
                        "Latvia": "拉脱维亚",
                        "Lebanon": "黎巴嫩",
                        "Lesotho": "莱索托",
                        "Liberia": "利比里亚",
                        "Libya": "利比亚",
                        "Liechtenstein": "列支敦士登公国",
                        "Lithuania": "立陶宛",
                        "Luxembourg": "卢森堡",
                        "Macedonia": "北马其顿",
                        "Madagascar": "马达加斯加",
                        "Malawi": "马拉维",
                        "Malaysia": "马来西亚",
                        "Maldives": "马尔代夫",
                        "Mali": "马里",
                        "Malta": "马耳他",
                        "Mauritania": "毛里塔尼亚",
                        "Mauritius": "毛里求斯",
                        "Mexico": "墨西哥",
                        "Micronesia": "密克罗尼西亚联邦",
                        "Moldova": "摩尔多瓦",
                        "Monaco": "摩纳哥",
                        "Mongolia": "蒙古国",
                        "Montenegro": "黑山",
                        "Montserrat": "蒙特塞拉特岛",
                        "Morocco": "摩洛哥",
                        "Mozambique": "莫桑比克",
                        "Myanmar": "缅甸",
                        "Namibia": "纳米比亚",
                        "Nepal": "尼泊尔",
                        "Netherlands": "荷兰",
                        "New Caledonia": "新喀里多尼亚",
                        "New Zealand": "新西兰",
                        "Nicaragua": "尼加拉瓜",
                        "Niger": "尼日尔",
                        "Nigeria": "尼日利亚",
                        "Niue": "纽埃",
                        "Norway": "挪威",
                        "N. Mariana Is.": "北马里亚纳群岛",
                        "N. Cyprus": "塞浦路斯",
                        "Oman": "阿曼",
                        "Pakistan": "巴基斯坦",
                        "Palau": "帕劳",
                        "Palestine": "巴勒斯坦",
                        "Panama": "巴拿马",
                        "Papua New Guinea": "巴布亚新几内亚",
                        "Paraguay": "巴拉圭",
                        "Peru": "秘鲁",
                        "Philippines": "菲律宾",
                        "Poland": "波兰",
                        "Portugal": "葡萄牙",
                        "Puerto Rico": "波多黎各",
                        "Qatar": "卡塔尔",
                        "Reunion": "留尼旺",
                        "Romania": "罗马尼亚",
                        "Russia": "俄罗斯",
                        "Rwanda": "卢旺达",
                        "S. Geo. and S. Sandw. Is.": "南乔治亚和南桑威奇群岛",
                        "S. Sudan": "南苏丹",
                        "Saint Helena": "圣赫勒拿",
                        "Saint Lucia": "圣卢西亚",
                        "Samoa": "萨摩亚",
                        "San Marino": "圣马力诺",
                        "São Tomé and Principe": "圣多美和普林西比",
                        "Saudi Arabia": "沙特阿拉伯",
                        "Senegal": "塞内加尔",
                        "Serbia": "塞尔维亚",
                        "Seychelles": "塞舌尔",
                        "Siachen Glacier": "锡亚琴冰川",
                        "Sierra Leone": "塞拉利昂",
                        "Singapore": "新加坡",
                        "Slovakia": "斯洛伐克",
                        "Slovenia": "斯洛文尼亚",
                        "Solomon Is.": "所罗门群岛",
                        "Somalia": "索马里",
                        "South Africa": "南非",
                        "Spain": "西班牙",
                        "Sri Lanka": "斯里兰卡",
                        "St. Pierre and Miquelon": "圣皮埃尔和密克隆",
                        "St. Vin. and Gren.": "圣文森特和格林纳丁斯",
                        "Sudan": "苏丹",
                        "Suriname": "苏里南",
                        "Swaziland": "斯威士兰",
                        "Sweden": "瑞典",
                        "Switzerland": "瑞士",
                        "Syria": "叙利亚",
                        "Tajikistan": "塔吉克斯坦",
                        "Tanzania": "坦桑尼亚",
                        "Turks and Caicos Is.": "特克斯和凯科斯群岛",
                        "Thailand": "泰国",
                        "Timor-Leste": "东帝汶",
                        "Togo": "多哥",
                        "Tonga": "汤加",
                        "Trinidad and Tobago": "特立尼达和多巴哥",
                        "Tunisia": "突尼斯",
                        "Turkey": "土耳其",
                        "Turkmenistan": "土库曼斯坦",
                        "U.S. Virgin Is.": "美属维尔京群岛",
                        "Uganda": "乌干达",
                        "Ukraine": "乌克兰",
                        "United Arab Emirates": "阿联酋",
                        "United Kingdom": "英国",
                        "United States": "美国",
                        "Uruguay": "乌拉圭",
                        "Uzbekistan": "乌兹别克斯坦",
                        "Vanuatu": "瓦努阿图",
                        "Vatican City": "梵蒂冈",
                        "Venezuela": "委内瑞拉",
                        "Vietnam": "越南",
                        "W. Sahara": "西撒哈拉",
                        "Yemen": "也门",
                        "Yugoslavia": "南斯拉夫",
                        "Zaire": "扎伊尔",
                        "Zambia": "赞比亚",
                        "Zimbabwe": "津巴布韦"
                    },
                    data,
                    itemStyle: {
                        borderColor: 'grey', // 区域边框线
                    },
                    label: {
                        normal: myLabel1,
                        emphasis: myLabel2,
                    },
                    emphasis: {
                        // 高亮显示
                        itemStyle: myItemStyle,
                    },
                },
            ],
            visualMap: {
                type: 'piecewise',
                inverse: true,
                show: true,
                pieces: [
                    { min: 100000 },
                    { min: 10000, max: 99999 },
                    { min: 1000, max: 9999 },
                    { min: 500, max: 999 },
                    { min: 100, max: 499 },
                    { min: 10, max: 99 },
                    { min: 1, max: 9 },
                    { value: 0 },
                ],
                inRange: {
                    color: ['#FFFFFF', '#FDEBCA', '#E25552', '#CA2B2D', '#831A26', '#500312', '#000000'],
                },
            },
        };
    };

    render() {
        return (
            <div style={{ padding: 20 }}>
                <ReactEcharts option={this.getOption()}/>
                <p/>
                <p style={{fontStyle: 'italic', fontSize: 'small'}}>*部分地区信息可能未采集到，显示NaN</p>
            </div>
        );
    }
}