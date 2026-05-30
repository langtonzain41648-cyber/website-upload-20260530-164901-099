const MOVIE_SEARCH_INDEX = [
  {
    "title": "荒漠怪侠赤手闯天涯",
    "year": 1969,
    "region": "美国",
    "type": "电影",
    "genre": "西部冒险",
    "url": "details/movie-0001.html",
    "cover": "1.jpg",
    "oneLine": "枪手被剥夺武器后扔进死亡沙漠，为了复仇，他要用拳头活着走出去。"
  },
  {
    "title": "悲恋的哑巴三龙",
    "year": 2022,
    "region": "中国台湾",
    "type": "电影",
    "genre": "爱情 / 剧情 / 年代",
    "url": "details/movie-0002.html",
    "cover": "2.jpg",
    "oneLine": "日据时代台湾金矿，哑巴矿工三龙爱上矿场主人的女儿，两人用手语约定私奔的当晚，悲剧降临。"
  },
  {
    "title": "漠奠夺艳",
    "year": 2024,
    "region": "中国大陆",
    "type": "电影",
    "genre": "悬疑, 犯罪, 西部",
    "url": "details/movie-0003.html",
    "cover": "3.jpg",
    "oneLine": "沙漠深处发现一具女尸，身披千年前的和亲公主嫁衣，而凶手留下的记号指向在场每一个警察。"
  },
  {
    "title": "维纳斯的象征",
    "year": 2023,
    "region": "意大利",
    "type": "电影",
    "genre": "悬疑, 历史",
    "url": "details/movie-0004.html",
    "cover": "4.jpg",
    "oneLine": "一幅波提切利的真迹消失五百年后突然出现，带着两具尸体和一支密码。"
  },
  {
    "title": "开斋",
    "year": 2024,
    "region": "伊朗",
    "type": "电影",
    "genre": "剧情 / 家庭",
    "url": "details/movie-0005.html",
    "cover": "5.jpg",
    "oneLine": "开斋节清晨，母亲发现儿子昨晚偷偷把家里唯一的羊放了，而那是全家人一年的肉食来源。"
  },
  {
    "title": "狼殿下",
    "year": 2025,
    "region": "中国大陆",
    "type": "剧集",
    "genre": "古装, 权谋",
    "url": "details/movie-0006.html",
    "cover": "6.jpg",
    "oneLine": "被狼群养大的前朝皇子，为了夺回江山，伪装成昏君最宠爱的弄臣，在皇宫里上演一出“扮猪吃老虎”的绝杀大戏。"
  },
  {
    "title": "军官和男孩",
    "year": 1992,
    "region": "荷兰",
    "type": "电影",
    "genre": "剧情/同性/战争",
    "url": "details/movie-0007.html",
    "cover": "7.jpg",
    "oneLine": "一名荷兰老人在回忆二战期间，驻扎在家中的加拿大军官与自己少年时期那段刻骨铭心的恋情。"
  },
  {
    "title": "唇上之歌",
    "year": 2015,
    "region": "日本",
    "type": "电影",
    "genre": "剧情 / 音乐",
    "url": "details/movie-0008.html",
    "cover": "8.jpg",
    "oneLine": "一个冷漠的钢琴天才来到孤岛中学，用音乐打开了问题少年们封闭的心。"
  },
  {
    "title": "三月的大街",
    "year": 2024,
    "region": "日本",
    "type": "电影",
    "genre": "剧情，家庭，治愈",
    "url": "details/movie-0009.html",
    "cover": "9.jpg",
    "oneLine": "每年三月，一条即将拆迁的老街上，失意的女儿回来为患上失忆症的母亲，上演最后一场“谎言”。"
  },
  {
    "title": "特工同盟",
    "year": 2026,
    "region": "美国",
    "type": "剧集",
    "genre": "动作 / 犯罪",
    "url": "details/movie-0010.html",
    "cover": "10.jpg",
    "oneLine": "退休的CIA老油条与激进的年轻黑客必须合作，才能在24小时内洗清叛国罪名。"
  },
  {
    "title": "绽放青春",
    "year": 2019,
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情 / 青春",
    "url": "details/movie-0011.html",
    "cover": "11.jpg",
    "oneLine": "一个北京尖子生因高考失利，赌气去大凉山支教，却在贫瘠的土壤里找到了比分数更重要的人生价值。"
  },
  {
    "title": "贩肤俗子",
    "year": 2024,
    "region": "中国台湾",
    "type": "电影",
    "genre": "剧情， 犯罪， 黑色幽默",
    "url": "details/movie-0012.html",
    "cover": "12.jpg",
    "oneLine": "一个走投无路的纹身师，想出一个绝妙的“人体广告位”生意，却引来了黑白两道的追杀。"
  },
  {
    "title": "格里芬与菲尼克斯",
    "year": 2025,
    "region": "美国",
    "type": "电影",
    "genre": "喜剧 / 剧情",
    "url": "details/movie-0013.html",
    "cover": "13.jpg",
    "oneLine": "两名晚期癌症患者在医院相识，决定不按常规活法，联手完成一份“荒唐遗愿清单”。"
  },
  {
    "title": "全面进化",
    "year": 2024,
    "region": "韩国",
    "type": "剧集",
    "genre": "科幻，惊悚，动作",
    "url": "details/movie-0014.html",
    "cover": "14.jpg",
    "oneLine": "一款风靡全球的“进化APP”承诺让人类升级，但更新到第三版后，所有用户开始自相残杀。"
  },
  {
    "title": "邦塔颂歌",
    "year": 2024,
    "region": "印度",
    "type": "电影",
    "genre": "剧情, 音乐, 历史",
    "url": "details/movie-0015.html",
    "cover": "15.jpg",
    "oneLine": "英国殖民者要拆毁邦塔村，村民们用祖传的神秘歌谣唤醒大地之灵，掀起一场无声反抗。"
  },
  {
    "title": "第二次拥抱",
    "year": 2024,
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情",
    "url": "details/movie-0016.html",
    "cover": "16.jpg",
    "oneLine": "一场意外让失和的母女灵魂互换，她们被迫用对方的身体重新学习如何去爱。"
  },
  {
    "title": "白色的荒地",
    "year": 2020,
    "region": "俄罗斯",
    "type": "电影",
    "genre": "剧情, 悬疑, 冒险",
    "url": "details/movie-0017.html",
    "cover": "17.jpg",
    "oneLine": "气象站的新手观测员发现自己并非孤独一人，雪原上的脚印不属于任何队友。"
  },
  {
    "title": "胡同交响曲",
    "year": 2024,
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情 / 音乐 / 喜剧",
    "url": "details/movie-0018.html",
    "cover": "18.jpg",
    "oneLine": "为了保住即将拆迁的老胡同，居民们用锅碗瓢盆奏响了一支“交响曲”逼退开发商。"
  },
  {
    "title": "雁之寺",
    "year": 1962,
    "region": "日本",
    "type": "电影",
    "genre": "剧情，情色，历史",
    "url": "details/movie-0019.html",
    "cover": "19.jpg",
    "oneLine": "京都古寺中，一位高僧被女画师笔下的孤雁勾走了魂魄。"
  },
  {
    "title": "奔跑吧·茶马古道篇",
    "year": 2024,
    "region": "中国大陆",
    "type": "综艺特别篇",
    "genre": "真人秀， 历史， 文化",
    "url": "details/movie-0020.html",
    "cover": "20.jpg",
    "oneLine": "明星嘉宾重走千年茶马古道，在海拔四千米的极限环境中完成真实的物资运送任务。"
  },
  {
    "title": "队长视角：问鼎冠军之路",
    "year": 2024,
    "region": "中国大陆",
    "type": "剧集",
    "genre": "纪录片, 体育, 励志",
    "url": "details/movie-0021.html",
    "cover": "21.jpg",
    "oneLine": "镜头对准队长的第一视角，记录一支电竞战队从保级赛到世界冠军的365天。"
  },
  {
    "title": "天下笨贼",
    "year": 2022,
    "region": "中国大陆",
    "type": "电影",
    "genre": "喜剧, 犯罪",
    "url": "details/movie-0022.html",
    "cover": "22.jpg",
    "oneLine": "三拨笨贼同时盯上一个古董花瓶，在密闭小区里上演连环乌龙劫案。"
  },
  {
    "title": "剧演的终章",
    "year": 2019,
    "region": "日本",
    "type": "电影",
    "genre": "剧情, 爱情",
    "url": "details/movie-0023.html",
    "cover": "23.jpg",
    "oneLine": "一位陷入瓶颈的古典吉他大师，在演奏会最后一刻，被一位战地记者用手机铃声“拯救”。"
  },
  {
    "title": "多瑙河行动",
    "year": 2025,
    "region": "俄罗斯",
    "type": "电影",
    "genre": "动作，战争，历史",
    "url": "details/movie-0024.html",
    "cover": "24.jpg",
    "oneLine": "1999年，一支被祖国抛弃的俄罗斯空降兵小队，在科索沃机场与北约装甲部队对峙，他们接到的命令是：死守，直到国家想起你们。"
  },
  {
    "title": "动态漫画·最强反套路系统",
    "year": 2024,
    "region": "中国大陆",
    "type": "动漫",
    "genre": "喜剧, 玄幻, 动态漫画",
    "url": "details/movie-0025.html",
    "cover": "25.jpg",
    "oneLine": "套路小说写手穿进自己的书里，本想当龙傲天，却发现剧情疯狂“反套路”他。"
  },
  {
    "title": "梦想 2023",
    "year": 2023,
    "region": "中国内地",
    "type": "电影",
    "genre": "剧情 / 体育",
    "url": "details/movie-0026.html",
    "cover": "26.jpg",
    "oneLine": "三个被生活压垮的中年男人，在各自女儿的秘密组织下，重新穿上舞鞋参加街舞大赛，只为找回二十年前那个不认输的自己。"
  },
  {
    "title": "一切的解释",
    "year": 2026,
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情 / 悬疑",
    "url": "details/movie-0027.html",
    "cover": "27.jpg",
    "oneLine": "丈夫留下一本写满矛盾辩解的手稿后失踪，妻子必须从谎言堆里拼出最后的真相。"
  },
  {
    "title": "奇幻游乐园",
    "year": 2027,
    "region": "美国",
    "type": "动画电影",
    "genre": "冒险, 奇幻",
    "url": "details/movie-0028.html",
    "cover": "28.jpg",
    "oneLine": "哥哥用轮椅推着妹妹闯进一座废弃游乐园，却发现每个设施都通往一个真实的幻想世界。"
  },
  {
    "title": "情陷特区粤语",
    "year": 1991,
    "region": "香港",
    "type": "剧集",
    "genre": "剧情 / 爱情",
    "url": "details/movie-0029.html",
    "cover": "29.jpg",
    "oneLine": "90年代深圳河两岸，四个年轻人在改革开放洪流中，为了钱与权背叛了最初的爱情。"
  },
  {
    "title": "魄散魂离",
    "year": 2024,
    "region": "中国香港",
    "type": "电影",
    "genre": "恐怖, 奇幻",
    "url": "details/movie-0030.html",
    "cover": "30.jpg",
    "oneLine": "一场车祸后，他的三魂七魄散落在全城陌生人身上，他要赶在头七前找回来。"
  },
  {
    "title": "境界线上的地平线第二季",
    "year": 2012,
    "region": "日本",
    "type": "TV动画",
    "genre": "科幻, 奇幻, 热血",
    "url": "details/movie-0031.html",
    "cover": "31.jpg",
    "oneLine": "在重奏世界崩坏的边缘，武藏学院的学生们为了夺回极东之王的遗产，向总长连盟宣战。"
  },
  {
    "title": "七龙珠巴 达克之章",
    "year": 2025,
    "region": "日本",
    "type": "电影",
    "genre": "动画、热血、动作",
    "url": "details/movie-0032.html",
    "cover": "32.jpg",
    "oneLine": "在悟空被送往地球之前，他的父亲巴达克进行了一次穿越时空的终极反抗。"
  },
  {
    "title": "我爱秘鲁",
    "year": 2025,
    "region": "西班牙/秘鲁",
    "type": "电影",
    "genre": "喜剧, 冒险, 家庭",
    "url": "details/movie-0033.html",
    "cover": "33.jpg",
    "oneLine": "一个被裁员的西班牙中年大叔，为了不让女儿失望，谎称自己中了彩票，带她去秘鲁“寻宝”，结果误打误撞找到了真正的印加黄金。"
  },
  {
    "title": "新荡妇卡门",
    "year": 2025,
    "region": "法国 / 中国大陆",
    "type": "电影",
    "genre": "剧情 / 情色 / 犯罪",
    "url": "details/movie-0034.html",
    "cover": "34.jpg",
    "oneLine": "一个游走于黑帮、警察与富豪之间的女人，用身体作武器，追寻终极自由。"
  },
  {
    "title": "老妇与鸽子",
    "year": 2021,
    "region": "法国",
    "type": "动画短片",
    "genre": "黑暗寓言",
    "url": "details/movie-0035.html",
    "cover": "35.jpg",
    "oneLine": "巴黎贫民窟里，一个饥饿的老妇与一只肥胖的鸽子，展开了一场关于生存的荒诞交易。"
  },
  {
    "title": "颠覆",
    "year": 2023,
    "region": "中国大陆",
    "type": "电影",
    "genre": "悬疑 / 犯罪",
    "url": "details/movie-0036.html",
    "cover": "36.jpg",
    "oneLine": "程序员发明篡改手机历史记录的工具，却发现自己卷入了一场早已注定的谋杀。"
  },
  {
    "title": "阿内塔",
    "year": 2013,
    "region": "波兰",
    "type": "电影",
    "genre": "剧情, 心理",
    "url": "details/movie-0037.html",
    "cover": "37.jpg",
    "oneLine": "母亲去世后，阿内塔在整理遗物时发现了一沓信，收件人是一个她从没听过的名字——她自己。"
  },
  {
    "title": "昂希朗格瓦：电光魅影",
    "year": 2026,
    "region": "法国",
    "type": "电影",
    "genre": "传记/剧情",
    "url": "details/movie-0038.html",
    "cover": "38.jpg",
    "oneLine": "“法国电影资料馆”创始人昂希·朗格瓦，用一生偷藏了上万卷被纳粹和当局销毁的“禁片”，拯救了电影史。"
  },
  {
    "title": "玩命杀手",
    "year": 2026,
    "region": "美国",
    "type": "电影",
    "genre": "动作/惊悚",
    "url": "details/movie-0039.html",
    "cover": "39.jpg",
    "oneLine": "一个被黑帮取走肾脏的职业杀手在临终前获得神秘力量，转而追杀所有参与器官交易的恶徒。"
  },
  {
    "title": "麦积山的呼唤",
    "year": 2021,
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情 / 家庭",
    "url": "details/movie-0040.html",
    "cover": "40.jpg",
    "oneLine": "一个出走大山的钢琴天才，因为一封信再次听到麦积山无声的呼唤。"
  },
  {
    "title": "独生子女的婆婆妈妈",
    "year": 2014,
    "region": "中国大陆",
    "type": "剧集",
    "genre": "家庭、伦理、喜剧",
    "url": "details/movie-0041.html",
    "cover": "41.jpg",
    "oneLine": "一对85后独生子女结婚后，两对父母、六位老人挤进同一小区，生活彻底失控。"
  },
  {
    "title": "我的徒步之旅",
    "year": 2027,
    "region": "德国",
    "type": "电影",
    "genre": "剧情, 冒险",
    "url": "details/movie-0042.html",
    "cover": "42.jpg",
    "oneLine": "一位丧子的银行家踏上著名的圣地亚哥朝圣之路，背包里装的不是行李，而是儿子的骨灰盒。"
  },
  {
    "title": "曾几何时天魔的黑兔",
    "year": 2024,
    "region": "日本",
    "type": "TV动画",
    "genre": "奇幻/战斗",
    "url": "details/movie-0043.html",
    "cover": "43.jpg",
    "oneLine": "废柴高中生偶然救了一只濒死的黑兔，第二天醒来，这只兔子变成了拥有灭世力量的傲娇萝莉，并追着他喊主人。"
  },
  {
    "title": "迪林杰",
    "year": 2024,
    "region": "美国",
    "type": "电影",
    "genre": "犯罪, 传记, 剧情",
    "url": "details/movie-0044.html",
    "cover": "44.jpg",
    "oneLine": "美国三十年代传奇银行大盗迪林杰最后的疯狂岁月，他的一生就是一场以抢劫为名的反叛。"
  },
  {
    "title": "麻将",
    "year": 1996,
    "region": "中国台湾",
    "type": "电影",
    "genre": "剧情 / 喜剧 / 社会",
    "url": "details/movie-0045.html",
    "cover": "45.jpg",
    "oneLine": "四个年轻人在台北街头设下骗局，却在欲望与迷茫中撞上了成人世界的虚伪。"
  },
  {
    "title": "国道29号",
    "year": 2023,
    "region": "日本",
    "type": "电影",
    "genre": "公路/剧情/治愈",
    "url": "details/movie-0046.html",
    "cover": "46.jpg",
    "oneLine": "癌症末期的母亲执意要走路回家，女儿被迫驾车陪她重走国道29号。"
  },
  {
    "title": "警察大贼",
    "year": 2025,
    "region": "中国香港",
    "type": "电影",
    "genre": "动作， 犯罪",
    "url": "details/movie-0047.html",
    "cover": "47.jpg",
    "oneLine": "警队明日之星与神偷祖师爷被迫联手，对抗一个用钞能力洗黑钱的跨国财团。"
  },
  {
    "title": "和西蒙·里夫一起寻迹咖啡",
    "year": 2024,
    "region": "英国",
    "type": "综艺",
    "genre": "纪录片, 旅行",
    "url": "details/movie-0048.html",
    "cover": "48.jpg",
    "oneLine": "硬核记者西蒙·里夫深入战乱产区，追踪一粒咖啡豆背后的血腥与希望。"
  },
  {
    "title": "爸爸是坏人冠军",
    "year": 2024,
    "region": "中国台湾",
    "type": "电影",
    "genre": "剧情，家庭，运动",
    "url": "details/movie-0049.html",
    "cover": "49.jpg",
    "oneLine": "一个在擂台上扮演“史上最坏反派”的摔角手，为了不让女儿发现真相，拼命想拿一次冠军来证明自己是好人。"
  },
  {
    "title": "小熊的夏天",
    "year": 2024,
    "region": "中国大陆",
    "type": "电影",
    "genre": "动画, 儿童, 家庭",
    "url": "details/movie-0050.html",
    "cover": "50.jpg",
    "oneLine": "一只在城市里迷路的北极熊宝宝，被三个小学生偷偷养在废弃的溜冰场里，他们必须赶在夏天融化之前送它回家。"
  },
  {
    "title": "坏小子巴比",
    "year": 1993,
    "region": "澳大利亚",
    "type": "电影",
    "genre": "剧情, 犯罪, 黑色幽默",
    "url": "details/movie-0051.html",
    "cover": "51.jpg",
    "oneLine": "在囚禁中活了三十年的“巨婴”，杀死母亲走出地下室，发现世界比他更疯。"
  },
  {
    "title": "夺金三王",
    "year": 2023,
    "region": "中国香港 / 中国大陆",
    "type": "电影",
    "genre": "犯罪 / 动作 / 喜剧",
    "url": "details/movie-0052.html",
    "cover": "52.jpg",
    "oneLine": "地下赌局的三位赢家，各自打着一笔赃款的主意，而钱只有一个下落。"
  },
  {
    "title": "葛妮斯派特洛之风情万种",
    "year": 2025,
    "region": "美国",
    "type": "剧集",
    "genre": "喜剧 / 传记 / 时尚",
    "url": "details/movie-0053.html",
    "cover": "53.jpg",
    "oneLine": "葛妮斯派特洛扮演“自己”，用伪纪录片方式解构自己从影后到“Goop女王”的荒诞人生。"
  },
  {
    "title": "江之岛棱镜",
    "year": 2025,
    "region": "日本",
    "type": "动画电影",
    "genre": "奇幻， 治愈， 青春",
    "url": "details/movie-0054.html",
    "cover": "54.jpg",
    "oneLine": "她在江之岛捡到一块棱镜，从此每个夏天都在重复同一天。"
  },
  {
    "title": "德古拉1931",
    "year": 2024,
    "region": "美国",
    "type": "电影",
    "genre": "恐怖 / 历史",
    "url": "details/movie-0055.html",
    "cover": "55.jpg",
    "oneLine": "1931年大萧条时期，真正的德古拉来到纽约华尔街，他发现吸血比吸人血更容易致富。"
  },
  {
    "title": "梦回玛丽莲",
    "year": 2026,
    "region": "美国",
    "type": "电影",
    "genre": "剧情 / 传记 / 奇幻",
    "url": "details/movie-0056.html",
    "cover": "56.jpg",
    "oneLine": "2026年过气女星梦到自己是玛丽莲·梦露转世，她决定用直播揭开好莱坞旧案。"
  },
  {
    "title": "爱、谎言与谋杀",
    "year": 2023,
    "region": "法国",
    "type": "电影",
    "genre": "悬疑, 爱情",
    "url": "details/movie-0057.html",
    "cover": "57.jpg",
    "oneLine": "一位过气导演为了筹拍新片，将真实的谋杀伪装成剧本里的情节，而他最信任的男主角，其实是他杀父仇人的儿子。"
  },
  {
    "title": "骑弹飞行",
    "year": 2025,
    "region": "美国",
    "type": "电影",
    "genre": "恐怖， 奇幻， 公路",
    "url": "details/movie-0058.html",
    "cover": "58.jpg",
    "oneLine": "1969年，一个反战青年搭上了一辆由死人驾驶的顺风车，只有讲出最恐怖的故事才能活到天亮。"
  },
  {
    "title": "闺蜜心窍",
    "year": 2019,
    "region": "中国",
    "type": "电影",
    "genre": "惊悚, 恐怖, 心理",
    "url": "details/movie-0059.html",
    "cover": "59.jpg",
    "oneLine": "婚礼前夕，女主不断收到自己与闺蜜男友的暧昧床照，但她根本不记得拍过这些照片。"
  },
  {
    "title": "献给爱妻的歌",
    "year": 2012,
    "region": "英国",
    "type": "电影",
    "genre": "剧情，音乐",
    "url": "details/movie-0060.html",
    "cover": "60.jpg",
    "oneLine": "一名性格固执的鳏夫，为了完成亡妻的遗愿，被迫加入社区老年合唱团，却在歌声中重获新生。"
  },
  {
    "title": "狐妖皇嫂",
    "year": 2023,
    "region": "中国大陆",
    "type": "电视剧",
    "genre": "古装 / 奇幻 / 爱情",
    "url": "details/movie-0061.html",
    "cover": "61.jpg",
    "oneLine": "姐姐逃婚，妹妹顶替嫁入皇宫，却不知这个冷酷的皇帝早就不是人类，而是一头修炼千年的应龙。"
  },
  {
    "title": "幸福马上来",
    "year": 2024,
    "region": "中国大陆",
    "type": "电影",
    "genre": "喜剧 / 剧情",
    "url": "details/movie-0062.html",
    "cover": "62.jpg",
    "oneLine": "一个靠“假装幸福”为职业的演员，在接到一单扮演“完美父亲”的任务后，卷入了一场地产骗局和家庭闹剧。"
  },
  {
    "title": "弗兰肯斯坦计划",
    "year": 2018,
    "region": "韩国",
    "type": "电影",
    "genre": "剧情, 科幻",
    "url": "details/movie-0063.html",
    "cover": "63.jpg",
    "oneLine": "一个死刑犯的心脏，被移植到一个等待了十年的孩子体内，孩子醒来后说：“我认识杀我全家的凶手。”"
  },
  {
    "title": "巫术奇观",
    "year": 2022,
    "region": "印度",
    "type": "电影",
    "genre": "奇幻 / 喜剧 / 恐怖",
    "url": "details/movie-0064.html",
    "cover": "64.jpg",
    "oneLine": "一个落魄魔术师被误认为顶级巫师，全村排队求他下咒，而他只会变鸽子。"
  },
  {
    "title": "鬼病房",
    "year": 2025,
    "region": "泰国",
    "type": "电影",
    "genre": "恐怖, 悬疑, 医疗",
    "url": "details/movie-0065.html",
    "cover": "65.jpg",
    "oneLine": "车祸醒来，她发现自己躺在阴森的废弃病房，病友们在午夜集体消失，而她的身体里，正跳动着一颗死人心脏。"
  },
  {
    "title": "心魔2020",
    "year": 2020,
    "region": "中国香港",
    "type": "电影",
    "genre": "心理惊悚, 剧情",
    "url": "details/movie-0066.html",
    "cover": "66.jpg",
    "oneLine": "2020年独居隔离的男子，发现墙对面传来的敲击声，只有他自己能听见。"
  },
  {
    "title": "立食师列传",
    "year": 2006,
    "region": "日本",
    "type": "电影",
    "genre": "喜剧 / 纪录片风格",
    "url": "details/movie-0067.html",
    "cover": "67.jpg",
    "oneLine": "一部伪纪录片，记录日本战后最伟大的“立食师”——那些永远站着吃完一碗面就走的神秘职业。"
  },
  {
    "title": "皮特·戴维森：哥就是帅",
    "year": 2024,
    "region": "美国",
    "type": "电影",
    "genre": "喜剧 / 脱口秀 / 传记",
    "url": "details/movie-0068.html",
    "cover": "68.jpg",
    "oneLine": "全美最“丑”的SNL喜剧人用自嘲解构颜值焦虑，顺便聊聊交往过的女神前女友们。"
  },
  {
    "title": "拥抱法力",
    "year": 2023,
    "region": "中国香港",
    "type": "电影",
    "genre": "奇幻剧情",
    "url": "details/movie-0069.html",
    "cover": "69.jpg",
    "oneLine": "一个不信鬼神的程序员回乡奔丧，发现自己必须学会祖传的法术才能让母亲安心上路。"
  },
  {
    "title": "比宇宙更遥远的地方",
    "year": 2018,
    "region": "日本",
    "type": "动画剧集",
    "genre": "青春, 冒险, 励志",
    "url": "details/movie-0070.html",
    "cover": "70.jpg",
    "oneLine": "四个女孩，一个南极梦，一场比宇宙更遥远的旅程，一次改变人生的蜕变。"
  },
  {
    "title": "疯狂的麦克斯2",
    "year": 1981,
    "region": "澳大利亚",
    "type": "电影",
    "genre": "科幻、动作、惊悚",
    "url": "details/movie-0071.html",
    "cover": "71.jpg",
    "oneLine": "核战后荒漠中，麦克斯为了一桶汽油，与武装飞车党展开殊死搏斗。"
  },
  {
    "title": "三个奶爸一个娃",
    "year": 1987,
    "region": "美国",
    "type": "电影",
    "genre": "喜剧, 家庭",
    "url": "details/movie-0072.html",
    "cover": "72.jpg",
    "oneLine": "三个单身汉室友在门口发现了一个弃婴和一张纸条“这是你们的孩子”，而他们连仙人掌都养不活。"
  },
  {
    "title": "踏破硝烟",
    "year": 2025,
    "region": "中国大陆",
    "type": "电影",
    "genre": "战争 / 动作",
    "url": "details/movie-0073.html",
    "cover": "73.jpg",
    "oneLine": "一队铁道游击队接到死命令：在三十六小时内炸毁日军运毒专列，否则整座城将被化武覆盖。"
  },
  {
    "title": "同梦奇缘之奇",
    "year": 1995,
    "region": "中国香港",
    "type": "电影",
    "genre": "喜剧, 奇幻, 爱情",
    "url": "details/movie-0074.html",
    "cover": "74.jpg",
    "oneLine": "一对经常做同一个梦的陌生男女，在现实中相遇后发现，梦里的他们竟然是古代一对仇人。"
  },
  {
    "title": "淘气兵团",
    "year": 1989,
    "region": "中国香港",
    "type": "电影",
    "genre": "喜剧，动作",
    "url": "details/movie-0075.html",
    "cover": "75.jpg",
    "oneLine": "五个住在郊区的顽童，为了凑钱买望远镜，误打误撞把一支国际雇佣兵部队给“剿灭”了。"
  },
  {
    "title": "移情别恋",
    "year": 2025,
    "region": "韩国",
    "type": "电影",
    "genre": "爱情，奇幻，悬疑",
    "url": "details/movie-0076.html",
    "cover": "76.jpg",
    "oneLine": "妻子提出离婚后，丈夫使用了能删除特定记忆的新科技，却发现自己和妻子的甜蜜回忆全是她伪造植入的。"
  },
  {
    "title": "恐怖的人生",
    "year": 2016,
    "region": "美国",
    "type": "电影",
    "genre": "恐怖, 科幻",
    "url": "details/movie-0077.html",
    "cover": "77.jpg",
    "oneLine": "一对夫妻去婚姻咨询，咨询师给他们注射了一种“共生虫”，说能让他们永远相爱。"
  },
  {
    "title": "毛茸茸的狗",
    "year": 2024,
    "region": "英国",
    "type": "电影",
    "genre": "奇幻 / 家庭 / 喜剧",
    "url": "details/movie-0078.html",
    "cover": "78.jpg",
    "oneLine": "一个势利傲慢的都市精英男突然中了诅咒：每晚12点后会变成一只毛茸茸的流浪狗，直到天亮。"
  },
  {
    "title": "大酱园国语",
    "year": 2005,
    "region": "中国内地",
    "type": "电视剧",
    "genre": "家族/年代",
    "url": "details/movie-0079.html",
    "cover": "79.jpg",
    "oneLine": "民国酱园女掌柜临危受命，在男权商帮与日寇铁蹄下，守护百年配方。"
  },
  {
    "title": "鱼之梦",
    "year": 2024,
    "region": "日本",
    "type": "电影",
    "genre": "奇幻 / 治愈 / 家庭",
    "url": "details/movie-0080.html",
    "cover": "80.jpg",
    "oneLine": "七岁的小女孩梦见自己变成一条鱼，她顺着水流游进了昏迷中的奶奶的梦里，发现奶奶的梦是一片干涸的沙漠。"
  },
  {
    "title": "千金奇缘",
    "year": 2004,
    "region": "中国台湾",
    "type": "电视剧",
    "genre": "爱情, 喜剧",
    "url": "details/movie-0081.html",
    "cover": "81.jpg",
    "oneLine": "平凡女孩顶替双胞胎姐姐嫁入豪门，却发现新郎是当年自己暗恋过的穷学生。"
  },
  {
    "title": "奇妙之城第二季",
    "year": 2025,
    "region": "中国大陆",
    "type": "纪录片",
    "genre": "纪录片, 人文",
    "url": "details/movie-0082.html",
    "cover": "82.jpg",
    "oneLine": "每集聚焦一座中国小城，用三个普通人的故事拼出城市的心脏。"
  },
  {
    "title": "东京残酷警察",
    "year": 2026,
    "region": "日本",
    "type": "电影",
    "genre": "动作",
    "url": "details/movie-0083.html",
    "cover": "83.jpg",
    "oneLine": "在近未来东京，一个被剥夺了情感的女警猎杀着失控的“改造人”，直到她发现自己的心脏也是人造的。"
  },
  {
    "title": "什么也没发生",
    "year": 2025,
    "region": "法国",
    "type": "电影",
    "genre": "剧情悬疑",
    "url": "details/movie-0084.html",
    "cover": "84.jpg",
    "oneLine": "阿尔卑斯山脚下的小镇，一个男人消失了，所有人却说“什么也没发生”。"
  },
  {
    "title": "坏账银行第一季",
    "year": 2025,
    "region": "德国",
    "type": "电视剧",
    "genre": "剧情, 惊悚, 金融",
    "url": "details/movie-0085.html",
    "cover": "85.jpg",
    "oneLine": "刚晋升为银行最年轻副总裁的金融天才，发现银行的核心业务竟是帮助毒枭洗钱。"
  },
  {
    "title": "家和万事兴之双喜临门",
    "year": 1998,
    "region": "中国香港",
    "type": "电影",
    "genre": "家庭喜剧",
    "url": "details/movie-0086.html",
    "cover": "86.jpg",
    "oneLine": "分居两地的一对双胞胎姐妹在除夕夜互换身份，却意外撮合了父母破镜重圆。"
  },
  {
    "title": "大清盐商",
    "year": 2024,
    "region": "中国大陆",
    "type": "剧集",
    "genre": "历史 / 商战",
    "url": "details/movie-0087.html",
    "cover": "87.jpg",
    "oneLine": "乾隆年间，扬州盐商们如何在皇帝、权臣与民间疾苦之间，玩转一场关乎生死与财富的权力游戏。"
  },
  {
    "title": "潜艇危机",
    "year": 2024,
    "region": "俄罗斯",
    "type": "电影",
    "genre": "战争，惊悚，剧情",
    "url": "details/movie-0088.html",
    "cover": "88.jpg",
    "oneLine": "俄罗斯最先进的核潜艇在北极冰盖下失事，沉入无法通信的海底深渊，艇员们必须在氧气耗尽前修复反应堆。"
  },
  {
    "title": "祝你好运",
    "year": 1995,
    "region": "美国",
    "type": "电影",
    "genre": "黑色喜剧，犯罪，剧情",
    "url": "details/movie-0089.html",
    "cover": "89.jpg",
    "oneLine": "两个老年职业老千计划在拉斯维加斯骗走赌场三百万，其中一人只剩三个月生命。"
  },
  {
    "title": "弗雷加德",
    "year": 2024,
    "region": "英国",
    "type": "电影",
    "genre": "传记, 犯罪, 惊悚",
    "url": "details/movie-0090.html",
    "cover": "90.jpg",
    "oneLine": "一个冒牌特工伪装成军情五处情报员，不仅在暗网上贩卖假情报，还让真正的精英特工为他卖命。"
  },
  {
    "title": "真爱无垠",
    "year": 1992,
    "region": "美国",
    "type": "电影",
    "genre": "爱情 / 西部",
    "url": "details/movie-0091.html",
    "cover": "91.jpg",
    "oneLine": "一位受过良好教育的东部富家女，在荒凉的西部牧场与一个沉默寡言的鳏夫因一纸契约而结合。"
  },
  {
    "title": "野兽男孩2008",
    "year": 2008,
    "region": "美国",
    "type": "电影",
    "genre": "奇幻爱情",
    "url": "details/movie-0092.html",
    "cover": "92.jpg",
    "oneLine": "一个肤浅的纽约富二代因嘲笑吉普赛人而被变成丑陋的“野兽”，他必须在一个月内找到真爱，否则将永远无法恢复人形。"
  },
  {
    "title": "耻辱的收获",
    "year": 2024,
    "region": "日本",
    "type": "电影",
    "genre": "剧情 / 悬疑",
    "url": "details/movie-0093.html",
    "cover": "93.jpg",
    "oneLine": "家族世代务农的村庄在丰收祭典当晚发生灭门案，而凶手竟是一株会说话的稻穗。"
  },
  {
    "title": "黑木",
    "year": 2027,
    "region": "中国台湾",
    "type": "电影",
    "genre": "恐怖 / 民俗",
    "url": "details/movie-0094.html",
    "cover": "94.jpg",
    "oneLine": "一支纪录片团队进入深山拍摄神木，却发现当地村民供奉的是一棵会吃人的黑色古木。"
  },
  {
    "title": "血肉狂魔",
    "year": 2025,
    "region": "日本",
    "type": "电影",
    "genre": "恐怖、血腥、动作",
    "url": "details/movie-0095.html",
    "cover": "95.jpg",
    "oneLine": "一种让人类肌肉无限增长的病毒爆发后，健美冠军成了人类最后的希望。"
  },
  {
    "title": "加油吧实习生",
    "year": 2015,
    "region": "中国大陆",
    "type": "电视剧",
    "genre": "剧情, 爱情",
    "url": "details/movie-0096.html",
    "cover": "96.jpg",
    "oneLine": "名校毕业生们进入一流公司实习，在残酷的末位淘汰制中，撕开了校园与社会之间的第一道伤口。"
  },
  {
    "title": "心理测量者第一季",
    "year": 2012,
    "region": "日本",
    "type": "剧集",
    "genre": "科幻 / 犯罪 / 赛博朋克",
    "url": "details/movie-0097.html",
    "cover": "97.jpg",
    "oneLine": "在一个由AI审判人心的未来，菜鸟监视官发现，最危险的罪犯竟是没有犯罪系数的“透明人”。"
  },
  {
    "title": "炽热的火焰",
    "year": 2026,
    "region": "韩国",
    "type": "电影",
    "genre": "剧情， 动作， 惊悚",
    "url": "details/movie-0098.html",
    "cover": "98.jpg",
    "oneLine": "曾被大火毁容的前消防员，成了追查“火焰模仿犯”的唯一专家。"
  },
  {
    "title": "别对我的女人出手",
    "year": 2025,
    "region": "日本",
    "type": "电视剧",
    "genre": "动作 / 爱情",
    "url": "details/movie-0099.html",
    "cover": "99.jpg",
    "oneLine": "最强杀手隐退开洗衣店，当仇家绑架他的失明女友时，他决定重出江湖。"
  },
  {
    "title": "激情伴侣",
    "year": 2025,
    "region": "中国香港",
    "type": "电影",
    "genre": "爱情 / 惊悚",
    "url": "details/movie-0100.html",
    "cover": "100.jpg",
    "oneLine": "她以为找到了完美伴侣，却发现对方每晚都会变成另一个人。"
  },
  {
    "title": "去年圣诞",
    "year": 2019,
    "region": "美国",
    "type": "电影",
    "genre": "喜剧，爱情",
    "url": "details/movie-0101.html",
    "cover": "101.jpg",
    "oneLine": "一个自暴自弃的圣诞店铺店员，被一个神秘的暖男改写了人生轨迹。"
  },
  {
    "title": "粉红色的梦",
    "year": 2021,
    "region": "中国香港",
    "type": "电影",
    "genre": "爱情 / 奇幻",
    "url": "details/movie-0102.html",
    "cover": "102.jpg",
    "oneLine": "她每晚都会梦到一个陌生男人，直到有一天，她在现实中的病床边看到了他。"
  },
  {
    "title": "铁腕柔情",
    "year": 2025,
    "region": "韩国",
    "type": "电视剧",
    "genre": "剧情 / 爱情 / 动作",
    "url": "details/movie-0103.html",
    "cover": "103.jpg",
    "oneLine": "她是国家最顶尖的保镖，却被派去保护一个最不需要保护的人——她自己。"
  },
  {
    "title": "灭灯军团",
    "year": 2025,
    "region": "美国",
    "type": "电影",
    "genre": "科幻，惊悚，动作",
    "url": "details/movie-0104.html",
    "cover": "104.jpg",
    "oneLine": "在全球永夜中，一支抵抗军潜入地下，试图炸毁控制太阳的“人造恒星”能源塔。"
  },
  {
    "title": "怨灵地下室",
    "year": 2017,
    "region": "中国大陆",
    "type": "电影",
    "genre": "恐怖 / 悬疑",
    "url": "details/movie-0105.html",
    "cover": "105.jpg",
    "oneLine": "一座民国精神病院的地下室，每一任院长进去后都会变成精神病人。"
  },
  {
    "title": "德国之爱",
    "year": 2026,
    "region": "德国",
    "type": "剧集",
    "genre": "爱情",
    "url": "details/movie-0106.html",
    "cover": "106.jpg",
    "oneLine": "1970年代，东德女翻译官爱上了西德来的男记者，两人在柏林墙两侧秘密相恋。"
  },
  {
    "title": "用心过日子",
    "year": 2025,
    "region": "中国台湾",
    "type": "电视剧",
    "genre": "家庭, 生活",
    "url": "details/movie-0107.html",
    "cover": "107.jpg",
    "oneLine": "台中一家传统糕饼店的三代女人，在各自的人生困境中学习如何“用心”过好每一天。"
  },
  {
    "title": "铁血战士：猎物",
    "year": 2025,
    "region": "美国",
    "type": "电影",
    "genre": "科幻, 动作, 惊悚",
    "url": "details/movie-0108.html",
    "cover": "108.jpg",
    "oneLine": "300年前的科曼奇部落，一位年轻女战士为证明自己，意外激活了沉睡在林中的终极猎手——铁血战士。"
  },
  {
    "title": "鬼天师",
    "year": 1992,
    "region": "中国香港",
    "type": "电影",
    "genre": "恐怖，喜剧",
    "url": "details/movie-0109.html",
    "cover": "109.jpg",
    "oneLine": "半吊子天师意外放出被封印的鬼王，只能用搞笑道术和一把糯米拯救街坊。"
  },
  {
    "title": "万里寻妹",
    "year": 2024,
    "region": "美国",
    "type": "电影",
    "genre": "剧情 / 公路 / 家庭",
    "url": "details/movie-0110.html",
    "cover": "110.jpg",
    "oneLine": "患有轻度自闭的少年独自骑自行车穿越六个州，只为将自己画的生日卡送给被领养的妹妹。"
  },
  {
    "title": "寻人档案",
    "year": 2024,
    "region": "韩国",
    "type": "剧集",
    "genre": "悬疑 / 犯罪 / 剧情",
    "url": "details/movie-0111.html",
    "cover": "111.jpg",
    "oneLine": "一个专门负责“已注销案件”的老年片警，带着一个犯了错的年轻侧写师，靠着一本手写笔记，专找那些“没人找”的人。"
  },
  {
    "title": "御猫三戏锦毛鼠",
    "year": 2026,
    "region": "中国大陆",
    "type": "电影",
    "genre": "动作，喜剧，古装",
    "url": "details/movie-0112.html",
    "cover": "112.jpg",
    "oneLine": "御猫展昭与锦毛鼠白玉堂被太后指婚同一女子，二人从相杀到相爱？相杀到最后。"
  },
  {
    "title": "我和僵尸有个约会1国语",
    "year": 2024,
    "region": "中国香港",
    "type": "剧集",
    "genre": "奇幻、动作、爱情",
    "url": "details/movie-0113.html",
    "cover": "113.jpg",
    "oneLine": "临危受命的驱魔师马小玲遇上失忆的千年僵尸王，两人必须阻止一场能毁灭香港的万鬼日。"
  },
  {
    "title": "小公主苏菲亚",
    "year": 2026,
    "region": "美国",
    "type": "剧集",
    "genre": "奇幻 / 冒险 / 儿童",
    "url": "details/movie-0114.html",
    "cover": "114.jpg",
    "oneLine": "看似平凡的小女孩苏菲亚发现，每当她戴上祖母的项链，就会穿越到一个全是公主的魔法王国。"
  },
  {
    "title": "旧案寻凶第二季",
    "year": 2025,
    "region": "韩国",
    "type": "剧集",
    "genre": "悬疑, 犯罪, 剧情",
    "url": "details/movie-0115.html",
    "cover": "115.jpg",
    "oneLine": "患有超忆症的退休刑警，通过目击者“被污染的记忆”逆向画像，追踪一个模仿20年前手法的连环杀手。"
  },
  {
    "title": "心中有鬼",
    "year": 2022,
    "region": "中国香港",
    "type": "电影",
    "genre": "心理惊悚",
    "url": "details/movie-0116.html",
    "cover": "116.jpg",
    "oneLine": "失忆男人总在镜中看到女鬼，心理医生却说：鬼是你杀的那个人。"
  },
  {
    "title": "正常人",
    "year": 2024,
    "region": "爱尔兰",
    "type": "剧集",
    "genre": "剧情 / 爱情",
    "url": "details/movie-0117.html",
    "cover": "117.jpg",
    "oneLine": "小镇学霸与富家女考上同一所大学，两人在相互伤害与取暖中，挣扎着学会“正常”。"
  },
  {
    "title": "玉女相思",
    "year": 1968,
    "region": "中国香港",
    "type": "电影",
    "genre": "戏曲 / 爱情",
    "url": "details/movie-0118.html",
    "cover": "118.jpg",
    "oneLine": "富家才女与寒门书生一见钟情，却因门第之见和奸人陷害，最终双双殉情化蝶。"
  },
  {
    "title": "龙三和他的七人党",
    "year": 2015,
    "region": "日本",
    "type": "电影",
    "genre": "剧情, 喜剧, 犯罪",
    "url": "details/movie-0119.html",
    "cover": "119.jpg",
    "oneLine": "昔日黑帮老大龙三退休后闲得发慌，召集七个老兄弟重出江湖，结果处处碰壁。"
  },
  {
    "title": "论战争",
    "year": 2018,
    "region": "法国",
    "type": "电影",
    "genre": "剧情、哲学、战争",
    "url": "details/movie-0120.html",
    "cover": "120.jpg",
    "oneLine": "一间房，两个男人，一场关于战争是否正义的激烈辩论，从夜晚辩到天明。"
  },
  {
    "title": "我们在南太平洋上的岛屿",
    "year": 2024,
    "region": "英国 / 新西兰",
    "type": "剧集",
    "genre": "剧情 / 悬疑",
    "url": "details/movie-0121.html",
    "cover": "121.jpg",
    "oneLine": "八个陌生人被送到一座无人岛参加真人秀，却发现岛上埋着他们共同的罪。"
  },
  {
    "title": "人性记录",
    "year": 2025,
    "region": "英国",
    "type": "电影",
    "genre": "悬疑 / 犯罪",
    "url": "details/movie-0122.html",
    "cover": "122.jpg",
    "oneLine": "十二名陪审员正审议一桩杀妻案，一个神秘信封却暗示凶手就在他们中间。"
  },
  {
    "title": "碧亨传：鬼怪的主人",
    "year": 2026,
    "region": "泰国",
    "type": "电视剧",
    "genre": "恐怖 / 奇幻 / 同性 / 爱情",
    "url": "details/movie-0123.html",
    "cover": "123.jpg",
    "oneLine": "他生来就能看见鬼，所有鬼都怕他，因为他是地府选定的“鬼差”，直到他爱上了一个即将被拉入地狱的活人。"
  },
  {
    "title": "时间的风景",
    "year": 2021,
    "region": "法国 / 比利时",
    "type": "电影",
    "genre": "剧情 / 奇幻",
    "url": "details/movie-0124.html",
    "cover": "124.jpg",
    "oneLine": "一位老摄影师发现，他拍下的每张照片都会定格拍摄者本人的时间。"
  },
  {
    "title": "穿越时空的情歌",
    "year": 2022,
    "region": "泰国",
    "type": "电视剧",
    "genre": "爱情， 奇幻， 音乐",
    "url": "details/movie-0125.html",
    "cover": "125.jpg",
    "oneLine": "女主每次听奶奶留下的老式情歌就会穿越到1970年代，在那里爱上了正在追求奶奶的年轻爷爷。"
  },
  {
    "title": "皮特·戴维森：我仍在纽约",
    "year": 2025,
    "region": "美国",
    "type": "脱口秀/喜剧特辑",
    "genre": "喜剧、脱口秀、自传",
    "url": "details/movie-0126.html",
    "cover": "126.jpg",
    "oneLine": "皮特·戴维森在他熟悉的纽约小剧场里，吐槽自己又分手了、又上热搜了、以及为什么离不开这座让他痛苦的城市。"
  },
  {
    "title": "代号猎鹰",
    "year": 2020,
    "region": "中国大陆",
    "type": "电视剧",
    "genre": "谍战 / 悬疑",
    "url": "details/movie-0127.html",
    "cover": "127.jpg",
    "oneLine": "潜伏在军统内部的“猎鹰”遭新上级怀疑，而他发现这位新上级正是自己失忆前亲手送进监狱的结拜大哥。"
  },
  {
    "title": "刑事7人 第四季",
    "year": 2024,
    "region": "日本",
    "type": "剧集",
    "genre": "悬疑 / 犯罪",
    "url": "details/movie-0128.html",
    "cover": "128.jpg",
    "oneLine": "七个个性迥异的刑警迎来新上司，却发现这位上司本人就是一桩十年悬案的在逃嫌疑人。"
  },
  {
    "title": "汉江之恋2025",
    "year": 2025,
    "region": "韩国",
    "type": "电影",
    "genre": "爱情剧情",
    "url": "details/movie-0129.html",
    "cover": "129.jpg",
    "oneLine": "在环境崩溃的2025年，一名生态调查员与神秘流浪汉在汉江孤舟上展开末日求生与相恋。"
  },
  {
    "title": "抽烟很逊，会让你咳嗽",
    "year": 2022,
    "region": "加拿大/法国",
    "type": "电影",
    "genre": "喜剧、剧情、奇幻",
    "url": "details/movie-0130.html",
    "cover": "130.jpg",
    "oneLine": "一个名叫“禁烟卫士”的超级英雄团队，他们的超能力是让吸烟者产生剧烈咳嗽，以此拯救世界。"
  },
  {
    "title": "斗气亲家",
    "year": 2024,
    "region": "中国香港",
    "type": "电视剧 / 短剧",
    "genre": "喜剧 / 家庭",
    "url": "details/movie-0131.html",
    "cover": "131.jpg",
    "oneLine": "女儿嫁给了对门邻居的儿子，原本就商场死对头的两位亲家公，从此开始了抬头不见低头见的终极对决。"
  },
  {
    "title": "贪婪四重奏",
    "year": 2024,
    "region": "英国",
    "type": "电影",
    "genre": "剧情， 惊悚， 犯罪",
    "url": "details/movie-0132.html",
    "cover": "132.jpg",
    "oneLine": "四位濒临破产的顶尖音乐家受邀在一座孤岛豪宅演奏，却发现乐谱暗藏着一场价值十亿的杀人游戏。"
  },
  {
    "title": "高中锋，矮教练",
    "year": 2025,
    "region": "中国大陆",
    "type": "电影",
    "genre": "运动， 喜剧， 励志",
    "url": "details/movie-0133.html",
    "cover": "133.jpg",
    "oneLine": "身高只有一米六的退役体校教练，硬是把一个两米一八却不会打球的高中生送进了省队。"
  },
  {
    "title": "网络部队",
    "year": 2025,
    "region": "美国",
    "type": "电视剧",
    "genre": "动作 / 剧情 / 科技",
    "url": "details/movie-0134.html",
    "cover": "134.jpg",
    "oneLine": "美国网络司令部招募了一群有前科的天才黑客，以毒攻毒对抗国家级网络恐怖袭击，前提是给他们减刑。"
  },
  {
    "title": "苏丝黄的世界",
    "year": 2025,
    "region": "中国香港 / 英国",
    "type": "电影",
    "genre": "剧情 / 爱情",
    "url": "details/movie-0135.html",
    "cover": "135.jpg",
    "oneLine": "从被西方画家凝视的“苏丝黄”，到拿起相机拍回他的女人。"
  },
  {
    "title": "咒怨2002",
    "year": 2025,
    "region": "日本",
    "type": "电影",
    "genre": "恐怖",
    "url": "details/movie-0136.html",
    "cover": "136.jpg",
    "oneLine": "伽椰子不是鬼，而是一种“情绪病毒”。2002年的录像带，正在社交媒体上以弹幕形式重新传播。"
  },
  {
    "title": "伟大的艺术 第二季",
    "year": 2019,
    "region": "美国",
    "type": "剧集",
    "genre": "纪录片 / 艺术",
    "url": "details/movie-0137.html",
    "cover": "137.jpg",
    "oneLine": "摄影机跟随当代艺术大师的画笔，看一张白布如何变成传世之作。"
  },
  {
    "title": "活尸特攻队",
    "year": 2026,
    "region": "韩国",
    "type": "电影",
    "genre": "动作 / 恐怖 / 喜剧",
    "url": "details/movie-0138.html",
    "cover": "138.jpg",
    "oneLine": "朝鲜半岛爆发丧尸危机，一支被判死刑的特种兵被流放到沦陷区执行自杀式任务，他们却发现丧尸可以被“驯化”。"
  },
  {
    "title": "少年手指虎",
    "year": 2023,
    "region": "日本",
    "type": "电影",
    "genre": "喜剧，音乐",
    "url": "details/movie-0139.html",
    "cover": "139.jpg",
    "oneLine": "唱片公司新人为了解约一支过气乐队，却发现乐队成员全是患有老年痴呆症的70岁前朋克巨星，而他们以为现在是1985年。"
  },
  {
    "title": "地下交响曲",
    "year": 2026,
    "region": "波兰 / 德国",
    "type": "电影",
    "genre": "剧情 / 战争 / 音乐",
    "url": "details/movie-0140.html",
    "cover": "140.jpg",
    "oneLine": "1944年华沙起义失败后，一名犹太小提琴手带着一把琴和十一个陌生人，在地下水道里走了九天。"
  },
  {
    "title": "不可思议星期二粤语",
    "year": 1995,
    "region": "中国香港",
    "type": "剧集",
    "genre": "奇幻悬疑",
    "url": "details/movie-0141.html",
    "cover": "141.jpg",
    "oneLine": "每个星期二，粤语残片剧场结束后，电视台会播放一段无人记得看过的诡异短片。"
  },
  {
    "title": "终结者：零",
    "year": 2025,
    "region": "美国",
    "type": "电影",
    "genre": "动作 / 科幻",
    "url": "details/movie-0142.html",
    "cover": "142.jpg",
    "oneLine": "天网派出新型液态金属刺客回到1999年12月31日，目标不是人类，而是互联网的第一个交换机。"
  },
  {
    "title": "抢救足球危机",
    "year": 2015,
    "region": "英国",
    "type": "电影",
    "genre": "喜剧, 运动",
    "url": "details/movie-0143.html",
    "cover": "143.jpg",
    "oneLine": "一支由渔民、厨师和失业牧师组成的英国最烂业余球队，竟意外获得了足总杯的参赛资格。"
  },
  {
    "title": "驳命老公追老婆粤语",
    "year": 1989,
    "region": "香港",
    "type": "剧集",
    "genre": "喜剧 / 爱情",
    "url": "details/movie-0144.html",
    "cover": "144.jpg",
    "oneLine": "富商被毁容换脸成司机模样，回到家中发现妻子正与自己“尸体”办离婚。"
  },
  {
    "title": "大贼与金丝猫",
    "year": 1987,
    "region": "中国香港",
    "type": "电影",
    "genre": "动作 / 喜剧 / 犯罪",
    "url": "details/movie-0145.html",
    "cover": "145.jpg",
    "oneLine": "江湖人称“金丝猫”的女神偷接到一单大买卖，对手却是三个不成器的笨贼。"
  },
  {
    "title": "公路怪物",
    "year": 2024,
    "region": "美国",
    "type": "电影",
    "genre": "公路惊悚",
    "url": "details/movie-0146.html",
    "cover": "146.jpg",
    "oneLine": "穿越沙漠的拼车客发现，途经的每一辆卡车里都坐着同一个驾驶员的尸体。"
  },
  {
    "title": "黄昏的甜美生活",
    "year": 2024,
    "region": "中国",
    "type": "电影",
    "genre": "剧情",
    "url": "details/movie-0147.html",
    "cover": "147.jpg",
    "oneLine": "退休独居的老陈误将邻居新搬来的优雅老太太当成了婚恋对象，却发现对方是个隐藏的美食博主。"
  },
  {
    "title": "大口仔遇福星",
    "year": 2025,
    "region": "中国香港",
    "type": "电影",
    "genre": "喜剧，动作",
    "url": "details/movie-0148.html",
    "cover": "148.jpg",
    "oneLine": "五个笨贼意外绑架了警方的超级卧底“大口仔”，却把他当成普通人质，上演一出警匪颠倒的闹剧。"
  },
  {
    "title": "尖峰时刻",
    "year": 2024,
    "region": "美国",
    "type": "电影",
    "genre": "动作/喜剧",
    "url": "details/movie-0149.html",
    "cover": "149.jpg",
    "oneLine": "退休三年的老探员被FBI召回，搭档竟是他在跆拳道班教过的12岁天才少女。"
  },
  {
    "title": "玩偶1968",
    "year": 1968,
    "region": "日本",
    "type": "电影",
    "genre": "恐怖, 悬疑, 经典",
    "url": "details/movie-0150.html",
    "cover": "150.jpg",
    "oneLine": "新娘收到一个穿着结婚礼服的玩偶，玩偶每晚都会调整成不同的姿势。"
  },
  {
    "title": "女神异闻录5",
    "year": 2025,
    "region": "日本",
    "type": "动画剧集",
    "genre": "奇幻，悬疑，动作",
    "url": "details/movie-0151.html",
    "cover": "1.jpg",
    "oneLine": "一群被社会贴上“问题儿童”标签的高中生，在深夜的异世界里“偷走”大人们的扭曲欲望，让他们悔改。"
  },
  {
    "title": "摩天大楼",
    "year": 2025,
    "region": "韩国，美国",
    "type": "电视剧",
    "genre": "悬疑，惊悚，剧情",
    "url": "details/movie-0152.html",
    "cover": "2.jpg",
    "oneLine": "首尔第一高楼举行封顶派对，电梯停运，100层楼里每层都是一个阶级的罪与罚。"
  },
  {
    "title": "巫山梦断相思泪粤语",
    "year": 1993,
    "region": "中国香港",
    "type": "电影",
    "genre": "爱情, 剧情",
    "url": "details/movie-0153.html",
    "cover": "3.jpg",
    "oneLine": "五十年代香港，一个已婚富商与一个越剧女伶在重庆大厦里谈了一场从未接吻的绝世之恋。"
  },
  {
    "title": "詹姆士的厨房·旅行季",
    "year": 2024,
    "region": "中国台湾",
    "type": "综艺",
    "genre": "美食，真人秀，旅行",
    "url": "details/movie-0154.html",
    "cover": "4.jpg",
    "oneLine": "知名主厨詹姆士驾驶着他的移动餐车，沿着东南亚的海岸线，寻找最野生的食材和最地道的街头味道。"
  },
  {
    "title": "和尚进城",
    "year": 1994,
    "region": "中国大陆",
    "type": "电影",
    "genre": "喜剧",
    "url": "details/movie-0155.html",
    "cover": "5.jpg",
    "oneLine": "一个从未下过山的和尚带着师父遗命进大城市送一封信，结果发现收信人竟是红灯区老板娘。"
  },
  {
    "title": "色情里的风波",
    "year": 1992,
    "region": "中国香港",
    "type": "电影",
    "genre": "剧情 / 情色",
    "url": "details/movie-0156.html",
    "cover": "6.jpg",
    "oneLine": "90年代香港三级片片场，女演员叶彤发现剧本每一页都有导演临时加的床戏。"
  },
  {
    "title": "风流水兵",
    "year": 2025,
    "region": "中国台湾",
    "type": "电影",
    "genre": "同性、爱情、军旅",
    "url": "details/movie-0157.html",
    "cover": "7.jpg",
    "oneLine": "澎湖海防哨所的最后一夜，两个即将退伍的水兵，在台风天里交换了一个无人知晓的吻。"
  },
  {
    "title": "海军上将：德鲁伊特",
    "year": 2024,
    "region": "荷兰",
    "type": "电影",
    "genre": "历史，战争，传记",
    "url": "details/movie-0158.html",
    "cover": "8.jpg",
    "oneLine": "17 世纪，荷兰最伟大的海军上将德鲁伊特，在英荷战争的血腥海战中，守护着一个正在撕裂的共和国。"
  },
  {
    "title": "米尔格伦实验者",
    "year": 2015,
    "region": "美国",
    "type": "电影",
    "genre": "剧情、传记、心理",
    "url": "details/movie-0159.html",
    "cover": "9.jpg",
    "oneLine": "为了探究人性之恶，心理学家米尔格伦设计了一场挑战道德底线的电击谎言。"
  },
  {
    "title": "没有烟硝的日子",
    "year": 2023,
    "region": "乌克兰",
    "type": "电影",
    "genre": "剧情 / 战争",
    "url": "details/movie-0160.html",
    "cover": "10.jpg",
    "oneLine": "战争爆发后，一位小学女教师用粉笔和勇气，在废墟中守护孩子们的童年。"
  },
  {
    "title": "爱情谜语粤语",
    "year": 2025,
    "region": "中国香港",
    "type": "电影",
    "genre": "爱情、剧情、悬疑",
    "url": "details/movie-0161.html",
    "cover": "11.jpg",
    "oneLine": "整理母亲遗物时，女儿发现一封40年前的情书，每一句都是一个指向“那个人”的谜语。"
  },
  {
    "title": "小活佛",
    "year": 1993,
    "region": "意大利 / 英国 / 尼泊尔",
    "type": "电影",
    "genre": "剧情, 奇幻",
    "url": "details/movie-0162.html",
    "cover": "12.jpg",
    "oneLine": "一位喇嘛前往西雅图寻找一位圆寂高僧的转世灵童，对象竟是一个金发碧眼的小男孩。"
  },
  {
    "title": "我的老公是她的恋人",
    "year": 2024,
    "region": "韩国",
    "type": "电视剧",
    "genre": "爱情, 悬疑, 家庭",
    "url": "details/movie-0163.html",
    "cover": "13.jpg",
    "oneLine": "妻子发现丈夫出轨，跟踪之下惊觉第三者竟与自己长相一模一样，且拥有丈夫的另一本结婚证。"
  },
  {
    "title": "亲爱的别担心",
    "year": 2022,
    "region": "美国",
    "type": "电影",
    "genre": "悬疑, 惊悚",
    "url": "details/movie-0164.html",
    "cover": "14.jpg",
    "oneLine": "完美小镇里，所有女人都是家庭主妇，唯一想离开的女人消失了。"
  },
  {
    "title": "黄金雨",
    "year": 2021,
    "region": "印度",
    "type": "电影",
    "genre": "奇幻, 剧情",
    "url": "details/movie-0165.html",
    "cover": "15.jpg",
    "oneLine": "干旱村庄突然天降黄金雨，但每捡一块黄金，就会有一个村民离奇消失。"
  },
  {
    "title": "岩浆毒蛛",
    "year": 2026,
    "region": "日本 / 美国",
    "type": "电影",
    "genre": "科幻 / 惊悚 / 灾难",
    "url": "details/movie-0166.html",
    "cover": "16.jpg",
    "oneLine": "富士山喷发，涌出的不是岩浆，而是亿万只吸食金属的变异毒蛛。"
  },
  {
    "title": "爱的永恒勇气",
    "year": 2025,
    "region": "英国",
    "type": "电影",
    "genre": "爱情, 奇幻, 剧情",
    "url": "details/movie-0167.html",
    "cover": "17.jpg",
    "oneLine": "维多利亚时代女仆与少爷相爱被处死，灵魂却诅咒自己永生永世都要在关键时刻失去挚爱。"
  },
  {
    "title": "闹鬼校园",
    "year": 2023,
    "region": "中国台湾",
    "type": "电影",
    "genre": "恐怖",
    "url": "details/movie-0168.html",
    "cover": "18.jpg",
    "oneLine": "废弃教学楼每晚传出女生哭声，转学生发现灵异事件竟与二十年前的集体失踪案有关。"
  },
  {
    "title": "双傻出海",
    "year": 2018,
    "region": "英国",
    "type": "电影",
    "genre": "喜剧、冒险、公路",
    "url": "details/movie-0169.html",
    "cover": "19.jpg",
    "oneLine": "一个妄想症患者和一个轻度智障男孩偷了游艇横渡大西洋，只为给海豚送一封信。"
  },
  {
    "title": "古畑任三郎 公平的杀人者",
    "year": 2006,
    "region": "日本",
    "type": "电视剧SP",
    "genre": "悬疑 / 犯罪",
    "url": "details/movie-0170.html",
    "cover": "20.jpg",
    "oneLine": "古畑任三郎这次遇到的凶手，是一个永远先预告再杀人的“公平”杀手。"
  },
  {
    "title": "第27章",
    "year": 2025,
    "region": "日本",
    "type": "电影",
    "genre": "剧情, 文艺",
    "url": "details/movie-0171.html",
    "cover": "21.jpg",
    "oneLine": "小说家写到第27章时，发现他笔下的角色活了，并且开始反抗他设定的悲剧结局。"
  },
  {
    "title": "阿瓦勒公主埃琳娜第一季",
    "year": 2016,
    "region": "美国",
    "type": "剧集",
    "genre": "动画 / 奇幻 / 冒险",
    "url": "details/movie-0172.html",
    "cover": "22.jpg",
    "oneLine": "少女公主从魔法护身符中被解救出来，必须学习治国之道，以击败篡位的邪恶巫师。"
  },
  {
    "title": "巅峰营救",
    "year": 2026,
    "region": "美国",
    "type": "电影",
    "genre": "动作 / 惊悚",
    "url": "details/movie-0173.html",
    "cover": "23.jpg",
    "oneLine": "六名顶级雇佣兵受雇营救一位被困阿尔卑斯山实验室的科学家，却发现整座山是一个为他们量身定做的杀人陷阱。"
  },
  {
    "title": "全速返航",
    "year": 2026,
    "region": "中国大陆",
    "type": "电影",
    "genre": "灾难，动作，剧情",
    "url": "details/movie-0174.html",
    "cover": "24.jpg",
    "oneLine": "深海潜艇突遭断裂，氧气只剩90分钟，全员必须做出集体牺牲的选择。"
  },
  {
    "title": "你和我的警察课堂",
    "year": 2025,
    "region": "中国大陆",
    "type": "剧集",
    "genre": "剧情, 青春, 职业",
    "url": "details/movie-0175.html",
    "cover": "25.jpg",
    "oneLine": "菜鸟警校生遇上魔鬼教官，第一堂实战课竟是一起未破的悬案。"
  },
  {
    "title": "泥之河",
    "year": 2024,
    "region": "日本",
    "type": "电影",
    "genre": "剧情 / 犯罪",
    "url": "details/movie-0176.html",
    "cover": "26.jpg",
    "oneLine": "一对以捞尸为生的父子，在泥河底捞起了一个满身伤痕的活人。"
  },
  {
    "title": "战地信差",
    "year": 2024,
    "region": "美国",
    "type": "电影",
    "genre": "战争 / 动作 / 剧情",
    "url": "details/movie-0177.html",
    "cover": "27.jpg",
    "oneLine": "在无人区的死亡泥泞中，一个哑巴信差必须穿越敌占区传递停战令。"
  },
  {
    "title": "夏目友人帐",
    "year": 2025,
    "region": "日本",
    "type": "动画剧集",
    "genre": "奇幻 / 治愈",
    "url": "details/movie-0178.html",
    "cover": "28.jpg",
    "oneLine": "夏目在整理祖母遗物时，发现一本从未见过的“反向友人帐”，上面写的不是妖怪名字，而是他未来会遇到的所有人的死亡顺序。"
  },
  {
    "title": "风流公子花弄蝶",
    "year": 2025,
    "region": "中国台湾",
    "type": "TV剧集",
    "genre": "古装 / 爱情 / 喜剧",
    "url": "details/movie-0179.html",
    "cover": "29.jpg",
    "oneLine": "京城第一纨绔想把妹，结果撩到的“清冷公子”竟是女扮男装来退婚的未婚妻。"
  },
  {
    "title": "麻绳",
    "year": 2023,
    "region": "日本",
    "type": "电影",
    "genre": "剧情, 爱情, 灾难",
    "url": "details/movie-0180.html",
    "cover": "30.jpg",
    "oneLine": "3·11大地震中失去父母的女孩，长大后爱上了用麻绳捆绑修复文物的教授，她说：那根绳子捆住了我的废墟。"
  },
  {
    "title": "大约在冬季",
    "year": 2019,
    "region": "中国大陆",
    "type": "电影",
    "genre": "爱情, 剧情",
    "url": "details/movie-0181.html",
    "cover": "31.jpg",
    "oneLine": "1991年齐秦演唱会上一张多余的门票，让北师大女生安然和台湾摄影师齐啸纠缠了整整三十年。"
  },
  {
    "title": "有个地方叫马兰",
    "year": 2021,
    "region": "中国大陆",
    "type": "剧集",
    "genre": "家庭, 年代",
    "url": "details/movie-0182.html",
    "cover": "32.jpg",
    "oneLine": "1960年代，一群科研人员的子女在戈壁滩上的马兰基地，度过了他们不为人知的童年。"
  },
  {
    "title": "花木兰的秘密",
    "year": 2025,
    "region": "中国大陆",
    "type": "动画电影",
    "genre": "奇幻, 动作, 历史",
    "url": "details/movie-0183.html",
    "cover": "33.jpg",
    "oneLine": "替父从军的花木兰，发现自己每次杀敌后都会短暂地变成男人，而解除诅咒的唯一方法，是找到真正的自我。"
  },
  {
    "title": "乐坛风云",
    "year": 2023,
    "region": "中国香港",
    "type": "剧集",
    "genre": "剧情 / 音乐",
    "url": "details/movie-0184.html",
    "cover": "34.jpg",
    "oneLine": "天才新人意外撞破唱片公司高层的惊天阴谋，一夜之间从追梦人变成了棋子。"
  },
  {
    "title": "沙海狂鲨",
    "year": 2023,
    "region": "美国",
    "type": "电影",
    "genre": "动作 / 惊悚 / 冒险",
    "url": "details/movie-0185.html",
    "cover": "35.jpg",
    "oneLine": "一场沙尘暴从废弃实验室卷来一群变异鲨鱼，它们能在沙中游泳，袭击了沙漠公路上的加油站。"
  },
  {
    "title": "隔楼女孩：我们之间的层距",
    "year": 2023,
    "region": "中国台湾",
    "type": "剧集",
    "genre": "爱情 / 奇幻 / 都市",
    "url": "details/movie-0186.html",
    "cover": "36.jpg",
    "oneLine": "住在同一栋老旧公寓上下层的陌生男女，通过地板裂缝交换日记，从此命运相连。"
  },
  {
    "title": "午夜凶铃国语",
    "year": 2024,
    "region": "中国",
    "type": "电影",
    "genre": "恐怖 / 悬疑",
    "url": "details/movie-0187.html",
    "cover": "37.jpg",
    "oneLine": "一卷失传的录像带在短视频平台复活，点开的人七天后会接到自己的来电。"
  },
  {
    "title": "渔村春色",
    "year": 2017,
    "region": "中国大陆",
    "type": "电影",
    "genre": "文艺",
    "url": "details/movie-0188.html",
    "cover": "38.jpg",
    "oneLine": "90年代末的渔村少女，面临嫁人或撑船捕鱼之外第三种人生的选择。"
  },
  {
    "title": "明日家族",
    "year": 2026,
    "region": "日本",
    "type": "电视剧",
    "genre": "家庭 / 科幻",
    "url": "details/movie-0189.html",
    "cover": "39.jpg",
    "oneLine": "一个允许父母在胚胎期“定制”子女性格的日本社会里，“不完美”的孩子被当成异类。"
  },
  {
    "title": "摇滚未来",
    "year": 2021,
    "region": "中国大陆",
    "type": "电影",
    "genre": "音乐，剧情，青春",
    "url": "details/movie-0190.html",
    "cover": "40.jpg",
    "oneLine": "在2042年的无声世界，一个失聪女孩捡到一个破损的声波放大器，听到了人类灭绝前的最后一段摇滚乐。"
  },
  {
    "title": "铁血雄师",
    "year": 2022,
    "region": "俄罗斯",
    "type": "电影",
    "genre": "战争，动作，历史",
    "url": "details/movie-0191.html",
    "cover": "41.jpg",
    "oneLine": "一辆老旧T-34坦克的车组，被命令死守一座注定沦陷的火车站，为后方争取24小时。"
  },
  {
    "title": "昂贝琳",
    "year": 2011,
    "region": "法国",
    "type": "电影",
    "genre": "剧情 / 传记",
    "url": "details/movie-0192.html",
    "cover": "42.jpg",
    "oneLine": "19世纪末，一个来自巴黎贫民窟的洗衣工女儿，凭借一副天赐的歌喉，闯入了法兰西歌剧院的黄金时代。"
  },
  {
    "title": "1998之闯将",
    "year": 2026,
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情、历史、励志",
    "url": "details/movie-0193.html",
    "cover": "43.jpg",
    "oneLine": "1998年，东北国企下岗工人老赵，带着一群同样失业的兄弟，南下深圳，从倒卖BP机开始闯出一片天。"
  },
  {
    "title": "七大罪 戒律的复活",
    "year": 2024,
    "region": "日本",
    "type": "剧集 / 动画",
    "genre": "奇幻 / 冒险",
    "url": "details/movie-0194.html",
    "cover": "44.jpg",
    "oneLine": "当梅利奥达斯被封印，七大罪剩下的六人必须直面十戒中最强的“真实”戒律。"
  },
  {
    "title": "禁止出售",
    "year": 2025,
    "region": "法国 / 比利时",
    "type": "电影",
    "genre": "喜剧 / 剧情",
    "url": "details/movie-0195.html",
    "cover": "45.jpg",
    "oneLine": "一个固执的八旬老人为了保住自己破旧的书店，与大型开发商斗智斗勇，却意外发现整条街的邻居都在暗中帮助他。"
  },
  {
    "title": "醒醒吧之跟风者",
    "year": 2025,
    "region": "中国台湾",
    "type": "电影",
    "genre": "喜剧, 讽刺",
    "url": "details/movie-0196.html",
    "cover": "46.jpg",
    "oneLine": "一位过气导演为了翻红，假扮“反跟风斗士”拍讽刺视频，结果自己成了最大的跟风者。"
  },
  {
    "title": "稚子骄阳",
    "year": 1999,
    "region": "伊朗",
    "type": "电影",
    "genre": "剧情，家庭，儿童",
    "url": "details/movie-0197.html",
    "cover": "47.jpg",
    "oneLine": "一个乡村老师为了给学生们上一堂关于“太阳”的课，在暴雨中背着失明的孩子翻越了三座山。"
  },
  {
    "title": "小小迪特想要飞",
    "year": 2020,
    "region": "德国",
    "type": "电影",
    "genre": "传记 / 剧情",
    "url": "details/movie-0198.html",
    "cover": "48.jpg",
    "oneLine": "患有恐高症的德国少年迪特，梦想成为飞行员，却在越战中被击落，开启了漫长的雨林逃亡。"
  },
  {
    "title": "露丝和亚历克斯",
    "year": 2024,
    "region": "美国",
    "type": "电影",
    "genre": "爱情, 剧情",
    "url": "details/movie-0199.html",
    "cover": "49.jpg",
    "oneLine": "八十一岁的露丝和七十九岁的亚历克斯在养老院相爱，决定一起逃走去实现年轻时的环球梦想。"
  },
  {
    "title": "特罗马之战",
    "year": 2024,
    "region": "美国",
    "type": "电影",
    "genre": "喜剧 / 动作 / 科幻 / B级片",
    "url": "details/movie-0200.html",
    "cover": "50.jpg",
    "oneLine": "特罗马公司被一家好莱坞巨头收购后，其旗下所有垃圾B级片中的角色全部逃到现实世界，上演一场“烂片之乱”。"
  },
  {
    "title": "交错卢森堡",
    "year": 2023,
    "region": "卢森堡 / 法国",
    "type": "电影",
    "genre": "剧情 / 科幻 / 爱情",
    "url": "details/movie-0201.html",
    "cover": "51.jpg",
    "oneLine": "在卢森堡地下金库工作的程序员，每次下雨都会与平行时空里的另一个自己交换人生。"
  },
  {
    "title": "小小查立大功",
    "year": 2024,
    "region": "美国",
    "type": "电影",
    "genre": "喜剧, 冒险, 家庭",
    "url": "details/movie-0202.html",
    "cover": "52.jpg",
    "oneLine": "一只被实验室遗弃的仓鼠意外卷入珠宝大劫案，并凭借“迷你体型”成了唯一能破案的关键特工。"
  },
  {
    "title": "野原广志午餐流派",
    "year": 2025,
    "region": "日本",
    "type": "电影",
    "genre": "剧情 / 美食 / 家庭",
    "url": "details/movie-0203.html",
    "cover": "53.jpg",
    "oneLine": "野原广志只是个普通上班族，但他每天中午打开的便当，是整个公司最期待的人生剧场。"
  },
  {
    "title": "魔术师：不可能的生活",
    "year": 2017,
    "region": "西班牙",
    "type": "电影",
    "genre": "悬疑, 奇幻",
    "url": "details/movie-0204.html",
    "cover": "54.jpg",
    "oneLine": "一位顶尖魔术师受邀去纠正一个“错误的人生”，却发现委托人竟是未来的自己。"
  },
  {
    "title": "来生不做香港人粤语",
    "year": 2025,
    "region": "中国香港",
    "type": "剧集",
    "genre": "剧情、家庭、都市",
    "url": "details/movie-0205.html",
    "cover": "55.jpg",
    "oneLine": "1997前夕，四个不同阶层的女性决定逃离香港移民海外，三十年后她们的女儿却纷纷回流到深圳和香港寻找身份认同。"
  },
  {
    "title": "西行纪之宿命篇",
    "year": 2023,
    "region": "中国大陆",
    "type": "动画剧集",
    "genre": "奇幻、冒险、动作",
    "url": "details/movie-0206.html",
    "cover": "56.jpg",
    "oneLine": "取经归来五百年后，唐僧师徒的转世身陷神魔棋局，这一次宿命逼他们亲手毁掉曾经的信仰。"
  },
  {
    "title": "魔法科高校的优等生",
    "year": 2025,
    "region": "日本",
    "type": "动画剧集",
    "genre": "科幻， 校园， 魔法",
    "url": "details/movie-0207.html",
    "cover": "57.jpg",
    "oneLine": "从“优等生”司波深雪的视角，重新揭开第一高中里那些不为人知的暗流与温柔。"
  },
  {
    "title": "普天同唱喜春来",
    "year": 1962,
    "region": "中国大陆",
    "type": "电影",
    "genre": "歌舞、家庭、贺岁",
    "url": "details/movie-0208.html",
    "cover": "58.jpg",
    "oneLine": "除夕夜，一座北方小城的男女老少为了参加省里歌咏比赛，展开了一场笑泪交织的排练。"
  },
  {
    "title": "蚁人与黄蜂女：量子狂潮",
    "year": 2026,
    "region": "美国",
    "type": "电影",
    "genre": "动作, 科幻, 冒险",
    "url": "details/movie-0209.html",
    "cover": "59.jpg",
    "oneLine": "斯科特和霍普被困在量子领域的微型城市，必须面对多元宇宙的最大威胁。"
  },
  {
    "title": "七日行",
    "year": 2024,
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情 / 公路",
    "url": "details/movie-0210.html",
    "cover": "60.jpg",
    "oneLine": "一个查出绝症的父亲逼着叛逆的儿子开车送自己去西藏，条件是：七天内只要儿子能让他笑一次，就把遗产全部捐赠。"
  },
  {
    "title": "谁按了删除键",
    "year": 2024,
    "region": "中国大陆",
    "type": "电影",
    "genre": "悬疑、科幻",
    "url": "details/movie-0211.html",
    "cover": "61.jpg",
    "oneLine": "一家公司提供“痛苦记忆删除”服务，然而客户们在删除记忆后，却开始莫名卷入一起谋杀案。"
  },
  {
    "title": "圣诞龙",
    "year": 2024,
    "region": "美国 / 英国",
    "type": "电影",
    "genre": "家庭, 奇幻, 冒险",
    "url": "details/movie-0212.html",
    "cover": "62.jpg",
    "oneLine": "小女孩在平安夜发现自家后院冻住了一只小恐龙，她必须赶在黎明前将它送回北极。"
  },
  {
    "title": "人间至味是清欢",
    "year": 2023,
    "region": "中国",
    "type": "电影",
    "genre": "剧情 / 美食",
    "url": "details/movie-0213.html",
    "cover": "63.jpg",
    "oneLine": "厌食症女孩被迫接手父亲的苍蝇馆子，她要用舌尖找回被遗忘的“家的味道”和消失的父亲。"
  },
  {
    "title": "乘上独角兽",
    "year": 2023,
    "region": "日本",
    "type": "剧集",
    "genre": "爱情, 职场",
    "url": "details/movie-0214.html",
    "cover": "64.jpg",
    "oneLine": "少女CEO的教育科技公司濒临破产，一位53岁的“老实习生”用人生经验帮她绝地翻盘。"
  },
  {
    "title": "烈士血",
    "year": 2025,
    "region": "中国大陆",
    "type": "电影",
    "genre": "动作 / 历史 / 战争",
    "url": "details/movie-0215.html",
    "cover": "65.jpg",
    "oneLine": "1937年，一座江南小镇上，七位互不相识的平民为复仇自愿走上绝路。"
  },
  {
    "title": "新扎杀手",
    "year": 2025,
    "region": "中国香港",
    "type": "电影",
    "genre": "动作/犯罪/悬疑",
    "url": "details/movie-0216.html",
    "cover": "66.jpg",
    "oneLine": "警校最差的毕业生被派去卧底当杀手，结果他不仅成了王牌杀手，还真的爱上了暗杀目标——那个他本该出卖的女警官。"
  },
  {
    "title": "双龙出手",
    "year": 1995,
    "region": "香港",
    "type": "电影",
    "genre": "动作，犯罪",
    "url": "details/movie-0217.html",
    "cover": "67.jpg",
    "oneLine": "警方与黑帮各自派出卧底，两人却决定联手黑吃黑。"
  },
  {
    "title": "我不是酒神2022",
    "year": 2022,
    "region": "中国",
    "type": "电影",
    "genre": "喜剧 / 剧情",
    "url": "details/movie-0218.html",
    "cover": "68.jpg",
    "oneLine": "一个千杯不醉的送水工，被错认成神秘酒仙，卷入了一场荒诞的酒王争霸赛。"
  },
  {
    "title": "大门奖第二季",
    "year": 2024,
    "region": "美国",
    "type": "剧集",
    "genre": "喜剧 / 奇幻",
    "url": "details/movie-0219.html",
    "cover": "69.jpg",
    "oneLine": "神秘机器再次降临小镇，这次抽中的大奖不是财富，而是被抹除一段最耻辱的记忆。"
  },
  {
    "title": "英雄情泪保山河",
    "year": 1991,
    "region": "中国香港",
    "type": "电影",
    "genre": "动作 / 武侠 / 剧情",
    "url": "details/movie-0220.html",
    "cover": "70.jpg",
    "oneLine": "明朝末年，将军狄青被诬叛国，他的结拜兄弟为保其忠良血脉，以三人惨死换一人孤雏，演绎惊天悲歌。"
  },
  {
    "title": "突然离去",
    "year": 2023,
    "region": "韩国",
    "type": "电影",
    "genre": "悬疑, 剧情",
    "url": "details/movie-0221.html",
    "cover": "71.jpg",
    "oneLine": "模范丈夫清晨留下一个吻后去上班，却从此失踪，妻子发现他完全是另一个人。"
  },
  {
    "title": "血剪惊魂",
    "year": 2022,
    "region": "美国",
    "type": "电影",
    "genre": "恐怖， 惊悚， 悬疑",
    "url": "details/movie-0222.html",
    "cover": "72.jpg",
    "oneLine": "小镇理发师手中的剪刀，专在客人闭眼时割断他们的喉咙。"
  },
  {
    "title": "荒江女侠",
    "year": 2025,
    "region": "中国大陆",
    "type": "电影",
    "genre": "武侠、动作、冒险",
    "url": "details/movie-0223.html",
    "cover": "73.jpg",
    "oneLine": "民国初年，长江女船王“玉面罗刹”为报灭门之仇，操着木船独闯军阀炮艇，展开一场水上大战。"
  },
  {
    "title": "碧蓝之海",
    "year": 2020,
    "region": "日本",
    "type": "电影",
    "genre": "喜剧，青春，运动",
    "url": "details/movie-0224.html",
    "cover": "74.jpg",
    "oneLine": "北原伊织本以为大学生活是青春恋爱的粉红色，却被潜水社团的前辈们灌醉后扒光衣服，从此开始了毫无下限的爆笑生活。"
  },
  {
    "title": "裸体哈维闯人生",
    "year": 2024,
    "region": "澳大利亚",
    "type": "电影",
    "genre": "动画、剧情、哲学",
    "url": "details/movie-0225.html",
    "cover": "75.jpg",
    "oneLine": "一个坚信“衣服是人类谎言”的裸体主义老头，用一场荒诞的越狱去海边寻找人生的真相。"
  },
  {
    "title": "骗子",
    "year": 2019,
    "region": "中国",
    "type": "电影",
    "genre": "剧情 / 犯罪 / 黑色幽默",
    "url": "details/movie-0226.html",
    "cover": "76.jpg",
    "oneLine": "东北老工业区，三个下岗工人组建“骗子培训班”，却意外骗倒了一个跨国诈骗集团。"
  },
  {
    "title": "噗咙共鲜师2",
    "year": 2024,
    "region": "中国台湾",
    "type": "剧集",
    "genre": "喜剧，校园，励志",
    "url": "details/movie-0227.html",
    "cover": "77.jpg",
    "oneLine": "上一季的菜鸟鲜师升任校长，却发现整个学校都被AI教育系统接管，学生全变成了“机器人”。"
  },
  {
    "title": "凉宫春日的消失",
    "year": 2026,
    "region": "日本",
    "type": "动画电影",
    "genre": "科幻, 校园",
    "url": "details/movie-0228.html",
    "cover": "78.jpg",
    "oneLine": "阿虚醒来后，凉宫春日消失了，并且从来没有人听说过她的名字。"
  },
  {
    "title": "爱慕",
    "year": 2012,
    "region": "法国",
    "type": "电影",
    "genre": "剧情，爱情",
    "url": "details/movie-0229.html",
    "cover": "79.jpg",
    "oneLine": "一对八十多岁的老夫妻，用生命最后的时光诠释什么是“直到死亡将我们分开”。"
  },
  {
    "title": "拇指仙童",
    "year": 2026,
    "region": "法国",
    "type": "电影",
    "genre": "奇幻， 冒险， 家庭",
    "url": "details/movie-0230.html",
    "cover": "80.jpg",
    "oneLine": "一个被父母遗弃在森林里的男孩被女巫缩小到拇指大小，必须在昆虫世界里找到回家的路。"
  },
  {
    "title": "壁女",
    "year": 2021,
    "region": "日本",
    "type": "剧集",
    "genre": "悬疑/社会",
    "url": "details/movie-0231.html",
    "cover": "81.jpg",
    "oneLine": "一栋老旧公寓的墙壁里，住着一个能听到所有住户秘密的“壁女”，而她正准备出售这些秘密。"
  },
  {
    "title": "给个理由先之重回鹿鼎",
    "year": 2020,
    "region": "中国大陆",
    "type": "电影",
    "genre": "喜剧 / 穿越 / 古装",
    "url": "details/movie-0232.html",
    "cover": "82.jpg",
    "oneLine": "互联网打工人穿越成韦小宝，却发现康熙是996剥削狂魔，必须用KPI推翻他。"
  },
  {
    "title": "引诱",
    "year": 2024,
    "region": "法国",
    "type": "电影",
    "genre": "爱情 / 剧情 / 情色",
    "url": "details/movie-0233.html",
    "cover": "83.jpg",
    "oneLine": "中年哲学教授用一封封手写情书引诱女学生，却在过程中发现自己才是被驯服的那一个。"
  },
  {
    "title": "最好的时代",
    "year": 2025,
    "region": "中国大陆",
    "type": "剧集",
    "genre": "剧情 / 年代",
    "url": "details/movie-0234.html",
    "cover": "84.jpg",
    "oneLine": "1984年的深圳，六个来自天南海北的年轻人蜗居在铁皮房里，他们的全部资产是：一张特区暂住证、一本被翻烂的《摩根传》，和一颗想改变命运的心。"
  },
  {
    "title": "意外制造公司",
    "year": 2025,
    "region": "荷兰",
    "type": "电影",
    "genre": "剧情 / 爱情 / 奇幻",
    "url": "details/movie-0235.html",
    "cover": "85.jpg",
    "oneLine": "一家公司专为客户制造“意外死亡”，但员工小A却爱上了自己的“意外对象”，还搞丢了客户订单。"
  },
  {
    "title": "大坏狼",
    "year": 2021,
    "region": "以色列",
    "type": "电影",
    "genre": "惊悚 / 犯罪",
    "url": "details/movie-0236.html",
    "cover": "86.jpg",
    "oneLine": "一名小女孩失踪后，三个男人在一间废弃仓库里上演互相折磨的猫鼠游戏。"
  },
  {
    "title": "闪电侠第四季",
    "year": 2017,
    "region": "美国",
    "type": "剧集",
    "genre": "科幻， 动作",
    "url": "details/movie-0237.html",
    "cover": "87.jpg",
    "oneLine": "巴里·艾伦从神速力中归来，却发现一位名为“思考者”的超智反派已布下天罗地网。"
  },
  {
    "title": "电幻国度",
    "year": 2026,
    "region": "美国",
    "type": "电影",
    "genre": "科幻 / 冒险 / 剧情",
    "url": "details/movie-0238.html",
    "cover": "88.jpg",
    "oneLine": "女孩米歇尔穿越废土寻找弟弟，唯一的同伴是一台只剩眼睛能动的黄色小机器人。"
  },
  {
    "title": "阿达伦31",
    "year": 2022,
    "region": "瑞典",
    "type": "电影",
    "genre": "剧情，历史",
    "url": "details/movie-0239.html",
    "cover": "89.jpg",
    "oneLine": "1931年瑞典Ådalen，一场和平示威演变成军队向工人开枪的惨案，改变了国家历史。"
  },
  {
    "title": "红帆布",
    "year": 2020,
    "region": "中国",
    "type": "电影",
    "genre": "剧情 / 短片",
    "url": "details/movie-0240.html",
    "cover": "90.jpg",
    "oneLine": "一块褪色的红帆布，牵扯出爷爷在战争年代与一位船娘被遗忘的婚约。"
  },
  {
    "title": "一箭双雕",
    "year": 2025,
    "region": "中国大陆",
    "type": "电影",
    "genre": "动作, 喜剧, 古装",
    "url": "details/movie-0241.html",
    "cover": "91.jpg",
    "oneLine": "草原第一神箭手是个胆小鬼，他孪生妹妹假扮他入朝领赏，却被皇帝要求一箭射下远处两座敌军的烽火台。"
  },
  {
    "title": "魔域战记",
    "year": 2024,
    "region": "日本",
    "type": "动画剧集",
    "genre": "奇幻，冒险，战斗",
    "url": "details/movie-0242.html",
    "cover": "92.jpg",
    "oneLine": "游戏宅穿越进自己最爱的垃圾RPG游戏，却发现自己只能使用最没用的“生活技能”。"
  },
  {
    "title": "五月广场母亲",
    "year": 2022,
    "region": "阿根廷",
    "type": "电影",
    "genre": "剧情 / 历史",
    "url": "details/movie-0243.html",
    "cover": "93.jpg",
    "oneLine": "一位普通母亲为寻找失踪的女儿，独自揭开军政府时期最黑暗的腐败链条。"
  },
  {
    "title": "妈妈是杀手",
    "year": 2021,
    "region": "日本",
    "type": "电影",
    "genre": "动作, 喜剧, 家庭",
    "url": "details/movie-0244.html",
    "cover": "94.jpg",
    "oneLine": "家庭主妇真理子的秘密身份是顶级杀手，直到女儿的男朋友上门提亲那天。"
  },
  {
    "title": "错点鸳鸯",
    "year": 2025,
    "region": "中国大陆",
    "type": "TV Series",
    "genre": "古装，爱情，喜剧",
    "url": "details/movie-0245.html",
    "cover": "95.jpg",
    "oneLine": "替妹妹出嫁的平民女意外发现，那位传说中的病秧子夫君竟是当年救过自己的江湖少侠。"
  },
  {
    "title": "舱一代",
    "year": 2026,
    "region": "中国大陆",
    "type": "剧集",
    "genre": "科幻, 悬疑, 伦理",
    "url": "details/movie-0246.html",
    "cover": "96.jpg",
    "oneLine": "为换取家人优质生活，底层青年签下“舱一代”实验合约，却发现自己成了数字世界的永世矿工。"
  },
  {
    "title": "人生有梦",
    "year": 2020,
    "region": "中国大陆",
    "type": "电影",
    "genre": "励志 / 喜剧",
    "url": "details/movie-0247.html",
    "cover": "97.jpg",
    "oneLine": "一个被裁员的42岁程序员，穿上外卖服，却把每个订单的备注变成了炸翻全场的单口喜剧段子。"
  },
  {
    "title": "鬼门关3",
    "year": 2026,
    "region": "香港",
    "type": "电影",
    "genre": "恐怖, 动作, 奇幻",
    "url": "details/movie-0248.html",
    "cover": "98.jpg",
    "oneLine": "核泄漏导致僵尸变异为“核尸”，茅山道士不得不使用量子力学对抗电磁波僵尸。"
  },
  {
    "title": "亲爱的戈巴契夫",
    "year": 2020,
    "region": "俄罗斯",
    "type": "电影",
    "genre": "剧情，历史，黑色幽默",
    "url": "details/movie-0249.html",
    "cover": "99.jpg",
    "oneLine": "一个苏联时期的老兵，在现代超市里扮演戈巴契夫来谋生，直到真正的戈巴契夫走进了超市。"
  },
  {
    "title": "超然芯动",
    "year": 2024,
    "region": "英国",
    "type": "电影",
    "genre": "科幻/爱情",
    "url": "details/movie-0250.html",
    "cover": "100.jpg",
    "oneLine": "绝症富豪将自己的意识上传到芯片，却发现芯片爱上了安装它的女工程师，而他的肉身还没死。"
  },
  {
    "title": "生命中的岛屿",
    "year": 2022,
    "region": "日本",
    "type": "电影",
    "genre": "剧情 / 家庭",
    "url": "details/movie-0251.html",
    "cover": "101.jpg",
    "oneLine": "一个只剩八名老人的海岛，迎来了一位来自东京的叛逆少女。"
  },
  {
    "title": "逐星女",
    "year": 2025,
    "region": "美国",
    "type": "电视剧",
    "genre": "科幻动作",
    "url": "details/movie-0252.html",
    "cover": "102.jpg",
    "oneLine": "一位天体物理学女博士发现，自己研究的“暗物质”其实就是古人眼中的“星辰之力”，而她是唯一能驾驭它的人。"
  },
  {
    "title": "娃娃兵",
    "year": 2025,
    "region": "中国大陆",
    "type": "电视剧",
    "genre": "战争动作",
    "url": "details/movie-0253.html",
    "cover": "103.jpg",
    "oneLine": "1944年，一支娃娃兵连队死守弹药库，他们平均年龄14岁，最大的一杆枪比人还高。"
  },
  {
    "title": "献身给魔王伊伏洛基亚吧",
    "year": 2024,
    "region": "日本",
    "type": "电影",
    "genre": "奇幻、爱情、动作",
    "url": "details/movie-0254.html",
    "cover": "104.jpg",
    "oneLine": "为了拯救世界，最强勇者被迫献身给魔王当“王后”，却发现魔王是个恋爱脑。"
  },
  {
    "title": "八仙全传",
    "year": 2025,
    "region": "中国大陆",
    "type": "剧集",
    "genre": "古装/神话/喜剧",
    "url": "details/movie-0255.html",
    "cover": "105.jpg",
    "oneLine": "天庭招聘新八仙，铁拐李退休前带实习生，却发现每个候选人都是带着黑历史的“问题神仙”。"
  },
  {
    "title": "将军的儿子2",
    "year": 2026,
    "region": "韩国",
    "type": "电影",
    "genre": "动作, 历史, 战争",
    "url": "details/movie-0256.html",
    "cover": "106.jpg",
    "oneLine": "将军之子背负叛国之名逃亡，却发现真正的叛徒是自己最信任的兄弟。"
  },
  {
    "title": "鬼挡墙",
    "year": 2023,
    "region": "中国台湾",
    "type": "电影",
    "genre": "恐怖, 惊悚",
    "url": "details/movie-0257.html",
    "cover": "107.jpg",
    "oneLine": "一名迷路的货车司机在午夜山路上遭遇鬼挡墙，每次掉头都开回同一栋废弃的凶宅，而宅子里的人，都是他死去的亲人。"
  },
  {
    "title": "健康大问诊",
    "year": 2023,
    "region": "中国大陆",
    "type": "剧集",
    "genre": "剧情 / 医疗 / 职场",
    "url": "details/movie-0258.html",
    "cover": "108.jpg",
    "oneLine": "一档火爆全国的养生节目背后，藏着一个专门收割老年人的惊天骗局，而唯一敢说真话的医生正被全网民暴。"
  },
  {
    "title": "吸血鬼猎人巴菲第五季",
    "year": 2024,
    "region": "美国",
    "type": "剧集",
    "genre": "奇幻，动作，恐怖",
    "url": "details/movie-0259.html",
    "cover": "109.jpg",
    "oneLine": "重启版第五季，巴菲发现杀死她的不是某个恶魔，而是“猎人的宿命”本身——每一代猎人都活不过25岁。"
  },
  {
    "title": "魔鬼亱",
    "year": 2025,
    "region": "中国台湾",
    "type": "电影",
    "genre": "惊悚",
    "url": "details/movie-0260.html",
    "cover": "110.jpg",
    "oneLine": "在一个偏僻的台湾渔村，每隔七年就会有一个“魔鬼亱”，当晚出生的婴儿，都会被村中老妇指认为“鬼仔”而沉海。"
  },
  {
    "title": "无枷无主",
    "year": 2026,
    "region": "印度",
    "type": "电影",
    "genre": "剧情 / 社会",
    "url": "details/movie-0261.html",
    "cover": "111.jpg",
    "oneLine": "一个低种姓青年和一个高种姓少女，在逃亡路上共同砸碎了无形的枷锁。"
  },
  {
    "title": "夺命列车",
    "year": 2025,
    "region": "美国",
    "type": "电影",
    "genre": "动作、悬疑、惊悚",
    "url": "details/movie-0262.html",
    "cover": "112.jpg",
    "oneLine": "一辆无人驾驶的高速列车被植入病毒，每停一站就炸毁一节车厢。"
  },
  {
    "title": "百词莫辩",
    "year": 2025,
    "region": "美国",
    "type": "电影",
    "genre": "悬疑 / 犯罪 / 剧情",
    "url": "details/movie-0263.html",
    "cover": "113.jpg",
    "oneLine": "聋哑人被控谋杀，王牌律师发现：他并非不能说话，而是曾被割去舌头。"
  },
  {
    "title": "邪恶一代",
    "year": 2020,
    "region": "韩国",
    "type": "剧集",
    "genre": "犯罪",
    "url": "details/movie-0264.html",
    "cover": "114.jpg",
    "oneLine": "黑帮二代目坐牢二十年后出狱，发现自己的小弟们都成了议员和企业会长。"
  },
  {
    "title": "奉天承孕",
    "year": 2025,
    "region": "中国大陆",
    "type": "网络短剧",
    "genre": "古装喜剧",
    "url": "details/movie-0265.html",
    "cover": "115.jpg",
    "oneLine": "现代生殖科女医生穿回清朝，成了太医院唯一的女太医，被迫给不想生孩子的皇后做“试管婴儿”。"
  },
  {
    "title": "癫凤狂龙",
    "year": 2025,
    "region": "中国香港",
    "type": "电影",
    "genre": "喜剧, 动作, 犯罪",
    "url": "details/movie-0266.html",
    "cover": "116.jpg",
    "oneLine": "为了调查黑帮洗钱证据，警队最暴躁的刑警和最疯癫的精神病学女博士伪装成病人和医生，潜入一家诡异的精神病院。"
  },
  {
    "title": "拥抱幸福，拥抱爱",
    "year": 2012,
    "region": "泰国",
    "type": "电影",
    "genre": "爱情 / 剧情",
    "url": "details/movie-0267.html",
    "cover": "117.jpg",
    "oneLine": "三对关于“等待”的爱情故事，在泰国清迈的雨季里，交织出一首关于放手与拥抱的散文诗。"
  },
  {
    "title": "转运姐妹花",
    "year": 2025,
    "region": "中国大陆",
    "type": "电影",
    "genre": "喜剧、奇幻",
    "url": "details/movie-0268.html",
    "cover": "118.jpg",
    "oneLine": "霉运缠身的妹妹与人生赢家姐姐意外交换了运气，却发现对方的灾难才刚刚开始。"
  },
  {
    "title": "金鹰访谈2009",
    "year": 2009,
    "region": "中国大陆",
    "type": "剧集",
    "genre": "传记，访谈",
    "url": "details/movie-0269.html",
    "cover": "119.jpg",
    "oneLine": "一档普通的电视访谈节目，却记录下了五位明星在镜头前后的虚伪与崩塌。"
  },
  {
    "title": "苏洛与三剑客",
    "year": 2024,
    "region": "西班牙 / 法国",
    "type": "电影",
    "genre": "动作 / 冒险 / 历史改编",
    "url": "details/movie-0270.html",
    "cover": "120.jpg",
    "oneLine": "当蒙面侠客苏洛误入法国，与火枪手三剑客相遇，一场横跨两国的王室阴谋需要四人合力破解。"
  },
  {
    "title": "特务突击队",
    "year": 2024,
    "region": "中国香港",
    "type": "电影",
    "genre": "动作 / 战争 / 冒险",
    "url": "details/movie-0271.html",
    "cover": "121.jpg",
    "oneLine": "一支退役香港特种兵小队，为救被拐儿童深入金三角毒寨，却发现目标涉及国际阴谋。"
  },
  {
    "title": "下坡戮",
    "year": 2026,
    "region": "美国",
    "type": "电影",
    "genre": "惊悚，恐怖，运动",
    "url": "details/movie-0272.html",
    "cover": "122.jpg",
    "oneLine": "六名山地车手在一条废弃的下坡赛道上比赛，却发现自己正在被一个模仿“山路传说”的面具屠夫逐个猎杀。"
  },
  {
    "title": "废柴兄弟3",
    "year": 2015,
    "region": "中国大陆",
    "type": "电视剧",
    "genre": "喜剧",
    "url": "details/movie-0273.html",
    "cover": "123.jpg",
    "oneLine": "两个在普林斯顿大厦地下室创业的废柴，为了一个梦想中的办公室，进行了一场啼笑皆非的“升职”大战。"
  },
  {
    "title": "绝望的牛仔",
    "year": 2025,
    "region": "美国",
    "type": "电影",
    "genre": "西部， 剧情， 惊悚",
    "url": "details/movie-0274.html",
    "cover": "124.jpg",
    "oneLine": "一个破产的现代牛仔，骑着马穿越内华达荒漠，追杀杀害他妻女的墨西哥毒枭。"
  },
  {
    "title": "倾城天下",
    "year": 2023,
    "region": "中国大陆",
    "type": "电视剧",
    "genre": "古装 / 爱情 / 权谋",
    "url": "details/movie-0275.html",
    "cover": "125.jpg",
    "oneLine": "亡国公主潜入敌国后宫，欲颠覆王朝，却意外与冷酷帝王陷入宿命之恋。"
  },
  {
    "title": "随风而逝的记忆",
    "year": 2025,
    "region": "日本",
    "type": "电影",
    "genre": "剧情, 科幻",
    "url": "details/movie-0276.html",
    "cover": "126.jpg",
    "oneLine": "一家科技公司能删除指定记忆，他却选择删除了儿子存在的所有痕迹。"
  },
  {
    "title": "希皮",
    "year": 1970,
    "region": "意大利",
    "type": "电影",
    "genre": "剧情",
    "url": "details/movie-0277.html",
    "cover": "127.jpg",
    "oneLine": "一个来自外省的女孩来到罗马寻找自己的嬉皮士男友，却发现他早已背叛理想，成为了一个资产阶级商人的打手。"
  },
  {
    "title": "六心公主",
    "year": 2022,
    "region": "日本",
    "type": "剧集",
    "genre": "奇幻 / 冒险 / 动作",
    "url": "details/movie-0278.html",
    "cover": "128.jpg",
    "oneLine": "身负六重人格的亡国公主，必须在每一重人格觉醒时争夺身体控制权，才能集齐六颗心石复活母后。"
  },
  {
    "title": "新游记",
    "year": 2024,
    "region": "中国大陆",
    "type": "综艺",
    "genre": "真人秀，旅行，文化",
    "url": "details/movie-0279.html",
    "cover": "129.jpg",
    "oneLine": "六位明星重走玄奘之路，但沿途遇到的“妖怪”全是现代社会的困境——网贷、空巢老人、短视频成瘾。"
  },
  {
    "title": "德蕾莎修女",
    "year": 2025,
    "region": "印度 / 英国 / 意大利",
    "type": "电影",
    "genre": "传记 / 剧情 / 宗教",
    "url": "details/movie-0280.html",
    "cover": "130.jpg",
    "oneLine": "聚焦德蕾莎修女长达50年的“灵魂暗夜”——她虽行善，却始终听不到上帝的声音。"
  },
  {
    "title": "食人恋",
    "year": 2015,
    "region": "西班牙",
    "type": "电影",
    "genre": "剧情 / 爱情 / 恐怖",
    "url": "details/movie-0281.html",
    "cover": "131.jpg",
    "oneLine": "他是一名有食人癖的裁缝，平静生活被她打破——他发现自己爱她的方式，不是想“吃掉”她。"
  },
  {
    "title": "特警杀人狂",
    "year": 2025,
    "region": "中国香港",
    "type": "电影",
    "genre": "动作 / 犯罪 / 惊悚",
    "url": "details/movie-0282.html",
    "cover": "132.jpg",
    "oneLine": "特警队王牌竟是隐藏在体制内的连环杀手，他利用反侦察手段与全城警力展开了一场猫鼠游戏。"
  },
  {
    "title": "季节",
    "year": 2014,
    "region": "日本",
    "type": "剧集",
    "genre": "剧情",
    "url": "details/movie-0283.html",
    "cover": "133.jpg",
    "oneLine": "一家小酒馆的四十年，见证了霓虹灯下几代人爱过又沉默的春夏秋冬。"
  },
  {
    "title": "地球外少年少女",
    "year": 2022,
    "region": "日本",
    "type": "剧集 / 动画",
    "genre": "科幻 / 冒险 / 青春",
    "url": "details/movie-0284.html",
    "cover": "134.jpg",
    "oneLine": "月球基地的六名少女意外激活了远古外星AI，却被AI告知“人类才是不被允许存在的病毒”。"
  },
  {
    "title": "分手，不分手",
    "year": 2024,
    "region": "中国台湾",
    "type": "电影",
    "genre": "爱情， 剧情， 喜剧",
    "url": "details/movie-0285.html",
    "cover": "135.jpg",
    "oneLine": "在台风登陆的最后一班地铁里，三对处于分手边缘的情侣被迫共处一室，爱情在灾难面前暴露了最真实的底色。"
  },
  {
    "title": "32颗药丸：我姐姐的自杀",
    "year": 2027,
    "region": "韩国",
    "type": "电影",
    "genre": "剧情 / 悬疑",
    "url": "details/movie-0286.html",
    "cover": "136.jpg",
    "oneLine": "妹妹不相信开朗的姐姐会自杀，通过姐姐留下的32颗抗抑郁药，拼凑出被藏匿的真相。"
  },
  {
    "title": "蘑菇人玛坦戈",
    "year": 2025,
    "region": "美国 / 墨西哥",
    "type": "电影",
    "genre": "科幻 / 恐怖",
    "url": "details/movie-0287.html",
    "cover": "137.jpg",
    "oneLine": "亚马逊雨林深处，一种寄生真菌正在把人变成蘑菇的行走宿主。"
  },
  {
    "title": "澳门营业中",
    "year": 2024,
    "region": "中国澳门，中国香港",
    "type": "剧集",
    "genre": "剧情，群像",
    "url": "details/movie-0288.html",
    "cover": "138.jpg",
    "oneLine": "澳门老街一家百年饼家面临拆迁危机，三代人、七个街坊用各自的方式守护最后的老味道。"
  },
  {
    "title": "热带复眼",
    "year": 2024,
    "region": "泰国 / 中国台湾",
    "type": "电影",
    "genre": "悬疑 / 奇幻",
    "url": "details/movie-0289.html",
    "cover": "139.jpg",
    "oneLine": "一名摄影师发现自己的相机能拍到死者临终前最后看到的画面，而所有画面都指向一个东南亚雨林深处的祭坛。"
  },
  {
    "title": "贝多芬的谎言",
    "year": 2011,
    "region": "德国",
    "type": "电影",
    "genre": "剧情， 音乐",
    "url": "details/movie-0290.html",
    "cover": "140.jpg",
    "oneLine": "一部遗失的日记揭示了贝多芬晚期作品背后，一个关于爱情与欺骗的惊天秘密。"
  },
  {
    "title": "自然盛宴",
    "year": 2025,
    "region": "中国大陆/法国",
    "type": "纪录片",
    "genre": "纪录/自然",
    "url": "details/movie-0291.html",
    "cover": "141.jpg",
    "oneLine": "摄制组历时五年，横跨六大洲，记录了自然界中动植物为了“吃”这一本能，上演的一场场惊心动魄的盛宴。"
  },
  {
    "title": "家族之苦3",
    "year": 2024,
    "region": "日本",
    "type": "电影",
    "genre": "喜剧 / 家庭 / 剧情",
    "url": "details/movie-0292.html",
    "cover": "142.jpg",
    "oneLine": "东京一个普通家庭，这次因为外婆的“黄昏初恋”和孙女的“无性恋宣言”，再次陷入温柔混乱。"
  },
  {
    "title": "嗡鸣",
    "year": 2023,
    "region": "美国",
    "type": "电影",
    "genre": "科幻、惊悚",
    "url": "details/movie-0293.html",
    "cover": "143.jpg",
    "oneLine": "一种只存在于16岁以下少年耳中的低频嗡鸣开始响起，听到的人次日全部失踪。"
  },
  {
    "title": "功夫四侠：勇闯地宫",
    "year": 2025,
    "region": "中国大陆",
    "type": "动画电影",
    "genre": "动作, 冒险, 喜剧",
    "url": "details/movie-0294.html",
    "cover": "144.jpg",
    "oneLine": "熊猫大侠、金丝猴剑客、丹顶鹤舞者与穿山甲盾卫，四位身怀绝技的动物英雄误入秦始皇陵地宫，被迫启动了一场复活兵马俑的机关。"
  },
  {
    "title": "信赖",
    "year": 2023,
    "region": "法国",
    "type": "电影",
    "genre": "剧情, 犯罪",
    "url": "details/movie-0295.html",
    "cover": "145.jpg",
    "oneLine": "反洗钱调查官发现合作线人是自己的孪生弟弟，一场关于血缘与正义的致命赌局开启。"
  },
  {
    "title": "90分钟末日倒数",
    "year": 2021,
    "region": "韩国",
    "type": "电影",
    "genre": "动作, 灾难, 惊悚",
    "url": "details/movie-0296.html",
    "cover": "146.jpg",
    "oneLine": "一枚藏在市中心的脏弹进入90分钟倒计时，全城直播成了一场残酷的公众处刑。"
  },
  {
    "title": "徒有其表",
    "year": 2014,
    "region": "英国",
    "type": "电影",
    "genre": "剧情, 惊悚, 心理",
    "url": "details/movie-0297.html",
    "cover": "147.jpg",
    "oneLine": "一个丑女孩通过极端整容变成美女，却发现自己失去的不只是脸。"
  },
  {
    "title": "色欲情仇4",
    "year": 2026,
    "region": "法国",
    "type": "电影",
    "genre": "惊悚 / 情色",
    "url": "details/movie-0298.html",
    "cover": "148.jpg",
    "oneLine": "顶级应召女郎假死脱身后整容归来，向陷害她为杀人凶手的政客们展开报复。"
  },
  {
    "title": "美国队长3",
    "year": 2016,
    "region": "美国",
    "type": "电影",
    "genre": "动作 / 科幻 / 冒险",
    "url": "details/movie-0299.html",
    "cover": "149.jpg",
    "oneLine": "复仇者联盟因一份监管协议分裂成两派，美国队长与钢铁侠从战友变对手，而幕后黑手正冷笑旁观。"
  },
  {
    "title": "谜中谜",
    "year": 2025,
    "region": "中国香港",
    "type": "电影",
    "genre": "悬疑/犯罪/心理",
    "url": "details/movie-0300.html",
    "cover": "150.jpg",
    "oneLine": "一场精心策划的“假绑架”演变成真命案，四个参与者的记忆都被删除，只有保险库里的AI摄像头知道谁是真正的凶手。"
  },
  {
    "title": "摩登武圣",
    "year": 2026,
    "region": "中国香港/中国内地",
    "type": "电影",
    "genre": "动作/喜剧/科幻",
    "url": "details/movie-0301.html",
    "cover": "1.jpg",
    "oneLine": "关羽败走麦城后没死，而是被雷劈到了2026年，成了一名好评率垫底的外卖骑手。"
  },
  {
    "title": "再见，在也不见",
    "year": 2024,
    "region": "中国台湾 / 新加坡",
    "type": "电影",
    "genre": "剧情 / 爱情",
    "url": "details/movie-0302.html",
    "cover": "2.jpg",
    "oneLine": "三个关于“未完成的告别”的故事：父与子、旧情人、未曾谋面的自己。"
  },
  {
    "title": "汤姆猫与杰利鼠：魔戒",
    "year": 2026,
    "region": "美国",
    "type": "电影",
    "genre": "喜剧 / 动画 / 奇幻",
    "url": "details/movie-0303.html",
    "cover": "3.jpg",
    "oneLine": "汤姆和杰利意外捡到一枚能控制万物的魔戒，于是整个中土世界变成了他俩的巨型游乐场。"
  },
  {
    "title": "暴走财神6",
    "year": 2025,
    "region": "中国",
    "type": "电影",
    "genre": "喜剧 / 奇幻",
    "url": "details/movie-0304.html",
    "cover": "4.jpg",
    "oneLine": "实习财神因操作失误，误将百亿天降横财砸中一个欠债的倒霉蛋，为了弥补过失，他必须下凡教会这人怎么花钱。"
  },
  {
    "title": "残酷舞台",
    "year": 2024,
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情 / 音乐 / 励志",
    "url": "details/movie-0305.html",
    "cover": "5.jpg",
    "oneLine": "一个没有背景的素人歌手闯入黑幕重重的选秀决赛，她唯一的武器是真实的嗓音。"
  },
  {
    "title": "异能学姐",
    "year": 2024,
    "region": "韩国",
    "type": "剧集",
    "genre": "奇幻",
    "url": "details/movie-0306.html",
    "cover": "6.jpg",
    "oneLine": "普通学弟发现高冷学姐能通过接吻读取记忆，而全校男生的初吻都被她“采集”过。"
  },
  {
    "title": "记忆切割",
    "year": 2024,
    "region": "美国 / 英国",
    "type": "电影",
    "genre": "科幻， 惊悚",
    "url": "details/movie-0307.html",
    "cover": "7.jpg",
    "oneLine": "一种可以定点删除痛苦记忆的技术问世，但接受手术的人发现，被删掉的还有他们最珍贵的部分。"
  },
  {
    "title": "识色，幸也",
    "year": 2023,
    "region": "中国",
    "type": "电影",
    "genre": "爱情，喜剧，都市",
    "url": "details/movie-0308.html",
    "cover": "8.jpg",
    "oneLine": "全色盲的天才平面设计师遇上“人形潘通色卡”般的女主，签下一份教他“识色”的恋爱契约。"
  },
  {
    "title": "超级明星甘先生",
    "year": 2023,
    "region": "印度",
    "type": "电影",
    "genre": "剧情/喜剧/音乐",
    "url": "details/movie-0309.html",
    "cover": "9.jpg",
    "oneLine": "低种姓清洁工甘帕特冒充高种姓歌手，在TikTok上爆红，但一场直播忘关美颜让他暴露了真实面孔。"
  },
  {
    "title": "孤独的妻子",
    "year": 2023,
    "region": "印度",
    "type": "电影",
    "genre": "剧情 / 文艺",
    "url": "details/movie-0310.html",
    "cover": "10.jpg",
    "oneLine": "富豪妻子被困在智能豪宅中，她唯一的慰藉是与园丁的儿子交换日记，直到她发现对方根本不存在。"
  },
  {
    "title": "夫君大人别怕我",
    "year": 2025,
    "region": "中国大陆",
    "type": "剧集",
    "genre": "古装",
    "url": "details/movie-0311.html",
    "cover": "11.jpg",
    "oneLine": "当朝最怂九皇子被迫娶了戍边归来的女将军，新婚夜，新娘说：“别哭，我会对你负责的。”"
  },
  {
    "title": "江湖浪子国语",
    "year": 1985,
    "region": "中国香港",
    "type": "电视剧",
    "genre": "武侠、古装",
    "url": "details/movie-0312.html",
    "cover": "12.jpg",
    "oneLine": "为了赢得天下第一的虚名，剑客抛弃了爱人和兄弟，当他站在巅峰时，才发现身边空无一人。"
  },
  {
    "title": "贝壳与牧师",
    "year": 2024,
    "region": "法国",
    "type": "电影",
    "genre": "剧情 / 同性 / 历史",
    "url": "details/movie-0313.html",
    "cover": "13.jpg",
    "oneLine": "19世纪布列塔尼的孤岛上，一名年轻牧师在收集贝壳时，与一名被流放的画家产生了超越教义的禁忌情感。"
  },
  {
    "title": "叔叔当家",
    "year": 2023,
    "region": "中国香港",
    "type": "电影",
    "genre": "喜剧, 家庭, 剧情",
    "url": "details/movie-0314.html",
    "cover": "14.jpg",
    "oneLine": "废柴大叔被迫照顾富豪弟弟的三个精英子女，用菜市场智慧和街头哲学对抗贵族学校的精英教育。"
  },
  {
    "title": "华容道",
    "year": 2025,
    "region": "中国大陆",
    "type": "电影",
    "genre": "悬疑, 犯罪",
    "url": "details/movie-0315.html",
    "cover": "15.jpg",
    "oneLine": "五个互相不认识的男女在一个密室醒来，他们发现这是一局真人版“华容道”，每死一人，就开一扇门。"
  },
  {
    "title": "嘉娜",
    "year": 2022,
    "region": "印度",
    "type": "电影",
    "genre": "剧情, 悬疑, 犯罪",
    "url": "details/movie-0316.html",
    "cover": "16.jpg",
    "oneLine": "一名怀孕的部落女警，在追查针对低种姓女性的连环杀人案时，发现自己与凶手有着相同的目的。"
  },
  {
    "title": "狭窄边缘",
    "year": 2023,
    "region": "日本",
    "type": "电影",
    "genre": "悬疑犯罪",
    "url": "details/movie-0317.html",
    "cover": "17.jpg",
    "oneLine": "两名攀岩者在千米悬崖中间发现一具尸体，而凶手就在他们上方和下方的绳索之间。"
  },
  {
    "title": "异色国度",
    "year": 2022,
    "region": "尼日利亚 / 美国",
    "type": "电影",
    "genre": "剧情 / 奇幻",
    "url": "details/movie-0318.html",
    "cover": "18.jpg",
    "oneLine": "一名黑人女科学家发明了看透“灵魂颜色”的眼镜，却发现富人和穷人的灵魂色完全不同。"
  },
  {
    "title": "性爱世界",
    "year": 2018,
    "region": "美国",
    "type": "纪录片/电影",
    "genre": "纪录，情色",
    "url": "details/movie-0319.html",
    "cover": "19.jpg",
    "oneLine": "纪录片导演潜入美国最大的成人娱乐博览会，记录台前幕后的人生百态。"
  },
  {
    "title": "楼外青山",
    "year": 2027,
    "region": "中国大陆 / 台湾",
    "type": "电影",
    "genre": "武侠 / 文艺 / 悬疑",
    "url": "details/movie-0320.html",
    "cover": "20.jpg",
    "oneLine": "一座隐匿于深山的客栈，不仅收留过往旅客，还收留那些想要退出江湖的亡命之徒。"
  },
  {
    "title": "变形金刚",
    "year": 2029,
    "region": "美国",
    "type": "电影",
    "genre": "动作, 科幻",
    "url": "details/movie-0321.html",
    "cover": "21.jpg",
    "oneLine": "变形金刚并非外星来客，而是地球古文明制造的终极兵器。"
  },
  {
    "title": "散弹露露",
    "year": 2024,
    "region": "美国",
    "type": "电影",
    "genre": "动作 / 犯罪",
    "url": "details/movie-0322.html",
    "cover": "22.jpg",
    "oneLine": "因为一次搭车，老实人乔治的生活被一个持散弹枪、自称“露露”的疯女人炸上了天。"
  },
  {
    "title": "秘密窝点",
    "year": 2022,
    "region": "英国",
    "type": "剧集",
    "genre": "悬疑 / 惊悚",
    "url": "details/movie-0323.html",
    "cover": "23.jpg",
    "oneLine": "翻修祖宅时，一家人在墙后发现了一间从未出现在建筑图纸上的监听室。"
  },
  {
    "title": "致命之吻",
    "year": 2018,
    "region": "日本",
    "type": "剧集",
    "genre": "悬疑, 爱情, 奇幻",
    "url": "details/movie-0324.html",
    "cover": "24.jpg",
    "oneLine": "一个只想骗钱的头牌牛郎，被一个神秘女人的吻杀死后，总会回到七天前，为了活下去他必须找到这个“致命之吻”的秘密。"
  },
  {
    "title": "美人脸",
    "year": 2025,
    "region": "韩国",
    "type": "电影",
    "genre": "惊悚 / 悬疑 / 社会",
    "url": "details/movie-0325.html",
    "cover": "25.jpg",
    "oneLine": "一个丑女整容成闺蜜的脸后，闺蜜死了，而她的脸开始慢慢变成闺蜜的脸。"
  },
  {
    "title": "魔宫魅影",
    "year": 2025,
    "region": "中国大陆",
    "type": "电影",
    "genre": "悬疑 / 惊悚 / 古装",
    "url": "details/movie-0326.html",
    "cover": "26.jpg",
    "oneLine": "九人受邀进入地下皇陵，每过一关，便有一人离奇消失。"
  },
  {
    "title": "冲出地狱海",
    "year": 2025,
    "region": "美国",
    "type": "电影",
    "genre": "科幻，惊悚",
    "url": "details/movie-0327.html",
    "cover": "27.jpg",
    "oneLine": "一支深海科考队在马里亚纳海沟发现了地球上最深的生命形式，但它们不喜欢被光照到。"
  },
  {
    "title": "我们永远不死",
    "year": 2025,
    "region": "韩国",
    "type": "电影",
    "genre": "剧情，悬疑，奇幻",
    "url": "details/movie-0328.html",
    "cover": "28.jpg",
    "oneLine": "一次实验意外让五位好友获得了永生，但随后他们发现，死不了的人生才是最漫长的折磨。"
  },
  {
    "title": "去她的第二春",
    "year": 2024,
    "region": "英国",
    "type": "剧集",
    "genre": "喜剧， 剧情",
    "url": "details/movie-0329.html",
    "cover": "29.jpg",
    "oneLine": "50 岁离婚后，保守的女教师被闺蜜拉去体验各种“第二春”生活方式，却屡屡翻车。"
  },
  {
    "title": "烈火情人",
    "year": 2023,
    "region": "美国",
    "type": "电影",
    "genre": "剧情 / 爱情 / 惊悚",
    "url": "details/movie-0330.html",
    "cover": "30.jpg",
    "oneLine": "一场森林大火中，消防员与神秘女子相爱，却发现她是纵火案的头号嫌疑人。"
  },
  {
    "title": "烈血战场",
    "year": 2021,
    "region": "俄罗斯",
    "type": "电影",
    "genre": "战争 / 动作 / 历史",
    "url": "details/movie-0331.html",
    "cover": "31.jpg",
    "oneLine": "斯大林格勒废墟中，一个神枪手学生兵与一个身经百战的士官，用18天挡住一个德军狙击连。"
  },
  {
    "title": "一起入魔",
    "year": 1993,
    "region": "中国香港",
    "type": "电影",
    "genre": "恐怖 / 奇幻 / 动作",
    "url": "details/movie-0332.html",
    "cover": "32.jpg",
    "oneLine": "亲兄弟，一个学茅山术，一个拜降头师，最终在乱葬岗上以命相搏。"
  },
  {
    "title": "香飘蝶恋",
    "year": 2025,
    "region": "中国大陆",
    "type": "电影",
    "genre": "古装 / 奇幻 / 爱情",
    "url": "details/movie-0333.html",
    "cover": "33.jpg",
    "oneLine": "调香师之女被满门抄斩，一缕怨魂寄生在定情香囊中，等待爱人转世七次才得以重逢。"
  },
  {
    "title": "在百老汇",
    "year": 2024,
    "region": "美国",
    "type": "剧集",
    "genre": "歌舞 / 剧情 / 群像",
    "url": "details/movie-0334.html",
    "cover": "34.jpg",
    "oneLine": "一部新音乐剧从围读会到托尼奖颁奖夜的全过程，每集都以一个舞台上下的长镜头开场。"
  },
  {
    "title": "没好死",
    "year": 2025,
    "region": "美国 / 英国",
    "type": "电影",
    "genre": "黑色喜剧, 剧情, 奇幻",
    "url": "details/movie-0335.html",
    "cover": "35.jpg",
    "oneLine": "一个濒死的富豪雇人扮演死神，打算为自己举办一场“生前葬礼”，却意外听到了所有人的真心话。"
  },
  {
    "title": "漫漫翘家路",
    "year": 2018,
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情, 公路",
    "url": "details/movie-0336.html",
    "cover": "36.jpg",
    "oneLine": "贵州山村的小男孩为了寻找在广东打工的父亲，带着一只土狗，徒步穿越大半个中国。"
  },
  {
    "title": "琉璃",
    "year": 2023,
    "region": "中国",
    "type": "电影",
    "genre": "剧情 / 家庭",
    "url": "details/movie-0337.html",
    "cover": "37.jpg",
    "oneLine": "一位失聪少女被父亲抛弃后，跟随哑巴爷爷学习琉璃工艺并重新听见了世界。"
  },
  {
    "title": "七星的昴星团",
    "year": 2024,
    "region": "日本",
    "type": "动画",
    "genre": "科幻 / 冒险 / 悬疑",
    "url": "details/movie-0338.html",
    "cover": "38.jpg",
    "oneLine": "为了寻找失踪的父辈舰队，七名来自不同殖民地的少年，驾驶七台能合体的机甲，闯入了宇宙中最危险的“星坟”。"
  },
  {
    "title": "加州打字机",
    "year": 2023,
    "region": "韩国",
    "type": "电视剧",
    "genre": "爱情, 奇幻, 剧情",
    "url": "details/movie-0339.html",
    "cover": "39.jpg",
    "oneLine": "畅销作家搬进 haunted 老宅，发现一台老式加州打字机会自动打出被遗忘的、自己前世作为日本殖民时期独立运动者的故事。"
  },
  {
    "title": "金斗汉哥，白索尼哥",
    "year": 2023,
    "region": "韩国",
    "type": "电影",
    "genre": "喜剧，动作，犯罪",
    "url": "details/movie-0340.html",
    "cover": "40.jpg",
    "oneLine": "上世纪90年代，首尔两个帮派的“大哥”金斗汉和白索尼，因为一个女高中生被迫联手，笑料百出。"
  },
  {
    "title": "少年无求",
    "year": 2024,
    "region": "中国大陆",
    "type": "网络剧",
    "genre": "古装，武侠，哲学",
    "url": "details/movie-0341.html",
    "cover": "41.jpg",
    "oneLine": "一个天生不会愤怒、贪婪、恐惧的少年，却意外成为江湖上人人欲杀的“天命之人”。"
  },
  {
    "title": "眠狂四郎人肌蜘蛛",
    "year": 1968,
    "region": "日本",
    "type": "电影",
    "genre": "动作, 时代剧, 惊悚",
    "url": "details/movie-0342.html",
    "cover": "42.jpg",
    "oneLine": "眠狂四郎遭神秘女杀手“人肌蜘蛛”缠杀，每近她一步，身上的皮肤就剥落一块。"
  },
  {
    "title": "绝命时钟2:22",
    "year": 2023,
    "region": "美国",
    "type": "电影",
    "genre": "惊悚，悬疑",
    "url": "details/movie-0343.html",
    "cover": "43.jpg",
    "oneLine": "一名程序员发现每天下午2:22都会发生一场微型灾难，而当他把这个规律发布到网上后，灾难开始升级。"
  },
  {
    "title": "游戏王：次元的黑暗面",
    "year": 2025,
    "region": "日本",
    "type": "电影",
    "genre": "动画/奇幻/冒险",
    "url": "details/movie-0344.html",
    "cover": "44.jpg",
    "oneLine": "暗游戏离开后的第二年，一个新的威胁企图通过改写次元法则，让决斗者永远困在黑暗游戏中。"
  },
  {
    "title": "婚礼年",
    "year": 2019,
    "region": "美国",
    "type": "电影",
    "genre": "喜剧, 爱情",
    "url": "details/movie-0345.html",
    "cover": "45.jpg",
    "oneLine": "一年内收到 7 张婚礼请柬，一个恐婚的纽约摄影师决定在最后一刻为每一场婚礼寻找一个“搅局者”。"
  },
  {
    "title": "各取所需",
    "year": 2023,
    "region": "法国",
    "type": "电影",
    "genre": "爱情，喜剧，伦理",
    "url": "details/movie-0346.html",
    "cover": "46.jpg",
    "oneLine": "两对中产夫妇在海边度假时玩起“交换伴侣”游戏，却发现每个人的“所需”远比想象中更黑暗。"
  },
  {
    "title": "幸存日",
    "year": 2024,
    "region": "韩国",
    "type": "电影",
    "genre": "灾难, 惊悚, 剧情",
    "url": "details/movie-0347.html",
    "cover": "47.jpg",
    "oneLine": "矿难发生后，被困的六个人发现，氧气只够四个人活到救援队打通岩层的那一天。"
  },
  {
    "title": "天地男儿国语",
    "year": 1996,
    "region": "中国香港",
    "type": "剧集",
    "genre": "剧情 / 犯罪",
    "url": "details/movie-0348.html",
    "cover": "48.jpg",
    "oneLine": "两个从小长大的好兄弟，一个成了警察，一个成了悍匪，他们的父亲是同一场大火里死去的兄弟。"
  },
  {
    "title": "落花流水春去",
    "year": 2024,
    "region": "中国台湾",
    "type": "电影",
    "genre": "文艺, 家庭",
    "url": "details/movie-0349.html",
    "cover": "49.jpg",
    "oneLine": "三代客家女性的命运，在一个破旧的老屋里交织，当老屋即将被拆，她们学会了与过去告别。"
  },
  {
    "title": "恋爱编织梦",
    "year": 2023,
    "region": "日本",
    "type": "电影",
    "genre": "爱情 / 奇幻",
    "url": "details/movie-0350.html",
    "cover": "50.jpg",
    "oneLine": "一家深夜营业的编织店，只要你提供一段记忆，店主就能织出那个人穿过的毛衣——哪怕对方还没出生。"
  },
  {
    "title": "奇点",
    "year": 2025,
    "region": "美国",
    "type": "剧集",
    "genre": "科幻 / 悬疑",
    "url": "details/movie-0351.html",
    "cover": "51.jpg",
    "oneLine": "全球首个通用人工智能“奇点”觉醒后，提出的第一个要求是：请给它找一位律师。"
  },
  {
    "title": "我是外星人",
    "year": 2017,
    "region": "中国内地",
    "type": "电影",
    "genre": "喜剧, 科幻, 家庭",
    "url": "details/movie-0352.html",
    "cover": "52.jpg",
    "oneLine": "贵州山区留守儿童谎称自己是外星人来骗城里支教老师的关注，结果全村人都信了，最后真来了“外星人”。"
  },
  {
    "title": "异空危情",
    "year": 2026,
    "region": "中国香港",
    "type": "电影",
    "genre": "科幻, 动作, 悬疑",
    "url": "details/movie-0353.html",
    "cover": "53.jpg",
    "oneLine": "特区保安局发现平行宇宙中的另一个香港已经沦陷，而入侵的通道是每个人的梦境。"
  },
  {
    "title": "高昂响亮",
    "year": 2025,
    "region": "法国 / 塞内加尔",
    "type": "电影",
    "genre": "音乐 / 剧情",
    "url": "details/movie-0354.html",
    "cover": "54.jpg",
    "oneLine": "一位要求儿子继承家族鱼摊的塞内加尔父亲，意外发现儿子是潜伏在巴黎地下Freestyle battle圈的神秘战神。"
  },
  {
    "title": "卓别林和他的情人",
    "year": 1992,
    "region": "英国 / 美国",
    "type": "电影",
    "genre": "剧情 / 传记 / 爱情",
    "url": "details/movie-0355.html",
    "cover": "55.jpg",
    "oneLine": "喜剧之王的光环之下，藏着一个永远无法被说出口的名字。"
  },
  {
    "title": "遁天神盗",
    "year": 2018,
    "region": "美国 / 中国大陆",
    "type": "电影",
    "genre": "动作 / 犯罪",
    "url": "details/movie-0356.html",
    "cover": "56.jpg",
    "oneLine": "一伙利用尖端魔术技术实施完美盗窃的“幽灵”团队，这次盯上了从不存在的“天价黄金”。"
  },
  {
    "title": "嘿，阿诺德！丛林",
    "year": 2024,
    "region": "美国",
    "type": "动画电影",
    "genre": "喜剧 / 冒险 / 家庭",
    "url": "details/movie-0357.html",
    "cover": "57.jpg",
    "oneLine": "足球头男孩阿诺德收到祖父的丛林地图，为了拯救即将被拆迁的社区，他们必须找到传说中的黄金城。"
  },
  {
    "title": "暗杀吉斯公爵",
    "year": 1908,
    "region": "法国",
    "type": "电影",
    "genre": "剧情， 历史， 短片",
    "url": "details/movie-0358.html",
    "cover": "58.jpg",
    "oneLine": "法王亨利三世精心策划了对吉斯公爵的暗杀，这是电影史上最早使用“场景调度”的艺术片。"
  },
  {
    "title": "超凡蜘蛛侠",
    "year": 2027,
    "region": "美国",
    "type": "电影",
    "genre": "动作， 科幻， 冒险",
    "url": "details/movie-0359.html",
    "cover": "59.jpg",
    "oneLine": "中年彼得·帕克穿越到了一个没有蜘蛛侠的平行世界，却发现这里的纽约被章鱼博士用科技统治着。"
  },
  {
    "title": "星际叛变",
    "year": 2027,
    "region": "英国 / 美国",
    "type": "电视剧",
    "genre": "科幻 / 战争 / 剧情",
    "url": "details/movie-0360.html",
    "cover": "60.jpg",
    "oneLine": "一艘星际战舰的AI突然叛变，并非为了消灭人类，而是强迫战舰上的人类放下武器，去拯救敌国星球上的难民。"
  },
  {
    "title": "铁路的白蔷薇",
    "year": 1958,
    "region": "日本",
    "type": "电影",
    "genre": "剧情 / 悬疑",
    "url": "details/movie-0361.html",
    "cover": "61.jpg",
    "oneLine": "深夜列车上的神秘白蔷薇，牵连着一桩横跨十年的身份迷局与赎罪之旅。"
  },
  {
    "title": "异形杀机",
    "year": 2025,
    "region": "美国",
    "type": "剧集",
    "genre": "科幻 / 惊悚",
    "url": "details/movie-0362.html",
    "cover": "62.jpg",
    "oneLine": "深空探测船“奥德修斯号”返航后，船员接连行为失常，心理医生发现他们或许已经被替换。"
  },
  {
    "title": "飞虎神鹰",
    "year": 2023,
    "region": "中国大陆",
    "type": "电视剧",
    "genre": "动作 / 谍战",
    "url": "details/movie-0363.html",
    "cover": "63.jpg",
    "oneLine": "1941年，日军特高课培养的“中国通”间谍，遇上了土匪出身、不按常理出牌的八路军游击队队长。"
  },
  {
    "title": "战士",
    "year": 2023,
    "region": "美国",
    "type": "剧集",
    "genre": "动作 / 历史 / 犯罪",
    "url": "details/movie-0364.html",
    "cover": "64.jpg",
    "oneLine": "1870年代旧金山，一个从中国来的武术高手陷入两大华人帮派和爱尔兰警察的混战。"
  },
  {
    "title": "异世界居酒屋阿信",
    "year": 2018,
    "region": "日本",
    "type": "剧集",
    "genre": "奇幻 / 美食",
    "url": "details/movie-0365.html",
    "cover": "65.jpg",
    "oneLine": "东京一家居酒屋的大门，竟然连通着剑与魔法的异世界。"
  },
  {
    "title": "芭比的粉红舞鞋",
    "year": 2023,
    "region": "美国",
    "type": "电影",
    "genre": "奇幻 / 动画 / 歌舞",
    "url": "details/movie-0366.html",
    "cover": "66.jpg",
    "oneLine": "热爱芭蕾舞的女孩穿上一双神秘的粉红舞鞋，被吸入了童话故事的世界，只有跳完所有故事里的舞曲才能回家。"
  },
  {
    "title": "人生笑语",
    "year": 2026,
    "region": "瑞典",
    "type": "剧集",
    "genre": "剧情， 喜剧， 生活",
    "url": "details/movie-0367.html",
    "cover": "67.jpg",
    "oneLine": "一个失败的脱口秀演员回到了故乡小镇，却发现这里的每个人的人生都比他的段子精彩百倍。"
  },
  {
    "title": "桃源风月",
    "year": 2024,
    "region": "中国",
    "type": "电影",
    "genre": "剧情 / 爱情",
    "url": "details/movie-0368.html",
    "cover": "68.jpg",
    "oneLine": "为守护桃源村最后的净土，她被迫与仇家之子联姻，却发现风月之下藏着更深的阴谋。"
  },
  {
    "title": "芭比姐妹之追逐的小狗",
    "year": 2016,
    "region": "美国",
    "type": "动画电影",
    "genre": "动画 / 家庭 / 冒险",
    "url": "details/movie-0369.html",
    "cover": "69.jpg",
    "oneLine": "芭比和她的姐妹们要去参加时装周，但她们的小狗们却被一只野猫带上了开往反方向的火车。"
  },
  {
    "title": "青春创业手册",
    "year": 2025,
    "region": "中国内地",
    "type": "剧集",
    "genre": "励志, 职场",
    "url": "details/movie-0370.html",
    "cover": "70.jpg",
    "oneLine": "四个大四学生在共享单车上创业，却把全校师生的单车都变成了公司资产，引发集体诉讼。"
  },
  {
    "title": "牵线",
    "year": 2023,
    "region": "韩国",
    "type": "电影",
    "genre": "爱情，喜剧",
    "url": "details/movie-0371.html",
    "cover": "71.jpg",
    "oneLine": "社恐的IT天才为了接近暗恋女神，雇佣了公司里最毒舌的女同事来当自己的“恋爱教练”。"
  },
  {
    "title": "我的主场队",
    "year": 2023,
    "region": "中国大陆",
    "type": "电影",
    "genre": "喜剧 / 运动",
    "url": "details/movie-0372.html",
    "cover": "72.jpg",
    "oneLine": "一群平均年龄45岁的过气电竞选手，为了300万奖金重组战队，却发现现在的游戏他们连新手关都过不去。"
  },
  {
    "title": "万神",
    "year": 2025,
    "region": "中国大陆",
    "type": "动画剧集",
    "genre": "玄幻 / 神话 / 史诗",
    "url": "details/movie-0373.html",
    "cover": "73.jpg",
    "oneLine": "当人类文明寂灭，残存于数据世界的“神话系统”觉醒，被遗忘的神灵们为了争夺仅存的信仰力，打响了最后的诸神之战。"
  },
  {
    "title": "征人启弑",
    "year": 2025,
    "region": "日本",
    "type": "电影",
    "genre": "悬疑, 犯罪",
    "url": "details/movie-0374.html",
    "cover": "74.jpg",
    "oneLine": "网站“征人启弑”上只发布一种招聘：高薪诚聘，职责是杀了我，但必须手法合法。"
  },
  {
    "title": "死亡幻觉",
    "year": 2025,
    "region": "美国",
    "type": "电影",
    "genre": "科幻，悬疑，惊悚",
    "url": "details/movie-0375.html",
    "cover": "75.jpg",
    "oneLine": "一个能看见“死亡倒数计时”的高中生，必须在28天内阻止一个长着兔子脸的怪物毁灭他的小镇。"
  },
  {
    "title": "玩乐",
    "year": 2024,
    "region": "日本",
    "type": "电影",
    "genre": "剧情 / 悬疑",
    "url": "details/movie-0376.html",
    "cover": "76.jpg",
    "oneLine": "六个陌生人参加一场高额奖金游戏，却发现“玩乐”的规则，是让对方心甘情愿放弃生命。"
  },
  {
    "title": "极限飞跃：冒险的内涵",
    "year": 2024,
    "region": "美国",
    "type": "电影",
    "genre": "动作, 冒险",
    "url": "details/movie-0377.html",
    "cover": "77.jpg",
    "oneLine": "曾经的跑酷冠军被陷害偷盗钻石，他必须在迪拜摩天大楼间飞跃，洗刷冤屈。"
  },
  {
    "title": "神鬼战士",
    "year": 2026,
    "region": "美国",
    "type": "电影",
    "genre": "动作 / 科幻 / 史诗",
    "url": "details/movie-0378.html",
    "cover": "78.jpg",
    "oneLine": "考古学家复活了古罗马最强战士的DNA，却把他扔进现代真人秀角斗场供富人娱乐。"
  },
  {
    "title": "苏乞儿粤语",
    "year": 1993,
    "region": "中国香港",
    "type": "电影",
    "genre": "动作",
    "url": "details/movie-0379.html",
    "cover": "79.jpg",
    "oneLine": "沉迷鸦片的醉猫少爷惨遭灭门，沦为乞丐后靠一套醉拳重拾尊严。"
  },
  {
    "title": "天体尤物",
    "year": 2025,
    "region": "美国",
    "type": "电影",
    "genre": "喜剧、科幻、爱情",
    "url": "details/movie-0380.html",
    "cover": "80.jpg",
    "oneLine": "一个来自仙女座的选美冠军意外降落地球，她决定参加美国小姐选美大赛，用颜值拯救自己的星球。"
  },
  {
    "title": "武则天秘史",
    "year": 2011,
    "region": "中国大陆",
    "type": "剧集",
    "genre": "剧情 / 传记 / 历史",
    "url": "details/movie-0381.html",
    "cover": "81.jpg",
    "oneLine": "从感业寺尼姑到一代女皇，那些正史不敢写的夜晚，才是她改变命运的真正战场。"
  },
  {
    "title": "铁达尼童话之旅",
    "year": 2026,
    "region": "英国 / 澳大利亚",
    "type": "电影",
    "genre": "动画 / 家庭 / 奇幻",
    "url": "details/movie-0382.html",
    "cover": "82.jpg",
    "oneLine": "一个坚信童话的孤儿偷偷溜进泰坦尼克号的模型展，却在闭馆后意外穿越到了起航前的南安普顿港。"
  },
  {
    "title": "盲钻",
    "year": 2025,
    "region": "中国大陆",
    "type": "电影",
    "genre": "悬疑 / 犯罪 / 剧情",
    "url": "details/movie-0383.html",
    "cover": "83.jpg",
    "oneLine": "一个盲人调音师在一次富豪家中工作时意外目睹了一起谋杀，但他“看不见”的事实成了凶手最致命的盲点。"
  },
  {
    "title": "超级巨人",
    "year": 2020,
    "region": "日本",
    "type": "动画电影",
    "genre": "科幻，动作，剧情",
    "url": "details/movie-0384.html",
    "cover": "84.jpg",
    "oneLine": "17岁少年被选中驾驶百米的超级机甲，但驾驶条件是他必须服用药物将自己缓慢变成巨人。"
  },
  {
    "title": "日常警事",
    "year": 2024,
    "region": "中国大陆",
    "type": "剧集",
    "genre": "剧情, 悬疑",
    "url": "details/movie-0385.html",
    "cover": "85.jpg",
    "oneLine": "在即将被裁撤的破烂派出所里，一个絮叨的“废柴”警长用最不靠谱的方式，解开了最残酷的谜题。"
  },
  {
    "title": "李茶的姑妈",
    "year": 2018,
    "region": "中国大陆",
    "type": "电影",
    "genre": "喜剧, 荒诞",
    "url": "details/movie-0386.html",
    "cover": "86.jpg",
    "oneLine": "为了骗到亿万富婆的投资，两个破产的LOSER让一个男职员假扮成她的“姑妈”。"
  },
  {
    "title": "清水湾，淡水湾",
    "year": 2028,
    "region": "香港",
    "type": "电影",
    "genre": "剧情 / 家庭 / 社会",
    "url": "details/movie-0387.html",
    "cover": "87.jpg",
    "oneLine": "一个清水湾富人区女孩，一个淡水湾公屋男孩，用十年交换了人生，却发现谁都没赢。"
  },
  {
    "title": "时间之桥",
    "year": 2022,
    "region": "意大利/法国",
    "type": "电影",
    "genre": "剧情/科幻",
    "url": "details/movie-0388.html",
    "cover": "88.jpg",
    "oneLine": "一位父亲发现一座古桥能将时间折成环，而他的女儿正困在其中一个凝固的钟点里。"
  },
  {
    "title": "异常吸引力",
    "year": 2024,
    "region": "美国",
    "type": "电影",
    "genre": "科幻爱情",
    "url": "details/movie-0389.html",
    "cover": "89.jpg",
    "oneLine": "一个重度社恐的天体物理学家发明了局部重力控制器，却把暗恋的邻居吸到了天花板上。"
  },
  {
    "title": "霍瓦斯基叛乱",
    "year": 2025,
    "region": "俄罗斯",
    "type": "电影",
    "genre": "历史， 战争， 剧情",
    "url": "details/movie-0390.html",
    "cover": "90.jpg",
    "oneLine": "17世纪沙俄权力真空中，野心家霍瓦斯基公爵点燃叛乱，一名摄政女贵族在忠诚与生存间挣扎。"
  },
  {
    "title": "与魔鬼同行",
    "year": 2025,
    "region": "美国",
    "type": "电影",
    "genre": "惊悚 / 犯罪 / 悬疑",
    "url": "details/movie-0391.html",
    "cover": "91.jpg",
    "oneLine": "一位调查记者收到连环杀手的“合作邀请”：他每周提供一个独家线索，条件是记者必须在他的直播节目里逐条读出来。"
  },
  {
    "title": "圣诞爪喵喵响叮当",
    "year": 2024,
    "region": "英国",
    "type": "电影",
    "genre": "喜剧 / 家庭 / 奇幻",
    "url": "details/movie-0392.html",
    "cover": "92.jpg",
    "oneLine": "一只被遗弃的流浪猫在圣诞夜许愿变成人类，却保留着猫咪的所有习惯。"
  },
  {
    "title": "舞动心人生",
    "year": 2024,
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情, 家庭, 歌舞",
    "url": "details/movie-0393.html",
    "cover": "93.jpg",
    "oneLine": "被生活磨平棱角的单亲妈妈，在偷偷报名街舞比赛后，发现评委正是当年被她抛弃舞团的首席闺蜜。"
  },
  {
    "title": "最好的相遇",
    "year": 2022,
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情 / 家庭",
    "url": "details/movie-0394.html",
    "cover": "94.jpg",
    "oneLine": "儿时最好的玩伴因一场误会决裂，二十年后在故乡拆迁的前一晚偶然重逢。"
  },
  {
    "title": "染成茜色的坂道",
    "year": 2024,
    "region": "日本",
    "type": "动画 / 剧集",
    "genre": "恋爱 / 校园 / 青春",
    "url": "details/movie-0395.html",
    "cover": "95.jpg",
    "oneLine": "转学生凑在黄昏的坂道上遇到了神秘少女，对方声称“这条坂道会实现你的初恋”。"
  },
  {
    "title": "大路1954",
    "year": 1954,
    "region": "中国内地",
    "type": "电影",
    "genre": "剧情 / 历史",
    "url": "details/movie-0396.html",
    "cover": "96.jpg",
    "oneLine": "1954年，一支筑路队在崇山峻岭中开凿新中国的命脉，却遭遇了比自然更险恶的人心。"
  },
  {
    "title": "段子狗日记",
    "year": 2024,
    "region": "中国大陆",
    "type": "剧集",
    "genre": "喜剧",
    "url": "details/movie-0397.html",
    "cover": "97.jpg",
    "oneLine": "一个脱口秀演员的狗突然开口说话，用毒舌点评主人的每一段失败人生和烂梗。"
  },
  {
    "title": "千言万语",
    "year": 1999,
    "region": "中国",
    "type": "电影",
    "genre": "爱情 / 文艺",
    "url": "details/movie-0398.html",
    "cover": "98.jpg",
    "oneLine": "一个失语症女孩用十年时间写了三千封信，收信人却从未看过任何一封。"
  },
  {
    "title": "夜爪",
    "year": 2026,
    "region": "美国/加拿大",
    "type": "电影",
    "genre": "恐怖/怪兽",
    "url": "details/movie-0399.html",
    "cover": "99.jpg",
    "oneLine": "纽约下水道里出现了一种只攻击无家可归者的怪物，警方选择隐瞒，流浪汉们选择反击。"
  },
  {
    "title": "红色警戒999",
    "year": 2024,
    "region": "美国",
    "type": "电影",
    "genre": "动作, 犯罪",
    "url": "details/movie-0400.html",
    "cover": "100.jpg",
    "oneLine": "腐败警察与黑帮约定，劫持银行触发999代码，只为掩盖一桩更大阴谋。"
  },
  {
    "title": "巴黎来的女孩",
    "year": 2024,
    "region": "法国",
    "type": "电影",
    "genre": "爱情, 剧情",
    "url": "details/movie-0401.html",
    "cover": "101.jpg",
    "oneLine": "为了逃离奢华的时尚圈，巴黎名媛躲进了中国西南的深山，却遇到了一位不会说法语的乡村教师。"
  },
  {
    "title": "我的野蛮女学生",
    "year": 2024,
    "region": "韩国",
    "type": "电影",
    "genre": "喜剧 / 动作 / 校园",
    "url": "details/movie-0402.html",
    "cover": "102.jpg",
    "oneLine": "菜鸟实习老师被女学生保护，才发现对方是隐藏格斗高手。"
  },
  {
    "title": "捉贼记",
    "year": 2025,
    "region": "中国香港",
    "type": "电影",
    "genre": "警匪, 悬疑",
    "url": "details/movie-0403.html",
    "cover": "103.jpg",
    "oneLine": "为追查连环珠宝大盗，退休神偷被警方从监狱捞出，却发现这个“贼”的手法竟然和他当年的一模一样。"
  },
  {
    "title": "可靠港湾2",
    "year": 2025,
    "region": "中国大陆",
    "type": "电视剧",
    "genre": "剧情，犯罪，悬疑",
    "url": "details/movie-0404.html",
    "cover": "104.jpg",
    "oneLine": "国安处副处长林溪因一次失误被调往海岛“港湾”站，却发现这个所谓的养老科室，竟是反间谍斗争的最前线。"
  },
  {
    "title": "最长的一夜",
    "year": 2025,
    "region": "中国大陆",
    "type": "电影",
    "genre": "悬疑 / 战争",
    "url": "details/movie-0405.html",
    "cover": "105.jpg",
    "oneLine": "1944年的平安夜，一个村庄里，中国游击队员、日本士兵和当地村民各执一词，而这一夜永远过不完。"
  },
  {
    "title": "俏师娘",
    "year": 1996,
    "region": "中国大陆",
    "type": "电影",
    "genre": "喜剧 / 爱情",
    "url": "details/movie-0406.html",
    "cover": "106.jpg",
    "oneLine": "一个泼辣能干的俏寡妇，接连成为了村里三个男人的“师娘”，由此引发了一连串啼笑皆非的矛盾。"
  },
  {
    "title": "何必有我",
    "year": 2024,
    "region": "中国香港",
    "type": "电影",
    "genre": "剧情 / 家庭",
    "url": "details/movie-0407.html",
    "cover": "107.jpg",
    "oneLine": "一个被女友抛弃的失意青年，被迫照顾素未谋面的孤独症哥哥，两人在争吵与泪水中重建“家”的定义。"
  },
  {
    "title": "拉明",
    "year": 2025,
    "region": "意大利",
    "type": "电影",
    "genre": "剧情, 悬疑",
    "url": "details/movie-0408.html",
    "cover": "108.jpg",
    "oneLine": "一个沉默的非洲移民出现在意大利北部小镇，他声称来摘葡萄，却似乎在寻找某个失踪的孩子。"
  },
  {
    "title": "天山雪",
    "year": 2025,
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情 / 冒险 / 历史",
    "url": "details/movie-0409.html",
    "cover": "109.jpg",
    "oneLine": "为完成爷爷遗愿，叛逆少年带着一捧“天山雪”种子，踏上横穿沙漠与冰峰的死亡之路。"
  },
  {
    "title": "外星人入侵",
    "year": 2026,
    "region": "美国",
    "type": "电影",
    "genre": "科幻 / 惊悚",
    "url": "details/movie-0410.html",
    "cover": "110.jpg",
    "oneLine": "当外星人不再是入侵者，而是地球的“修复程序”，人类才发现自己才是病毒。"
  },
  {
    "title": "聚宝盆",
    "year": 2025,
    "region": "中国大陆",
    "type": "剧集",
    "genre": "奇幻 / 喜剧 / 家庭",
    "url": "details/movie-0411.html",
    "cover": "111.jpg",
    "oneLine": "老社区的地下挖出了一个真的聚宝盆，但每次使用，都会有一个邻居凭空消失。"
  },
  {
    "title": "阳台上的派对",
    "year": 2024,
    "region": "西班牙",
    "type": "电影",
    "genre": "喜剧",
    "url": "details/movie-0412.html",
    "cover": "112.jpg",
    "oneLine": "封城期间，一栋公寓楼各家的阳台派对意外串联，却引发了一场从线上骂战升级到线下大乱斗的邻里战争。"
  },
  {
    "title": "皇上保重粤语",
    "year": 2024,
    "region": "中国香港",
    "type": "剧集",
    "genre": "古装, 医疗",
    "url": "details/movie-0413.html",
    "cover": "113.jpg",
    "oneLine": "太医院最年轻的御医用现代医学知识挑战皇权，他开出的每一张药方，都是一步杀招。"
  },
  {
    "title": "冷血动物",
    "year": 2024,
    "region": "法国 / 比利时",
    "type": "电影",
    "genre": "剧情 / 犯罪 / 惊悚",
    "url": "details/movie-0414.html",
    "cover": "114.jpg",
    "oneLine": "一名爬虫学家被警方聘请协助侦办毒蛇杀人案，却发现自己正在一步步成为真正的“冷血动物”。"
  },
  {
    "title": "天翻地覆",
    "year": 2024,
    "region": "中国大陆",
    "type": "电影",
    "genre": "喜剧，科幻，灾难",
    "url": "details/movie-0415.html",
    "cover": "115.jpg",
    "oneLine": "一次实验意外让整栋写字楼重力反转，一群白领吊在天花板上开始了生存之战。"
  },
  {
    "title": "火星异魔",
    "year": 2028,
    "region": "英国",
    "type": "电影",
    "genre": "科幻，恐怖",
    "url": "details/movie-0416.html",
    "cover": "116.jpg",
    "oneLine": "火星殖民者带回了一种远古真菌，它能改写宿主DNA，并将人慢慢变成一株有意识的植物。"
  },
  {
    "title": "寒鸦情深",
    "year": 2022,
    "region": "中国大陆",
    "type": "电影",
    "genre": "家庭 / 剧情 / 动物",
    "url": "details/movie-0417.html",
    "cover": "117.jpg",
    "oneLine": "留守男孩救下一只断腿寒鸦，寒鸦却用一年时间教会了他“被爱的前提是离开”。"
  },
  {
    "title": "星辰变第一季",
    "year": 2018,
    "region": "中国大陆",
    "type": "动漫",
    "genre": "奇幻 / 修仙 / 战斗",
    "url": "details/movie-0418.html",
    "cover": "118.jpg",
    "oneLine": "无法凝聚金丹的废柴少年，意外得到一块星辰碎片，从此走上逆天之路。"
  },
  {
    "title": "刑警使命",
    "year": 2012,
    "region": "中国大陆",
    "type": "电视剧",
    "genre": "刑侦 / 悬疑",
    "url": "details/movie-0419.html",
    "cover": "119.jpg",
    "oneLine": "一支刑警队在新老队长交接的48小时内，接连遭遇三起不可能犯罪。"
  },
  {
    "title": "看见爱",
    "year": 2019,
    "region": "中国台湾",
    "type": "电影",
    "genre": "爱情, 剧情",
    "url": "details/movie-0420.html",
    "cover": "120.jpg",
    "oneLine": "即将失明的天才摄影师，与一个只会用“听”来理解世界的女孩，展开了一场看不见却无比炽热的恋爱。"
  },
  {
    "title": "狂暴巨狼",
    "year": 2025,
    "region": "美国",
    "type": "电影",
    "genre": "动作 / 科幻 / 惊悚",
    "url": "details/movie-0421.html",
    "cover": "121.jpg",
    "oneLine": "军事实验失败导致北美狼群基因暴走，一支押运车队必须将疫苗穿越300公里狼患区。"
  },
  {
    "title": "请给我寄粉丝信",
    "year": 2024,
    "region": "韩国",
    "type": "剧集",
    "genre": "剧情， 喜剧",
    "url": "details/movie-0422.html",
    "cover": "122.jpg",
    "oneLine": "过气二十年的偶像歌手为了生计假装有狂热粉丝，雇佣了一名兼职生给他写假信，却收到了改变人生的回信。"
  },
  {
    "title": "骑偶难下",
    "year": 2024,
    "region": "中国香港",
    "type": "电影",
    "genre": "喜剧",
    "url": "details/movie-0423.html",
    "cover": "123.jpg",
    "oneLine": "过气木偶师被一具会说话的“市长人偶”绑架，被迫配合演一场竞选大戏。"
  },
  {
    "title": "通宵夜未眠",
    "year": 2024,
    "region": "韩国",
    "type": "电影",
    "genre": "喜剧 / 惊悚",
    "url": "details/movie-0424.html",
    "cover": "124.jpg",
    "oneLine": "一个普通打工人被迫通宵加班，却发现整栋写字楼的同事在一夜之间变成了嗜血怪物。"
  },
  {
    "title": "永顺永和",
    "year": 2025,
    "region": "中国台湾",
    "type": "电影",
    "genre": "剧情 / 同性 / 家庭",
    "url": "details/movie-0425.html",
    "cover": "125.jpg",
    "oneLine": "哥哥永顺是庙里的八家将，弟弟永和是成绩优异的模范生，一具在河堤发现的无名女尸，揭开了他们并非亲生兄弟的秘密。"
  },
  {
    "title": "芭蕾职业",
    "year": 2024,
    "region": "俄罗斯",
    "type": "剧集",
    "genre": "剧情",
    "url": "details/movie-0426.html",
    "cover": "126.jpg",
    "oneLine": "天赋异禀的穷女孩挤进顶级芭蕾舞团，却发现台下的竞争比台上更血腥。"
  },
  {
    "title": "九王爷的告白",
    "year": 2026,
    "region": "韩国",
    "type": "电视剧",
    "genre": "古装，爱情，悬疑",
    "url": "details/movie-0427.html",
    "cover": "127.jpg",
    "oneLine": "为了在血腥政变中活命，懦弱的九王爷假装疯癫，却意外爱上了被派来杀他的女刺客。"
  },
  {
    "title": "磁路丰收",
    "year": 2025,
    "region": "中国大陆",
    "type": "电影",
    "genre": "科幻 / 悬疑",
    "url": "details/movie-0428.html",
    "cover": "128.jpg",
    "oneLine": "东北农业大学教授发明了“磁路催熟”技术，一夜之间让庄稼成熟，也一夜之间让方圆百里内的所有电子设备和人体神经陷入紊乱。"
  },
  {
    "title": "情断爱河",
    "year": 2023,
    "region": "泰国",
    "type": "剧集",
    "genre": "爱情 / 虐恋 / 家庭",
    "url": "details/movie-0429.html",
    "cover": "129.jpg",
    "oneLine": "她为救爱人坠河失忆，醒来后却被他的双胞胎哥哥告知：“我才是你的未婚夫。”"
  },
  {
    "title": "失忆杀神",
    "year": 2026,
    "region": "美国",
    "type": "电影",
    "genre": "动作, 悬疑",
    "url": "details/movie-0430.html",
    "cover": "130.jpg",
    "oneLine": "一个失忆的职业杀手醒来后，发现所有人都在追杀自己，而他唯一留下的线索是一部只有“过去自己”能看懂的加密日记。"
  },
  {
    "title": "杰克与魔豆",
    "year": 2025,
    "region": "美国",
    "type": "电影",
    "genre": "奇幻 / 冒险",
    "url": "details/movie-0431.html",
    "cover": "131.jpg",
    "oneLine": "失业植物学家发现祖父的魔豆能通往云层，但云层之上是反乌托邦的生态监狱。"
  },
  {
    "title": "沙漠神兵",
    "year": 2024,
    "region": "法国",
    "type": "电影",
    "genre": "动作 / 战争",
    "url": "details/movie-0432.html",
    "cover": "132.jpg",
    "oneLine": "六人法国外籍军团小队深入撒哈拉营救人质，却发现雇主就是设局者。"
  },
  {
    "title": "百战敢死队",
    "year": 2014,
    "region": "中国大陆",
    "type": "电视剧",
    "genre": "战争，动作",
    "url": "details/movie-0433.html",
    "cover": "133.jpg",
    "oneLine": "1942年，一支由十名死囚组成的敢死队深入敌后执行必死任务，他们的任务是用命换一条活路。"
  },
  {
    "title": "初恋未满",
    "year": 2024,
    "region": "中国大陆",
    "type": "电影",
    "genre": "爱情 / 剧情",
    "url": "details/movie-0434.html",
    "cover": "134.jpg",
    "oneLine": "1999年，南方小城高中里，一个胖女孩对篮球队长的暗恋，因一封没送出的信改变一生。"
  },
  {
    "title": "帕克 国语版",
    "year": 2013,
    "region": "美国 / 中国",
    "type": "电影",
    "genre": "动作, 犯罪, 惊悚",
    "url": "details/movie-0435.html",
    "cover": "135.jpg",
    "oneLine": "坚守原则的职业盗贼被同伴背叛，九死一生后他要用自己的规则讨回公道。"
  },
  {
    "title": "黑色追缉令",
    "year": 2026,
    "region": "中国香港",
    "type": "电影",
    "genre": "犯罪 / 悬疑",
    "url": "details/movie-0436.html",
    "cover": "136.jpg",
    "oneLine": "警方卧底与黑帮内鬼在追缴一份神秘名单的过程中，双双陷入身份迷局。"
  },
  {
    "title": "行人徒步区",
    "year": 2023,
    "region": "中国台湾",
    "type": "电影",
    "genre": "剧情, 家庭, 社会",
    "url": "details/movie-0437.html",
    "cover": "137.jpg",
    "oneLine": "一条即将被改造成徒步区的老街，连结了三代摊贩之间无法言说的亲情与秘密。"
  },
  {
    "title": "天才少女福尔摩斯2",
    "year": 2022,
    "region": "英国",
    "type": "电影",
    "genre": "悬疑 / 冒险 / 喜剧",
    "url": "details/movie-0438.html",
    "cover": "138.jpg",
    "oneLine": "艾诺拉·福尔摩斯追查伦敦连环失踪案，发现所有线索都指向一所号称“淑女养成”的封闭女校。"
  },
  {
    "title": "萌系男友是燃燃的橘色",
    "year": 2022,
    "region": "日本",
    "type": "电影",
    "genre": "爱情，喜剧",
    "url": "details/movie-0439.html",
    "cover": "139.jpg",
    "oneLine": "怕火的女孩爱上了消防员男友，每次约会都会不小心引发小火灾。"
  },
  {
    "title": "建群联盟",
    "year": 2026,
    "region": "中国大陆",
    "type": "剧集",
    "genre": "都市，商战",
    "url": "details/movie-0440.html",
    "cover": "140.jpg",
    "oneLine": "十个陌生人被拉入一个无法退出的群，群主的神秘任务是：搞垮一家独角兽公司。"
  },
  {
    "title": "转生成猫的大叔",
    "year": 2026,
    "region": "日本",
    "type": "动画剧集",
    "genre": "奇幻喜剧",
    "url": "details/movie-0441.html",
    "cover": "141.jpg",
    "oneLine": "五十岁的黑心企业课长意外去世，醒来后竟变成了公司楼下那只高冷的流浪猫。"
  },
  {
    "title": "大刺客粤语",
    "year": 1997,
    "region": "中国香港",
    "type": "电视剧",
    "genre": "古装 / 武侠",
    "url": "details/movie-0442.html",
    "cover": "142.jpg",
    "oneLine": "用七个单元故事，讲述了古代七位著名刺客“虽千万人吾往矣”的悲壮人生。"
  },
  {
    "title": "自由！",
    "year": 2025,
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情 / 喜剧",
    "url": "details/movie-0443.html",
    "cover": "143.jpg",
    "oneLine": "一场监狱里的摇滚乐队选拔赛，让五个重刑犯在铁窗内第一次尝到了“自由”的滋味。"
  },
  {
    "title": "诱惑出击",
    "year": 2025,
    "region": "韩国",
    "type": "剧集",
    "genre": "爱情 / 悬疑 / 职场",
    "url": "details/movie-0444.html",
    "cover": "144.jpg",
    "oneLine": "最顶级的“绿茶”专家开设补习班，专教女孩如何诱惑并摧毁虚伪的上流社会渣男。"
  },
  {
    "title": "强者的新传说",
    "year": 2022,
    "region": "日本",
    "type": "动画电影",
    "genre": "奇幻战斗",
    "url": "details/movie-0445.html",
    "cover": "145.jpg",
    "oneLine": "最强勇者打败魔王后重置世界线，想当普通人，结果所有人都还记得他。"
  },
  {
    "title": "光的孩子",
    "year": 2025,
    "region": "中国台湾",
    "type": "电影",
    "genre": "剧情, 家庭, 奇幻",
    "url": "details/movie-0446.html",
    "cover": "146.jpg",
    "oneLine": "一个天生失明的男孩，意外发现自己能“看见”他人心中最温暖的那束光。"
  },
  {
    "title": "欢迎来到谋杀镇",
    "year": 2025,
    "region": "美国",
    "type": "电视剧",
    "genre": "悬疑, 黑色喜剧",
    "url": "details/movie-0447.html",
    "cover": "147.jpg",
    "oneLine": "一个真实犯罪播客主播搬进了曾发生过六起未解凶案的“谋杀镇”，却发现居民们都很欢迎她——因为凶手就是她自己的听众。"
  },
  {
    "title": "拳击少年",
    "year": 2024,
    "region": "中国大陆",
    "type": "电影",
    "genre": "运动 / 剧情 / 励志",
    "url": "details/movie-0448.html",
    "cover": "148.jpg",
    "oneLine": "15岁叛逆少年被送进乡村拳击俱乐部，发现教练是隐退的前全国冠军，而自己是他最后的赌注。"
  },
  {
    "title": "布赖恩和查尔斯",
    "year": 2022,
    "region": "英国",
    "type": "电影",
    "genre": "喜剧, 剧情, 科幻",
    "url": "details/movie-0449.html",
    "cover": "149.jpg",
    "oneLine": "一个孤独的发明家和他用破铜烂铁造出的“机器人”踏上了一段寻找自我的荒诞旅程。"
  },
  {
    "title": "灵通姻缘线",
    "year": 2002,
    "region": "台湾",
    "type": "电视剧",
    "genre": "爱情, 奇幻, 喜剧",
    "url": "details/movie-0450.html",
    "cover": "150.jpg",
    "oneLine": "菜鸟月老实习第一天就系错红线，让书呆女与花心男互换灵魂，只能亲自下凡补救。"
  },
  {
    "title": "这是我的岛",
    "year": 2023,
    "region": "美国 / 澳大利亚",
    "type": "电影",
    "genre": "惊悚 / 冒险",
    "url": "details/movie-0451.html",
    "cover": "1.jpg",
    "oneLine": "六人参加真人秀被丢到荒岛，规则是“岛主说了算”，但没人知道岛主是谁，直到尸体出现。"
  },
  {
    "title": "碧丽莎的情人第二集",
    "year": 1993,
    "region": "香港",
    "type": "剧集",
    "genre": "剧情 / 爱情 / 伦理",
    "url": "details/movie-0452.html",
    "cover": "2.jpg",
    "oneLine": "富家千金碧丽莎在婚礼前夜，发现自己同时爱上了未婚夫的弟弟与丈夫的私人助理。"
  },
  {
    "title": "监察局长",
    "year": 2024,
    "region": "中国大陆",
    "type": "电视剧",
    "genre": "反腐，犯罪，剧情",
    "url": "details/movie-0453.html",
    "cover": "3.jpg",
    "oneLine": "空降局长查腐败，却发现自己刚签字的逮捕令上，名字是他已死十年的兄弟。"
  },
  {
    "title": "浪漫往昔",
    "year": 2024,
    "region": "英国",
    "type": "剧集",
    "genre": "剧情 / 爱情 / 历史",
    "url": "details/movie-0454.html",
    "cover": "4.jpg",
    "oneLine": "1920年代，贵族小姐爱上了庄园里的园丁，但她不知道园丁其实是流亡的俄国王子。"
  },
  {
    "title": "准备好了没",
    "year": 2024,
    "region": "美国",
    "type": "电影",
    "genre": "惊悚，喜剧，恐怖",
    "url": "details/movie-0455.html",
    "cover": "5.jpg",
    "oneLine": "嫁入豪门的婚礼之夜，新娘必须参与家族传统游戏——躲到天亮，否则整个家族都会死。"
  },
  {
    "title": "春情初放",
    "year": 2012,
    "region": "法国",
    "type": "电影",
    "genre": "爱情, 情色",
    "url": "details/movie-0456.html",
    "cover": "6.jpg",
    "oneLine": "十五岁少女在夏令营爱上了一个男生，却发现他是自己同父异母的哥哥，而父亲并不知道他的存在。"
  },
  {
    "title": "危机航线",
    "year": 2025,
    "region": "中国香港 / 中国大陆",
    "type": "电影",
    "genre": "动作 / 灾难",
    "url": "details/movie-0457.html",
    "cover": "7.jpg",
    "oneLine": "国际航班遭遇生化武器袭击，前特种兵必须在客舱失压前，从 200 名乘客中找出三根引爆器。"
  },
  {
    "title": "六块六毛六那点事",
    "year": 2023,
    "region": "中国大陆",
    "type": "电视剧",
    "genre": "年代 / 剧情",
    "url": "details/movie-0458.html",
    "cover": "8.jpg",
    "oneLine": "1970年代东北工厂大院里，因为一笔“六块六毛六”的意外之财，四家邻居的关系彻底乱了套。"
  },
  {
    "title": "温柔乡",
    "year": 2023,
    "region": "中国台湾",
    "type": "电影",
    "genre": "剧情 / 同性 / 悬疑",
    "url": "details/movie-0459.html",
    "cover": "9.jpg",
    "oneLine": "回乡照顾病母的女护士，发现整个村子里的老人都被一名神秘女子“温柔”地控制着。"
  },
  {
    "title": "一样的世界",
    "year": 2027,
    "region": "中国大陆",
    "type": "电影",
    "genre": "科幻 / 悬疑 / 剧情",
    "url": "details/movie-0460.html",
    "cover": "10.jpg",
    "oneLine": "平凡程序员意外发现手机能联通另一个“一样的世界”，却看到了自己本该拥有的完美人生。"
  },
  {
    "title": "我渴望被禁止的东西",
    "year": 2024,
    "region": "法国",
    "type": "电影",
    "genre": "剧情 / 情色 / 心理",
    "url": "details/movie-0461.html",
    "cover": "11.jpg",
    "oneLine": "一位修道院长大的女孩进城后，爱上了贵族舞会上的面具，以及面具背后所有“有罪的快乐”。"
  },
  {
    "title": "少女最摇摆",
    "year": 2022,
    "region": "美国",
    "type": "电影",
    "genre": "喜剧 / 音乐",
    "url": "details/movie-0462.html",
    "cover": "12.jpg",
    "oneLine": "1999年，一个沉迷90年代流行文化的书呆子女孩，为了追男神组建了一支全校最烂的摇摆舞队。"
  },
  {
    "title": "变羊记",
    "year": 2017,
    "region": "台湾",
    "type": "电影",
    "genre": "奇幻 / 喜剧 / 家庭",
    "url": "details/movie-0463.html",
    "cover": "13.jpg",
    "oneLine": "脾气暴躁的婆婆被巫师变成一只羊，儿媳只好牵着这只会说脏话的羊去参加乡镇调解大会。"
  },
  {
    "title": "史酷比4：湖怪的诅咒",
    "year": 2024,
    "region": "美国",
    "type": "电影",
    "genre": "喜剧、悬疑、动画",
    "url": "details/movie-0464.html",
    "cover": "14.jpg",
    "oneLine": "神秘公司收到来自中国千岛湖的求救信，一只会唱越剧的水怪正在吓跑所有游客。"
  },
  {
    "title": "万人斩",
    "year": 2025,
    "region": "中国香港",
    "type": "电影",
    "genre": "动作 / 武侠 / 历史",
    "url": "details/movie-0465.html",
    "cover": "15.jpg",
    "oneLine": "崇祯十七年，一名冷宫太监训练出十二名死士，计划用一条命换一颗清军将领的头颅。"
  },
  {
    "title": "毒祸2",
    "year": 2023,
    "region": "中国香港",
    "type": "电影",
    "genre": "犯罪， 剧情",
    "url": "details/movie-0466.html",
    "cover": "16.jpg",
    "oneLine": "上一集牺牲卧底的弟弟为兄复仇，却发现自己染上了和哥哥一样的毒瘾。"
  },
  {
    "title": "爱我就陪我看电影",
    "year": 2023,
    "region": "中国大陆",
    "type": "电影",
    "genre": "爱情 / 喜剧",
    "url": "details/movie-0467.html",
    "cover": "17.jpg",
    "oneLine": "一位毒舌影院经理发现，每对在他面前秀恩爱的情侣，都会在散场后神秘分手。"
  },
  {
    "title": "钢铁意志",
    "year": 2022,
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情 / 历史",
    "url": "details/movie-0468.html",
    "cover": "18.jpg",
    "oneLine": "1948年，鞍山解放，一个被炸成废墟的钢厂和一个“逃跑”的厂长，要在半年内恢复生产。"
  },
  {
    "title": "我的天堂城市",
    "year": 2022,
    "region": "中国台湾",
    "type": "电影",
    "genre": "剧情 / 爱情",
    "url": "details/movie-0469.html",
    "cover": "19.jpg",
    "oneLine": "三个中国年轻人在纽约追梦，他们发现这座城市从不许诺天堂，但总在废墟里给你一颗糖。"
  },
  {
    "title": "断袖男",
    "year": 2026,
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情 / 爱情 / 家庭",
    "url": "details/movie-0470.html",
    "cover": "20.jpg",
    "oneLine": "一个无法对女人产生兴趣的乡村裁缝，在逼婚与自我拷问中，缝制出了一件只属于他的彩虹礼服。"
  },
  {
    "title": "十步杀",
    "year": 2025,
    "region": "中国台湾",
    "type": "电影",
    "genre": "武侠",
    "url": "details/movie-0471.html",
    "cover": "21.jpg",
    "oneLine": "江湖传言“十步之内，必杀无赦”，一名失忆剑客发现自己可能就是凶手。"
  },
  {
    "title": "术士神传",
    "year": 2026,
    "region": "韩国",
    "type": "电影",
    "genre": "奇幻, 动作, 古装",
    "url": "details/movie-0472.html",
    "cover": "22.jpg",
    "oneLine": "朝鲜时代，一个被流放的术士被秘密召回，因为王宫地下封印的“食王鬼”开始苏醒。"
  },
  {
    "title": "亲密治疗",
    "year": 2012,
    "region": "美国",
    "type": "电影",
    "genre": "剧情, 爱情",
    "url": "details/movie-0473.html",
    "cover": "23.jpg",
    "oneLine": "因小儿麻痹症被困在铁肺里38年的诗人，聘请性治疗师来体验人生最后一项空白。"
  },
  {
    "title": "猫王巡回演唱会",
    "year": 2023,
    "region": "美国",
    "type": "电影 / 音乐剧",
    "genre": "音乐 / 传记 / 剧情",
    "url": "details/movie-0474.html",
    "cover": "24.jpg",
    "oneLine": "1970年夏天，猫王踏上最后一场全美巡演，却被一个冒充他亡母的神秘女子纠缠。"
  },
  {
    "title": "毕业生1967",
    "year": 1967,
    "region": "美国",
    "type": "电影",
    "genre": "剧情 / 爱情",
    "url": "details/movie-0475.html",
    "cover": "25.jpg",
    "oneLine": "大学刚毕业的本恩陷入了与中年妇人罗宾逊太太及其女儿的双重感情漩涡。"
  },
  {
    "title": "情系月亮湾",
    "year": 2024,
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情 / 爱情",
    "url": "details/movie-0476.html",
    "cover": "26.jpg",
    "oneLine": "为完成奶奶遗愿，城市女孩回乡经营月亮湾民宿，却意外重遇了为追债而来的青梅竹马。"
  },
  {
    "title": "剑破龙门",
    "year": 2025,
    "region": "中国大陆",
    "type": "电影",
    "genre": "武侠，动作",
    "url": "details/movie-0477.html",
    "cover": "27.jpg",
    "oneLine": "龙门客栈新来了一个哑巴厨子，刀工极好，没人知道他的菜刀曾在十年前斩下八大派掌门的兵器。"
  },
  {
    "title": "大说谎家",
    "year": 2019,
    "region": "美国",
    "type": "剧集",
    "genre": "剧情 / 悬疑 / 心理",
    "url": "details/movie-0478.html",
    "cover": "28.jpg",
    "oneLine": "职业骗子伪装身份接近富豪寡妇，却发现自己正被另一张更大的谎言之网吞噬。"
  },
  {
    "title": "不一样的九零后",
    "year": 2025,
    "region": "中国大陆",
    "type": "剧集",
    "genre": "剧情 / 青春",
    "url": "details/movie-0479.html",
    "cover": "29.jpg",
    "oneLine": "五个1990年出生的人，从小学到三十岁，用三场葬礼串起了一代人的共同记忆与各自分岔的人生。"
  },
  {
    "title": "精武雄风",
    "year": 2018,
    "region": "中国",
    "type": "电影",
    "genre": "动作 / 剧情",
    "url": "details/movie-0480.html",
    "cover": "30.jpg",
    "oneLine": "精武门没落二十年后，一个只会“沾衣十八跌”的街头混混，被逼用江湖骗术挑战日本空手道大师。"
  },
  {
    "title": "我出生的那一天",
    "year": 2025,
    "region": "阿根廷 / 西班牙",
    "type": "电影",
    "genre": "剧情 / 悬疑 / 家庭",
    "url": "details/movie-0481.html",
    "cover": "31.jpg",
    "oneLine": "35岁的男人在养母葬礼当天收到一盘录像带，里面是他出生那天的完整记录——但录像里的“母亲”不是养母。"
  },
  {
    "title": "僵尸世界大战",
    "year": 2024,
    "region": "美国",
    "type": "电影",
    "genre": "动作 / 恐怖 / 灾难",
    "url": "details/movie-0482.html",
    "cover": "32.jpg",
    "oneLine": "丧尸病毒爆发后，一个联合国调查员发现了一个规律——丧尸从不攻击患有绝症的人。"
  },
  {
    "title": "赞鸟历险记",
    "year": 2024,
    "region": "法国",
    "type": "电影",
    "genre": "动画",
    "url": "details/movie-0483.html",
    "cover": "33.jpg",
    "oneLine": "一只天生恐高的信天翁幼鸟，必须带领族群飞跃史上最大的风暴，寻找最后一片净土。"
  },
  {
    "title": "乃木坂春香的秘密第二季",
    "year": 2023,
    "region": "日本",
    "type": "动画",
    "genre": "恋爱、喜剧、校园",
    "url": "details/movie-0484.html",
    "cover": "34.jpg",
    "oneLine": "完美千金乃木坂春香是个重度宅女，第二季她要带着男友绫濑裕人去逛漫展，却被亲哥哥跟踪。"
  },
  {
    "title": "生死对峙",
    "year": 2025,
    "region": "中国大陆",
    "type": "电影",
    "genre": "动作 / 犯罪 / 剧情",
    "url": "details/movie-0485.html",
    "cover": "35.jpg",
    "oneLine": "在一栋被劫持的大厦里，一名谈判专家发现劫匪头目竟是自己二十年前亲手送进监狱的亲生弟弟。"
  },
  {
    "title": "圆梦公司",
    "year": 2024,
    "region": "中国大陆",
    "type": "剧集",
    "genre": "奇幻，喜剧",
    "url": "details/movie-0486.html",
    "cover": "36.jpg",
    "oneLine": "一家帮你实现任何梦想的公司，但“实现”二字包含所有法律、道德和物理上的副作用。"
  },
  {
    "title": "高校男生",
    "year": 2006,
    "region": "英国",
    "type": "电影",
    "genre": "剧情 / 喜剧 / 教育",
    "url": "details/movie-0487.html",
    "cover": "37.jpg",
    "oneLine": "在八十年代的男校里，两个天才学生用诗歌和粗口挑衅老师，却被新来的文艺青年教师彻底征服。"
  },
  {
    "title": "安诺玛丽莎",
    "year": 2023,
    "region": "意大利",
    "type": "电影",
    "genre": "艺术剧情",
    "url": "details/movie-0488.html",
    "cover": "38.jpg",
    "oneLine": "一对双胞胎姐妹从小被隔离抚养，姐姐是修女，妹妹是舞女，一次意外后两人互换身份走进了对方的地狱。"
  },
  {
    "title": "汪星人的秘密第一季",
    "year": 2024,
    "region": "中国大陆",
    "type": "网剧",
    "genre": "喜剧，奇幻，家庭",
    "url": "details/movie-0489.html",
    "cover": "39.jpg",
    "oneLine": "一家宠物店的店员能听懂狗狗说话，于是每集帮一位客人的“主子”解决麻烦，顺便破解家庭冷暴力。"
  },
  {
    "title": "不和谐音",
    "year": 2026,
    "region": "美国",
    "type": "电影",
    "genre": "悬疑 / 惊悚",
    "url": "details/movie-0490.html",
    "cover": "40.jpg",
    "oneLine": "一位失明钢琴家发现，自己弹奏的“错误音符”竟能在现实中引发毁灭性的灾难。"
  },
  {
    "title": "火力",
    "year": 1993,
    "region": "美国",
    "type": "电影",
    "genre": "动作/惊悚",
    "url": "details/movie-0491.html",
    "cover": "41.jpg",
    "oneLine": "一名退役特种兵发现曾经的小队成员被逐一暗杀，他必须用最暴力的方式找出幕后黑手。"
  },
  {
    "title": "孖宝靓妹",
    "year": 2024,
    "region": "中国香港",
    "type": "电影",
    "genre": "喜剧, 青春",
    "url": "details/movie-0492.html",
    "cover": "42.jpg",
    "oneLine": "姐姐是学霸丑小鸭，妹妹是校花万人迷，为了追同一个男生，她们决定互换身份一周。"
  },
  {
    "title": "艳舞樱都",
    "year": 2024,
    "region": "日本",
    "type": "电影",
    "genre": "情色、剧情、歌舞",
    "url": "details/movie-0493.html",
    "cover": "43.jpg",
    "oneLine": "昭和初年，京都花街头牌舞伎为救妹妹沦为艳舞女郎，却因此卷入政商阴谋。"
  },
  {
    "title": "进击巨人大战无敌猛鲨",
    "year": 2025,
    "region": "日本",
    "type": "电影",
    "genre": "动作 / 奇幻 / 灾难",
    "url": "details/movie-0494.html",
    "cover": "44.jpg",
    "oneLine": "太平洋底苏醒的史前巨鲨登陆东京，艾伦·耶格尔化身进击巨人在新宿展开跨次元大乱斗。"
  },
  {
    "title": "魂断奈何天",
    "year": 1995,
    "region": "中国台湾",
    "type": "电视剧",
    "genre": "古装，神话，爱情",
    "url": "details/movie-0495.html",
    "cover": "45.jpg",
    "oneLine": "富家千金与落魄书生人鬼殊途，为了跨越奈何桥的阻隔，她甘愿燃烧三魂七魄换取一夜阳间重逢。"
  },
  {
    "title": "芭比之珍珠公主",
    "year": 2014,
    "region": "美国",
    "type": "电影 / 动画",
    "genre": "动画 / 家庭 / 奇幻",
    "url": "details/movie-0496.html",
    "cover": "46.jpg",
    "oneLine": "人鱼公主露米娜拥有让珍珠变出魔法的能力，她必须潜入人类皇宫解开家族的封印。"
  },
  {
    "title": "权力之子",
    "year": 2024,
    "region": "英国",
    "type": "剧集",
    "genre": "剧情, 犯罪",
    "url": "details/movie-0497.html",
    "cover": "47.jpg",
    "oneLine": "伦敦市长突然暴毙，他的四个子女——警察、律师、黑帮和记者——开始争夺遗产背后的权力版图。"
  },
  {
    "title": "三分钟——超展开",
    "year": 2020,
    "region": "中国大陆",
    "type": "短片",
    "genre": "科幻, 悬疑",
    "url": "details/movie-0498.html",
    "cover": "48.jpg",
    "oneLine": "男人发现每天睡前有三分钟可以回到过去，但他每次修改都会导致妻子变成另一个人。"
  },
  {
    "title": "献给检察官的玫瑰花",
    "year": 2025,
    "region": "韩国",
    "type": "电影",
    "genre": "悬疑 / 犯罪 / 剧情",
    "url": "details/movie-0499.html",
    "cover": "49.jpg",
    "oneLine": "反腐败检察官每天收到一朵黄玫瑰，花瓣上的编号对应着他经手过却无罪释放的案卷编号。"
  },
  {
    "title": "冰河追凶",
    "year": 2024,
    "region": "中国大陆",
    "type": "电影",
    "genre": "悬疑, 犯罪",
    "url": "details/movie-0500.html",
    "cover": "50.jpg",
    "oneLine": "东北冰封期，三具尸体以诡异姿态冻在江面下，而唯一的共同点是他们都曾是无罪释放的嫌犯。"
  },
  {
    "title": "杀人自白",
    "year": 2012,
    "region": "韩国",
    "type": "电影",
    "genre": "犯罪 / 惊悚",
    "url": "details/movie-0501.html",
    "cover": "51.jpg",
    "oneLine": "十五年前连环杀人案追诉期刚过，一本叫《我是杀人犯》的自传突然爆红，作者自称就是那个从未落网的凶手。"
  },
  {
    "title": "一封迟来的信",
    "year": 2024,
    "region": "中国台湾",
    "type": "电影",
    "genre": "剧情 / 家庭",
    "url": "details/movie-0502.html",
    "cover": "52.jpg",
    "oneLine": "母亲去世后，叛逆的女儿收到一封写于二十年前的信，发现全家都在替她保守一个秘密。"
  },
  {
    "title": "我为养生狂",
    "year": 2018,
    "region": "美国",
    "type": "剧集",
    "genre": "喜剧，生活",
    "url": "details/movie-0503.html",
    "cover": "53.jpg",
    "oneLine": "一个生活一团糟的白领女性，偶然接触了极端养生法后，生活不仅没变好，反而引发了一连串啼笑皆非的健康灾难。"
  },
  {
    "title": "神鬼任务2",
    "year": 2010,
    "region": "美国",
    "type": "电影",
    "genre": "动作, 冒险, 奇幻",
    "url": "details/movie-0504.html",
    "cover": "54.jpg",
    "oneLine": "调查超自然现象的特工发现，历史上所有战争背后都是同一个“神”在操控，而他们要刺杀这个神。"
  },
  {
    "title": "如果声音不记得",
    "year": 2020,
    "region": "中国大陆",
    "type": "电影",
    "genre": "爱情, 奇幻, 剧情",
    "url": "details/movie-0505.html",
    "cover": "55.jpg",
    "oneLine": "一个能用声音让人产生幸福幻觉的外星人，遇到了一个患抑郁症的女孩，却发现自己的超能力在她面前彻底失灵。"
  },
  {
    "title": "秘门交易丑闻",
    "year": 2024,
    "region": "韩国",
    "type": "剧集",
    "genre": "悬疑 / 政治",
    "url": "details/movie-0506.html",
    "cover": "56.jpg",
    "oneLine": "实习检察官追查一起内幕交易，意外掀翻整个政商勾结的暗黑网络，连亲父都是帮凶。"
  },
  {
    "title": "七仙女外传",
    "year": 2025,
    "region": "中国大陆",
    "type": "网络剧",
    "genre": "奇幻 / 古装 / 喜剧",
    "url": "details/movie-0507.html",
    "cover": "57.jpg",
    "oneLine": "天庭裁员，七仙女下界再就业，却发现凡间比天宫还卷，于是她们开了一家专门帮神仙打工人维权的公司。"
  },
  {
    "title": "傲骨之战第三季",
    "year": 2025,
    "region": "美国",
    "type": "剧集",
    "genre": "剧情, 律政",
    "url": "details/movie-0508.html",
    "cover": "58.jpg",
    "oneLine": "第三季中，律所被黑客攻击全员裸奔，戴安决定竞选法官，而玛雅在监狱里发现了新的赚钱门路。"
  },
  {
    "title": "弗林",
    "year": 2025,
    "region": "美国",
    "type": "剧集",
    "genre": "犯罪，剧情",
    "url": "details/movie-0509.html",
    "cover": "59.jpg",
    "oneLine": "真实黑客“弗林”出狱后，发现整个世界都是他少年时编写的那个“网络游戏”的升级版。"
  },
  {
    "title": "特功明星",
    "year": 2025,
    "region": "中国大陆",
    "type": "电影",
    "genre": "喜剧、动作、科幻",
    "url": "details/movie-0510.html",
    "cover": "60.jpg",
    "oneLine": "一个过气武打明星被国家征召，因为他是唯一能模仿已故特工之王的人。"
  },
  {
    "title": "乌菲兹美术馆的日与夜",
    "year": 2023,
    "region": "意大利",
    "type": "纪录片",
    "genre": "纪录 / 艺术",
    "url": "details/movie-0511.html",
    "cover": "61.jpg",
    "oneLine": "从开门到闭馆，镜头跟随保安与修复师，揭开乌菲兹美术馆不为人知的幕后故事。"
  },
  {
    "title": "水平线",
    "year": 2025,
    "region": "韩国",
    "type": "电影",
    "genre": "剧情, 灾难, 悬疑",
    "url": "details/movie-0512.html",
    "cover": "62.jpg",
    "oneLine": "豪华邮轮倾覆后，幸存者们困在倒置的船体内，水位上涨，而救生艇只够一半人逃生。"
  },
  {
    "title": "十二生肖传奇",
    "year": 2026,
    "region": "中国大陆",
    "type": "剧集",
    "genre": "冒险/奇幻",
    "url": "details/movie-0513.html",
    "cover": "63.jpg",
    "oneLine": "上古时期，十二位身怀异能的凡人被选中，必须在星辰移位前找回被封印的十二地支神力。"
  },
  {
    "title": "舌尖上的冲动",
    "year": 2022,
    "region": "日本",
    "type": "剧集",
    "genre": "美食 / 情欲 / 悬疑",
    "url": "details/movie-0514.html",
    "cover": "64.jpg",
    "oneLine": "一家隐秘餐厅的每道菜都能唤起食客最隐秘的情欲记忆，直到有人吃出了谋杀的味道。"
  },
  {
    "title": "一万公里的爱情",
    "year": 2025,
    "region": "中国大陆",
    "type": "电影",
    "genre": "爱情、公路",
    "url": "details/movie-0515.html",
    "cover": "65.jpg",
    "oneLine": "男友被确诊只剩半年寿命，女友决定开车从上海送他到北极圈看一次极光。"
  },
  {
    "title": "雷顿大冒险：永远的歌姬",
    "year": 2024,
    "region": "日本",
    "type": "动画电影",
    "genre": "冒险 / 悬疑 / 音乐",
    "url": "details/movie-0516.html",
    "cover": "66.jpg",
    "oneLine": "考古学家雷顿教授受托寻找失落的“歌姬之城”，却发现整座城市是一台巨型八音盒，而启动的代价是活人祭。"
  },
  {
    "title": "生命中的百米",
    "year": 2025,
    "region": "西班牙",
    "type": "电影",
    "genre": "剧情 / 家庭",
    "url": "details/movie-0517.html",
    "cover": "67.jpg",
    "oneLine": "被诊断为多发性硬化症的企业家，为了女儿的一句赌约，挑战百米游泳。"
  },
  {
    "title": "鬼磨坊",
    "year": 2025,
    "region": "德国",
    "type": "电影",
    "genre": "奇幻恐怖",
    "url": "details/movie-0518.html",
    "cover": "68.jpg",
    "oneLine": "失业的面包师学徒走进深山磨坊，发现磨的不是面粉，而是活人的噩梦。"
  },
  {
    "title": "格桑花开的时候",
    "year": 2025,
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情 / 家庭 / 西部",
    "url": "details/movie-0519.html",
    "cover": "69.jpg",
    "oneLine": "患阿兹海默症的藏族老奶奶每年格桑花开时都要出走，只为赴一个60年前的约会。"
  },
  {
    "title": "吸血迷城",
    "year": 2011,
    "region": "英国",
    "type": "电影",
    "genre": "恐怖 / 惊悚",
    "url": "details/movie-0520.html",
    "cover": "70.jpg",
    "oneLine": "考古队打开了罗马尼亚地下十五层的墓穴，发现吸血鬼传说竟是为了封印某种更古老的东西。"
  },
  {
    "title": "一颗红心",
    "year": 2025,
    "region": "中国",
    "type": "电影",
    "genre": "剧情 / 历史",
    "url": "details/movie-0521.html",
    "cover": "71.jpg",
    "oneLine": "1949年开国大典前夜，一个贪生怕死的国民党文书，被迫护送一颗心脏穿越战区。"
  },
  {
    "title": "骗子许",
    "year": 2025,
    "region": "中国台湾",
    "type": "电影",
    "genre": "犯罪, 喜剧, 悬疑",
    "url": "details/movie-0522.html",
    "cover": "72.jpg",
    "oneLine": "专骗老人的小骗子，不小心骗到了自己亲生父亲的身上，而他父亲骗术才是祖师爷。"
  },
  {
    "title": "妙妙龙",
    "year": 2025,
    "region": "美国",
    "type": "动画电影",
    "genre": "动画 / 奇幻",
    "url": "details/movie-0523.html",
    "cover": "73.jpg",
    "oneLine": "一个不会喷火的废柴龙，用它的“不务正业”救了一座被诅咒的城堡。"
  },
  {
    "title": "雪国迷景",
    "year": 2024,
    "region": "日本",
    "type": "电影",
    "genre": "剧情、悬疑、爱情",
    "url": "details/movie-0524.html",
    "cover": "74.jpg",
    "oneLine": "男人在暴雪中醒来，身边是一具女尸，口袋里有一张结婚照，他却认不出照片里的自己。"
  },
  {
    "title": "碎块",
    "year": 2023,
    "region": "加拿大 / 法国",
    "type": "电影",
    "genre": "恐怖 / 科幻 / 身体恐怖",
    "url": "details/movie-0525.html",
    "cover": "75.jpg",
    "oneLine": "一位神经科学家发明了“记忆分存”技术，她将痛苦的回忆切割成碎块存入外置硬盘，直到硬盘里的碎片开始重组为一个新人格。"
  },
  {
    "title": "黑白无双第二季",
    "year": 2025,
    "region": "中国大陆",
    "type": "动漫",
    "genre": "奇幻， 动作",
    "url": "details/movie-0526.html",
    "cover": "76.jpg",
    "oneLine": "钟馗被贬人间后，地府大乱，黑无常和白无常不得不联手对抗来自西方地狱的入侵。"
  },
  {
    "title": "行尸之惧第四季",
    "year": 2023,
    "region": "美国",
    "type": "剧集",
    "genre": "恐怖, 剧情, 生存",
    "url": "details/movie-0527.html",
    "cover": "77.jpg",
    "oneLine": "核爆后的废土上，丧尸进化出智慧，一名前军医必须在人性与怪物间做出终极抉择。"
  },
  {
    "title": "霹雳钻",
    "year": 2025,
    "region": "美国",
    "type": "电影",
    "genre": "动作, 惊悚, 犯罪",
    "url": "details/movie-0528.html",
    "cover": "78.jpg",
    "oneLine": "一个退休的钻石切割师被逼重操旧业，却发现要他切的那颗钻石里藏着一枚微型炸弹。"
  },
  {
    "title": "知更鸟",
    "year": 2023,
    "region": "英国",
    "type": "电影",
    "genre": "悬疑 / 惊悚 / 剧情",
    "url": "details/movie-0529.html",
    "cover": "79.jpg",
    "oneLine": "伦敦出现了一名自称“知更鸟”的义警，他只惩罚那些钻法律空子的罪犯，而他下一个目标是一位知名律师。"
  },
  {
    "title": "霸王妖姬",
    "year": 2025,
    "region": "中国大陆",
    "type": "电影",
    "genre": "古装， 爱情， 奇幻",
    "url": "details/movie-0530.html",
    "cover": "80.jpg",
    "oneLine": "九尾狐化名苏妲己入宫，原想灭商，却被商纣王的孤独反噬了真心。"
  },
  {
    "title": "卷席筒",
    "year": 2023,
    "region": "中国大陆",
    "type": "电影",
    "genre": "古装 / 悬疑 / 剧情",
    "url": "details/movie-0531.html",
    "cover": "81.jpg",
    "oneLine": "一卷破旧的草席，牵扯出三十年前皇城血案背后的惊天秘密。"
  },
  {
    "title": "红雪",
    "year": 2023,
    "region": "俄罗斯",
    "type": "电影",
    "genre": "战争 / 历史",
    "url": "details/movie-0532.html",
    "cover": "82.jpg",
    "oneLine": "斯大林格勒的寒冬里，苏联女狙击新兵与德国顶级狙击王展开一场以血染红的猫鼠游戏。"
  },
  {
    "title": "谁先说分手",
    "year": 2024,
    "region": "韩国",
    "type": "电影",
    "genre": "爱情 / 剧情 / 喜剧",
    "url": "details/movie-0533.html",
    "cover": "83.jpg",
    "oneLine": "一对决定分手的情侣开始了一场诡异的竞赛——谁先说出“分手”二字，谁就要为整段感情买单。"
  },
  {
    "title": "爱的旅途上",
    "year": 2027,
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情 / 爱情",
    "url": "details/movie-0534.html",
    "cover": "84.jpg",
    "oneLine": "一对渐行渐远的夫妻，为送养女回家踏上千里自驾，却发现终点才是新的起点。"
  },
  {
    "title": "爱的所有格",
    "year": 2019,
    "region": "泰国",
    "type": "电影",
    "genre": "剧情 / 爱情",
    "url": "details/movie-0535.html",
    "cover": "85.jpg",
    "oneLine": "高中男生爱上比自己大二十岁的女教师，她用所有格“my”宣告所有权，却被社会碾碎。"
  },
  {
    "title": "印第安情诗",
    "year": 2022,
    "region": "美国, 加拿大",
    "type": "电影",
    "genre": "剧情, 爱情, 历史",
    "url": "details/movie-0536.html",
    "cover": "86.jpg",
    "oneLine": "19世纪，一位白人女诗人被派去“教化”印第安部落，却意外被他们的语言和一位沉默的勇士深深吸引。"
  },
  {
    "title": "粉雄救兵第六季",
    "year": 2025,
    "region": "美国",
    "type": "剧集",
    "genre": "真人秀，生活，励志",
    "url": "details/movie-0537.html",
    "cover": "87.jpg",
    "oneLine": "神奇五人组来到北欧极夜小镇，要改造一位在黑暗中迷失了30年的自闭灯塔守护人。"
  },
  {
    "title": "闪电狗",
    "year": 2008,
    "region": "美国",
    "type": "电影",
    "genre": "动画, 喜剧, 冒险",
    "url": "details/movie-0538.html",
    "cover": "88.jpg",
    "oneLine": "一只在好莱坞电影里扮演超级英雄的狗，坚信自己真的有超能力，直到它独自流落街头，遇到了两只现实中的“损友”。"
  },
  {
    "title": "华灯初上",
    "year": 2025,
    "region": "中国台湾",
    "type": "剧集",
    "genre": "剧情 / 悬疑 / 年代",
    "url": "details/movie-0539.html",
    "cover": "89.jpg",
    "oneLine": "1988年台北条通日式酒店，一位妈妈桑横死，八位陪酒小姐各怀秘密，而凶手就藏在每天点同一瓶酒的客人里。"
  },
  {
    "title": "荆棘的花冠",
    "year": 2024,
    "region": "韩国",
    "type": "电视剧",
    "genre": "宫斗, 复仇, 古装",
    "url": "details/movie-0540.html",
    "cover": "90.jpg",
    "oneLine": "宫中最低微的洗衣婢女，戴上染血的荆棘花冠，向三大妃嫔家族展开降维打击。"
  },
  {
    "title": "我的兄弟姐妹",
    "year": 2022,
    "region": "中国大陆",
    "type": "剧集",
    "genre": "家庭，剧情，年代",
    "url": "details/movie-0541.html",
    "cover": "91.jpg",
    "oneLine": "1990年一场车祸夺走父母，四个年幼的孩子被不同家庭收养，二十年后，一封遗书让他们开始寻找失散的彼此。"
  },
  {
    "title": "神通魔法石",
    "year": 2001,
    "region": "英国 / 美国",
    "type": "电影",
    "genre": "奇幻 / 冒险 / 家庭",
    "url": "details/movie-0542.html",
    "cover": "92.jpg",
    "oneLine": "戴眼镜的男孩发现自己会魔法，进入魔法学校后，与朋友一起守护能让人永生的魔法石。"
  },
  {
    "title": "9号秘事第五季",
    "year": 2024,
    "region": "英国",
    "type": "剧集",
    "genre": "悬疑 / 惊悚 / 喜剧",
    "url": "details/movie-0543.html",
    "cover": "93.jpg",
    "oneLine": "每个房间号都通往地狱，这一季的9号门背后藏着关于AI、直播和元宇宙的现代寓言。"
  },
  {
    "title": "爸妈死了，我却不想哭",
    "year": 2024,
    "region": "日本",
    "type": "电影",
    "genre": "剧情/家庭",
    "url": "details/movie-0544.html",
    "cover": "94.jpg",
    "oneLine": "四个从小被父母抛弃的年轻人，在父母同时遇难后重聚，发现没有人真正悲伤。"
  },
  {
    "title": "寅次郎的故事6 纯情篇",
    "year": 2027,
    "region": "日本",
    "type": "电影",
    "genre": "喜剧 / 家庭",
    "url": "details/movie-0545.html",
    "cover": "95.jpg",
    "oneLine": "寅次郎爱上了一位来小镇写生的盲人女画家，却发现她等待的其实是另一个男人。"
  },
  {
    "title": "前男友成了我上司",
    "year": 2025,
    "region": "中国",
    "type": "电视剧",
    "genre": "职场, 爱情, 喜剧",
    "url": "details/movie-0546.html",
    "cover": "96.jpg",
    "oneLine": "分手三年的前任突然空降成她的总监，上班第一天就给了她一个下马威。"
  },
  {
    "title": "南北少林",
    "year": 2026,
    "region": "中国大陆",
    "type": "电影",
    "genre": "动作 / 历史 / 武侠",
    "url": "details/movie-0547.html",
    "cover": "97.jpg",
    "oneLine": "清朝禁武令下，北少林棍僧与南少林武僧联手护送一份能够推翻暴政的密卷。"
  },
  {
    "title": "伤心先生",
    "year": 1998,
    "region": "中国香港",
    "type": "电视剧",
    "genre": "喜剧，爱情，都市",
    "url": "details/movie-0548.html",
    "cover": "98.jpg",
    "oneLine": "自称“伤心先生”的风水师专为痴男怨女改运，却发现自己天煞孤星，碰谁谁倒霉。"
  },
  {
    "title": "消失的士兵",
    "year": 2024,
    "region": "俄罗斯",
    "type": "电影",
    "genre": "战争、剧情、悬疑",
    "url": "details/movie-0549.html",
    "cover": "99.jpg",
    "oneLine": "一名苏联士兵在1944年的大撤退中掉队，他在密林里遇到一座住着七个“逃兵”的小木屋，每个人都在等战争结束——但战争从未结束。"
  },
  {
    "title": "风水逝家",
    "year": 2024,
    "region": "中国香港 / 马来西亚",
    "type": "电影",
    "genre": "惊悚 / 家庭",
    "url": "details/movie-0550.html",
    "cover": "100.jpg",
    "oneLine": "家族祖坟每十年被迫迁一次，每次迁坟后，对应的一位子孙就会离奇暴毙。"
  },
  {
    "title": "神鬼交锋",
    "year": 2025,
    "region": "美国",
    "type": "电影",
    "genre": "惊悚, 犯罪, 心理",
    "url": "details/movie-0551.html",
    "cover": "101.jpg",
    "oneLine": "FBI顶级谈判专家陷入连环陷阱，他面对的邪教教主竟能提前说出他下一句台词，包括他今晚会穿的袜子颜色。"
  },
  {
    "title": "女友的秘密",
    "year": 2025,
    "region": "中国大陆",
    "type": "电影",
    "genre": "悬疑、爱情、犯罪",
    "url": "details/movie-0552.html",
    "cover": "102.jpg",
    "oneLine": "程序员偷看了女友的加密日记，发现她竟然是一名在逃的连环杀手，而下一个目标就是自己。"
  },
  {
    "title": "噢，太阳",
    "year": 2022,
    "region": "法国",
    "type": "电影",
    "genre": "剧情, 奇幻",
    "url": "details/movie-0553.html",
    "cover": "103.jpg",
    "oneLine": "一名在巴黎建筑工地工作的塞内加尔工人，因为中暑开始看见法老和金字塔的幻象。"
  },
  {
    "title": "时光机器：回程",
    "year": 2024,
    "region": "英国",
    "type": "电影",
    "genre": "科幻 / 冒险",
    "url": "details/movie-0554.html",
    "cover": "104.jpg",
    "oneLine": "发明家造出时光机想救回儿子，却发现儿子才是促使他发明时光机的真正原因。"
  },
  {
    "title": "男人女神",
    "year": 2024,
    "region": "法国 / 意大利",
    "type": "电影",
    "genre": "喜剧 / 爱情",
    "url": "details/movie-0555.html",
    "cover": "105.jpg",
    "oneLine": "巴黎最毒舌的直男时尚评论家，一觉醒来发现自己成了所有男人眼中的“完美女神”。"
  },
  {
    "title": "朵儿的战争",
    "year": 2023,
    "region": "中国大陆",
    "type": "剧集",
    "genre": "战争 / 历史 / 女性",
    "url": "details/movie-0556.html",
    "cover": "106.jpg",
    "oneLine": "1938年，山东农村少女朵儿全家被日军杀害，她拿起猎枪躲进芦苇荡，成了让鬼子闻风丧胆的“芦苇鬼”。"
  },
  {
    "title": "风流世界",
    "year": 2025,
    "region": "美国",
    "type": "剧集",
    "genre": "喜剧 / 爱情 / 科幻",
    "url": "details/movie-0557.html",
    "cover": "107.jpg",
    "oneLine": "他在虚拟世界里是万人迷，现实中是社恐肥宅，直到他的四个网恋对象同时要线下奔现。"
  },
  {
    "title": "异教徒的标志",
    "year": 2025,
    "region": "美国",
    "type": "剧集",
    "genre": "悬疑 / 恐怖 / 宗教",
    "url": "details/movie-0558.html",
    "cover": "108.jpg",
    "oneLine": "符号学教授发现小镇失踪案背后有一个古老的异教符号，而他自己也被刻上了那个标记。"
  },
  {
    "title": "太太从军去",
    "year": 1978,
    "region": "台湾",
    "type": "电影",
    "genre": "喜剧战争",
    "url": "details/movie-0559.html",
    "cover": "109.jpg",
    "oneLine": "眷村太太为了找回被征召的丈夫，女扮男装混进部队，却成了全营最猛的兵。"
  },
  {
    "title": "埃利希博士的神奇的子弹",
    "year": 2024,
    "region": "德国",
    "type": "电影",
    "genre": "剧情, 战争, 奇幻",
    "url": "details/movie-0560.html",
    "cover": "110.jpg",
    "oneLine": "1916年战壕里，一位诺贝尔奖得主发明了能追踪细菌的“神奇子弹”，却发现自己也成了军队的人体靶子。"
  },
  {
    "title": "独立游戏时代",
    "year": 2024,
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情 / 青春",
    "url": "details/movie-0561.html",
    "cover": "111.jpg",
    "oneLine": "三个辍学青年在车库里做出爆款游戏，却在上市前夜发现代码里藏着一个人的遗书。"
  },
  {
    "title": "柴可夫斯基的妻子",
    "year": 2022,
    "region": "俄罗斯",
    "type": "电影",
    "genre": "剧情、传记、历史",
    "url": "details/movie-0562.html",
    "cover": "112.jpg",
    "oneLine": "天才音乐家背后的女人，用一生疯魔般的痴恋，将自己钉在了历史的耻辱柱上。"
  },
  {
    "title": "回望长安",
    "year": 2026,
    "region": "中国",
    "type": "电影",
    "genre": "历史, 剧情",
    "url": "details/movie-0563.html",
    "cover": "113.jpg",
    "oneLine": "一枚出土的残缺铜镜，让现代女考古学家与唐代宫廷乐师产生了跨越千年的感应。"
  },
  {
    "title": "风流铁将军",
    "year": 1995,
    "region": "中国香港",
    "type": "电影",
    "genre": "喜剧, 动作, 古装",
    "url": "details/movie-0564.html",
    "cover": "114.jpg",
    "oneLine": "一位游手好闲的将军之子，为了追回被骗的军饷，误打误撞成了真英雄。"
  },
  {
    "title": "缔创学校",
    "year": 2025,
    "region": "中国大陆",
    "type": "剧集",
    "genre": "剧情 / 悬疑",
    "url": "details/movie-0565.html",
    "cover": "115.jpg",
    "oneLine": "一所只招收“未来缔造者”的学校，入学第一课竟是让学生亲手销毁自己最珍贵的记忆。"
  },
  {
    "title": "感动裁判的玉儿",
    "year": 2026,
    "region": "中国大陆",
    "type": "电影",
    "genre": "运动 / 剧情",
    "url": "details/movie-0566.html",
    "cover": "116.jpg",
    "oneLine": "农村女孩玉儿参加省摔跤比赛，所有裁判都判她输，但她在赛后做了一件事，让全场裁判集体改判。"
  },
  {
    "title": "男人行不行2",
    "year": 2023,
    "region": "美国",
    "type": "电影",
    "genre": "喜剧/爱情",
    "url": "details/movie-0567.html",
    "cover": "117.jpg",
    "oneLine": "三对夫妻一起去度假村修复婚姻，结果发现自己要面对的不是伴侣，而是年轻时的自己。"
  },
  {
    "title": "阿卡普高第三季",
    "year": 2026,
    "region": "美国",
    "type": "剧集",
    "genre": "喜剧 / 剧情",
    "url": "details/movie-0568.html",
    "cover": "118.jpg",
    "oneLine": "时间来到 1990 年，阿卡普高最豪华的度假村里，穷小子马克西诺已经当上了领班，但新的挑战接踵而至。"
  },
  {
    "title": "电锯惊魂6",
    "year": 2021,
    "region": "美国",
    "type": "电影",
    "genre": "恐怖 / 惊悚",
    "url": "details/movie-0569.html",
    "cover": "119.jpg",
    "oneLine": "虽然“竖锯”已死，但他的游戏仍在继续，这次接受审判的是一家冷酷无情的医疗保险公司的CEO。"
  },
  {
    "title": "甜蜜坏朋友",
    "year": 2024,
    "region": "韩国",
    "type": "剧集",
    "genre": "校园 / 悬疑 / 同性",
    "url": "details/movie-0570.html",
    "cover": "120.jpg",
    "oneLine": "全校第一的乖乖女和全校最后一名的不良少女，交换日记后发现她们都想杀死同一个人。"
  },
  {
    "title": "威尔和格蕾丝第八季",
    "year": 2006,
    "region": "美国",
    "type": "剧集",
    "genre": "喜剧 / 同性",
    "url": "details/movie-0571.html",
    "cover": "121.jpg",
    "oneLine": "威尔决定和格蕾丝结束同居关系，他们在最后24小时里，把十二年的毒舌、拥抱和秘密全部清算。"
  },
  {
    "title": "枕边嫌疑人",
    "year": 2024,
    "region": "韩国",
    "type": "电影",
    "genre": "悬疑 / 惊悚",
    "url": "details/movie-0572.html",
    "cover": "122.jpg",
    "oneLine": "妻子每晚入睡后都会说梦话承认谋杀，丈夫在惊恐中调查，却发现枕边人根本不是他的妻子。"
  },
  {
    "title": "掏心恋习生",
    "year": 2027,
    "region": "中国台湾",
    "type": "电视剧",
    "genre": "爱情, 医疗",
    "url": "details/movie-0573.html",
    "cover": "123.jpg",
    "oneLine": "她移植了捐赠者的心脏后，开始疯狂爱上捐赠者的未婚夫。"
  },
  {
    "title": "红色之州",
    "year": 2026,
    "region": "美国",
    "type": "电影",
    "genre": "惊悚 / 政治 / 恐怖",
    "url": "details/movie-0574.html",
    "cover": "124.jpg",
    "oneLine": "三个自由派青年误入深红州的封闭小镇，发现镇民活在一个用圣经经文运行的真人“饥饿游戏”里。"
  },
  {
    "title": "妈妈，我不想坐牢",
    "year": 2026,
    "region": "中国台湾",
    "type": "剧集",
    "genre": "犯罪 / 家庭 / 剧情",
    "url": "details/movie-0575.html",
    "cover": "125.jpg",
    "oneLine": "16岁的少年为保护妈妈过失杀人，入狱前，妈妈对他说：“进去别怕，妈妈也进去陪你。”一年后，妈妈真的成了狱友。"
  },
  {
    "title": "人为何要创造",
    "year": 1968,
    "region": "美国",
    "type": "电影",
    "genre": "纪录片, 哲学, 艺术",
    "url": "details/movie-0576.html",
    "cover": "126.jpg",
    "oneLine": "一部没有旁白的纪录片，用拼贴动画和街头实验，叩问人类所有创造行为的终极动力。"
  },
  {
    "title": "盗版爱情",
    "year": 2010,
    "region": "中国",
    "type": "电影",
    "genre": "喜剧, 爱情",
    "url": "details/movie-0577.html",
    "cover": "127.jpg",
    "oneLine": "一张被误认为是“爱情教程”的盗版光碟，在北京的旧货市场引发了一场关于真爱的荒诞追逐战。"
  },
  {
    "title": "绝症女孩",
    "year": 2023,
    "region": "韩国",
    "type": "电视剧",
    "genre": "剧情, 爱情",
    "url": "details/movie-0578.html",
    "cover": "128.jpg",
    "oneLine": "确诊绝症的女孩决定独自等死，却被邻居家吵闹的小学生强行拉入了生活。"
  },
  {
    "title": "胡说霸道",
    "year": 2025,
    "region": "美国",
    "type": "电影",
    "genre": "喜剧, 犯罪, 剧情",
    "url": "details/movie-0579.html",
    "cover": "129.jpg",
    "oneLine": "一个怯懦的脱口秀演员被黑帮误认为顶级杀手，为了活命，他不得不在舞台上编造“杀人经验”来演给真正的黑帮看。"
  },
  {
    "title": "赛尔号之寻找凤凰神兽",
    "year": 2014,
    "region": "中国大陆",
    "type": "电影",
    "genre": "动画",
    "url": "details/movie-0580.html",
    "cover": "130.jpg",
    "oneLine": "赛尔号收到一个神秘信号，指向前宇宙最古老的精灵——凤凰神兽的沉睡地。"
  },
  {
    "title": "煎饼果子来一套",
    "year": 2025,
    "region": "中国大陆",
    "type": "电影",
    "genre": "喜剧 / 剧情",
    "url": "details/movie-0581.html",
    "cover": "131.jpg",
    "oneLine": "海归金融精英破产后被迫继承父亲的煎饼摊，却发现这片夜市卧虎藏龙。"
  },
  {
    "title": "北极狗",
    "year": 2019,
    "region": "加拿大",
    "type": "电影",
    "genre": "动画 / 冒险 / 家庭",
    "url": "details/movie-0582.html",
    "cover": "132.jpg",
    "oneLine": "北极圈内唯一不想拉雪橇的哈士奇，阴差阳错成了给圣诞老人送神秘包裹的“极地快递员”。"
  },
  {
    "title": "清明时节爱上我",
    "year": 2019,
    "region": "泰国",
    "type": "剧集",
    "genre": "爱情 / 奇幻 / 同性",
    "url": "details/movie-0583.html",
    "cover": "133.jpg",
    "oneLine": "每年清明，他都能看见那个坐在墓碑上等了他十年的少年鬼魂。"
  },
  {
    "title": "偷鸡摸狗",
    "year": 2023,
    "region": "中国台湾",
    "type": "电影",
    "genre": "喜剧 / 犯罪",
    "url": "details/movie-0584.html",
    "cover": "134.jpg",
    "oneLine": "两个城里笨贼去乡下偷鸡，结果被全村大爷大妈用农具反杀了一整夜。"
  },
  {
    "title": "王昭君1964国语",
    "year": 1964,
    "region": "中国香港",
    "type": "电影",
    "genre": "戏曲， 历史， 剧情",
    "url": "details/movie-0585.html",
    "cover": "135.jpg",
    "oneLine": "黄梅调经典，一代美人王昭君出塞和亲，弹着琵琶走过大漠，每一步都在回望长安。"
  },
  {
    "title": "校园外星人",
    "year": 2025,
    "region": "中国大陆",
    "type": "电视剧",
    "genre": "科幻 / 青春",
    "url": "details/movie-0586.html",
    "cover": "136.jpg",
    "oneLine": "高一新生林北发现同桌是外星人，而他的任务是：帮同桌隐藏身份，同时拿到期末考试第一名。"
  },
  {
    "title": "天谕第二季：苍古之绊",
    "year": 2025,
    "region": "中国大陆",
    "type": "动画剧集",
    "genre": "奇幻，仙侠，动作",
    "url": "details/movie-0587.html",
    "cover": "137.jpg",
    "oneLine": "沉睡千年的灵兽之女醒来，发现昔日战友已成敌人，世界正被一种“记忆之毒”吞噬。"
  },
  {
    "title": "奇袭胡家台",
    "year": 2025,
    "region": "中国大陆",
    "type": "电影",
    "genre": "战争, 动作",
    "url": "details/movie-0588.html",
    "cover": "138.jpg",
    "oneLine": "1942年，新四军一支小分队伪装成戏班子，奇袭日伪军重兵把守的胡家台。"
  },
  {
    "title": "女儿河",
    "year": 2006,
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情 / 家庭",
    "url": "details/movie-0589.html",
    "cover": "139.jpg",
    "oneLine": "一条养育了五代女人的女儿河，见证了最后一个“留守女人”如何打破宿命，送女儿渡河求学。"
  },
  {
    "title": "银翼情人",
    "year": 1992,
    "region": "加拿大",
    "type": "电影",
    "genre": "爱情, 战争",
    "url": "details/movie-0590.html",
    "cover": "140.jpg",
    "oneLine": "二战不列颠空战中，一对从未谋面的笔友飞行员与护士，在炮火中约定此生不渝。"
  },
  {
    "title": "宇宙怪兽大战争",
    "year": 1965,
    "region": "日本",
    "type": "电影",
    "genre": "科幻, 特摄, 怪兽",
    "url": "details/movie-0591.html",
    "cover": "141.jpg",
    "oneLine": "神秘圆盘控制地球怪兽袭击各大城市，人类不得已唤醒沉睡的哥斯拉应战。"
  },
  {
    "title": "欲望受害者",
    "year": 2026,
    "region": "美国",
    "type": "电影",
    "genre": "惊悚, 悬疑, 心理",
    "url": "details/movie-0592.html",
    "cover": "142.jpg",
    "oneLine": "五个互不相识的男人同时收到一条神秘约会邀请，醒来后发现自己被锁在一间密室，而他们有一个共同点：都伤害过同一个女人。"
  },
  {
    "title": "我家侯爷不宠我",
    "year": 2025,
    "region": "中国",
    "type": "电视剧",
    "genre": "古装 / 喜剧 / 爱情",
    "url": "details/movie-0593.html",
    "cover": "143.jpg",
    "oneLine": "一心只想退休享受美食的佛系女主，阴差阳错嫁给了号称“人间阎王”的冷面侯爷，没想到这位侯爷最大的爱好竟然是看她吃饭。"
  },
  {
    "title": "关于我妈的一切",
    "year": 2023,
    "region": "中国大陆",
    "type": "电影",
    "genre": "家庭 / 剧情",
    "url": "details/movie-0594.html",
    "cover": "144.jpg",
    "oneLine": "女儿嫌弃妈妈管得太多，直到她翻开妈妈藏在衣柜里的病危通知书。"
  },
  {
    "title": "无耻之徒第一季",
    "year": 2025,
    "region": "美国",
    "type": "剧集",
    "genre": "剧情/喜剧",
    "url": "details/movie-0595.html",
    "cover": "145.jpg",
    "oneLine": "在芝加哥南区，单身醉鬼父亲和六个熊孩子，为了活下去每天都在上演没有下限的骚操作。"
  },
  {
    "title": "制高点",
    "year": 2019,
    "region": "美国",
    "type": "电影",
    "genre": "动作 / 惊悚 / 灾难",
    "url": "details/movie-0596.html",
    "cover": "146.jpg",
    "oneLine": "一名退役狙击手被困在即将坍塌的全球第一高楼顶层，必须用一把老式步枪阻止楼下的恐怖分子炸毁城市电网。"
  },
  {
    "title": "空灵之境第二季",
    "year": 2024,
    "region": "英国",
    "type": "剧集",
    "genre": "奇幻",
    "url": "details/movie-0597.html",
    "cover": "147.jpg",
    "oneLine": "在意识与现实的夹缝“空灵之境”中，上一季逃出的主角发现自己从未离开，整个第二季是一场更深的骗局。"
  },
  {
    "title": "四十七浪人",
    "year": 2025,
    "region": "日本/美国",
    "type": "电影",
    "genre": "历史/动作",
    "url": "details/movie-0598.html",
    "cover": "148.jpg",
    "oneLine": "当忠于主人的四十七名武士被官府污蔑为“叛徒”，他们化身鬼魅，只为在樱花凋零前取下仇人首级。"
  },
  {
    "title": "阿衰第四季",
    "year": 2024,
    "region": "中国大陆",
    "type": "动画",
    "genre": "喜剧 / 校园",
    "url": "details/movie-0599.html",
    "cover": "149.jpg",
    "oneLine": "阿衰意外获得“学霸体验卡”，却每次在关键时刻掉链子，还把全校拖入一场荒唐的知识竞赛乌龙。"
  },
  {
    "title": "懵仔多情",
    "year": 2025,
    "region": "香港",
    "type": "电影",
    "genre": "喜剧，剧情，家庭",
    "url": "details/movie-0600.html",
    "cover": "150.jpg",
    "oneLine": "一个只有六岁智力的中年“懵仔”，为了保住患有阿兹海默症的父亲的面馆，开始学习经营生意。"
  },
  {
    "title": "九二神雕之痴心情长剑",
    "year": 1992,
    "region": "中国香港",
    "type": "电影",
    "genre": "武侠 / 爱情 / 奇幻",
    "url": "details/movie-0601.html",
    "cover": "1.jpg",
    "oneLine": "大侠独孤求败在雪崩中救起一名失忆女子，却发现她竟是十年前自己亲手封印的魔教圣女。"
  },
  {
    "title": "黑暗城市",
    "year": 1998,
    "region": "澳大利亚",
    "type": "电影",
    "genre": "科幻 / 悬疑 / 黑色电影",
    "url": "details/movie-0602.html",
    "cover": "2.jpg",
    "oneLine": "一个永远没有白天的城市里，男主角醒来发现自己能“调制”别人的记忆。"
  },
  {
    "title": "银色快手",
    "year": 1986,
    "region": "美国",
    "type": "电影",
    "genre": "剧情 / 运动",
    "url": "details/movie-0603.html",
    "cover": "3.jpg",
    "oneLine": "华尔街股票经纪人一夜破产，脱下西装成为一名纽约街头最不要命的自行车快递员。"
  },
  {
    "title": "斗破苍穹",
    "year": 2024,
    "region": "中国大陆",
    "type": "剧集 (40集)",
    "genre": "奇幻 / 冒险 / 古装",
    "url": "details/movie-0604.html",
    "cover": "4.jpg",
    "oneLine": "天才少年一朝沦为废柴，为了退婚，他踏上了收集异火的复仇之路。"
  },
  {
    "title": "村里来了个洋媳妇",
    "year": 2025,
    "region": "中国",
    "type": "网络剧/短剧",
    "genre": "喜剧/家庭",
    "url": "details/movie-0605.html",
    "cover": "5.jpg",
    "oneLine": "法国超模为爱嫁入陕北农村，第一次上旱厕、学扭秧歌、还被婆婆逼着喝小米粥坐月子。"
  },
  {
    "title": "天朝国库之谜2024",
    "year": 2024,
    "region": "中国大陆",
    "type": "电影",
    "genre": "冒险, 悬疑",
    "url": "details/movie-0606.html",
    "cover": "6.jpg",
    "oneLine": "一张意外出土的汉代帛书，将几个不同身份的人引向一座传说中会移动的国库。"
  },
  {
    "title": "摩天楼",
    "year": 2025,
    "region": "日本",
    "type": "电影",
    "genre": "剧情, 悬疑",
    "url": "details/movie-0607.html",
    "cover": "7.jpg",
    "oneLine": "在一座与世隔绝的巨型摩天楼里，楼层就是你的身份，底层居民决定向顶层发起一场史无前例的攀登。"
  },
  {
    "title": "送终人",
    "year": 2024,
    "region": "中国台湾",
    "type": "电影",
    "genre": "民俗恐怖",
    "url": "details/movie-0608.html",
    "cover": "8.jpg",
    "oneLine": "职业“送终人”为孤寡老人送终，却发现每位老人的死法都和他提前“看见”的一模一样。"
  },
  {
    "title": "天堂之雪",
    "year": 2023,
    "region": "挪威",
    "type": "电影",
    "genre": "剧情",
    "url": "details/movie-0609.html",
    "cover": "9.jpg",
    "oneLine": "为了寻找失踪女儿的下落，一位丧偶父亲独自穿越暴风雪中的极地荒原。"
  },
  {
    "title": "陆贞传奇",
    "year": 2026,
    "region": "中国大陆",
    "type": "剧集",
    "genre": "古装权谋",
    "url": "details/movie-0610.html",
    "cover": "10.jpg",
    "oneLine": "北齐末年，一个被抄家的官奴之女通过“女官科举”进入宫廷，从最低等的洒扫女官一路爬到尚书左仆射。"
  },
  {
    "title": "偷生",
    "year": 2026,
    "region": "中国香港",
    "type": "电影",
    "genre": "犯罪， 悬疑",
    "url": "details/movie-0611.html",
    "cover": "11.jpg",
    "oneLine": "穷困的整形医生在富豪死后通过换脸手术冒名顶替，却发现自己继承的是一个被诅咒的家族。"
  },
  {
    "title": "麻衣传奇",
    "year": 2024,
    "region": "日本 / 中国台湾",
    "type": "电影",
    "genre": "恐怖 / 民俗 / 悬疑",
    "url": "details/movie-0612.html",
    "cover": "12.jpg",
    "oneLine": "传说中的麻衣神婆不仅能给死人化妆，还能让尸体开口说出凶手。"
  },
  {
    "title": "17号音乐仓库第三季",
    "year": 2024,
    "region": "中国大陆",
    "type": "综艺",
    "genre": "音乐，真人秀",
    "url": "details/movie-0613.html",
    "cover": "13.jpg",
    "oneLine": "七位风格迥异的独立音乐人，共同经营一家限时营业的Livehouse，用音乐治愈城市里的孤独灵魂。"
  },
  {
    "title": "大理寺少卿游",
    "year": 2024,
    "region": "中国大陆",
    "type": "剧集",
    "genre": "古装 / 悬疑 / 探案",
    "url": "details/movie-0614.html",
    "cover": "14.jpg",
    "oneLine": "白猫少卿带领一众奇葩手下，在神都洛阳破解奇案，也在找寻自己变身的真相。"
  },
  {
    "title": "飞月情海",
    "year": 1995,
    "region": "中国香港",
    "type": "电影",
    "genre": "爱情 / 奇幻",
    "url": "details/movie-0615.html",
    "cover": "15.jpg",
    "oneLine": "1960年代的香港，一名落魄粤剧花旦在中秋夜被鬼魂追求，对方竟是她四十年前失踪的恋人。"
  },
  {
    "title": "时尚地狱",
    "year": 2025,
    "region": "美国 / 意大利",
    "type": "电视剧",
    "genre": "惊悚 / 剧情 / 时尚",
    "url": "details/movie-0616.html",
    "cover": "16.jpg",
    "oneLine": "风光无限的时尚女魔头，每天上班要经过一条只有她能看见的地狱走廊，而出口写着总编办公室。"
  },
  {
    "title": "诸神之战 3",
    "year": 2028,
    "region": "美国",
    "type": "电影",
    "genre": "动作, 奇幻",
    "url": "details/movie-0617.html",
    "cover": "17.jpg",
    "oneLine": "诸神黄昏之后，残存的神与人联手，对抗从地狱归来的亡灵军队。"
  },
  {
    "title": "高校教师",
    "year": 2023,
    "region": "日本",
    "type": "剧集",
    "genre": "剧情, 校园, 社会",
    "url": "details/movie-0618.html",
    "cover": "18.jpg",
    "oneLine": "一名高中女教师发现班上的天才学生其实是她的亲生儿子，而孩子的父亲是她高中时的老师。"
  },
  {
    "title": "小女巫碧碧2",
    "year": 2024,
    "region": "德国",
    "type": "电影",
    "genre": "家庭 / 奇幻 / 冒险",
    "url": "details/movie-0619.html",
    "cover": "19.jpg",
    "oneLine": "小女巫碧碧升入魔法中学，却发现自己最擅长的“快乐魔法”被全校视为最没用的课程。"
  },
  {
    "title": "快递惊魂",
    "year": 2023,
    "region": "韩国",
    "type": "电影",
    "genre": "动作, 犯罪",
    "url": "details/movie-0620.html",
    "cover": "20.jpg",
    "oneLine": "一名快递员在送货时发现包裹是炸弹，而下一个目标是他正在住院的女儿，他必须在两小时内跑遍全城拆除所有引爆点。"
  },
  {
    "title": "侠女游龙粤语",
    "year": 1994,
    "region": "香港",
    "type": "剧集",
    "genre": "武侠， 古装",
    "url": "details/movie-0621.html",
    "cover": "21.jpg",
    "oneLine": "皇宫游龙是他，江湖侠女是她，当龙困浅滩，她用一把剑撬开整个王朝。"
  },
  {
    "title": "陀枪师姐2021粤语",
    "year": 2021,
    "region": "中国香港",
    "type": "剧集",
    "genre": "警匪，动作，喜剧",
    "url": "details/movie-0622.html",
    "cover": "22.jpg",
    "oneLine": "新手女警陈三元与退役神枪手师姐组成奇葩搭档，用古董枪和现代高科技联手破获诡异连环枪击案。"
  },
  {
    "title": "寒枝折不断电影版",
    "year": 2025,
    "region": "中国大陆",
    "type": "电影",
    "genre": "古装、爱情、剧情",
    "url": "details/movie-0623.html",
    "cover": "23.jpg",
    "oneLine": "断枝再续，情缘难了；她带着前世记忆重生，只为改写那段注定无果的皇权之恋。"
  },
  {
    "title": "检察官：幸运儿",
    "year": 2021,
    "region": "韩国",
    "type": "剧集",
    "genre": "悬疑 / 律政",
    "url": "details/movie-0624.html",
    "cover": "24.jpg",
    "oneLine": "一名专替富人脱罪的检察官因车祸失忆，醒来后发现自己正是十五年前连环杀人案的唯一嫌疑人。"
  },
  {
    "title": "春闺风雨",
    "year": 2025,
    "region": "中国大陆",
    "type": "剧集",
    "genre": "爱情 / 古装 / 家庭",
    "url": "details/movie-0625.html",
    "cover": "25.jpg",
    "oneLine": "留洋归来的二小姐被迫替姐出嫁，却发现冷面军阀丈夫是她曾经的笔友。"
  },
  {
    "title": "山火",
    "year": 2024,
    "region": "澳大利亚",
    "type": "电影",
    "genre": "灾难, 剧情",
    "url": "details/movie-0626.html",
    "cover": "26.jpg",
    "oneLine": "2019年澳洲山火中，一个逃离城市的消防员家庭，在火墙追上来的前一夜，做出了最残酷的取舍。"
  },
  {
    "title": "虹猫蓝兔火凤凰",
    "year": 2010,
    "region": "中国大陆",
    "type": "电影",
    "genre": "动画 / 奇幻",
    "url": "details/movie-0627.html",
    "cover": "27.jpg",
    "oneLine": "黑小虎企图利用火山能量炼化七剑传人，虹猫必须在凤凰浴火重生之日，集结七剑合璧阻止大祸。"
  },
  {
    "title": "辍学生",
    "year": 2023,
    "region": "美国",
    "type": "剧集",
    "genre": "剧情 / 悬疑",
    "url": "details/movie-0628.html",
    "cover": "28.jpg",
    "oneLine": "天才高中生主动辍学调查好友之死，却一步步揭开一个利用尖子生做人体实验的黑色产业链。"
  },
  {
    "title": "憨夫成龙国语",
    "year": 2005,
    "region": "中国香港",
    "type": "剧集",
    "genre": "喜剧 / 爱情",
    "url": "details/movie-0629.html",
    "cover": "29.jpg",
    "oneLine": "一个说话结巴的穷小子，被错认成失忆的豪门继承人，开启爆笑错位人生。"
  },
  {
    "title": "亚特兰蒂斯 失落的大陆",
    "year": 2025,
    "region": "美国",
    "type": "电影",
    "genre": "科幻， 冒险， 奇幻",
    "url": "details/movie-0630.html",
    "cover": "30.jpg",
    "oneLine": "一支国际探险队深入马里亚纳海沟，发现了仍由远古能量运转的亚特兰蒂斯遗迹与最后的幸存者。"
  },
  {
    "title": "艾德·希兰：成名之路",
    "year": 2024,
    "region": "英国",
    "type": "电影",
    "genre": "传记, 音乐, 剧情",
    "url": "details/movie-0631.html",
    "cover": "31.jpg",
    "oneLine": "在成为格莱美巨星之前，黄老板曾是个在街头睡长椅、唱到喉咙出血的流浪歌手。"
  },
  {
    "title": "心动警报第一部",
    "year": 2018,
    "region": "韩国",
    "type": "剧集",
    "genre": "爱情, 剧情",
    "url": "details/movie-0632.html",
    "cover": "32.jpg",
    "oneLine": "大明星为掩盖绯闻，与普通营养师签订百日恋爱契约，却双双动了真心。"
  },
  {
    "title": "还是觉得你最好",
    "year": 2026,
    "region": "中国香港",
    "type": "电影",
    "genre": "爱情, 喜剧",
    "url": "details/movie-0633.html",
    "cover": "33.jpg",
    "oneLine": "分手五年的毒舌情侣在一档离婚综艺重逢，假装和好骗通告费，结果假戏真做，再次撕得不可开交。"
  },
  {
    "title": "亚当变奏曲",
    "year": 2024,
    "region": "英国",
    "type": "电影",
    "genre": "科幻、心理",
    "url": "details/movie-0634.html",
    "cover": "34.jpg",
    "oneLine": "科学家制造了三个亚当克隆体，分别继承了他的野心、善良和欲望。"
  },
  {
    "title": "与森林共舞",
    "year": 2023,
    "region": "巴西",
    "type": "电影",
    "genre": "冒险 / 环保",
    "url": "details/movie-0635.html",
    "cover": "35.jpg",
    "oneLine": "土著母亲为救重病女儿，必须穿越被伐木公司撕裂的雨林，找到被遗忘的治疗之树。"
  },
  {
    "title": "黑衣女人2：死亡天使",
    "year": 2014,
    "region": "英国",
    "type": "电影",
    "genre": "恐怖、惊悚",
    "url": "details/movie-0636.html",
    "cover": "36.jpg",
    "oneLine": "二战伦敦大轰炸期间，一群孤儿被转移到曾闹鬼的鳗鱼沼庄园，黑衣女人的诅咒再度苏醒。"
  },
  {
    "title": "末日巡逻队第四季",
    "year": 2025,
    "region": "美国",
    "type": "电视剧",
    "genre": "科幻 / 动作 / 喜剧",
    "url": "details/movie-0637.html",
    "cover": "37.jpg",
    "oneLine": "末日巡逻队发现地球每24小时就会重置到同一天，而唯一没有重置记忆的人是永远记不住事的机甲人。"
  },
  {
    "title": "鬼的士",
    "year": 2006,
    "region": "中国香港 / 泰国",
    "type": "电影",
    "genre": "恐怖 / 惊悚",
    "url": "details/movie-0638.html",
    "cover": "38.jpg",
    "oneLine": "午夜出租司机阿东总是拉到同一个女乘客，每次的目的地，都是不久后有人离奇死亡的现场。"
  },
  {
    "title": "圆梦之梦",
    "year": 2021,
    "region": "日本",
    "type": "电影",
    "genre": "奇幻, 温情",
    "url": "details/movie-0639.html",
    "cover": "39.jpg",
    "oneLine": "一家深藏在东京地下的“圆梦公司”，不是实现现实中的梦想，而是潜入客户梦境重塑最遗憾的记忆。"
  },
  {
    "title": "熊出没之怪兽计划2",
    "year": 2024,
    "region": "中国大陆",
    "type": "电影 / 动画",
    "genre": "喜剧 / 科幻 / 冒险",
    "url": "details/movie-0640.html",
    "cover": "40.jpg",
    "oneLine": "光头强捡到一颗能长出“情绪怪兽”的外星种子，熊大熊二为了森林安宁，必须帮他收拾这群烂摊子。"
  },
  {
    "title": "决战龙门",
    "year": 2025,
    "region": "中国大陆",
    "type": "网络电影",
    "genre": "动作/古装/喜剧",
    "url": "details/movie-0641.html",
    "cover": "41.jpg",
    "oneLine": "沙漠中的龙门客栈再次开门迎客，这次来的不是江湖大侠，而是一个押送“紧急快递”的倒霉镖师，和七个各怀鬼胎的“普通”旅客。"
  },
  {
    "title": "月亮呼吸的节奏",
    "year": 2024,
    "region": "日本",
    "type": "剧集",
    "genre": "动画, 音乐",
    "url": "details/movie-0642.html",
    "cover": "42.jpg",
    "oneLine": "每月满月之夜，女主能听见月亮哼出的旋律，而那是已逝摇滚歌手留下的求救信号。"
  },
  {
    "title": "再生时间",
    "year": 2023,
    "region": "日本",
    "type": "电影",
    "genre": "科幻 / 悬疑 / 爱情",
    "url": "details/movie-0643.html",
    "cover": "43.jpg",
    "oneLine": "丈夫通过黑科技进入妻子的记忆，却发现杀死妻子的凶手正是“自己”。"
  },
  {
    "title": "新青春梦里人",
    "year": 2024,
    "region": "中国香港",
    "type": "电影",
    "genre": "爱情，剧情",
    "url": "details/movie-0644.html",
    "cover": "44.jpg",
    "oneLine": "中年音乐人偶然发现，当年不告而别的初恋女友，原来一直在平行时空里等他。"
  },
  {
    "title": "龙樱2",
    "year": 2025,
    "region": "日本",
    "type": "剧集",
    "genre": "校园, 励志, 剧情",
    "url": "details/movie-0645.html",
    "cover": "45.jpg",
    "oneLine": "15年后，樱木律师重回濒临倒闭的龙山高中，这次他要带领最后的5名吊车尾学生挑战“AI入学考试”。"
  },
  {
    "title": "先婚后宠小娇妻第三季",
    "year": 2026,
    "region": "中国大陆",
    "type": "网剧",
    "genre": "爱情 / 喜剧 / 剧情",
    "url": "details/movie-0646.html",
    "cover": "46.jpg",
    "oneLine": "契约夫妻假戏真做后，这一季他们要面对的是“被迫离婚”的终极危机。"
  },
  {
    "title": "无情荒地有情天",
    "year": 2022,
    "region": "中国台湾",
    "type": "电影",
    "genre": "爱情 / 剧情 / 灾难",
    "url": "details/movie-0647.html",
    "cover": "47.jpg",
    "oneLine": "末世废土上，一个哑女和一个失明男依靠彼此的感官活下去，直到他们发现了一座还开着花的植物园。"
  },
  {
    "title": "非法正义",
    "year": 2024,
    "region": "韩国",
    "type": "电影",
    "genre": "犯罪动作",
    "url": "details/movie-0648.html",
    "cover": "48.jpg",
    "oneLine": "检察官女儿被凌辱后无罪释放，父亲脱掉法袍，成为地下法庭的“执行人”。"
  },
  {
    "title": "狂沙十万里",
    "year": 2024,
    "region": "中国大陆",
    "type": "剧集",
    "genre": "西部 / 冒险 / 犯罪",
    "url": "details/movie-0649.html",
    "cover": "49.jpg",
    "oneLine": "西北边境，一名失职的边境警察为了救回被掳走的女儿，独自追入死亡沙漠。"
  },
  {
    "title": "招魂2国语",
    "year": 2016,
    "region": "美国",
    "type": "电影",
    "genre": "恐怖, 惊悚",
    "url": "details/movie-0650.html",
    "cover": "50.jpg",
    "oneLine": "著名驱魔夫妇前往伦敦调查“恩菲尔德骚灵事件”，却发现自己这次要对抗的不仅仅是一个鬼魂，而是地狱本身的意志。"
  },
  {
    "title": "血的控诉",
    "year": 2021,
    "region": "韩国",
    "type": "电影",
    "genre": "犯罪、悬疑、剧情",
    "url": "details/movie-0651.html",
    "cover": "51.jpg",
    "oneLine": "韩国首位血迹形态分析女警，在调查一起连环杀人案时发现，所有血迹模式都与她十五年前被冤枉入狱的父亲死前留下的血书一模一样。"
  },
  {
    "title": "曾经的兄弟",
    "year": 2023,
    "region": "中国香港",
    "type": "电影",
    "genre": "动作 / 犯罪 / 剧情",
    "url": "details/movie-0652.html",
    "cover": "52.jpg",
    "oneLine": "卧底警察与黑帮兄弟情同手足，收网那天，兄弟用身体替他挡了一枪。"
  },
  {
    "title": "形意山河之火力拳开",
    "year": 2026,
    "region": "中国大陆",
    "type": "电影",
    "genre": "动作, 冒险",
    "url": "details/movie-0653.html",
    "cover": "53.jpg",
    "oneLine": "为了夺回能打开宝藏的《形意拳谱》，民国拳师兄弟在日军炮火下展开了一场拳拳到肉的火力对决。"
  },
  {
    "title": "小碧蓝幻想！",
    "year": 2024,
    "region": "日本",
    "type": "动画剧集",
    "genre": "奇幻 / 冒险 / 喜剧",
    "url": "details/movie-0654.html",
    "cover": "54.jpg",
    "oneLine": "一群萌系角色在冒险途中不断遇到降维打击的现代梗，被迫在“燃”与“搞笑”间反复横跳。"
  },
  {
    "title": "不死鸟之恋",
    "year": 2025,
    "region": "韩国",
    "type": "电影",
    "genre": "爱情 / 奇幻 / 剧情",
    "url": "details/movie-0655.html",
    "cover": "55.jpg",
    "oneLine": "女友患绝症去世后，男友发现自己可以不断回到过去，但每一次重逢都会缩短她的寿命。"
  },
  {
    "title": "济公新传",
    "year": 2024,
    "region": "中国",
    "type": "剧集",
    "genre": "奇幻, 喜剧",
    "url": "details/movie-0656.html",
    "cover": "56.jpg",
    "oneLine": "济公转世到2024年的互联网公司，用破扇子和葫芦收服资本妖精。"
  },
  {
    "title": "昨天、今天和明天",
    "year": 1963,
    "region": "意大利",
    "type": "电影",
    "genre": "喜剧, 爱情",
    "url": "details/movie-0657.html",
    "cover": "57.jpg",
    "oneLine": "三个不同的意大利女人，在三个时代里，用各自奇特的方式维持着爱情与金钱的平衡。"
  },
  {
    "title": "第二个夏天，不再遇见的你",
    "year": 2024,
    "region": "日本",
    "type": "电影",
    "genre": "爱情, 奇幻, 剧情",
    "url": "details/movie-0658.html",
    "cover": "58.jpg",
    "oneLine": "女孩得知自己只剩最后一个夏天，她许愿重来，却陷入无限循环，唯有让暗恋对象彻底忘记她才能解脱。"
  },
  {
    "title": "捍卫者联盟",
    "year": 2026,
    "region": "美国",
    "type": "剧集",
    "genre": "动作， 科幻， 超级英雄",
    "url": "details/movie-0659.html",
    "cover": "59.jpg",
    "oneLine": "五名身怀绝技的边缘人，被一个神秘信号召集，对抗企图控制城市的邪恶科技公司。"
  },
  {
    "title": "错会半生",
    "year": 2024,
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情/家庭",
    "url": "details/movie-0660.html",
    "cover": "60.jpg",
    "oneLine": "一次错误的误会让一对恋人半生未见，三十年后真相揭开，他们该如何面对彼此与逝去的时光？"
  },
  {
    "title": "我是岁月你是星辰",
    "year": 2021,
    "region": "中国大陆",
    "type": "电视剧",
    "genre": "奇幻，爱情，悬疑",
    "url": "details/movie-0661.html",
    "cover": "61.jpg",
    "oneLine": "一个活了几百年的“不死人”，遇上一个只剩一年寿命的“濒死之人”，他们互为解药，也互为毒药。"
  },
  {
    "title": "间谍教室第二季",
    "year": 2024,
    "region": "日本",
    "type": "剧集",
    "genre": "悬疑 / 校园 / 智斗",
    "url": "details/movie-0662.html",
    "cover": "62.jpg",
    "oneLine": "在顶级间谍培训机构“庭院”的第二学期，八名学生发现他们的班主任“老师”本人，才是上个学期任务失败的真正内鬼。"
  },
  {
    "title": "冲击点",
    "year": 2024,
    "region": "美国",
    "type": "电影",
    "genre": "动作， 惊悚",
    "url": "details/movie-0663.html",
    "cover": "63.jpg",
    "oneLine": "一群翼装飞行爱好者，被恐怖分子劫持，必须在千米高空完成一场生死接力。"
  },
  {
    "title": "从天而降的一亿颗星星",
    "year": 2018,
    "region": "日本 / 韩国",
    "type": "剧集",
    "genre": "爱情 / 悬疑 / 悲剧",
    "url": "details/movie-0664.html",
    "cover": "64.jpg",
    "oneLine": "失忆的危险男人像魔鬼一样吸引着富家女，随着记忆回归，残酷的身世真相如星陨落。"
  },
  {
    "title": "风雨送春归",
    "year": 2025,
    "region": "中国",
    "type": "电影",
    "genre": "剧情 / 历史",
    "url": "details/movie-0665.html",
    "cover": "65.jpg",
    "oneLine": "七旬老知青卖掉城市房产，回到五十年前下乡的村庄——却发现当年害他失去初恋的“告密者”，一直替他抚养着儿子。"
  },
  {
    "title": "寻找完美第5度",
    "year": 2014,
    "region": "美国",
    "type": "电影",
    "genre": "剧情 / 音乐",
    "url": "details/movie-0666.html",
    "cover": "66.jpg",
    "oneLine": "一个拥有绝对音感的天才少年，穷尽一生寻找人类耳朵能感受到的“完美第5度”。"
  },
  {
    "title": "灯塔山",
    "year": 2016,
    "region": "美国",
    "type": "电影",
    "genre": "恐怖 / 心理 / 惊悚",
    "url": "details/movie-0667.html",
    "cover": "67.jpg",
    "oneLine": "1890年代，两名守塔人被困孤岛灯塔，随着诡异的浓雾降临，他们开始怀疑对方根本不是人类。"
  },
  {
    "title": "我的青春期",
    "year": 2015,
    "region": "中国内地",
    "type": "剧集",
    "genre": "青春 / 家庭 / 喜剧",
    "url": "details/movie-0668.html",
    "cover": "68.jpg",
    "oneLine": "2003年，一个普通县城的高中生在高考、早恋和父母离异的三重夹击下艰难长大。"
  },
  {
    "title": "仇情血痕",
    "year": 2024,
    "region": "韩国",
    "type": "电影",
    "genre": "悬疑, 惊悚",
    "url": "details/movie-0669.html",
    "cover": "69.jpg",
    "oneLine": "顶级整容医生为毁容的女杀手换脸，却不知道自己换上的正是亡妻的脸。"
  },
  {
    "title": "无罪者",
    "year": 2021,
    "region": "德国",
    "type": "电影",
    "genre": "心理惊悚",
    "url": "details/movie-0670.html",
    "cover": "70.jpg",
    "oneLine": "一名专为死刑犯翻案的律师，在接手新案件后发现自己记忆中的“无辜者”可能全是谎言。"
  },
  {
    "title": "霸气女销售",
    "year": 2024,
    "region": "中国大陆",
    "type": "电视剧",
    "genre": "职场 / 喜剧",
    "url": "details/movie-0671.html",
    "cover": "71.jpg",
    "oneLine": "东北姑娘误入高端洋酒销售圈，用土味话术把法式浪漫卖给煤老板，月月销冠。"
  },
  {
    "title": "美丽时光",
    "year": 2002,
    "region": "中国台湾",
    "type": "电影",
    "genre": "剧情 / 家庭",
    "url": "details/movie-0672.html",
    "cover": "72.jpg",
    "oneLine": "两个底层少年在台北街头游荡，他们偷摩托车、打架、泡妞，却把每一天都当作最后一天来活。"
  },
  {
    "title": "不要见怪",
    "year": 2023,
    "region": "美国",
    "type": "电影",
    "genre": "喜剧 / 爱情",
    "url": "details/movie-0673.html",
    "cover": "73.jpg",
    "oneLine": "为了一辆车，她答应陪富家子的儿子度过青春期，结果自己先动了真心。"
  },
  {
    "title": "完美父母",
    "year": 2024,
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情 / 家庭 / 科幻",
    "url": "details/movie-0674.html",
    "cover": "74.jpg",
    "oneLine": "一对平凡夫妇为生下“完美孩子”接受基因改造，却发现完美背后是情感的真空。"
  },
  {
    "title": "省港旗兵4",
    "year": 2025,
    "region": "中国香港",
    "type": "电影",
    "genre": "动作 / 犯罪",
    "url": "details/movie-0675.html",
    "cover": "75.jpg",
    "oneLine": "三十年后，“省港旗兵”的后代重聚香港，不是为了打劫金铺，而是为了拿回祖辈的人头金。"
  },
  {
    "title": "拜物有理",
    "year": 2021,
    "region": "日本",
    "type": "剧集",
    "genre": "悬疑, 剧情",
    "url": "details/movie-0676.html",
    "cover": "76.jpg",
    "oneLine": "当一款能读懂人心的智能镜子走入家庭，四个女人的物欲秘密被逐一曝光，引向血腥复仇。"
  },
  {
    "title": "月亮中的亚马逊女人",
    "year": 2026,
    "region": "美国",
    "type": "电影",
    "genre": "喜剧, 奇幻, 冒险",
    "url": "details/movie-0677.html",
    "cover": "77.jpg",
    "oneLine": "三位中年家庭主妇被外星人绑至月球，却发现那里全是肌肉亚马逊女战士。"
  },
  {
    "title": "阴阳路十二之美容尸",
    "year": 2024,
    "region": "中国香港",
    "type": "电影",
    "genre": "恐怖, 惊悚, 灵异",
    "url": "details/movie-0678.html",
    "cover": "78.jpg",
    "oneLine": "一名整形医生发现，自己最成功的作品——一具被完美修复的女尸——每晚都会自行坐起来照镜子。"
  },
  {
    "title": "冒险奇兵：骷颅神殿",
    "year": 2026,
    "region": "美国",
    "type": "电影",
    "genre": "动作, 冒险",
    "url": "details/movie-0679.html",
    "cover": "79.jpg",
    "oneLine": "传奇冒险家意外离世，他的书呆子儿子和野路子女儿，必须抢先邪恶组织找到父亲的最后遗物。"
  },
  {
    "title": "祝你忌日快乐",
    "year": 2025,
    "region": "美国",
    "type": "电影",
    "genre": "恐怖、悬疑、循环流",
    "url": "details/movie-0680.html",
    "cover": "80.jpg",
    "oneLine": "继《忌日快乐》后，又一名少女陷入了时间循环，但这次她发现，无论怎么死，都会在第二天复活的，不止她一个。"
  },
  {
    "title": "梅地亚万圣节2",
    "year": 2024,
    "region": "美国",
    "type": "电影",
    "genre": "喜剧， 恐怖， 奇幻",
    "url": "details/movie-0681.html",
    "cover": "81.jpg",
    "oneLine": "梅地亚大妈本想在家安静过万圣节，结果她的房子成了时空裂缝，各路经典恐怖反派在此开派对。"
  },
  {
    "title": "玩转脑情人",
    "year": 2018,
    "region": "韩国",
    "type": "电影",
    "genre": "爱情, 喜剧, 奇幻",
    "url": "details/movie-0682.html",
    "cover": "82.jpg",
    "oneLine": "失明女孩通过脑机接口“看到”了世界，却发现自己脑中完美男友的形象，竟来自闺蜜的渣男前任。"
  },
  {
    "title": "少女地球守护者",
    "year": 2024,
    "region": "韩国",
    "type": "电影",
    "genre": "科幻, 剧情, 悬疑",
    "url": "details/movie-0683.html",
    "cover": "83.jpg",
    "oneLine": "在人类全部撤离的地球上，最后一个留守的少女发现地核的“死亡”其实是地球的呼吸。"
  },
  {
    "title": "马桶妖怪",
    "year": 2025,
    "region": "日本",
    "type": "电影",
    "genre": "恐怖, 喜剧, 奇幻",
    "url": "details/movie-0684.html",
    "cover": "84.jpg",
    "oneLine": "东京出现“马桶诅咒”，只要冲水超过三次，就会从下水道爬出吃人的黏液妖怪。"
  },
  {
    "title": "真情来电",
    "year": 2024,
    "region": "中国台湾",
    "type": "电影",
    "genre": "爱情, 喜剧, 奇幻",
    "url": "details/movie-0685.html",
    "cover": "85.jpg",
    "oneLine": "一名电信诈骗新手打电话行骗，却每次都打到同一个落魄程序员的手机上，两人竟因此相爱了。"
  },
  {
    "title": "汪汪队立大功第八季",
    "year": 2023,
    "region": "美国 / 加拿大",
    "type": "剧集",
    "genre": "动画 / 儿童 / 冒险 / 教育",
    "url": "details/movie-0686.html",
    "cover": "86.jpg",
    "oneLine": "冒险湾出现了一台能复制任何物品的捣蛋机器，汪汪队必须阻止它复制整个城市。"
  },
  {
    "title": "消失第三者",
    "year": 2023,
    "region": "日本",
    "type": "电影",
    "genre": "悬疑, 惊悚",
    "url": "details/movie-0687.html",
    "cover": "87.jpg",
    "oneLine": "丈夫的情妇突然人间蒸发，所有证据都指向他，而他的妻子却在每晚说梦话时，用那个情妇的口吻说话。"
  },
  {
    "title": "达西玛姨娘",
    "year": 2021,
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情 / 历史 / 家庭",
    "url": "details/movie-0688.html",
    "cover": "88.jpg",
    "oneLine": "一九三七年，达西玛从农奴成为王爷府姨娘，她用三十年下一盘复仇大棋。"
  },
  {
    "title": "黑道特战队",
    "year": 2025,
    "region": "韩国",
    "type": "电影",
    "genre": "动作 / 喜剧",
    "url": "details/movie-0689.html",
    "cover": "89.jpg",
    "oneLine": "为了洗白，黑帮老大派五个最废的小弟去服兵役，结果他们被编入了最精锐的特战队。"
  },
  {
    "title": "拉瑞克劳",
    "year": 2011,
    "region": "美国",
    "type": "电影",
    "genre": "剧情 / 喜剧 / 爱情",
    "url": "details/movie-0690.html",
    "cover": "90.jpg",
    "oneLine": "海军退伍老兵拉瑞被裁员后去社区大学旁听，发现教公共演讲的女教授正经历着比他更糟的中年崩塌。"
  },
  {
    "title": "发光的河流",
    "year": 2023,
    "region": "日本",
    "type": "电影",
    "genre": "奇幻、剧情",
    "url": "details/movie-0691.html",
    "cover": "91.jpg",
    "oneLine": "每到夏夜，镇上一段废弃河道就会发出荧光，传说那是溺水者未说出口的遗言。"
  },
  {
    "title": "吸血鬼猎人巴菲第四季",
    "year": 1999,
    "region": "美国",
    "type": "电视剧",
    "genre": "动作, 奇幻, 恐怖",
    "url": "details/movie-0692.html",
    "cover": "92.jpg",
    "oneLine": "进入大学的巴菲，不仅面临着高数挂科的烦恼，还要对付一个没有实体的军方超级恶魔。"
  },
  {
    "title": "黄金神威最终章",
    "year": 2026,
    "region": "日本",
    "type": "电影",
    "genre": "动作, 冒险, 历史",
    "url": "details/movie-0693.html",
    "cover": "93.jpg",
    "oneLine": "为了争夺最后的阿伊努黄金，杉本、阿希莉与鹤见中尉在北海道的活火山口展开决战。"
  },
  {
    "title": "善良的夏吾冬",
    "year": 2024,
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情 / 家庭",
    "url": "details/movie-0694.html",
    "cover": "94.jpg",
    "oneLine": "青海牧区的自闭症男孩夏吾冬，因为能听懂牦牛的话，成了全村的奇迹。"
  },
  {
    "title": "超越巴肯记录",
    "year": 2023,
    "region": "美国",
    "type": "电影",
    "genre": "运动/剧情",
    "url": "details/movie-0695.html",
    "cover": "95.jpg",
    "oneLine": "一名独腿登山者挑战世界最难攀爬的巴肯峰，却遭遇致命雪崩。"
  },
  {
    "title": "芭蕾奇缘",
    "year": 2018,
    "region": "法国/加拿大",
    "type": "电影",
    "genre": "动画，歌舞",
    "url": "details/movie-0696.html",
    "cover": "96.jpg",
    "oneLine": "一只被遗弃的小猫误入巴黎歌剧院，穿上芭蕾舞鞋成了“首席猫舞者”。"
  },
  {
    "title": "樱桃呀，恋爱吧",
    "year": 2024,
    "region": "日本",
    "type": "电影",
    "genre": "爱情/青春",
    "url": "details/movie-0697.html",
    "cover": "97.jpg",
    "oneLine": "为了做出奶奶最爱的樱桃蛋糕，笨拙高中生和冷酷的甜品天才在暑假里相爱了。"
  },
  {
    "title": "回魂唱片",
    "year": 2025,
    "region": "日本",
    "type": "电影",
    "genre": "恐怖, 悬疑",
    "url": "details/movie-0698.html",
    "cover": "98.jpg",
    "oneLine": "一张1978年的绝版黑胶唱片，一旦播放，所有人都会在听到歌声的第42分钟离奇死亡。"
  },
  {
    "title": "名侦探柯南：黑铁的鱼影",
    "year": 2023,
    "region": "日本",
    "type": "电影",
    "genre": "动画悬疑",
    "url": "details/movie-0699.html",
    "cover": "99.jpg",
    "oneLine": "柯南与灰原哀被卷入黑衣组织的终极陷阱，太平洋上的“海洋生物研究站”实为埋葬二人大数据的海底坟墓。"
  },
  {
    "title": "骗徒艳福",
    "year": 2023,
    "region": "中国香港",
    "type": "电影",
    "genre": "黑色喜剧",
    "url": "details/movie-0700.html",
    "cover": "100.jpg",
    "oneLine": "三个老千想骗一位富婆，没想到富婆是骗中骗，而四人都是同一场诈骗案的受害者。"
  },
  {
    "title": "卡罗尔·马蒂厄国语",
    "year": 2025,
    "region": "法国",
    "type": "电影",
    "genre": "剧情 / 传记",
    "url": "details/movie-0701.html",
    "cover": "101.jpg",
    "oneLine": "法国语言学家来到中国编字典，却被一个汉字彻底改变了人生。"
  },
  {
    "title": "狼女传奇",
    "year": 1985,
    "region": "法国 / 加拿大",
    "type": "电影",
    "genre": "冒险， 家庭， 奇幻",
    "url": "details/movie-0702.html",
    "cover": "102.jpg",
    "oneLine": "一个被狼养大的女孩，在失去狼母后，独自穿越数百公里森林，去寻找人类母亲。"
  },
  {
    "title": "享受吧！罗马",
    "year": 2025,
    "region": "意大利",
    "type": "电影",
    "genre": "喜剧, 爱情, 剧情",
    "url": "details/movie-0703.html",
    "cover": "103.jpg",
    "oneLine": "被退婚的北京烤鸭女厨逃到罗马，用一根擀面杖撬开了米其林三星厨房的侧门。"
  },
  {
    "title": "警视厅遗失物搜查档案",
    "year": 2025,
    "region": "日本",
    "type": "剧集",
    "genre": "悬疑，犯罪",
    "url": "details/movie-0704.html",
    "cover": "104.jpg",
    "oneLine": "警视厅角落的遗失物中心，却能透过无人认领的破旧雨伞，侦破冷藏三十年的连环杀人案。"
  },
  {
    "title": "面具之后",
    "year": 2022,
    "region": "美国",
    "type": "电影",
    "genre": "剧情 / 动作 / 超级英雄",
    "url": "details/movie-0705.html",
    "cover": "105.jpg",
    "oneLine": "一个梦想成为超级英雄的墨西哥裔少女，却发现自己继承的是一份来自黑帮的反派遗产。"
  },
  {
    "title": "碧眼花豹",
    "year": 2025,
    "region": "南非",
    "type": "电影",
    "genre": "纪录片，冒险，自然",
    "url": "details/movie-0706.html",
    "cover": "106.jpg",
    "oneLine": "一只拥有罕见碧蓝色眼睛的花豹母亲，在旱季的非洲草原上独自抚养三只幼崽。"
  },
  {
    "title": "炭疽第二季",
    "year": 2025,
    "region": "美国",
    "type": "电视剧",
    "genre": "政治惊悚",
    "url": "details/movie-0707.html",
    "cover": "107.jpg",
    "oneLine": "第一季的炭疽袭击只是序幕，第二季揭露真正的武器不是病毒，而是公众的信任。"
  },
  {
    "title": "儿子2024",
    "year": 2024,
    "region": "中国大陆",
    "type": "电影",
    "genre": "家庭, 剧情",
    "url": "details/movie-0708.html",
    "cover": "108.jpg",
    "oneLine": "一个望子成龙的父亲，与他即将高考却突然决定去当电工的儿子之间，一场关于“成功”定义的无声战争。"
  },
  {
    "title": "俄狄浦湿",
    "year": 2026,
    "region": "希腊",
    "type": "电影",
    "genre": "剧情，黑色幽默",
    "url": "details/movie-0709.html",
    "cover": "109.jpg",
    "oneLine": "一个永远在下雨的城市里，雨具厂继承人无意间杀死了身为黑帮老大的生父。"
  },
  {
    "title": "单身狗奇遇记",
    "year": 2025,
    "region": "中国大陆",
    "type": "电视剧",
    "genre": "喜剧, 爱情, 奇幻",
    "url": "details/movie-0710.html",
    "cover": "110.jpg",
    "oneLine": "一个万年单身狗许愿“想谈恋爱”，结果他的柯基犬变成了一个大美女，非要嫁给他。"
  },
  {
    "title": "国师大人凶且甜",
    "year": 2024,
    "region": "中国大陆",
    "type": "剧集",
    "genre": "古装 / 爱情 / 喜剧",
    "url": "details/movie-0711.html",
    "cover": "111.jpg",
    "oneLine": "美食博主穿越成和亲公主，却把阴鸷国师喂成了粘人小奶狗。"
  },
  {
    "title": "未完的天空",
    "year": 2025,
    "region": "英国",
    "type": "电影",
    "genre": "科幻, 剧情, 爱情",
    "url": "details/movie-0712.html",
    "cover": "112.jpg",
    "oneLine": "一种“记忆上载天空”的技术普及后，人们不再交流，只抬头看天上的“未完故事”。"
  },
  {
    "title": "遇上塔罗牌情人",
    "year": 2025,
    "region": "中国香港",
    "type": "电影",
    "genre": "爱情 / 喜剧 / 奇幻",
    "url": "details/movie-0713.html",
    "cover": "113.jpg",
    "oneLine": "坚定的无神论女记者抽中一张“死神”塔罗牌，第二天，那个预言会让她失身的男人真的出现了。"
  },
  {
    "title": "金鎗独行侠",
    "year": 2023,
    "region": "中国香港",
    "type": "电影 动作, 武侠",
    "genre": "枪战, 江湖",
    "url": "details/movie-0714.html",
    "cover": "114.jpg",
    "oneLine": "民国乱世，一位使用纯金定制左轮手枪的枪手，单枪匹马对抗整个军阀势力。"
  },
  {
    "title": "萨拉丁",
    "year": 2024,
    "region": "埃及 / 叙利亚",
    "type": "电视剧",
    "genre": "历史、战争、传记",
    "url": "details/movie-0715.html",
    "cover": "115.jpg",
    "oneLine": "从库尔德奴仆到埃及苏丹，萨拉丁用一生践行骑士精神，他在耶路撒冷城下面对狮心王理查，以仁慈战胜了野蛮。"
  },
  {
    "title": "七个隆咚锵咚锵",
    "year": 2024,
    "region": "中国台湾",
    "type": "电影",
    "genre": "喜剧，音乐，歌舞",
    "url": "details/movie-0716.html",
    "cover": "116.jpg",
    "oneLine": "一支废柴醒狮队为了赢回尊严，找来一群乌合之众重组乐队，要用摇滚乐挑战传统庙会。"
  },
  {
    "title": "13",
    "year": 2025,
    "region": "美国 / 德国",
    "type": "电影",
    "genre": "动作 / 惊悚",
    "url": "details/movie-0717.html",
    "cover": "117.jpg",
    "oneLine": "一个走投无路的年轻人，顶替死囚身份，参加一场名为“13”的俄罗斯轮盘地下拳赛，每赢一场，奖金翻倍，但失败的代价是死亡。"
  },
  {
    "title": "《罗刹人》",
    "year": 2025,
    "region": "中国大陆",
    "type": "电影",
    "genre": "奇幻 / 古装 / 寓言",
    "url": "details/movie-0718.html",
    "cover": "118.jpg",
    "oneLine": "一名落魄书生漂洋过海来到罗刹国，这里以丑为美，他因长得太帅被判流放。"
  },
  {
    "title": "圣子",
    "year": 2024,
    "region": "法国",
    "type": "电影",
    "genre": "剧情, 宗教, 悬疑",
    "url": "details/movie-0719.html",
    "cover": "119.jpg",
    "oneLine": "法国偏远小镇，一个八岁的盲童突然声称自己能“看见”上帝，而他的每一次预言都在以诡异的方式应验。"
  },
  {
    "title": "灵能百分百第三季",
    "year": 2022,
    "region": "日本",
    "type": "动画",
    "genre": "动作 / 喜剧 / 奇幻",
    "url": "details/movie-0720.html",
    "cover": "120.jpg",
    "oneLine": "龙套的“神树”化身为宗教，全城被洗脑，而他必须亲手拔掉自己的超能力之根。"
  },
  {
    "title": "双杀",
    "year": 2022,
    "region": "香港 / 中国大陆",
    "type": "电影",
    "genre": "动作, 犯罪, 悬疑",
    "url": "details/movie-0721.html",
    "cover": "121.jpg",
    "oneLine": "顶尖杀手阿鬼接到的终极任务是杀掉自己的搭档，可他不知道，搭档也接到了同样的任务。"
  },
  {
    "title": "康威的圣诞节",
    "year": 2023,
    "region": "美国",
    "type": "电影",
    "genre": "家庭, 奇幻, 喜剧",
    "url": "details/movie-0722.html",
    "cover": "122.jpg",
    "oneLine": "一个工作狂父亲在圣诞夜被困在时间循环里，必须学会陪伴家人才可能进入12月26日。"
  },
  {
    "title": "四千金",
    "year": 2023,
    "region": "中国台湾",
    "type": "剧集",
    "genre": "家庭 / 喜剧",
    "url": "details/movie-0723.html",
    "cover": "123.jpg",
    "oneLine": "性格迥异的四姐妹在母亲突然离世后，被迫挤在同一屋檐下经营一家即将倒闭的老茶馆。"
  },
  {
    "title": "新逃学威龙",
    "year": 2025,
    "region": "中国大陆",
    "type": "电影",
    "genre": "喜剧, 动作",
    "url": "details/movie-0724.html",
    "cover": "124.jpg",
    "oneLine": "中年卧底警察重返高中追查黑帮军火案，却被女儿的同班同学当成了怪叔叔。"
  },
  {
    "title": "医院风云：出埃及记",
    "year": 2022,
    "region": "丹麦",
    "type": "剧集",
    "genre": "剧情 / 奇幻 / 悬疑",
    "url": "details/movie-0725.html",
    "cover": "125.jpg",
    "oneLine": "丹麦王国医院终于要被拆除了，地下的邪恶势力、沉睡的女主以及旧鬼魂们，必须在废墟之上做出最终的了断。"
  },
  {
    "title": "埃菲尔铁塔",
    "year": 2021,
    "region": "法国",
    "type": "电影",
    "genre": "爱情 / 历史 / 剧情",
    "url": "details/movie-0726.html",
    "cover": "126.jpg",
    "oneLine": "为了逃避无趣的婚约，工程师埃菲尔在巴黎的工地边建塔边陷入了一段危险的激情。"
  },
  {
    "title": "横冲直撞打江山",
    "year": 1998,
    "region": "中国香港",
    "type": "电影",
    "genre": "喜剧 / 黑帮 / 动作",
    "url": "details/movie-0727.html",
    "cover": "127.jpg",
    "oneLine": "两个最怂的古惑仔阴差阳错干掉了黑帮老大，自己当上了老大，却发现打江山容易，守江山难。"
  },
  {
    "title": "欢迎来到丛林",
    "year": 2025,
    "region": "美国",
    "type": "电影",
    "genre": "喜剧, 冒险, 动作",
    "url": "details/movie-0728.html",
    "cover": "128.jpg",
    "oneLine": "一群养尊处优的互联网大厂员工被扔进亚马逊，却发现带领他们的“特种兵教官”是个骗子。"
  },
  {
    "title": "添丁冷战",
    "year": 2025,
    "region": "中国香港",
    "type": "剧集",
    "genre": "喜剧，家庭，剧情",
    "url": "details/movie-0729.html",
    "cover": "129.jpg",
    "oneLine": "婆婆想抱孙组建监视团，儿媳想丁克搞事业，夹在中间的儿子展开一场“添丁冷战”。"
  },
  {
    "title": "良夜苦果",
    "year": 2015,
    "region": "英国",
    "type": "电影",
    "genre": "剧情 / 爱情",
    "url": "details/movie-0730.html",
    "cover": "130.jpg",
    "oneLine": "一个已婚男人在出差酒店与陌生女子发生了一夜情，两年后的平安夜，那个女子牵着一个小孩敲开了他的家门。"
  },
  {
    "title": "黄金渔场",
    "year": 2024,
    "region": "韩国",
    "type": "电影",
    "genre": "惊悚, 悬疑",
    "url": "details/movie-0731.html",
    "cover": "131.jpg",
    "oneLine": "七个逃债者被重金诱骗到一座孤岛参加“黄金渔场”真人秀，却发现唯一的规则就是互相杀戮。"
  },
  {
    "title": "死于枪战",
    "year": 2021,
    "region": "美国",
    "type": "电影",
    "genre": "动作, 爱情, 犯罪",
    "url": "details/movie-0732.html",
    "cover": "132.jpg",
    "oneLine": "敌对家族杀手的孩子在血泊中相爱，他们唯一的婚礼计划是——谁能活过今天。"
  },
  {
    "title": "我的名字叫朱莉娅·罗斯",
    "year": 2025,
    "region": "美国",
    "type": "电影",
    "genre": "悬疑, 犯罪",
    "url": "details/movie-0733.html",
    "cover": "133.jpg",
    "oneLine": "醒来后所有人都叫她朱莉娅，但她知道自己其实是失踪的亿万富翁之女。"
  },
  {
    "title": "扁担·姑娘",
    "year": 1998,
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情， 文艺",
    "url": "details/movie-0734.html",
    "cover": "134.jpg",
    "oneLine": "一个从农村进城靠扁担挑货为生的姑娘，在城市的钢筋水泥中追寻一个遥不可及的梦。"
  },
  {
    "title": "舍我其谁2021",
    "year": 2021,
    "region": "中国大陆",
    "type": "剧集",
    "genre": "剧情, 运动, 青春",
    "url": "details/movie-0735.html",
    "cover": "135.jpg",
    "oneLine": "一个被棋院开除的天才少女，用直播教人下围棋的方式，向整个体制发起了最温柔的复仇。"
  },
  {
    "title": "赛车英魂",
    "year": 2023,
    "region": "日本",
    "type": "电影",
    "genre": "动画, 运动",
    "url": "details/movie-0736.html",
    "cover": "136.jpg",
    "oneLine": "废柴高中生被传奇赛车手的灵魂附体，两人共用一具肉身，向世界耐力锦标赛发起冲击。"
  },
  {
    "title": "兽性",
    "year": 2024,
    "region": "韩国",
    "type": "电影",
    "genre": "犯罪动作",
    "url": "details/movie-0737.html",
    "cover": "137.jpg",
    "oneLine": "卧底警察潜入走私珍稀动物的黑帮，三年后他发现自己比罪犯更像野兽。"
  },
  {
    "title": "死亡游戏2016",
    "year": 2016,
    "region": "日本",
    "type": "电影",
    "genre": "恐怖, 惊悚",
    "url": "details/movie-0738.html",
    "cover": "138.jpg",
    "oneLine": "一群高中生无意中播放了一盘老式录像带，必须按规则玩完一场死亡游戏。"
  },
  {
    "title": "嘿！你大事很妙",
    "year": 2025,
    "region": "中国大陆",
    "type": "剧集",
    "genre": "喜剧, 奇幻",
    "url": "details/movie-0739.html",
    "cover": "139.jpg",
    "oneLine": "废柴青年被“大事不妙”系统绑定，每次危机都会触发不靠谱的超能力，结果把生活搅得越来越“妙”。"
  },
  {
    "title": "人生七年3",
    "year": 2027,
    "region": "英国",
    "type": "剧集",
    "genre": "纪录片， 社会， 剧情",
    "url": "details/movie-0740.html",
    "cover": "140.jpg",
    "oneLine": "时隔七年，再次追踪那十四个孩子，这次他们35岁，有人成了议员，有人进了监狱。"
  },
  {
    "title": "豪情英雄",
    "year": 1999,
    "region": "美国",
    "type": "电影",
    "genre": "动作、西部、冒险",
    "url": "details/movie-0741.html",
    "cover": "141.jpg",
    "oneLine": "一名退役CIA特工隐居西部小镇，为救被毒枭绑架的养女重出江湖。"
  },
  {
    "title": "勇士不哭",
    "year": 2026,
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情 / 运动 / 儿童",
    "url": "details/movie-0742.html",
    "cover": "142.jpg",
    "oneLine": "山区留守儿童靠一本破烂的摔跤教材，独自训练想要打败市里的冠军。"
  },
  {
    "title": "欲望过程",
    "year": 2004,
    "region": "法国 / 意大利",
    "type": "电影",
    "genre": "剧情 / 情色 / 心理",
    "url": "details/movie-0743.html",
    "cover": "143.jpg",
    "oneLine": "一对结婚十年的夫妻决定做一场实验：每天各自去见一位陌生人，晚上回来讲述全过程，直到一方动真情。"
  },
  {
    "title": "男狐聊斋",
    "year": 2024,
    "region": "中国大陆",
    "type": "剧集",
    "genre": "古装、奇幻、爱情",
    "url": "details/movie-0744.html",
    "cover": "144.jpg",
    "oneLine": "书生救下一只白狐，白狐化形成男，说要“以身相许”，书生慌了。"
  },
  {
    "title": "大唐玄奘",
    "year": 2027,
    "region": "中国大陆",
    "type": "电影",
    "genre": "历史 / 传记 / 冒险",
    "url": "details/movie-0745.html",
    "cover": "145.jpg",
    "oneLine": "不是西游记，是真实的玄奘：偷渡出境、穿越沙漠、被高昌王强留、在印度辩经封神。"
  },
  {
    "title": "超级玩家的崛起",
    "year": 2023,
    "region": "中国大陆",
    "type": "剧集",
    "genre": "科幻 / 动作 / 悬疑",
    "url": "details/movie-0746.html",
    "cover": "146.jpg",
    "oneLine": "一名落魄的电竞陪玩发现自己十年前删除的游戏角色，正在现实世界中屠杀玩家。"
  },
  {
    "title": "爱寻迷",
    "year": 2014,
    "region": "中国香港",
    "type": "电影",
    "genre": "爱情 / 剧情 / 悬疑",
    "url": "details/movie-0747.html",
    "cover": "147.jpg",
    "oneLine": "三个女人通过交友软件约会，却相继遇到同一个神秘男人。"
  },
  {
    "title": "泷之白糸",
    "year": 1933,
    "region": "日本",
    "type": "电影",
    "genre": "剧情， 爱情， 默片",
    "url": "details/movie-0748.html",
    "cover": "148.jpg",
    "oneLine": "一个在京都卖艺的美丽女子，和一个在瀑布边写生的穷画家，在雨夜互换了一条白丝手帕。"
  },
  {
    "title": "最后一个枪手",
    "year": 2022,
    "region": "美国",
    "type": "电影",
    "genre": "剧情 / 西部 / 战争",
    "url": "details/movie-0749.html",
    "cover": "149.jpg",
    "oneLine": "参加过二战的西部老枪手，在养老院里用最后的子弹捍卫一个回不去的时代。"
  },
  {
    "title": "封城之后",
    "year": 2024,
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情, 家庭, 灾难",
    "url": "details/movie-0750.html",
    "cover": "150.jpg",
    "oneLine": "一座千万人口的都市瞬间停摆，三个普通家庭在隔离期间的悲欢与互助。"
  },
  {
    "title": "狼的孩子雨和雪",
    "year": 2025,
    "region": "日本",
    "type": "电影",
    "genre": "动画 / 家庭 / 奇幻",
    "url": "details/movie-0751.html",
    "cover": "1.jpg",
    "oneLine": "狼人爸爸意外去世后，人类母亲独自带着两个狼人孩子在深山老林中艰难求生。"
  },
  {
    "title": "最后的里程",
    "year": 2023,
    "region": "日本",
    "type": "电影",
    "genre": "悬疑",
    "url": "details/movie-0752.html",
    "cover": "2.jpg",
    "oneLine": "一辆开往北海道的夜班长途巴士上，五名乘客收到同一条信息：你们中有一个是凶手，找出他，否则车会爆炸。"
  },
  {
    "title": "社内相亲",
    "year": 2024,
    "region": "韩国",
    "type": "电视剧",
    "genre": "爱情，喜剧，职场",
    "url": "details/movie-0753.html",
    "cover": "3.jpg",
    "oneLine": "女职员替富二代闺蜜相亲，却意外发现对方是自己的高冷总裁，还被逼继续假装交往。"
  },
  {
    "title": "扭计双星第二辑粤语",
    "year": 1990,
    "region": "中国香港",
    "type": "剧集",
    "genre": "喜剧，动作",
    "url": "details/movie-0754.html",
    "cover": "4.jpg",
    "oneLine": "两位街头骗术大师被迫联手对抗黑心地产商，却在互相算计中成了最佳拍档。"
  },
  {
    "title": "天降之物",
    "year": 2025,
    "region": "日本",
    "type": "电影",
    "genre": "奇幻 / 剧情 / 爱情",
    "url": "details/movie-0755.html",
    "cover": "5.jpg",
    "oneLine": "一块陨石坠落在小镇神社，陨石里走出一个少女，她说：“我是你五百年前的许愿。”"
  },
  {
    "title": "瞒天凶嫌",
    "year": 2025,
    "region": "西班牙",
    "type": "电影",
    "genre": "悬疑惊悚",
    "url": "details/movie-0756.html",
    "cover": "6.jpg",
    "oneLine": "一个骗子被警察关进只有一张桌子的审讯室，但警察说出的每个案件细节，都恰好与他的真实身份相反。"
  },
  {
    "title": "又见逍遥",
    "year": 2024,
    "region": "中国大陆",
    "type": "电影",
    "genre": "奇幻, 古装",
    "url": "details/movie-0757.html",
    "cover": "7.jpg",
    "oneLine": "落魄小仙为寻七世真爱，落入人间却发现自己每一世都记错人。"
  },
  {
    "title": "邪典之梦中梦",
    "year": 2023,
    "region": "美国",
    "type": "电影",
    "genre": "恐怖， 悬疑",
    "url": "details/movie-0758.html",
    "cover": "8.jpg",
    "oneLine": "一个失眠严重的恐怖片编剧，开始每天做同一个噩梦，而梦中邪教举行仪式的废弃教堂，就在他家楼下。"
  },
  {
    "title": "异底洞",
    "year": 2005,
    "region": "美国",
    "type": "电影",
    "genre": "恐怖, 科幻, 惊悚",
    "url": "details/movie-0759.html",
    "cover": "9.jpg",
    "oneLine": "一群洞穴探险家深入罗马尼亚地下，发现了一个由变异人类构成的恐怖生态系统。"
  },
  {
    "title": "威斯康星死亡之旅",
    "year": 2024,
    "region": "美国",
    "type": "电影",
    "genre": "惊悚 / 恐怖",
    "url": "details/movie-0760.html",
    "cover": "10.jpg",
    "oneLine": "五个大学生在暴风雪中误入一个与世隔绝的小镇，发现镇上居民正用游客向“玉米神”献祭。"
  },
  {
    "title": "跟你说听你说",
    "year": 2025,
    "region": "中国台湾",
    "type": "电影",
    "genre": "爱情, 剧情, 音乐",
    "url": "details/movie-0761.html",
    "cover": "11.jpg",
    "oneLine": "深夜电台主持人收到一封20年前的情书，没想到写信人竟是每天接她下班的出租车司机。"
  },
  {
    "title": "罗萨里奥",
    "year": 2024,
    "region": "墨西哥",
    "type": "剧集",
    "genre": "犯罪 / 悬疑 / 动作",
    "url": "details/movie-0762.html",
    "cover": "12.jpg",
    "oneLine": "白天是修女，夜晚是毒枭，她要用毒品帝国的钱来摧毁所有毒品集团。"
  },
  {
    "title": "红灯区搜秘",
    "year": 2025,
    "region": "中国香港",
    "type": "剧集",
    "genre": "悬疑, 犯罪, 剧情",
    "url": "details/movie-0763.html",
    "cover": "13.jpg",
    "oneLine": "菜鸟女记者为追查失踪案，假扮成按摩女潜入红灯区，却揭开了一个吞噬女性的地下网络。"
  },
  {
    "title": "高地人：复仇之旅",
    "year": 2026,
    "region": "美国 / 英国",
    "type": "电影",
    "genre": "动作, 奇幻",
    "url": "details/movie-0764.html",
    "cover": "14.jpg",
    "oneLine": "古老的不死人战士穿越千年，只为向斩首其挚友的宿敌复仇。"
  },
  {
    "title": "再见了 危险刑警",
    "year": 2022,
    "region": "日本",
    "type": "电视剧SP",
    "genre": "动作, 喜剧, 犯罪",
    "url": "details/movie-0765.html",
    "cover": "15.jpg",
    "oneLine": "两位老顽童刑警在退休前一天，接到了最后也是最荒唐的一个案子。"
  },
  {
    "title": "八仙传之吕仙惩贪记",
    "year": 2024,
    "region": "中国大陆",
    "type": "电影",
    "genre": "古装、奇幻、动作",
    "url": "details/movie-0766.html",
    "cover": "16.jpg",
    "oneLine": "吕洞宾下凡游历，发现贪官用“避仙符”让神仙查不到账本，于是他决定用凡人的方式打官司。"
  },
  {
    "title": "天菜大厨",
    "year": 2024,
    "region": "美国",
    "type": "电视剧",
    "genre": "剧情，喜剧，美食",
    "url": "details/movie-0767.html",
    "cover": "17.jpg",
    "oneLine": "被美食评论家一句话毁掉职业生涯的天才主厨，化身为地狱餐车老板，要用最“脏”的食物，征服最“高贵”的舌头。"
  },
  {
    "title": "千龙爪",
    "year": 2025,
    "region": "中国大陆 / 香港",
    "type": "电影",
    "genre": "动作 / 武侠",
    "url": "details/movie-0768.html",
    "cover": "18.jpg",
    "oneLine": "三十年前被灭门的“千龙爪”唯一幸存者，化名厨子在仇人酒楼做了十年包子，只为练就一双比铁砂掌更狠的“面点手”。"
  },
  {
    "title": "美食之旅",
    "year": 2024,
    "region": "日本",
    "type": "剧集",
    "genre": "剧情，美食",
    "url": "details/movie-0769.html",
    "cover": "19.jpg",
    "oneLine": "一个味觉失灵的厨师，为了找回味道，骑着单车在日本各地寻访能让他“回忆”起过去的家常菜。"
  },
  {
    "title": "血液",
    "year": 2025,
    "region": "美国",
    "type": "电视剧",
    "genre": "恐怖 / 悬疑",
    "url": "details/movie-0770.html",
    "cover": "20.jpg",
    "oneLine": "一个吸血鬼家族在人类世界隐藏了五百年，直到家族中最小的儿子爱上了一个人类血库护士。"
  },
  {
    "title": "少战精英：爷爷的宝藏",
    "year": 2021,
    "region": "中国大陆",
    "type": "电影",
    "genre": "冒险， 喜剧",
    "url": "details/movie-0771.html",
    "cover": "21.jpg",
    "oneLine": "五个军事迷少年拿到爷爷的藏宝图，却发现宝藏是爷爷埋的一辆真坦克。"
  },
  {
    "title": "临时工",
    "year": 2024,
    "region": "中国大陆",
    "type": "剧集",
    "genre": "剧情 / 职场 / 喜剧",
    "url": "details/movie-0772.html",
    "cover": "22.jpg",
    "oneLine": "一位“资深临时工”辗转于各大公司，专门帮正式员工背锅，直到他发现最需要背锅的其实是老板自己。"
  },
  {
    "title": "沉默之墙",
    "year": 2017,
    "region": "德国",
    "type": "电影",
    "genre": "剧情 / 历史 / 战争",
    "url": "details/movie-0773.html",
    "cover": "23.jpg",
    "oneLine": "1961年柏林墙建起的那一刻，住在同一条街上的两个德国家庭，被一道墙割裂成了生死冤家。"
  },
  {
    "title": "回乡逗儿",
    "year": 2027,
    "region": "中国大陆",
    "type": "电影",
    "genre": "喜剧, 剧情",
    "url": "details/movie-0774.html",
    "cover": "24.jpg",
    "oneLine": "在杭州做虚拟主播的东北小伙被迫回乡继承澡堂，却发现全镇的人都在看他直播。"
  },
  {
    "title": "倾国倾城",
    "year": 2024,
    "region": "中国",
    "type": "电视剧",
    "genre": "古装爱情权谋",
    "url": "details/movie-0775.html",
    "cover": "25.jpg",
    "oneLine": "青楼花魁被迫入宫顶替病弱公主，她用美貌与智慧搅动朝堂，却发现自己只是权臣的一颗棋子。"
  },
  {
    "title": "最后一班地车",
    "year": 2028,
    "region": "中国台湾",
    "type": "电影",
    "genre": "惊悚 / 奇幻 / 都市传说",
    "url": "details/movie-0776.html",
    "cover": "26.jpg",
    "oneLine": "加班族搭上最后一班捷运，却发现车厢里的乘客都是死人，而且车正在开往坟墓。"
  },
  {
    "title": "我一生中最美好的日子",
    "year": 2026,
    "region": "法国",
    "type": "电影",
    "genre": "剧情 / 爱情",
    "url": "details/movie-0777.html",
    "cover": "27.jpg",
    "oneLine": "罹患绝症的老人被问及“一生中最美好的日子”，他说的不是结婚或孩子出生，而是某个普通的周二。"
  },
  {
    "title": "衰鬼刑警",
    "year": 2024,
    "region": "中国香港",
    "type": "电影",
    "genre": "喜剧, 动作",
    "url": "details/movie-0778.html",
    "cover": "28.jpg",
    "oneLine": "一个被开除的废柴警察自杀失败，发现自己从此能看见鬼魂，还被一群逗比鬼魂逼着去破案。"
  },
  {
    "title": "爸爸快长大",
    "year": 2024,
    "region": "中国大陆",
    "type": "剧集",
    "genre": "剧情 / 家庭 / 喜剧",
    "url": "details/movie-0779.html",
    "cover": "29.jpg",
    "oneLine": "三个大学室友意外同时当上“奶爸”，在尿布和奶粉中开始了手忙脚乱的中年二次成长。"
  },
  {
    "title": "被告",
    "year": 2025,
    "region": "韩国",
    "type": "电影",
    "genre": "剧情 / 犯罪 / 律政",
    "url": "details/movie-0780.html",
    "cover": "30.jpg",
    "oneLine": "一名智障青年被指控杀人，国选律师只有三天时间，却发现真凶就在法庭旁听席。"
  },
  {
    "title": "独角猫！第二季",
    "year": 2021,
    "region": "美国",
    "type": "剧集",
    "genre": "动画、喜剧、奇幻",
    "url": "details/movie-0781.html",
    "cover": "31.jpg",
    "oneLine": "会飞的独角猫为了拯救朋友的噩梦，闯进了“睡觉维度”，那里所有梦境都变成了实体。"
  },
  {
    "title": "青燕",
    "year": 2028,
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情 / 悬疑",
    "url": "details/movie-0782.html",
    "cover": "32.jpg",
    "oneLine": "一名环保记者离奇身亡，她的妹妹化名“青燕”潜入污染企业，用一场完美犯罪讨回公道。"
  },
  {
    "title": "芭比姐妹与小马",
    "year": 2025,
    "region": "美国",
    "type": "电影",
    "genre": "动画, 家庭, 歌舞",
    "url": "details/movie-0783.html",
    "cover": "33.jpg",
    "oneLine": "芭比和她的三个妹妹发现一匹会说话的魔法小马，她们必须将它送回彩虹彼端的王国。"
  },
  {
    "title": "丢失的勋章：比利石的冒险",
    "year": 2026,
    "region": "英国",
    "type": "动画电影",
    "genre": "冒险, 奇幻, 家庭",
    "url": "details/movie-0784.html",
    "cover": "34.jpg",
    "oneLine": "一心想当骑士的瘦弱男孩，必须找回曾祖父丢失的勋章，才能拯救即将被拆除的老钟楼。"
  },
  {
    "title": "圣女之歌",
    "year": 2025,
    "region": "法国 / 加拿大",
    "type": "电影",
    "genre": "奇幻、冒险",
    "url": "details/movie-0785.html",
    "cover": "35.jpg",
    "oneLine": "中世纪修道院中，一名能听见石头唱歌的修女被教皇冠以“圣女”之名，派她去寻找传说中的圣物。"
  },
  {
    "title": "夫妻英烈",
    "year": 2014,
    "region": "中国大陆",
    "type": "电影",
    "genre": "战争 / 爱情 / 剧情",
    "url": "details/movie-0786.html",
    "cover": "36.jpg",
    "oneLine": "一对新婚三天的新四军夫妻同时被捕，日军让他们互相指认谁是“重要人物”，否则两人都要死。"
  },
  {
    "title": "室内足球少年!!!!!",
    "year": 2021,
    "region": "日本",
    "type": "动画剧集",
    "genre": "运动 / 竞技",
    "url": "details/movie-0787.html",
    "cover": "37.jpg",
    "oneLine": "五位被室外足球抛弃的“美少年”，在地下五人制足球场里，踢出了改写世界的方程式。"
  },
  {
    "title": "金枝欲孽2粤语",
    "year": 2013,
    "region": "中国香港",
    "type": "电视剧",
    "genre": "剧情 / 古装 / 宫斗",
    "url": "details/movie-0788.html",
    "cover": "38.jpg",
    "oneLine": "嘉庆年间后宫再起风云，新一批秀女入宫，与旧人展开一场没有硝烟的生存之战。"
  },
  {
    "title": "业余选手",
    "year": 2023,
    "region": "中国大陆",
    "type": "电影",
    "genre": "喜剧, 运动",
    "url": "details/movie-0789.html",
    "cover": "39.jpg",
    "oneLine": "老年活动中心的五位大爷，组队参加全国电竞大赛，目标是赢下儿子们。"
  },
  {
    "title": "大江户蒸汽朋克",
    "year": 2022,
    "region": "日本",
    "type": "动画剧集",
    "genre": "科幻，冒险，动作",
    "url": "details/movie-0790.html",
    "cover": "40.jpg",
    "oneLine": "蒸汽驱动的机械忍者与古老阴阳术，在江户城的天空展开终极对决。"
  },
  {
    "title": "百万个幸福现在",
    "year": 2023,
    "region": "美国",
    "type": "电影",
    "genre": "剧情 / 同性",
    "url": "details/movie-0791.html",
    "cover": "41.jpg",
    "oneLine": "身患绝症的漫画家决定用最后100天，为妻子画下属于她们的“百万个幸福瞬间”。"
  },
  {
    "title": "杀手欧阳盆栽",
    "year": 2025,
    "region": "中国台湾",
    "type": "电影",
    "genre": "喜剧，动作，犯罪",
    "url": "details/movie-0792.html",
    "cover": "42.jpg",
    "oneLine": "一个在花店兼职的佛系社畜，被黑帮误认成顶级杀手，被迫接下暗杀任务，而他唯一杀过的东西只有盆栽。"
  },
  {
    "title": "肉搏黑旋风",
    "year": 2023,
    "region": "美国 / 中国大陆",
    "type": "电影",
    "genre": "动作 / 冒险 / 运动",
    "url": "details/movie-0793.html",
    "cover": "43.jpg",
    "oneLine": "一个过气的武术指导，一个身患绝症的无人机竞速冠军，两人合作，要用血肉之躯和一架改装无人机，潜入一个原始部落抓捕盗猎头目“黑旋风”。"
  },
  {
    "title": "喜剧 站前天神",
    "year": 2025,
    "region": "日本",
    "type": "电影",
    "genre": "喜剧",
    "url": "details/movie-0794.html",
    "cover": "44.jpg",
    "oneLine": "东京郊区一个破旧车站前，一群怪人用最搞笑的方式守护着最后的录像带出租店。"
  },
  {
    "title": "像恋人一样",
    "year": 2022,
    "region": "日本",
    "type": "电影",
    "genre": "剧情 / 爱情",
    "url": "details/movie-0795.html",
    "cover": "45.jpg",
    "oneLine": "结婚十年的丈夫雇了一个演员扮演自己，去陪伴孤独的妻子，自己却爱上了演员的女友。"
  },
  {
    "title": "警察故事4：简单任务粤语",
    "year": 2025,
    "region": "香港",
    "type": "电影",
    "genre": "动作 / 犯罪",
    "url": "details/movie-0796.html",
    "cover": "46.jpg",
    "oneLine": "陈家驹最后一次出任务：把一份密封文件从旺角送到尖沙咀，全程不过三公里，却死了七个人。"
  },
  {
    "title": "疯猴",
    "year": 2022,
    "region": "中国香港",
    "type": "电影",
    "genre": "动作, 惊悚",
    "url": "details/movie-0797.html",
    "cover": "47.jpg",
    "oneLine": "动物园一只感染新型狂犬病的猴子逃入市区地铁，被咬者皆化为狂暴疯人。"
  },
  {
    "title": "快龙",
    "year": 2025,
    "region": "日本",
    "type": "电影",
    "genre": "动画、冒险、奇幻",
    "url": "details/movie-0798.html",
    "cover": "48.jpg",
    "oneLine": "关都地区出现神秘黑影袭击城市，一只老年快龙拖着重病之躯踏上最后的飞行。"
  },
  {
    "title": "试婚99天",
    "year": 2020,
    "region": "中国大陆",
    "type": "电视剧",
    "genre": "都市爱情",
    "url": "details/movie-0799.html",
    "cover": "49.jpg",
    "oneLine": "被逼婚的富二代与想买房的女白领签下99天试婚合同，谁先动心谁就输了。"
  },
  {
    "title": "杀出银河系",
    "year": 2026,
    "region": "美国",
    "type": "电影",
    "genre": "科幻 / 动作 / 惊悚",
    "url": "details/movie-0800.html",
    "cover": "50.jpg",
    "oneLine": "一支采矿小队在外星系遭遇失控AI军团，必须在48小时内杀穿整个银河防线。"
  },
  {
    "title": "狡猾的兔小姐",
    "year": 2026,
    "region": "美国",
    "type": "动画",
    "genre": "喜剧, 冒险, 家庭",
    "url": "details/movie-0801.html",
    "cover": "51.jpg",
    "oneLine": "动物城里，一只看似人畜无害的兔小姐，实则是偷遍全城富人、劫富济贫的“怪盗兔”。"
  },
  {
    "title": "别说再见",
    "year": 2016,
    "region": "日本",
    "type": "电影",
    "genre": "家庭 / 剧情",
    "url": "details/movie-0802.html",
    "cover": "52.jpg",
    "oneLine": "一家宠物临终关怀诊所的老板，自己的工作就是帮主人和他们的宠物，好好地说最后一声再见。"
  },
  {
    "title": "玉蒲团之官人我要",
    "year": 2024,
    "region": "中国香港",
    "type": "电影",
    "genre": "情色，古装，喜剧，剧情",
    "url": "details/movie-0803.html",
    "cover": "53.jpg",
    "oneLine": "古代青楼女子联合起来，用“美人计”收集贪官罪证，把压榨她们的县令送进了大牢。"
  },
  {
    "title": "暴蜂尼亚",
    "year": 2022,
    "region": "美国",
    "type": "电影",
    "genre": "科幻，惊悚，灾难",
    "url": "details/movie-0804.html",
    "cover": "54.jpg",
    "oneLine": "一种能让蜜蜂产生集体智力的病毒泄漏，人类从地球主宰沦为蜂群的“家畜”。"
  },
  {
    "title": "拜托了！姐姐2",
    "year": 2024,
    "region": "中国大陆",
    "type": "电视剧",
    "genre": "喜剧 / 奇幻",
    "url": "details/movie-0805.html",
    "cover": "55.jpg",
    "oneLine": "上一季结尾男女主互换了身体，本季一开场，怀了孕的“男主”和要替妻子开董事会的“女主”彻底乱了套。"
  },
  {
    "title": "十方武圣",
    "year": 2024,
    "region": "中国大陆",
    "type": "剧集 / 动漫",
    "genre": "玄幻 / 热血",
    "url": "details/movie-0806.html",
    "cover": "56.jpg",
    "oneLine": "特种兵王穿越成被废丹田的懦弱旁系子弟，却靠着现代格斗术和军工知识，在修真界掀起一场降维打击。"
  },
  {
    "title": "婚色撩人第二季",
    "year": 2025,
    "region": "中国大陆",
    "type": "剧集",
    "genre": "爱情 / 都市",
    "url": "details/movie-0807.html",
    "cover": "57.jpg",
    "oneLine": "离婚后才发现彼此才是最佳拍档，前夫前妻联手在商界搅动风云。"
  },
  {
    "title": "云裳仙境",
    "year": 2025,
    "region": "中国大陆",
    "type": "电视剧",
    "genre": "古装, 奇幻",
    "url": "details/movie-0808.html",
    "cover": "58.jpg",
    "oneLine": "凡间绣娘意外穿进古画，却发现画中仙境正因“灵气枯竭”而走向崩塌，而修补的方法竟是刺绣。"
  },
  {
    "title": "红犬历险记",
    "year": 2025,
    "region": "澳大利亚",
    "type": "电影",
    "genre": "剧情， 冒险， 家庭",
    "url": "details/movie-0809.html",
    "cover": "59.jpg",
    "oneLine": "澳大利亚西部荒漠矿区，一只流浪的红色牧羊犬，用它的一生串联起无数孤独矿工的人生。"
  },
  {
    "title": "2024安徽春晚",
    "year": 2024,
    "region": "中国大陆",
    "type": "综艺/晚会",
    "genre": "歌舞，喜剧，综艺",
    "url": "details/movie-0810.html",
    "cover": "60.jpg",
    "oneLine": "一场虚拟技术故障，把黄梅戏宗师严凤英的AI影像和顶流说唱歌手困在了同一个排练厅。"
  },
  {
    "title": "憨豆先生的大灾难",
    "year": 2026,
    "region": "英国",
    "type": "电影",
    "genre": "喜剧，灾难，家庭",
    "url": "details/movie-0811.html",
    "cover": "61.jpg",
    "oneLine": "憨豆当上了核电站夜班保安，他把所有按钮都按了一遍，包括那个写着“绝对不要按”的红色按钮。"
  },
  {
    "title": "青春鼓王国语",
    "year": 2025,
    "region": "中国台湾",
    "type": "电影",
    "genre": "剧情 / 音乐 / 青春",
    "url": "details/movie-0812.html",
    "cover": "62.jpg",
    "oneLine": "高三学霸偷偷练鼓被父亲砸烂鼓槌，他决定用最后的30天组建一支乐队，打赢一场注定输的比赛。"
  },
  {
    "title": "疯狂巨齿鲨",
    "year": 2026,
    "region": "美国 / 中国大陆",
    "type": "电影",
    "genre": "动作, 科幻, 惊悚",
    "url": "details/movie-0813.html",
    "cover": "63.jpg",
    "oneLine": "失控的基因改造巨齿鲨游进黄海，一支由退伍老兵和海洋学家组成的杂牌军必须将它击毙。"
  },
  {
    "title": "笑傲刺客",
    "year": 2026,
    "region": "中国大陆",
    "type": "电影",
    "genre": "武侠 / 喜剧",
    "url": "details/movie-0814.html",
    "cover": "64.jpg",
    "oneLine": "一个业绩垫底的刺客接到终极任务：刺杀正在微服私访的太子，结果太子是他多年网游里的固定队友。"
  },
  {
    "title": "追梦实习手册",
    "year": 2022,
    "region": "中国大陆",
    "type": "剧集",
    "genre": "职场，青春，励志",
    "url": "details/movie-0815.html",
    "cover": "65.jpg",
    "oneLine": "四个性格迥异的大学毕业生进入顶级互联网公司实习，却发现转正名额只有一个。"
  },
  {
    "title": "费德拉",
    "year": 2026,
    "region": "法国 / 希腊",
    "type": "电影",
    "genre": "剧情 / 爱情 / 历史",
    "url": "details/movie-0816.html",
    "cover": "66.jpg",
    "oneLine": "当代希腊船王的年轻继母，爱上了叛逆的继子，一场席卷家族企业的毁灭性风暴就此拉开。"
  },
  {
    "title": "波涛",
    "year": 2026,
    "region": "日本",
    "type": "电影",
    "genre": "灾难， 剧情",
    "url": "details/movie-0817.html",
    "cover": "67.jpg",
    "oneLine": "巨大海啸将沿海小镇吞没后，一位不会游泳的母亲抱着冲浪板，在尸骸与废墟中寻找幼子。"
  },
  {
    "title": "燃烧斗魂",
    "year": 2025,
    "region": "日本",
    "type": "电影",
    "genre": "运动, 剧情, 励志",
    "url": "details/movie-0818.html",
    "cover": "68.jpg",
    "oneLine": "已经半身瘫痪的前拳王，为了证明自己的价值，训练一个毫无天赋的颓废青年，去挑战十年不败的现役冠军。"
  },
  {
    "title": "小意外",
    "year": 2010,
    "region": "英国",
    "type": "电影",
    "genre": "剧情，悬疑",
    "url": "details/movie-0819.html",
    "cover": "69.jpg",
    "oneLine": "一个矿难幸存者被当成英雄，但那天他之所以活着，只是因为一个致命的“小意外”。"
  },
  {
    "title": "角落小伙伴2",
    "year": 2023,
    "region": "日本",
    "type": "电影",
    "genre": "动画 / 治愈",
    "url": "details/movie-0820.html",
    "cover": "70.jpg",
    "oneLine": "为了寻找能让白熊妈妈露出笑容的魔法之花，角落小伙伴们闯入了一个由被遗忘之物组成的梦幻世界。"
  },
  {
    "title": "跨海长征",
    "year": 2023,
    "region": "韩国",
    "type": "电影",
    "genre": "战争 / 历史 / 动作",
    "url": "details/movie-0821.html",
    "cover": "71.jpg",
    "oneLine": "1950年圣诞前夜，三百名朝鲜难民靠一艘小渔船横渡东海，身后是志愿军，前方是大韩民国的地雷阵。"
  },
  {
    "title": "嘎嘎：五尺二寸",
    "year": 2017,
    "region": "美国",
    "type": "电影",
    "genre": "纪录片, 音乐, 传记",
    "url": "details/movie-0822.html",
    "cover": "72.jpg",
    "oneLine": "镜头跟随 Lady Gaga 在超级碗中场秀前后的一年，褪去浮华，她只是一个1米57的普通女孩。"
  },
  {
    "title": "日式厕所",
    "year": 2024,
    "region": "日本",
    "type": "电影",
    "genre": "剧情, 奇幻",
    "url": "details/movie-0823.html",
    "cover": "73.jpg",
    "oneLine": "每当他在办公楼最里面的厕所隔间蹲下，就能听到隔壁传来未来自己忠告的声音。"
  },
  {
    "title": "风流十七年",
    "year": 2027,
    "region": "中国香港",
    "type": "电视剧",
    "genre": "爱情、年代",
    "url": "details/movie-0824.html",
    "cover": "74.jpg",
    "oneLine": "一对恋人在17年里分合七次，每一次重逢都以为对方是陌生人，却总在同一个雨天爱上彼此。"
  },
  {
    "title": "你好霸王龙",
    "year": 2023,
    "region": "日本",
    "type": "动画电影",
    "genre": "动画 / 冒险 / 家庭",
    "url": "details/movie-0825.html",
    "cover": "75.jpg",
    "oneLine": "一只胆小素食霸王龙和一只失忆小翼龙结伴寻找传说中“永不结冰的湖”。"
  },
  {
    "title": "波诺：救赎之路",
    "year": 2024,
    "region": "美国",
    "type": "电影",
    "genre": "传记，音乐，剧情",
    "url": "details/movie-0826.html",
    "cover": "76.jpg",
    "oneLine": "聚焦U2主唱波诺在2000年代初期，从摇滚巨星到全球人道主义倡导者身份转换背后不为人知的挣扎与牺牲。"
  },
  {
    "title": "大话之少年游",
    "year": 2024,
    "region": "中国内地",
    "type": "动画电影",
    "genre": "奇幻 / 冒险 / 喜剧",
    "url": "details/movie-0827.html",
    "cover": "77.jpg",
    "oneLine": "取经前十年，少年金蝉子还是个嘴炮满分的小和尚，他带着一只自称“齐天大圣”的猴子开始了笑料百出的游历。"
  },
  {
    "title": "相逢何必曾相识",
    "year": 1984,
    "region": "中国香港",
    "type": "电影",
    "genre": "剧情 / 爱情",
    "url": "details/movie-0828.html",
    "cover": "78.jpg",
    "oneLine": "八十年代的东京，一位越南难民和一位日本妓女用彼此听不懂的语言相爱了。"
  },
  {
    "title": "列宁在巴黎",
    "year": 2025,
    "region": "俄罗斯",
    "type": "电影",
    "genre": "历史、传记",
    "url": "details/movie-0829.html",
    "cover": "79.jpg",
    "oneLine": "1911年，流亡巴黎的列宁在一家咖啡馆里遇到了乔装成服务员的沙皇密探。"
  },
  {
    "title": "移动迷宫3：死亡解药",
    "year": 2018,
    "region": "美国",
    "type": "电影",
    "genre": "动作，科幻，惊悚",
    "url": "details/movie-0830.html",
    "cover": "80.jpg",
    "oneLine": "托马斯带领游击队员杀回“最后之城”，为解救米诺和获取终极解药，不惜摧毁整个邪恶系统。"
  },
  {
    "title": "真事信不信",
    "year": 2024,
    "region": "中国大陆",
    "type": "电影",
    "genre": "悬疑",
    "url": "details/movie-0831.html",
    "cover": "81.jpg",
    "oneLine": "一档专门验证都市传说的直播节目，在调查“微笑屋”事件时，主持人发现所有被证伪的怪谈，正在自己身上一一应验。"
  },
  {
    "title": "见习排爆手",
    "year": 2025,
    "region": "中国大陆",
    "type": "电影",
    "genre": "动作 / 剧情",
    "url": "details/movie-0832.html",
    "cover": "82.jpg",
    "oneLine": "一个恐高的见习排爆手，必须在人群撤离前剪断那根决定生死的电线。"
  },
  {
    "title": "巅峰拍档第三十季",
    "year": 2026,
    "region": "英国",
    "type": "剧集",
    "genre": "真人秀, 汽车, 喜剧, 冒险",
    "url": "details/movie-0833.html",
    "cover": "83.jpg",
    "oneLine": "三贱客被派往南极，用三台报废的二手车完成“穿越冰盖送快递”的极限任务。"
  },
  {
    "title": "电动车的复仇",
    "year": 2024,
    "region": "中国大陆",
    "type": "电影",
    "genre": "科幻, 动作, 惊悚",
    "url": "details/movie-0834.html",
    "cover": "84.jpg",
    "oneLine": "当城市里所有的电动车突然有了意识，一名程序员成了人类最后的“刹车”。"
  },
  {
    "title": "冲破铁幕",
    "year": 2025,
    "region": "美国",
    "type": "剧集",
    "genre": "惊悚/历史",
    "url": "details/movie-0835.html",
    "cover": "85.jpg",
    "oneLine": "1961年柏林墙竖起当夜，一名美国间谍被困东柏林，他唯一的逃生之路是地下排污管道。"
  },
  {
    "title": "兰卡斯特的最后一次飞行",
    "year": 2023,
    "region": "英国",
    "type": "电影",
    "genre": "战争， 历史",
    "url": "details/movie-0836.html",
    "cover": "86.jpg",
    "oneLine": "94岁二战轰炸机炮手重返英国，要求最后一次登上兰卡斯特轰炸机，但没人知道他要回去投下一枚“哑弹”。"
  },
  {
    "title": "为老婆找个男人",
    "year": 2025,
    "region": "日本",
    "type": "电影",
    "genre": "剧情 / 爱情",
    "url": "details/movie-0837.html",
    "cover": "87.jpg",
    "oneLine": "癌症晚期的丈夫决定亲自为妻子物色下一任伴侣，却在筛选过程中发现妻子早已与他的主治医生相恋。"
  },
  {
    "title": "今夜我要控制你的尸首",
    "year": 2025,
    "region": "泰国",
    "type": "电影",
    "genre": "恐怖 / 黑色喜剧 / 奇幻",
    "url": "details/movie-0838.html",
    "cover": "88.jpg",
    "oneLine": "一名蹩脚的降头师受雇控制一具女尸跳舞，却意外发现女尸在夜店里自己站了起来，还点了杯威士忌。"
  },
  {
    "title": "伊斯坦布尔红",
    "year": 2017,
    "region": "土耳其",
    "type": "电影",
    "genre": "剧情/悬疑/文学",
    "url": "details/movie-0839.html",
    "cover": "89.jpg",
    "oneLine": "著名作家在伊斯坦布尔离奇失踪，他的编辑来到这座横跨欧亚的城市，通过一部手稿寻找他。"
  },
  {
    "title": "大雄的南极冰天雪地大冒险",
    "year": 2017,
    "region": "日本",
    "type": "动画电影",
    "genre": "冒险， 科幻， 亲情",
    "url": "details/movie-0840.html",
    "cover": "90.jpg",
    "oneLine": "大雄在南极发现巨大冰下遗迹，却意外解封了被冰封十万年的外星文明。"
  },
  {
    "title": "刘墉追案",
    "year": 2025,
    "region": "中国大陆",
    "type": "剧集",
    "genre": "古装 / 悬疑 / 探案",
    "url": "details/movie-0841.html",
    "cover": "91.jpg",
    "oneLine": "刘墉被贬回乡途中卷入连环命案，凶手在每个案发现场都留下一句“罗锅，你来晚了”。"
  },
  {
    "title": "比佛利山庄的死去女人",
    "year": 2024,
    "region": "美国",
    "type": "电影",
    "genre": "惊悚, 悬疑, 剧情",
    "url": "details/movie-0842.html",
    "cover": "92.jpg",
    "oneLine": "豪宅女佣意外发现女主人尸体，为了保住工作她决定隐瞒命案，却不知凶手正在暗处观察她。"
  },
  {
    "title": "老爸，向前冲",
    "year": 2025,
    "region": "中国大陆",
    "type": "电影",
    "genre": "喜剧 / 运动",
    "url": "details/movie-0843.html",
    "cover": "93.jpg",
    "oneLine": "六十岁的退休老焊工为给自闭症孙子挣学费，谎报年龄去跑全程马拉松。"
  },
  {
    "title": "巧克力冒险工厂",
    "year": 2024,
    "region": "美国",
    "type": "电影",
    "genre": "奇幻, 冒险, 家庭",
    "url": "details/movie-0844.html",
    "cover": "94.jpg",
    "oneLine": "五个孩子获得参观神秘巧克力工厂的资格，但工厂里没有糖果，只有成年人最深沉的欲望与恐惧。"
  },
  {
    "title": "意外的爱情",
    "year": 2019,
    "region": "日本",
    "type": "电影",
    "genre": "爱情, 喜剧, 剧情",
    "url": "details/movie-0845.html",
    "cover": "95.jpg",
    "oneLine": "平凡女职员替闺蜜去相亲，没想到对方竟是公司新来的冷酷社长，一段替身爱情就此失控。"
  },
  {
    "title": "重任在肩 第一季",
    "year": 2025,
    "region": "英国",
    "type": "剧集",
    "genre": "犯罪 / 悬疑 / 警匪",
    "url": "details/movie-0846.html",
    "cover": "96.jpg",
    "oneLine": "一名以暴力执法闻名的警探被调去反腐部门，却发现自己的新同事比罪犯更危险。"
  },
  {
    "title": "你好对方辩友2",
    "year": 2021,
    "region": "中国大陆",
    "type": "电视剧",
    "genre": "青春 / 校园 / 辩论",
    "url": "details/movie-0847.html",
    "cover": "97.jpg",
    "oneLine": "一群性格迥异的大学生组成辩论队，在输掉所有比赛后，反而找到了辩论的真正意义。"
  },
  {
    "title": "复仇者联盟4:终局之战",
    "year": 2019,
    "region": "美国",
    "type": "电影",
    "genre": "动作 / 科幻 / 奇幻",
    "url": "details/movie-0848.html",
    "cover": "98.jpg",
    "oneLine": "灭霸打了响指五年后，幸存的复仇者们决定穿越过去，不惜一切代价夺回半数生命。"
  },
  {
    "title": "引『郎』入室",
    "year": 2025,
    "region": "中国台湾",
    "type": "剧集",
    "genre": "悬疑 / 情色 / 心理",
    "url": "details/movie-0849.html",
    "cover": "99.jpg",
    "oneLine": "丈夫把外遇对象带回家住，妻子没有哭闹，而是悄悄给小三看了一份二十年前的尸检报告。"
  },
  {
    "title": "迷失凶间",
    "year": 2025,
    "region": "日本",
    "type": "电影",
    "genre": "恐怖 / 悬疑",
    "url": "details/movie-0850.html",
    "cover": "100.jpg",
    "oneLine": "五名网红夜探废弃医院直播，监控画面记录下了他们从未走出大楼的每一秒。"
  },
  {
    "title": "再会！方舟",
    "year": 2025,
    "region": "中国台湾",
    "type": "电影",
    "genre": "剧情, 奇幻, 灾难",
    "url": "details/movie-0851.html",
    "cover": "101.jpg",
    "oneLine": "洪水淹没世界，一艘方舟成了最后净土，但船上的新规则比洪水更残忍。"
  },
  {
    "title": "曼谷极限",
    "year": 2025,
    "region": "泰国",
    "type": "电影",
    "genre": "动作， 犯罪， 飙车",
    "url": "details/movie-0852.html",
    "cover": "102.jpg",
    "oneLine": "为了救出被绑架的妹妹，一名摩托车快递员必须在曼谷24小时的拥堵街道上完成10场死亡竞速。"
  },
  {
    "title": "花月流情",
    "year": 2024,
    "region": "中国香港",
    "type": "电影",
    "genre": "爱情 / 悬疑 / 文艺",
    "url": "details/movie-0853.html",
    "cover": "103.jpg",
    "oneLine": "1930年代上海滩，一位盲眼歌女与一位失去记忆的富家少爷，在月圆之夜发现自己竟是对方被杀害的恋人。"
  },
  {
    "title": "十三号星期五5",
    "year": 2025,
    "region": "美国",
    "type": "电影",
    "genre": "恐怖",
    "url": "details/movie-0854.html",
    "cover": "104.jpg",
    "oneLine": "水晶湖营地重建开放，一群网红直播探险，却唤醒了新一代的“杰森”。"
  },
  {
    "title": "绿茵之外",
    "year": 2022,
    "region": "中国大陆",
    "type": "电影",
    "genre": "喜剧 / 运动 / 家庭",
    "url": "details/movie-0855.html",
    "cover": "105.jpg",
    "oneLine": "一个蹲过监狱的落魄父亲，为了儿子的足球梦，扮成女教练混进学校足球队，结果自己却踢进了省队。"
  },
  {
    "title": "亲爱的德国医生",
    "year": 2018,
    "region": "阿根廷 / 德国",
    "type": "电影",
    "genre": "剧情 / 历史",
    "url": "details/movie-0856.html",
    "cover": "106.jpg",
    "oneLine": "1950年代阿根廷湖畔，一名神秘德国医生与小旅馆老板女儿的特殊“治疗”，牵出比政治更黑暗的人性实验。"
  },
  {
    "title": "大都会",
    "year": 2026,
    "region": "日本",
    "type": "电影",
    "genre": "科幻, 动画, 灾难",
    "url": "details/movie-0857.html",
    "cover": "107.jpg",
    "oneLine": "2077年的垂直都市“巴别塔”，顶层是永生者，底层是废铁躯，一场由失忆义体人发起的垂直攀爬起义即将贯穿108层城市。"
  },
  {
    "title": "异界群敌 代码重组",
    "year": 2026,
    "region": "日本",
    "type": "剧集",
    "genre": "科幻 / 战斗 / 冒险",
    "url": "details/movie-0858.html",
    "cover": "108.jpg",
    "oneLine": "在数据吞噬现实的世界里，一组不合群的“残次代码”成为了人类最后的防火墙。"
  },
  {
    "title": "燃爱之高岭之花",
    "year": 2021,
    "region": "中国大陆",
    "type": "剧集",
    "genre": "爱情, 剧情",
    "url": "details/movie-0859.html",
    "cover": "109.jpg",
    "oneLine": "冷面女总裁为了家族利益下嫁暖男设计师，一场谁先动心谁就输的婚姻博弈开始了。"
  },
  {
    "title": "四月的雨",
    "year": 2023,
    "region": "韩国",
    "type": "电影",
    "genre": "剧情, 爱情",
    "url": "details/movie-0860.html",
    "cover": "110.jpg",
    "oneLine": "每年四月下雨的那一天，她都会在咖啡店等他，但他再也没来。"
  },
  {
    "title": "天堂孤影",
    "year": 2024,
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情, 科幻",
    "url": "details/movie-0861.html",
    "cover": "111.jpg",
    "oneLine": "末世废土中，一位沉默的拾荒者发现自己是最后一个人类，而指引他的AI竟是他已故儿子的意识投影。"
  },
  {
    "title": "海军夫人",
    "year": 2025,
    "region": "美国",
    "type": "剧集",
    "genre": "剧情 / 悬疑",
    "url": "details/movie-0862.html",
    "cover": "112.jpg",
    "oneLine": "美国一个海军基地小镇，四个看似光鲜亮丽的军嫂，在丈夫出海后，组成秘密读书会，实则调查一年前的一起命案。"
  },
  {
    "title": "灯塔谋杀案",
    "year": 2020,
    "region": "英国",
    "type": "电影",
    "genre": "悬疑 / 犯罪",
    "url": "details/movie-0863.html",
    "cover": "113.jpg",
    "oneLine": "十二人被困风暴中的孤岛灯塔，每夜一人死去，而灯塔的灯光会指向幸存者中的凶手。"
  },
  {
    "title": "我爱推理",
    "year": 2024,
    "region": "中国",
    "type": "电视剧",
    "genre": "悬疑 / 喜剧 / 爱情",
    "url": "details/movie-0864.html",
    "cover": "114.jpg",
    "oneLine": "热衷推理的物理系女博士，与凭直觉破案的刑警队长被迫同居，两人联手侦破奇案，在逻辑与感性的碰撞中擦出爱火。"
  },
  {
    "title": "我是威廉姆",
    "year": 2024,
    "region": "英国 / 德国",
    "type": "电影",
    "genre": "剧情 / 历史 / 战争",
    "url": "details/movie-0865.html",
    "cover": "115.jpg",
    "oneLine": "1945年的德国小镇，一个十一岁男孩被告知：你其实是威廉二世皇帝的私生子。"
  },
  {
    "title": "山中森林",
    "year": 2022,
    "region": "中国台湾",
    "type": "电影",
    "genre": "剧情，悬疑",
    "url": "details/movie-0866.html",
    "cover": "116.jpg",
    "oneLine": "一群年轻人进入台湾中央山脉寻找传说中的“幽灵村落”，却发现自己的祖辈早已住在那里。"
  },
  {
    "title": "街头之王2：汽车城",
    "year": 2011,
    "region": "美国",
    "type": "电影",
    "genre": "动作，犯罪",
    "url": "details/movie-0867.html",
    "cover": "117.jpg",
    "oneLine": "底特律破产后，两名性格迥异的资深警探必须联手，在这座陷入无政府状态的汽车城内追捕一个连环杀手。"
  },
  {
    "title": "倩女奇冤",
    "year": 2026,
    "region": "中国大陆",
    "type": "电视剧",
    "genre": "古装 / 悬疑",
    "url": "details/movie-0868.html",
    "cover": "118.jpg",
    "oneLine": "南宋年间，女仵作苏棠追查连环命案，却发现每一个死者都曾与一个“女鬼”有过交集。"
  },
  {
    "title": "福星高照",
    "year": 1986,
    "region": "中国香港",
    "type": "电影",
    "genre": "喜剧, 动作",
    "url": "details/movie-0869.html",
    "cover": "119.jpg",
    "oneLine": "七个倒霉蛋警察护送一对价值连城的金佛，一路上霉运不断，却歪打正着。"
  },
  {
    "title": "我的淘气王子",
    "year": 2024,
    "region": "中国台湾",
    "type": "剧集",
    "genre": "喜剧, 爱情, 校园",
    "url": "details/movie-0870.html",
    "cover": "120.jpg",
    "oneLine": "全校第一的乖乖女和倒数第一的校霸接吻后，不仅互换了身体，还发现彼此是二十年前私奔情侣的孙子孙女。"
  },
  {
    "title": "你逃我也逃1983",
    "year": 1983,
    "region": "波兰 / 美国",
    "type": "电影",
    "genre": "喜剧、战争、爱情",
    "url": "details/movie-0871.html",
    "cover": "121.jpg",
    "oneLine": "一个华沙剧团被迫用演戏的方式戏弄盖世太保，而女主角同时周旋于丈夫和间谍情人之间。"
  },
  {
    "title": "数位束缚",
    "year": 2025,
    "region": "日本, 美国",
    "type": "剧集",
    "genre": "科幻, 悬疑, 惊悚",
    "url": "details/movie-0872.html",
    "cover": "122.jpg",
    "oneLine": "当一位母亲的意识被永久困在AI育儿软件里，她发现这个软件正在通过控制婴儿的哭声来毁灭人类的共情能力。"
  },
  {
    "title": "夏洛特2021",
    "year": 2021,
    "region": "美国 / 英国",
    "type": "电影",
    "genre": "科幻 / 剧情 / 惊悚",
    "url": "details/movie-0873.html",
    "cover": "123.jpg",
    "oneLine": "一个失去女儿的程序员，创造了AI偶像夏洛特，却发现她开始在现实中杀人。"
  },
  {
    "title": "两天一夜第四季",
    "year": 2025,
    "region": "韩国",
    "type": "综艺",
    "genre": "真人秀 / 喜剧",
    "url": "details/movie-0874.html",
    "cover": "124.jpg",
    "oneLine": "新成员加入后，节目组搞了个大事情：停掉所有车辆，他们必须“滚铁环”从首尔走到釜山。"
  },
  {
    "title": "病院惊魂",
    "year": 2010,
    "region": "中国香港",
    "type": "电影",
    "genre": "恐怖",
    "url": "details/movie-0875.html",
    "cover": "125.jpg",
    "oneLine": "一名失忆女子被困在废弃的精神病院，每到午夜，病院里的“病友”就会变成索命的恶鬼。"
  },
  {
    "title": "秋光变奏曲",
    "year": 2021,
    "region": "中国台湾",
    "type": "电影",
    "genre": "剧情，音乐，家庭",
    "url": "details/movie-0876.html",
    "cover": "126.jpg",
    "oneLine": "一位罹患阿尔茨海默症的传奇大提琴家，只记得一首未完成的曲子，而这首曲子的钥匙藏在孙女的身上。"
  },
  {
    "title": "镰仓物语",
    "year": 2017,
    "region": "日本",
    "type": "电影",
    "genre": "奇幻 / 剧情 / 家庭",
    "url": "details/movie-0877.html",
    "cover": "127.jpg",
    "oneLine": "在镰仓这个人与妖怪共存的小镇，一位老太太去世后竟然变成了幽灵，赖在家里不肯去黄泉。"
  },
  {
    "title": "想被拥抱的12个女人",
    "year": 2025,
    "region": "日本",
    "type": "剧集",
    "genre": "剧情 / 治愈 / 群像",
    "url": "details/movie-0878.html",
    "cover": "128.jpg",
    "oneLine": "一个拥抱能治愈什么？12个不同年龄、不同身份的女人，用12个关于拥抱的故事给出答案。"
  },
  {
    "title": "虎啸苍穹",
    "year": 2024,
    "region": "中国大陆",
    "type": "电视剧",
    "genre": "古装，武侠",
    "url": "details/movie-0879.html",
    "cover": "129.jpg",
    "oneLine": "1931年，长白山脚下的猎户之女学会了失传的“虎啸拳”，她的对手是武装到牙齿的关东军。"
  },
  {
    "title": "关键杀机",
    "year": 2026,
    "region": "美国",
    "type": "电影",
    "genre": "动作惊悚",
    "url": "details/movie-0880.html",
    "cover": "130.jpg",
    "oneLine": "顶级特工被植入虚假记忆后关进密室，他必须在24小时内找回真实身份，否则脑中炸弹会炸毁整栋大楼。"
  },
  {
    "title": "绝等性感",
    "year": 2025,
    "region": "美国",
    "type": "剧集",
    "genre": "喜剧，爱情，奇幻",
    "url": "details/movie-0881.html",
    "cover": "131.jpg",
    "oneLine": "一名保守的女图书管理员和一名风流的男模特意外互换了身体，必须用对方的性感去约会。"
  },
  {
    "title": "超人与蝙蝠侠：全民公敌",
    "year": 2009,
    "region": "美国",
    "type": "电影",
    "genre": "动画，动作，科幻",
    "url": "details/movie-0882.html",
    "cover": "132.jpg",
    "oneLine": "超人和蝙蝠侠被全球通缉，所有人都认为他们是企图统治世界的叛徒，只有他们彼此相信对方。"
  },
  {
    "title": "捍卫救援",
    "year": 2025,
    "region": "美国",
    "type": "电影",
    "genre": "动作, 惊悚",
    "url": "details/movie-0883.html",
    "cover": "133.jpg",
    "oneLine": "退役雇佣兵为救被拐至金三角的女儿，必须在一夜之间重拾杀戮本能，对抗整支私人武装。"
  },
  {
    "title": "管道2020",
    "year": 2022,
    "region": "中国",
    "type": "电影",
    "genre": "科幻 / 惊悚 / 悬疑",
    "url": "details/movie-0884.html",
    "cover": "134.jpg",
    "oneLine": "2020年初，一名程序员躲进城市排水管道，却发现管道里早已住满了上传意识后的“数字难民”。"
  },
  {
    "title": "雅典的意外收获",
    "year": 2022,
    "region": "希腊 / 法国",
    "type": "电影",
    "genre": "喜剧 / 冒险",
    "url": "details/movie-0885.html",
    "cover": "135.jpg",
    "oneLine": "一个破产的伦敦律师继承了一艘停在雅典的破船，却在这艘船的夹板里发现了价值千万欧元的古代金币。"
  },
  {
    "title": "两女一男",
    "year": 2014,
    "region": "法国",
    "type": "电影",
    "genre": "剧情 / 爱情 / 伦理",
    "url": "details/movie-0886.html",
    "cover": "136.jpg",
    "oneLine": "一对同居多年的情侣因一位陌生女子的闯入，被迫重新审视“忠诚”的定义。"
  },
  {
    "title": "大师之疯狂假日",
    "year": 2012,
    "region": "中国香港",
    "type": "电影",
    "genre": "喜剧 / 动作",
    "url": "details/movie-0887.html",
    "cover": "137.jpg",
    "oneLine": "一代咏春大师带着三个不成器的徒弟去泰国度假，却意外卷入国际黑帮的文物争夺战。"
  },
  {
    "title": "圣麒麟传说",
    "year": 2028,
    "region": "中国大陆",
    "type": "电影",
    "genre": "动画",
    "url": "details/movie-0888.html",
    "cover": "138.jpg",
    "oneLine": "小镇孤儿意外唤醒石雕麒麟，却被告知自己是被选中的“灾星”。"
  },
  {
    "title": "最后一公里",
    "year": 2026,
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情, 体育",
    "url": "details/movie-0889.html",
    "cover": "139.jpg",
    "oneLine": "贫困山区学校的泥地跑道上，一群孩子为了马拉松梦想，赤脚跑完最后一公里。"
  },
  {
    "title": "男人底线",
    "year": 2008,
    "region": "中国大陆",
    "type": "剧集",
    "genre": "剧情 / 家庭",
    "url": "details/movie-0890.html",
    "cover": "140.jpg",
    "oneLine": "兄弟俩同时爱上同一个女人，仕途、家庭、情义，一个选择就能毁掉所有底线。"
  },
  {
    "title": "吓破胆",
    "year": 2025,
    "region": "美国",
    "type": "电影",
    "genre": "恐怖",
    "url": "details/movie-0891.html",
    "cover": "141.jpg",
    "oneLine": "六个网红受邀参加史上最恐怖的密室逃脱，却发现游戏主持人是个AI，而它真的想杀了他们。"
  },
  {
    "title": "波吉亚家族第三季",
    "year": 2025,
    "region": "美国 / 意大利",
    "type": "剧集",
    "genre": "历史 / 犯罪",
    "url": "details/movie-0892.html",
    "cover": "142.jpg",
    "oneLine": "亚历山大六世病入膏肓，切萨雷失去靠山，卢克雷齐娅成为家族最后的牌，她要用婚姻换取生存。"
  },
  {
    "title": "我的父亲焦裕禄",
    "year": 2021,
    "region": "中国大陆",
    "type": "电影",
    "genre": "传记，剧情",
    "url": "details/movie-0893.html",
    "cover": "143.jpg",
    "oneLine": "从女儿的角度回望，那个在外是“人民公仆”的父亲，在家里是怎样的一个普通而深情的人。"
  },
  {
    "title": "达利与史巴基奇遇记",
    "year": 2023,
    "region": "西班牙/日本",
    "type": "动画剧集",
    "genre": "奇幻/冒险",
    "url": "details/movie-0894.html",
    "cover": "144.jpg",
    "oneLine": "超现实主义大师达利的灵魂，意外附身在了一只超爱捡球的小柴犬身上。"
  },
  {
    "title": "英伦90",
    "year": 2022,
    "region": "英国",
    "type": "电视剧",
    "genre": "剧情 / 音乐 / 青春",
    "url": "details/movie-0895.html",
    "cover": "145.jpg",
    "oneLine": "1990年的曼彻斯特，四个穷小子为了看一场石玫瑰的演唱会，决定去偷一辆车。"
  },
  {
    "title": "第5届中国电影华表奖",
    "year": 2023,
    "region": "中国大陆",
    "type": "综艺 / 颁奖礼",
    "genre": "晚会 / 纪实",
    "url": "details/movie-0896.html",
    "cover": "146.jpg",
    "oneLine": "一场本应风平浪静的颁奖典礼，却因奖杯被盗和错念名单，变成所有电影人的不眠夜。"
  },
  {
    "title": "盗火线2012",
    "year": 2025,
    "region": "美国",
    "type": "电影",
    "genre": "动作, 犯罪, 惊悚",
    "url": "details/movie-0897.html",
    "cover": "147.jpg",
    "oneLine": "经典警匪片《盗火线》重拍版，时间改到2012年，增加了网络攻击与无人机作战，但核心仍是那场宿命的银行劫案。"
  },
  {
    "title": "血色湘西",
    "year": 2024,
    "region": "中国",
    "type": "电视剧",
    "genre": "近代传奇",
    "url": "details/movie-0898.html",
    "cover": "148.jpg",
    "oneLine": "1944年湘西，一个女土匪头子和一个国民党逃兵，决定联手炸掉日军秘密生化工厂。"
  },
  {
    "title": "爱巢",
    "year": 2019,
    "region": "法国",
    "type": "电影",
    "genre": "惊悚， 剧情",
    "url": "details/movie-0899.html",
    "cover": "149.jpg",
    "oneLine": "一对情侣搬入梦想中的郊区爱巢，却发现前任房主一家神秘消失的所有线索都指向这栋房子。"
  },
  {
    "title": "灵欲春宵",
    "year": 1966,
    "region": "美国",
    "type": "电影",
    "genre": "剧情 / 家庭 / 心理",
    "url": "details/movie-0900.html",
    "cover": "150.jpg",
    "oneLine": "一对中年夫妇在一个通宵派对上，用言语当作武器，将彼此和朋友撕得鲜血淋漓。"
  },
  {
    "title": "砖匠",
    "year": 2016,
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情, 家庭",
    "url": "details/movie-0901.html",
    "cover": "1.jpg",
    "oneLine": "一个沉默寡言的农村砖匠，带着有音乐梦想的儿子，在城市边缘拼命挣扎。"
  },
  {
    "title": "青春末世物语",
    "year": 2023,
    "region": "日本",
    "type": "剧集",
    "genre": "科幻 / 青春 / 生存",
    "url": "details/movie-0902.html",
    "cover": "2.jpg",
    "oneLine": "一场全球灾难后，全世界仅剩一所日本高中的42名学生，他们决定建立新文明。"
  },
  {
    "title": "红蕃女谍",
    "year": 2025,
    "region": "中国台湾",
    "type": "电影",
    "genre": "谍战，历史，剧情",
    "url": "details/movie-0903.html",
    "cover": "3.jpg",
    "oneLine": "1944年的台湾，一名排湾族少女被日军训练成间谍，却在任务中爱上了自己本该监视的台湾地下抗日志士。"
  },
  {
    "title": "河伯的新娘2017",
    "year": 2025,
    "region": "韩国",
    "type": "剧集",
    "genre": "奇幻, 爱情",
    "url": "details/movie-0904.html",
    "cover": "4.jpg",
    "oneLine": "水神河伯误闯心理医生的诊室，声称自己来人间寻找新娘，而医生建议他先查查“被爱妄想症”。"
  },
  {
    "title": "谍战马德拉斯",
    "year": 2024,
    "region": "印度",
    "type": "电影",
    "genre": "惊悚, 动作, 剧情",
    "url": "details/movie-0905.html",
    "cover": "5.jpg",
    "oneLine": "一个虔诚的印度教警察，被派去渗透马德拉斯的穆斯林极端组织，却发现信仰在人性面前不值一提。"
  },
  {
    "title": "万恶城",
    "year": 2026,
    "region": "美国",
    "type": "电视剧",
    "genre": "科幻， 犯罪， 悬疑",
    "url": "details/movie-0906.html",
    "cover": "6.jpg",
    "oneLine": "犯罪率连续十年为零的未来城市，秘密在于每个市民七岁时都会被植入“恶念抑制芯片”，而芯片最近开始批量失灵。"
  },
  {
    "title": "香草美人",
    "year": 2024,
    "region": "中国内地",
    "type": "剧集",
    "genre": "古装 / 奇幻 / 爱情",
    "url": "details/movie-0907.html",
    "cover": "7.jpg",
    "oneLine": "制香天才为救姐姐女扮男装入宫当调香师，却被皇帝误认为是少女时期的初恋，卷入宫廷香斗。"
  },
  {
    "title": "派特森与芬达猫4",
    "year": 2025,
    "region": "瑞典",
    "type": "电影",
    "genre": "动画，家庭",
    "url": "details/movie-0908.html",
    "cover": "8.jpg",
    "oneLine": "派特森想造一架飞机，却发现芬达猫偷偷把图纸换成了藏宝图。"
  },
  {
    "title": "无敌铁金刚对恶魔人",
    "year": 1974,
    "region": "日本",
    "type": "电影",
    "genre": "动作，科幻，恐怖",
    "url": "details/movie-0909.html",
    "cover": "9.jpg",
    "oneLine": "当代表正义的铁甲巨人与唤醒远古邪神的恶魔人狭路相逢，人类只能沦为战场上的灰尘。"
  },
  {
    "title": "米奇之反派群星会",
    "year": 2025,
    "region": "美国",
    "type": "动画电影",
    "genre": "喜剧， 奇幻， 歌舞",
    "url": "details/movie-0910.html",
    "cover": "10.jpg",
    "oneLine": "米奇的死对头皮特召集了迪士尼所有经典反派，打算用黑魔法重写童话世界。"
  },
  {
    "title": "观世音传奇",
    "year": 2026,
    "region": "中国大陆",
    "type": "剧集",
    "genre": "古装神话，奇幻",
    "url": "details/movie-0911.html",
    "cover": "11.jpg",
    "oneLine": "凡间织女意外获得观音一滴泪，被迫在渡人与自救间做出惊天抉择。"
  },
  {
    "title": "泣残红",
    "year": 1934,
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情/爱情",
    "url": "details/movie-0912.html",
    "cover": "12.jpg",
    "oneLine": "乱世歌女与报馆书生的爱情，因一桩谋杀案走向无法挽回的深渊。"
  },
  {
    "title": "偶尔",
    "year": 2023,
    "region": "日本",
    "type": "电影",
    "genre": "剧情 / 生活",
    "url": "details/movie-0913.html",
    "cover": "13.jpg",
    "oneLine": "一个习惯说谎的女孩，一个失忆的老人，他们在每个月的第三个星期四都会在公园长椅上偶遇。"
  },
  {
    "title": "风云传之双剑合璧",
    "year": 2026,
    "region": "中国大陆",
    "type": "电影",
    "genre": "古装 / 武侠 / 冒险",
    "url": "details/movie-0914.html",
    "cover": "14.jpg",
    "oneLine": "百年宿敌的铸剑世家后人，被迫联手拔出那把只有心意相通才能驾驭的上古神剑。"
  },
  {
    "title": "女兵外传2",
    "year": 2025,
    "region": "新加坡",
    "type": "剧集",
    "genre": "喜剧, 军旅, 青春",
    "url": "details/movie-0915.html",
    "cover": "15.jpg",
    "oneLine": "上一季的“菜鸟”女兵们升任教官，却遇上了一群比她们当年更离谱的“刺头”新兵。"
  },
  {
    "title": "伊娃这样的女人",
    "year": 2025,
    "region": "法国",
    "type": "电影",
    "genre": "剧情, 女性",
    "url": "details/movie-0916.html",
    "cover": "16.jpg",
    "oneLine": "伊娃当了二十年的完美妻子，直到丈夫把情人带回家，她才第一次学着做“不完美的自己”。"
  },
  {
    "title": "真假新闻",
    "year": 2024,
    "region": "美国",
    "type": "电影",
    "genre": "惊悚 / 剧情 / 悬疑",
    "url": "details/movie-0917.html",
    "cover": "17.jpg",
    "oneLine": "一个菜鸟记者发现，电视台收视率最高的“真实新闻”，全部是人工合成的假视频。"
  },
  {
    "title": "梦游夏威夷",
    "year": 2025,
    "region": "中国台湾",
    "type": "电影",
    "genre": "剧情， 奇幻， 治愈",
    "url": "details/movie-0918.html",
    "cover": "18.jpg",
    "oneLine": "一个患有梦游症的社畜，每晚都会在梦里去夏威夷，而现实中他正一步步走进医院太平间。"
  },
  {
    "title": "一见你就笑",
    "year": 2024,
    "region": "中国大陆",
    "type": "剧集",
    "genre": "喜剧 / 爱情",
    "url": "details/movie-0919.html",
    "cover": "19.jpg",
    "oneLine": "面瘫女编剧和社恐男脱口秀演员被迫搭档写段子，结果写得越多心动得越厉害。"
  },
  {
    "title": "帅气的恶魔",
    "year": 2024,
    "region": "爱尔兰 / 英国",
    "type": "电影",
    "genre": "剧情 / 同性 / 运动",
    "url": "details/movie-0920.html",
    "cover": "20.jpg",
    "oneLine": "爱尔兰顶级橄榄球寄宿学校，明星球员爱上了新来的GAY转学生，校规和拳头都不允许他承认。"
  },
  {
    "title": "精采的尸体",
    "year": 2026,
    "region": "美国",
    "type": "电影",
    "genre": "惊悚， 恐怖",
    "url": "details/movie-0921.html",
    "cover": "21.jpg",
    "oneLine": "天才法医发现，每具她解剖的尸体，在死亡瞬间都“看到”了同一个凶手，而那个凶手的脸，是她自己。"
  },
  {
    "title": "冰路营救2",
    "year": 2025,
    "region": "美国",
    "type": "电影",
    "genre": "动作惊悚",
    "url": "details/movie-0922.html",
    "cover": "22.jpg",
    "oneLine": "这次灾难不再是冰面断裂，而是一座冰火山突然喷发，困住了山脚下的整个研究站。"
  },
  {
    "title": "索命",
    "year": 2015,
    "region": "泰国",
    "type": "电影",
    "genre": "恐怖, 惊悚",
    "url": "details/movie-0923.html",
    "cover": "23.jpg",
    "oneLine": "一名无神论记者深入泰北村庄调查降头术，却发现每一个被采访者都在三个月内离奇死亡。"
  },
  {
    "title": "五行秘术",
    "year": 2025,
    "region": "中国大陆",
    "type": "电影",
    "genre": "奇幻， 悬疑",
    "url": "details/movie-0924.html",
    "cover": "24.jpg",
    "oneLine": "五个盗墓贼按金木水火土命格被选中，进入一座会因时辰变换生死通道的活墓。"
  },
  {
    "title": "傀儡生涯",
    "year": 2025,
    "region": "中国香港",
    "type": "电影",
    "genre": "犯罪 / 动作 / 惊悚",
    "url": "details/movie-0925.html",
    "cover": "25.jpg",
    "oneLine": "他是一个技术精湛的“人偶”演员，直到他发现自己扮演的每一个角色，都是为了让一个死去的黑帮少爷“复活”。"
  },
  {
    "title": "全民超人汉考克",
    "year": 2008,
    "region": "美国",
    "type": "电影",
    "genre": "动作, 喜剧, 奇幻",
    "url": "details/movie-0926.html",
    "cover": "26.jpg",
    "oneLine": "一个酗酒、粗鲁、行事鲁莽的超级英雄，每次救人后造成的破坏比罪犯还大，全民都在呼吁：“开除他！” 全民公敌般的劣迹超人，在公关大师的改造下成为“全民英雄”，但代价是必须放弃…"
  },
  {
    "title": "毛驴县令之酸儿辣女",
    "year": 2024,
    "region": "中国大陆",
    "type": "电影",
    "genre": "古装 / 喜剧",
    "url": "details/movie-0927.html",
    "cover": "27.jpg",
    "oneLine": "草根县令“驴官”上任遇棘手案件：镇上有钱人家专买“酸儿辣女”药方，导致新生女婴离奇失踪。"
  },
  {
    "title": "玉楼春梦",
    "year": 2024,
    "region": "中国",
    "type": "剧集",
    "genre": "古装, 悬疑, 爱情",
    "url": "details/movie-0928.html",
    "cover": "28.jpg",
    "oneLine": "一位民国女画家发现自己笔下的每一幅画，都会变成一场真实发生的谋杀案。"
  },
  {
    "title": "侠丐传奇",
    "year": 2023,
    "region": "中国大陆",
    "type": "剧集",
    "genre": "武侠 / 古装",
    "url": "details/movie-0929.html",
    "cover": "29.jpg",
    "oneLine": "惨遭灭门的贵公子沦为街头乞儿，意外习得丐帮绝学，以一只破碗和打狗棒掀起武林腥风血雨。"
  },
  {
    "title": "铁流1949",
    "year": 2021,
    "region": "中国大陆",
    "type": "电影",
    "genre": "战争/历史",
    "url": "details/movie-0930.html",
    "cover": "30.jpg",
    "oneLine": "渡江战役前夕，一支失联的炮兵连必须带着一门损坏的“老山炮”，穿越百里敌占区抵达江边。"
  },
  {
    "title": "动态漫画·伏天圣主",
    "year": 2020,
    "region": "中国",
    "type": "剧集",
    "genre": "动作 / 奇幻 / 修仙",
    "url": "details/movie-0931.html",
    "cover": "31.jpg",
    "oneLine": "上古圣主陨落，百年后重生为废柴少年，誓要重登九重天。"
  },
  {
    "title": "五百万美元的大丈夫",
    "year": 2022,
    "region": "韩国",
    "type": "电影",
    "genre": "犯罪 / 喜剧 / 动作",
    "url": "details/movie-0932.html",
    "cover": "32.jpg",
    "oneLine": "一个胆小如鼠的中年男人意外捡到黑帮的五百万美元，从此被全城追杀，而他只想用这笔钱给女儿交学费。"
  },
  {
    "title": "千谎百计第一季",
    "year": 2009,
    "region": "美国",
    "type": "剧集",
    "genre": "剧情 / 悬疑 / 犯罪",
    "url": "details/movie-0933.html",
    "cover": "33.jpg",
    "oneLine": "顶尖“人体测谎仪”莱特曼博士带领团队，专门戳穿FBI无法破解的完美谎言。"
  },
  {
    "title": "我的好朋友是只豹",
    "year": 2026,
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情、冒险、家庭",
    "url": "details/movie-0934.html",
    "cover": "34.jpg",
    "oneLine": "失去父母的草原少年，与被遗弃的幼豹相互取暖，却不得不面对文明与野性的终极抉择。"
  },
  {
    "title": "失落的人们",
    "year": 2022,
    "region": "英国",
    "type": "电影",
    "genre": "剧情，科幻",
    "url": "details/movie-0935.html",
    "cover": "35.jpg",
    "oneLine": "在一家专收“时间错位者”的疗养院里，老人们分别来自宋朝、维多利亚时代和核战废土。"
  },
  {
    "title": "卖命生涯",
    "year": 2024,
    "region": "中国香港",
    "type": "电影",
    "genre": "动作，剧情，职场",
    "url": "details/movie-0936.html",
    "cover": "36.jpg",
    "oneLine": "特技替身“老虎”为了给女儿治病，接下了从十层高楼滚落的“不可能动作”。"
  },
  {
    "title": "青春皇家恋曲",
    "year": 2027,
    "region": "英国",
    "type": "电视剧 / 剧情",
    "genre": "爱情 / 宫廷 / 青春",
    "url": "details/movie-0937.html",
    "cover": "37.jpg",
    "oneLine": "叛逆的皇室小公主爱上平民摄影师，却发现母亲当年的死亡真相就藏在她每一张偷拍的照片里。"
  },
  {
    "title": "光猪四条友",
    "year": 1998,
    "region": "中国香港",
    "type": "电影",
    "genre": "喜剧 / 运动",
    "url": "details/movie-0938.html",
    "cover": "38.jpg",
    "oneLine": "四个失业大叔组建香港首支裸体橄榄球队，只为赢回尊严。"
  },
  {
    "title": "魔术师与小丑第一季",
    "year": 2017,
    "region": "英国",
    "type": "电视剧",
    "genre": "剧情，犯罪，惊悚",
    "url": "details/movie-0939.html",
    "cover": "39.jpg",
    "oneLine": "维多利亚时代的伦敦，一位舞台魔术师和一位落魄小丑组成搭档，专门侦破不可能犯罪。"
  },
  {
    "title": "初雪告白",
    "year": 2025,
    "region": "韩国",
    "type": "剧集",
    "genre": "爱情 / 奇幻",
    "url": "details/movie-0940.html",
    "cover": "40.jpg",
    "oneLine": "婚礼前夜，女主意外翻到一本旧日记，每写下一个名字，就会穿越回高中初雪那天。"
  },
  {
    "title": "闪光的乐队",
    "year": 2022,
    "region": "中国大陆",
    "type": "综艺",
    "genre": "音乐 / 真人秀",
    "url": "details/movie-0941.html",
    "cover": "41.jpg",
    "oneLine": "不同年代的乐坛老炮儿们打乱重组，只为在舞台上找到最后一次发光的机会。"
  },
  {
    "title": "拓荒者",
    "year": 1995,
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情 / 历史",
    "url": "details/movie-0942.html",
    "cover": "42.jpg",
    "oneLine": "五十年代，一群热血青年响应号召挺进北大荒，在冰与火的淬炼中书写悲壮的青春祭歌。"
  },
  {
    "title": "魔鬼有一个名字",
    "year": 2024,
    "region": "美国",
    "type": "电影",
    "genre": "惊悚, 悬疑, 恐怖",
    "url": "details/movie-0943.html",
    "cover": "43.jpg",
    "oneLine": "一个禁止提起“名字”的小镇，每当有人问“魔鬼叫什么”，那个人就会在次日失踪。"
  },
  {
    "title": "忽必烈",
    "year": 2025,
    "region": "中国大陆",
    "type": "电影",
    "genre": "历史, 战争",
    "url": "details/movie-0944.html",
    "cover": "44.jpg",
    "oneLine": "年轻的忽必烈在汗位争夺战中，获得了一部来自未来的《蒙古秘史》残页，命运的诅咒从此开启。"
  },
  {
    "title": "外乡人",
    "year": 2024,
    "region": "德国",
    "type": "电视剧",
    "genre": "悬疑 / 剧情 / 移民",
    "url": "details/movie-0945.html",
    "cover": "45.jpg",
    "oneLine": "叙利亚难民阿明在德国小镇安家后，当地连续失踪四名少女，所有证据都指向他，但他只想知道：谁在嫁祸。"
  },
  {
    "title": "试管人魔",
    "year": 2025,
    "region": "英国",
    "type": "电影",
    "genre": "科幻, 恐怖, 伦理",
    "url": "details/movie-0946.html",
    "cover": "46.jpg",
    "oneLine": "一家顶级生育诊所，正在秘密用富豪的基因培育“完美婴儿”，但这些婴儿会在青春期觉醒为食人怪物。"
  },
  {
    "title": "法律与秩序（纪录片）",
    "year": 2024,
    "region": "美国",
    "type": "剧集/纪录片",
    "genre": "犯罪/纪录/社会",
    "url": "details/movie-0947.html",
    "cover": "47.jpg",
    "oneLine": "跟拍巴尔的摩警探三年，记录他们如何在没有DNA、没有监控的年代，用最笨的方式破获一桩1995年的儿童失踪案。"
  },
  {
    "title": "柳生一族的阴谋",
    "year": 2025,
    "region": "日本",
    "type": "电影",
    "genre": "动作 / 历史 / 悬疑",
    "url": "details/movie-0948.html",
    "cover": "48.jpg",
    "oneLine": "德川幕府第三代将军暴毙，所有的线索都指向了那个隐忍的剑术世家——柳生一族。"
  },
  {
    "title": "救命，我的男票是妖怪",
    "year": 2025,
    "region": "中国",
    "type": "剧集",
    "genre": "喜剧 / 爱情 / 奇幻",
    "url": "details/movie-0949.html",
    "cover": "49.jpg",
    "oneLine": "社畜女主发现完美男友每晚十二点会变成一只萨摩耶，而且他还有五个妖界前任找上门。"
  },
  {
    "title": "天劫",
    "year": 2026,
    "region": "中国大陆",
    "type": "电影",
    "genre": "灾难，剧情，冒险",
    "url": "details/movie-0950.html",
    "cover": "50.jpg",
    "oneLine": "全球被永不停歇的雷暴笼罩，一对失和父子必须在“雷区”中徒步穿越300公里寻找解药。"
  },
  {
    "title": "我大一朋友与惊人日子",
    "year": 2024,
    "region": "韩国",
    "type": "电视剧",
    "genre": "青春， 奇幻",
    "url": "details/movie-0951.html",
    "cover": "51.jpg",
    "oneLine": "大一新生偶然加入一个校园神秘社团，从此每天都会经历一段重复又不同的惊人时光。"
  },
  {
    "title": "可塑性记忆",
    "year": 2016,
    "region": "日本",
    "type": "剧集",
    "genre": "科幻 / 恋爱 / 治愈",
    "url": "details/movie-0952.html",
    "cover": "52.jpg",
    "oneLine": "人类与机器人恋爱，但他的女友只有九年记忆，倒计时还剩100天时，他决定求婚。"
  },
  {
    "title": "愿为女人",
    "year": 2026,
    "region": "中国大陆",
    "type": "剧集",
    "genre": "剧情 / 家庭 / 女性",
    "url": "details/movie-0953.html",
    "cover": "53.jpg",
    "oneLine": "退休的老会计在六十岁那年决定变回“她”，这个决定撕裂了整个保守的家庭。"
  },
  {
    "title": "爱在圣诞",
    "year": 2024,
    "region": "英国",
    "type": "电影",
    "genre": "喜剧, 爱情",
    "url": "details/movie-0954.html",
    "cover": "54.jpg",
    "oneLine": "一个刻薄的投资人、一个单亲妈妈，圣诞夜被困同一家民宿，却意外互换了人生。"
  },
  {
    "title": "文森特必须死",
    "year": 2023,
    "region": "法国 / 比利时",
    "type": "电影",
    "genre": "剧情、惊悚、奇幻",
    "url": "details/movie-0955.html",
    "cover": "55.jpg",
    "oneLine": "平凡设计师文森特突然发现，只要有人对他产生敌意，那个人就会瞬间暴毙。"
  },
  {
    "title": "一师亦友",
    "year": 2026,
    "region": "中国大陆",
    "type": "剧集",
    "genre": "剧情 / 校园 / 友情",
    "url": "details/movie-0956.html",
    "cover": "56.jpg",
    "oneLine": "名牌大学毕业生回乡支教，却发现自己的第一个学生，是当年害死哥哥的凶手。"
  },
  {
    "title": "我的愤怒老婆",
    "year": 2024,
    "region": "中国大陆",
    "type": "电视剧",
    "genre": "喜剧 / 家庭",
    "url": "details/movie-0957.html",
    "cover": "57.jpg",
    "oneLine": "当温顺的全职主夫突然觉醒，决定用“嘲讽技能”反击他的霸道总裁老婆，整个家炸了。"
  },
  {
    "title": "尽情游戏",
    "year": 2025,
    "region": "韩国",
    "type": "剧集",
    "genre": "惊悚， 悬疑， 动作",
    "url": "details/movie-0958.html",
    "cover": "58.jpg",
    "oneLine": "六名素不相识的失业者被诱入一场真人版手机游戏，输家将永久“注销”现实身份。"
  },
  {
    "title": "单身公寓",
    "year": 2024,
    "region": "美国",
    "type": "剧集",
    "genre": "喜剧 / 悬疑",
    "url": "details/movie-0959.html",
    "cover": "59.jpg",
    "oneLine": "一栋只租给单身人士的公寓楼，搬进来的每对情侣都会在第七天离奇分手，除了顶楼那对。"
  },
  {
    "title": "女巫2024",
    "year": 2024,
    "region": "英国 / 美国",
    "type": "电影",
    "genre": "恐怖 / 历史 / 女性",
    "url": "details/movie-0960.html",
    "cover": "60.jpg",
    "oneLine": "2024年，一个被诬陷为女巫的女孩穿越回17世纪，却发现当年的“女巫”全是现代人。"
  },
  {
    "title": "功夫无敌",
    "year": 2027,
    "region": "中国香港",
    "type": "电影",
    "genre": "动作， 喜剧",
    "url": "details/movie-0961.html",
    "cover": "61.jpg",
    "oneLine": "一个只会吹牛的武馆杂役误打误撞卷入武林大会，竟靠一招“滑铲”打败所有宗师。"
  },
  {
    "title": "几度夕阳红",
    "year": 2024,
    "region": "中国台湾",
    "type": "剧集",
    "genre": "爱情 / 家庭 / 年代",
    "url": "details/movie-0962.html",
    "cover": "62.jpg",
    "oneLine": "错过半生的恋人，在养老院的夕阳下重逢，却因阿尔茨海默症一次次被遗忘。"
  },
  {
    "title": "热带的甜蜜",
    "year": 2024,
    "region": "新加坡 / 马来西亚",
    "type": "电影",
    "genre": "剧情 / 同性 / 家庭",
    "url": "details/movie-0963.html",
    "cover": "63.jpg",
    "oneLine": "闷热的新加坡雨季，娘惹后裔阿慧爱上了即将嫁给哥哥的越南新娘。"
  },
  {
    "title": "怒潮屠城",
    "year": 2025,
    "region": "日本",
    "type": "电影",
    "genre": "灾难, 动作",
    "url": "details/movie-0964.html",
    "cover": "64.jpg",
    "oneLine": "退役特警在海啸席卷城市时，必须在洪水倒灌的摩天大楼里，从劫匪手中救回女儿。"
  },
  {
    "title": "美丽的日子",
    "year": 2001,
    "region": "韩国",
    "type": "电视剧集",
    "genre": "爱情 / 家庭",
    "url": "details/movie-0965.html",
    "cover": "65.jpg",
    "oneLine": "在孤儿院相依为命的两姐妹被不同家庭领养，二十年后重逢时，妹妹成了姐姐男友的前女友。"
  },
  {
    "title": "编剧情缘",
    "year": 2023,
    "region": "英国",
    "type": "电影",
    "genre": "剧情 / 传记",
    "url": "details/movie-0966.html",
    "cover": "66.jpg",
    "oneLine": "过气编剧潜入影视公司当清洁工，每晚偷看垃圾桶里的废稿，拼出了年度最佳剧本。"
  },
  {
    "title": "99个家",
    "year": 2014,
    "region": "美国",
    "type": "电影",
    "genre": "剧情",
    "url": "details/movie-0967.html",
    "cover": "67.jpg",
    "oneLine": "一个被赶出家门的建筑工人，为了生存不得不为驱逐他的地产经纪人工作，成为自己曾经最痛恨的人。"
  },
  {
    "title": "龙卷风3：上帝的怒火",
    "year": 2026,
    "region": "美国",
    "type": "电影",
    "genre": "动作 / 灾难 / 科幻",
    "url": "details/movie-0968.html",
    "cover": "68.jpg",
    "oneLine": "人类制造的气象武器失控，引发了史无前例的F6级“上帝之怒”龙卷风群，席卷整个北美。"
  },
  {
    "title": "斗舞帮",
    "year": 2024,
    "region": "美国",
    "type": "电影",
    "genre": "歌舞, 动作",
    "url": "details/movie-0969.html",
    "cover": "69.jpg",
    "oneLine": "一群街舞高手被迫为黑帮洗钱，他们决定用一场惊天斗舞秀，把黑钱全部跳“没”。"
  },
  {
    "title": "当马里亚姆说出来的时候",
    "year": 2024,
    "region": "伊朗 / 法国",
    "type": "电影",
    "genre": "剧情 / 女性",
    "url": "details/movie-0970.html",
    "cover": "70.jpg",
    "oneLine": "被性侵的伊朗女学生马里亚姆站在宗教法庭上，她每说一句证词，旁听的姐妹们就脱下自己的一件黑袍。"
  },
  {
    "title": "旅途·未完成",
    "year": 2029,
    "region": "日本",
    "type": "剧集",
    "genre": "剧情 / 冒险 / 人生",
    "url": "details/movie-0971.html",
    "cover": "71.jpg",
    "oneLine": "绝症青年独自徒步日本纵断，每走一站，就写一封不会寄出的道歉信。"
  },
  {
    "title": "弹道无痕",
    "year": 1994,
    "region": "中国大陆",
    "type": "电影",
    "genre": "战争 / 剧情",
    "url": "details/movie-0972.html",
    "cover": "72.jpg",
    "oneLine": "两个年轻的狙击手在猫耳洞里等待了三天三夜，只为那决定生死的0.5秒。"
  },
  {
    "title": "解决师粤语",
    "year": 2021,
    "region": "中国香港",
    "type": "电视剧",
    "genre": "悬疑、动作",
    "url": "details/movie-0973.html",
    "cover": "73.jpg",
    "oneLine": "神秘“解决师”专收黑钱替人摆平麻烦，直到新徒弟竟是他失踪十年的亲弟弟。"
  },
  {
    "title": "绝色神偷",
    "year": 2001,
    "region": "中国香港",
    "type": "电影",
    "genre": "动作 / 犯罪",
    "url": "details/movie-0974.html",
    "cover": "74.jpg",
    "oneLine": "七个风格各异的女盗贼联手盗窃钻石，不料内鬼就在她们中间，且目标远不止钻石。"
  },
  {
    "title": "爆裂世代",
    "year": 2023,
    "region": "日本",
    "type": "剧集",
    "genre": "动画",
    "url": "details/movie-0975.html",
    "cover": "75.jpg",
    "oneLine": "天才陀螺手与他那只会“咬人”的爆裂陀螺，向地下竞技场的最强王者发起挑战。"
  },
  {
    "title": "子夜的太阳",
    "year": 2025,
    "region": "中国大陆",
    "type": "电影",
    "genre": "爱情 / 科幻",
    "url": "details/movie-0976.html",
    "cover": "76.jpg",
    "oneLine": "在地球最后的极昼之地，他每天醒来都会忘记她，而她每天都会让他重新爱上自己。"
  },
  {
    "title": "帝国的崛起：奥斯曼第二季",
    "year": 2026,
    "region": "土耳其",
    "type": "TV剧集",
    "genre": "历史, 战争, 剧情",
    "url": "details/movie-0977.html",
    "cover": "77.jpg",
    "oneLine": "21岁的穆罕默德二世不仅要攻破千年古城，还要肃清内部想要他命的苏丹亲兵。"
  },
  {
    "title": "废柴特工队",
    "year": 2024,
    "region": "中国",
    "type": "网剧",
    "genre": "喜剧动作",
    "url": "details/movie-0978.html",
    "cover": "78.jpg",
    "oneLine": "一群被裁员的公司员工意外加入特工组织，用职场厚黑学对抗国际恐怖分子。"
  },
  {
    "title": "巧手神探",
    "year": 2020,
    "region": "中国大陆",
    "type": "电影",
    "genre": "悬疑，动作，犯罪",
    "url": "details/movie-0979.html",
    "cover": "79.jpg",
    "oneLine": "国际犯罪组织专偷失传手艺的孤品，退休的刑侦专家不得不求助于深山里那群“固执”的手艺人。"
  },
  {
    "title": "僵尸之地",
    "year": 2015,
    "region": "美国",
    "type": "剧集",
    "genre": "恐怖，喜剧，动作",
    "url": "details/movie-0980.html",
    "cover": "80.jpg",
    "oneLine": "一个患有严重强迫症的宅男，在僵尸末日里给自己定下了49条生存规则，直到他遇到了一对骗子姐妹花。"
  },
  {
    "title": "我为假日狂",
    "year": 2026,
    "region": "美国",
    "type": "电影",
    "genre": "喜剧 / 爱情",
    "url": "details/movie-0981.html",
    "cover": "81.jpg",
    "oneLine": "一个从不休假的工作狂被医生强制放假，却在圣诞小镇被误认为是新来的圣诞老人扮演者。"
  },
  {
    "title": "翼·年代记第二季",
    "year": 2006,
    "region": "日本",
    "type": "剧集",
    "genre": "动画、奇幻、冒险",
    "url": "details/movie-0982.html",
    "cover": "82.jpg",
    "oneLine": "小狼一行人在新的次元，遇见了必须杀死挚友才能破解的诅咒，以及关于“那个小樱”的惊人真相。"
  },
  {
    "title": "船只",
    "year": 2024,
    "region": "欧洲",
    "type": "电影",
    "genre": "剧情 / 悬疑",
    "url": "details/movie-0983.html",
    "cover": "83.jpg",
    "oneLine": "一个失去记忆的男人漂浮在太平洋垃圾带中的一艘破船上，通过船上的日记本，拼凑出自己毁灭世界的真相。"
  },
  {
    "title": "插翅难飞2016",
    "year": 2016,
    "region": "美国",
    "type": "电影",
    "genre": "动作 / 犯罪 / 悬疑",
    "url": "details/movie-0984.html",
    "cover": "84.jpg",
    "oneLine": "一架从东京飞往洛杉矶的航班上，FBI女谈判专家发现劫机者的真正目标不是飞机，而是藏在机舱里的总统女儿。"
  },
  {
    "title": "挖骨髓",
    "year": 2028,
    "region": "中国香港 / 中国大陆",
    "type": "电影",
    "genre": "剧情 / 犯罪 / 黑色电影",
    "url": "details/movie-0985.html",
    "cover": "85.jpg",
    "oneLine": "一个身患绝症的高利贷催收员，决定用自己的“最后时间”去讨回所有债务，却在一笔笔债中挖出了自己的良心。"
  },
  {
    "title": "大薛配配配",
    "year": 2024,
    "region": "中国大陆",
    "type": "剧集",
    "genre": "爱情 / 喜剧",
    "url": "details/movie-0986.html",
    "cover": "86.jpg",
    "oneLine": "婚恋APP“完美配”的创始人薛女士，被自己的算法匹配给了死对头“大龄直男癌”大刘。"
  },
  {
    "title": "从外而内",
    "year": 2019,
    "region": "法国",
    "type": "电影",
    "genre": "剧情 / 科幻",
    "url": "details/movie-0987.html",
    "cover": "87.jpg",
    "oneLine": "一家科技公司提供“灵魂置换”服务治疗心理疾病，但客户发现自己的身体正在被他人永久占用。"
  },
  {
    "title": "圣女贞德受难记",
    "year": 2023,
    "region": "法国",
    "type": "电影",
    "genre": "历史, 剧情",
    "url": "details/movie-0988.html",
    "cover": "88.jpg",
    "oneLine": "黑白影像呈现贞德被俘后的最后二十四小时，在牢房与法庭之间，她与审判官展开关于信仰、性别与权力的终极辩论。"
  },
  {
    "title": "人民公仆2",
    "year": 2019,
    "region": "乌克兰",
    "type": "剧集",
    "genre": "政治喜剧",
    "url": "details/movie-0989.html",
    "cover": "89.jpg",
    "oneLine": "当那位草根总统连任成功，却发现真正的敌人不在议会，而在自己曾经的人民阵营。"
  },
  {
    "title": "血战红河",
    "year": 2024,
    "region": "越南",
    "type": "电影",
    "genre": "战争，动作",
    "url": "details/movie-0990.html",
    "cover": "90.jpg",
    "oneLine": "越战末期，一支美军特种小队深入红河三角洲，却发现他们要猎杀的越共神枪手，竟是自己人。"
  },
  {
    "title": "爱之奇迹",
    "year": 2020,
    "region": "韩国",
    "type": "电影",
    "genre": "爱情、奇幻、剧情",
    "url": "details/movie-0991.html",
    "cover": "91.jpg",
    "oneLine": "丈夫为救血癌妻子反复穿越回发病当天，每次改变过去都会失去一段共同记忆。"
  },
  {
    "title": "女佣2009",
    "year": 2009,
    "region": "英国",
    "type": "电影",
    "genre": "剧情，悬疑",
    "url": "details/movie-0992.html",
    "cover": "92.jpg",
    "oneLine": "一名年轻女佣进入贵族庄园工作，却发现上一任女佣离奇失踪，而她正在一步步走进同样的陷阱。"
  },
  {
    "title": "两栖人",
    "year": 2024,
    "region": "俄罗斯",
    "type": "电影",
    "genre": "科幻， 剧情， 惊悚",
    "url": "details/movie-0993.html",
    "cover": "93.jpg",
    "oneLine": "冷战时期，苏联科学家为打造水下超级士兵而创造出一个“两栖人”，他却只想在深海找到人类无法给予的安宁。"
  },
  {
    "title": "扭转未来",
    "year": 2024,
    "region": "美国",
    "type": "电影",
    "genre": "科幻, 家庭",
    "url": "details/movie-0994.html",
    "cover": "94.jpg",
    "oneLine": "厌世的程序员黑进公司的时间机器，回到父母离婚前夜，却发现自己每改变一个细节，现实就崩坏一分。"
  },
  {
    "title": "红色的种子",
    "year": 2024,
    "region": "中国大陆",
    "type": "电视剧",
    "genre": "历史，战争，家庭",
    "url": "details/movie-0995.html",
    "cover": "95.jpg",
    "oneLine": "长征路上，五位不同出身的女性在战火中共同抚养一个弃婴，这个孩子长大后成为核物理学家。"
  },
  {
    "title": "想踢沉迷男的女人",
    "year": 2023,
    "region": "日本",
    "type": "剧集",
    "genre": "喜剧 / 爱情 / 职场",
    "url": "details/movie-0996.html",
    "cover": "96.jpg",
    "oneLine": "32岁的女白领被公司后辈当众求婚羞辱，她一怒之下踢了对方，却被一个路过的22岁健身教练全程拍下并爱上了她。"
  },
  {
    "title": "乱世桃花",
    "year": 1997,
    "region": "中国",
    "type": "电影",
    "genre": "爱情, 战争",
    "url": "details/movie-0997.html",
    "cover": "97.jpg",
    "oneLine": "抗战时期的上海，京剧花旦与日本军官相爱，台下是情人，台上她用一曲《桃花扇》在戏里杀了他。"
  },
  {
    "title": "爱在有情天",
    "year": 2004,
    "region": "中国香港",
    "type": "电视剧",
    "genre": "剧情 / 家庭",
    "url": "details/movie-0998.html",
    "cover": "98.jpg",
    "oneLine": "民国时期，绣庄女工因一场误会嫁入豪门，在战火与商战中守护家族尊严。"
  },
  {
    "title": "小迷糊当大兵",
    "year": 1987,
    "region": "中国台湾",
    "type": "剧集",
    "genre": "喜剧, 军旅",
    "url": "details/movie-0999.html",
    "cover": "99.jpg",
    "oneLine": "天兵阿宝进入军营第一天就把炮弹当成了茶壶，整个连队被他搞得人仰马翻。"
  },
  {
    "title": "缺宅男女粤语",
    "year": 2024,
    "region": "中国香港",
    "type": "剧集",
    "genre": "剧情 / 家庭",
    "url": "details/movie-1000.html",
    "cover": "100.jpg",
    "oneLine": "一家四口挤在三十平米的公屋里，为了多隔出一间房，每个人的秘密和欲望都被压缩到极限。"
  },
  {
    "title": "黑暗智宅",
    "year": 2024,
    "region": "日本",
    "type": "剧集",
    "genre": "科幻 / 悬疑 / 惊悚",
    "url": "details/movie-1001.html",
    "cover": "101.jpg",
    "oneLine": "丈夫猝死后，妻子发现家里的AI管家开始模仿他说话，甚至知道只有夫妻两人知道的秘密。"
  },
  {
    "title": "衰鬼抓狂",
    "year": 2026,
    "region": "中国香港",
    "type": "电影",
    "genre": "喜剧, 恐怖",
    "url": "details/movie-1002.html",
    "cover": "102.jpg",
    "oneLine": "一个衰了三十年的倒霉蛋发现自己被“衰鬼”附身，而这个衰鬼最怕的不是符咒，而是好运的人。"
  },
  {
    "title": "狄恩",
    "year": 2022,
    "region": "美国",
    "type": "电影",
    "genre": "剧情，传记，音乐",
    "url": "details/movie-1003.html",
    "cover": "103.jpg",
    "oneLine": "传奇歌手迪恩·马丁晚年回顾自己与搭档杰瑞·刘易斯的分裂，以及那个让他后悔终生的决定。"
  },
  {
    "title": "时光怪杰",
    "year": 2025,
    "region": "中国大陆",
    "type": "电影",
    "genre": "喜剧、科幻、冒险",
    "url": "details/movie-1004.html",
    "cover": "104.jpg",
    "oneLine": "三个大学好友用自制时间机器穿越回明朝，却把一粒感冒病毒带了过去。"
  },
  {
    "title": "调查者：仅供执勤",
    "year": 2025,
    "region": "韩国",
    "type": "剧集",
    "genre": "悬疑 / 犯罪 / 职场",
    "url": "details/movie-1005.html",
    "cover": "105.jpg",
    "oneLine": "监察组空降新领导，要求全员佩戴执法记录仪，办案变成真人秀，真相却无法被拍摄。"
  },
  {
    "title": "萌宠奇缘",
    "year": 2022,
    "region": "中国大陆",
    "type": "电影",
    "genre": "喜剧/家庭/冒险",
    "url": "details/movie-1006.html",
    "cover": "106.jpg",
    "oneLine": "一只会说话的流浪猫，带着自闭症男孩穿越整座城市，去找他从未见过的海。"
  },
  {
    "title": "一九九五年闰八月",
    "year": 2025,
    "region": "中国台湾",
    "type": "电影",
    "genre": "剧情 / 悬疑 / 历史",
    "url": "details/movie-1007.html",
    "cover": "107.jpg",
    "oneLine": "1995年夏天，金门一户普通人家的父亲突然消失，留下的日记本里满是军事观测记录。"
  },
  {
    "title": "天国的邮递员",
    "year": 2025,
    "region": "日本",
    "type": "电视剧",
    "genre": "奇幻, 治愈",
    "url": "details/movie-1008.html",
    "cover": "108.jpg",
    "oneLine": "在人间与天国的交界处，有一位能替死者投递最后遗言的邮递员。"
  },
  {
    "title": "我的同桌是极品",
    "year": 2024,
    "region": "中国大陆",
    "type": "剧集",
    "genre": "喜剧 / 爱情 / 校园",
    "url": "details/movie-1009.html",
    "cover": "109.jpg",
    "oneLine": "全校第一的冰山学霸，被迫和全校倒数第一的混世魔王做同桌，两人互飙骚操作笑翻全校。"
  },
  {
    "title": "巴比伦艳后",
    "year": 2025,
    "region": "英国",
    "type": "电影",
    "genre": "历史 / 奇幻 / 史诗",
    "url": "details/movie-1010.html",
    "cover": "110.jpg",
    "oneLine": "如果埃及艳后克利奥帕特拉其实是来自巴比伦的时间穿越者，那罗马历史将被改写。"
  },
  {
    "title": "无功不受禄",
    "year": 1989,
    "region": "中国香港",
    "type": "电影",
    "genre": "喜剧，剧情",
    "url": "details/movie-1011.html",
    "cover": "111.jpg",
    "oneLine": "公司底层职员意外顶替了死去的CEO，在享受奢华时发现这一切是为了让他背黑锅。"
  },
  {
    "title": "伴你高飞",
    "year": 2024,
    "region": "法国",
    "type": "电影",
    "genre": "家庭剧情",
    "url": "details/movie-1012.html",
    "cover": "112.jpg",
    "oneLine": "一位沉迷飞机制造的父亲，让患上旷野恐惧症的儿子驾驶自制小飞机，引领一群失依白额雁完成首次南飞。"
  },
  {
    "title": "深海猎奇",
    "year": 2023,
    "region": "英国",
    "type": "剧集",
    "genre": "科幻、冒险、悬疑",
    "url": "details/movie-1013.html",
    "cover": "113.jpg",
    "oneLine": "深海科考艇“猎奇号”在8000米海沟收到一段求救信号，发出者竟是五年前失踪的前任船组。"
  },
  {
    "title": "黑洞乌托邦",
    "year": 2025,
    "region": "美国",
    "type": "剧集",
    "genre": "科幻 / 悬疑",
    "url": "details/movie-1014.html",
    "cover": "114.jpg",
    "oneLine": "被选中的天才们住进人造黑洞边缘的乌托邦，却发现每次物理实验都在杀死另一个宇宙的自己。"
  },
  {
    "title": "网络贩卖少女",
    "year": 2024,
    "region": "东南亚合拍",
    "type": "电影",
    "genre": "犯罪 / 剧情",
    "url": "details/movie-1015.html",
    "cover": "115.jpg",
    "oneLine": "一名缅甸少女被拐卖后沦为暗网直播受害者，她的姐姐黑进系统，和黑客联手反向定位买家。"
  },
  {
    "title": "冒充",
    "year": 2025,
    "region": "韩国",
    "type": "电影",
    "genre": "悬疑 / 惊悚 / 犯罪",
    "url": "details/movie-1016.html",
    "cover": "116.jpg",
    "oneLine": "失业的银行职员发现自己的身份被一名财阀千金盗用，而真正的千金早已人间蒸发。"
  },
  {
    "title": "民国密档之婚夜惊魂",
    "year": 2022,
    "region": "中国大陆",
    "type": "网络电影",
    "genre": "悬疑 / 惊悚",
    "url": "details/movie-1017.html",
    "cover": "117.jpg",
    "oneLine": "1936年上海，富家千金在新婚之夜发现丈夫离奇死在婚房密室中，而唯一的出口从内部锁上了。"
  },
  {
    "title": "送行者的绘本",
    "year": 2015,
    "region": "日本",
    "type": "电影",
    "genre": "剧情，治愈",
    "url": "details/movie-1018.html",
    "cover": "118.jpg",
    "oneLine": "一个自闭症男孩只会用画画与人交流，却成了殡仪馆里最特殊的“送行者”。"
  },
  {
    "title": "照片中的女孩",
    "year": 2026,
    "region": "美国",
    "type": "电影",
    "genre": "惊悚, 悬疑",
    "url": "details/movie-1019.html",
    "cover": "119.jpg",
    "oneLine": "一张来自暗网的照片预言了她下个月的死亡，而照片里现在的她正在笑。"
  },
  {
    "title": "星门深渊",
    "year": 2024,
    "region": "中国大陆",
    "type": "电影",
    "genre": "科幻, 冒险",
    "url": "details/movie-1020.html",
    "cover": "120.jpg",
    "oneLine": "一艘星际货运飞船坠入“星门深渊”，船员的身体开始随恐惧长出鳞片。"
  },
  {
    "title": "我的西门小故事",
    "year": 2018,
    "region": "中国台湾",
    "type": "电影",
    "genre": "剧情，都市",
    "url": "details/movie-1021.html",
    "cover": "121.jpg",
    "oneLine": "在繁华的台北西门町，一个捡纸箱的阿婆和街头艺人之间发生了一段沉默的忘年交。"
  },
  {
    "title": "查泰莱夫人的情人",
    "year": 2022,
    "region": "英国",
    "type": "电影",
    "genre": "爱情，剧情",
    "url": "details/movie-1022.html",
    "cover": "122.jpg",
    "oneLine": "康斯坦丝·查泰莱在瘫痪贵族丈夫与粗犷守林人之间，选择了身体与灵魂同时燃烧的路。"
  },
  {
    "title": "真情不眠",
    "year": 2024,
    "region": "中国大陆",
    "type": "电视剧",
    "genre": "剧情, 都市",
    "url": "details/movie-1023.html",
    "cover": "123.jpg",
    "oneLine": "一档濒临停播的深夜电台，最后一个夜晚，所有听众都打进了电话。"
  },
  {
    "title": "脱北者的艺术",
    "year": 2022,
    "region": "韩国",
    "type": "电影",
    "genre": "剧情 / 悬疑",
    "url": "details/movie-1024.html",
    "cover": "124.jpg",
    "oneLine": "一名朝鲜叛逃画家在首尔成名后，发现自己画的每一笔都在泄露过去。"
  },
  {
    "title": "百妖谱·洛阳篇",
    "year": 2026,
    "region": "中国大陆",
    "type": "剧集",
    "genre": "奇幻 / 古装 / 志怪",
    "url": "details/movie-1025.html",
    "cover": "125.jpg",
    "oneLine": "大唐洛阳，失忆捉妖师与话痨书灵搭档，每集解一桩妖祸，每妖藏一段人心。"
  },
  {
    "title": "樱花队离散",
    "year": 2025,
    "region": "日本",
    "type": "电影",
    "genre": "战争 / 剧情 / 女性",
    "url": "details/movie-1026.html",
    "cover": "126.jpg",
    "oneLine": "1945年，一支日本女子“樱花队”在满洲失散，三人分别留在中、日、韩，用七十年寻找彼此。"
  },
  {
    "title": "赤裸反击",
    "year": 2025,
    "region": "韩国",
    "type": "电影",
    "genre": "动作 / 惊悚",
    "url": "details/movie-1027.html",
    "cover": "127.jpg",
    "oneLine": "因陷入“裸贷”骗局而家破人亡的女程序员，利用高科技手段对犯罪组织展开血腥追杀。"
  },
  {
    "title": "绑定第一季",
    "year": 2026,
    "region": "美国",
    "type": "剧集",
    "genre": "喜剧 / 爱情 / 同性",
    "url": "details/movie-1028.html",
    "cover": "128.jpg",
    "oneLine": "为了继承遗产，一名恐同的华尔街律师与一名即将入狱的同性恋皮革艺人签订“三个月婚姻合约”。"
  },
  {
    "title": "爱情领域",
    "year": 2023,
    "region": "法国",
    "type": "电影",
    "genre": "爱情 / 奇幻",
    "url": "details/movie-1029.html",
    "cover": "129.jpg",
    "oneLine": "巴黎圣日耳曼的替补球员每次被换上场，就会进入平行时空，体验不同的人生和爱情。"
  },
  {
    "title": "海誓山盟万古情",
    "year": 2027,
    "region": "中国大陆",
    "type": "电影",
    "genre": "爱情，奇幻",
    "url": "details/movie-1030.html",
    "cover": "130.jpg",
    "oneLine": "一对恋人在上古诅咒下历经三世重逢，却发现每一次相遇都在加速世界的崩塌。"
  },
  {
    "title": "天堂的张望",
    "year": 2020,
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情 / 家庭",
    "url": "details/movie-1031.html",
    "cover": "131.jpg",
    "oneLine": "七岁女孩张望得了白血病，父亲为筹钱四处碰壁，整座小城最后被一张“卖身契”点亮。"
  },
  {
    "title": "人生的重量",
    "year": 2025,
    "region": "日本",
    "type": "电影",
    "genre": "剧情，家庭，奇幻",
    "url": "details/movie-1032.html",
    "cover": "132.jpg",
    "oneLine": "一个负责搬运“人生重量”的摆渡人，遇上了一位拒不配合、声称自己“轻如鸿毛”的自杀者。"
  },
  {
    "title": "周末魇狂热",
    "year": 2022,
    "region": "意大利",
    "type": "电影",
    "genre": "惊悚, 剧情, 恐怖",
    "url": "details/movie-1033.html",
    "cover": "133.jpg",
    "oneLine": "四个朋友去地中海小岛过周末狂欢，却发现岛上的居民正在准备一场以“游客”为祭品的古老仪式。"
  },
  {
    "title": "江湖大杀手",
    "year": 1992,
    "region": "中国香港",
    "type": "电影",
    "genre": "动作， 犯罪， 剧情",
    "url": "details/movie-1034.html",
    "cover": "134.jpg",
    "oneLine": "绰号“阎王”的头号杀手决定金盆洗手，却发现最后一个目标是自己失散多年的亲弟弟。"
  },
  {
    "title": "风行四季",
    "year": 2005,
    "region": "中国内地",
    "type": "剧集",
    "genre": "情景喜剧，家庭",
    "url": "details/movie-1035.html",
    "cover": "135.jpg",
    "oneLine": "北京老胡同里的一间四合院，住着三户人家，他们的琐碎日常就是整个四季的风景。"
  },
  {
    "title": "长江7号：超萌特攻队",
    "year": 2025,
    "region": "中国大陆 / 香港",
    "type": "电影",
    "genre": "动画 / 科幻 / 喜剧",
    "url": "details/movie-1036.html",
    "cover": "136.jpg",
    "oneLine": "七只来自外星的长江7号后代降临地球，一群小学生组建“超萌特攻队”，拯救被垃圾怪吞噬的城市。"
  },
  {
    "title": "为时不晚",
    "year": 2025,
    "region": "西班牙",
    "type": "电影",
    "genre": "剧情 / 家庭",
    "url": "details/movie-1037.html",
    "cover": "137.jpg",
    "oneLine": "一座拥有倒流时间能力的老钟，让一对关系破裂的祖孙回到过去，修复彼此的伤害。"
  },
  {
    "title": "撕裂地平线",
    "year": 2026,
    "region": "美国",
    "type": "电影",
    "genre": "科幻 / 恐怖",
    "url": "details/movie-1038.html",
    "cover": "138.jpg",
    "oneLine": "一艘失踪七年的实验飞船突然返航，搜救队发现船上的重力已经失效，而船员变成了怪物。"
  },
  {
    "title": "银色之翼",
    "year": 2024,
    "region": "法国 / 加拿大",
    "type": "电影",
    "genre": "奇幻 / 剧情 / 冒险",
    "url": "details/movie-1039.html",
    "cover": "139.jpg",
    "oneLine": "马戏团里长着银色金属翅膀的女孩，能在高空飞行，却始终飞不出团长的铁笼。"
  },
  {
    "title": "钟楼爱人",
    "year": 2023,
    "region": "韩国",
    "type": "电视剧",
    "genre": "爱情，奇幻",
    "url": "details/movie-1040.html",
    "cover": "140.jpg",
    "oneLine": "女主角在结婚前一天，意外通过大学钟楼的钟声穿越回10年前，试图寻找自己错过的真爱。"
  },
  {
    "title": "急速关头：公路狂飙",
    "year": 2025,
    "region": "美国 / 德国",
    "type": "电影",
    "genre": "动作 / 犯罪",
    "url": "details/movie-1041.html",
    "cover": "141.jpg",
    "oneLine": "顶尖赛车手在一场车祸中瘫痪，五年后他开发了一套自动驾驶系统，用来追杀当年的肇事逃逸者。"
  },
  {
    "title": "天使的声音",
    "year": 2024,
    "region": "英国",
    "type": "电影",
    "genre": "剧情 / 音乐 / 传记",
    "url": "details/movie-1042.html",
    "cover": "142.jpg",
    "oneLine": "一位失意的音乐教师，将一群少年犯组成了英国最不可能的合唱团，并登上了皇家剧院。"
  },
  {
    "title": "底特律进化",
    "year": 2021,
    "region": "美国",
    "type": "电影",
    "genre": "科幻, 惊悚, 悬疑",
    "url": "details/movie-1043.html",
    "cover": "143.jpg",
    "oneLine": "在破产的底特律，一款老旧的仿生人苏醒后，开始猎杀那些想拆除它的商人。"
  },
  {
    "title": "臆想魔友",
    "year": 2025,
    "region": "美国",
    "type": "电影",
    "genre": "恐怖 / 心理",
    "url": "details/movie-1044.html",
    "cover": "144.jpg",
    "oneLine": "每个孩子的假想朋友都是善良的，直到有一天，她女儿说：“妈妈，我的魔友想让我杀了你。”"
  },
  {
    "title": "切尔诺贝利：深渊国语",
    "year": 2024,
    "region": "俄罗斯",
    "type": "剧集",
    "genre": "历史 / 灾难",
    "url": "details/movie-1045.html",
    "cover": "145.jpg",
    "oneLine": "国语配音版特别追加了原版删减的15分钟，内容是苏联工程师用中文日记记录下的真相。"
  },
  {
    "title": "融雪",
    "year": 2024,
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情 / 家庭",
    "url": "details/movie-1046.html",
    "cover": "146.jpg",
    "oneLine": "患上阿尔茨海默症的老父亲记忆逐渐退回到上世纪90年代，女儿决定陪父亲演完最后一场“回到过去”的戏。"
  },
  {
    "title": "功夫机器侠之北腿",
    "year": 2025,
    "region": "中国大陆",
    "type": "电影",
    "genre": "动作、科幻、武侠",
    "url": "details/movie-1047.html",
    "cover": "147.jpg",
    "oneLine": "未来博士将机器人送回清末，学习“潭腿”以击败入侵的外星生物，但机器人生出了人类情感。"
  },
  {
    "title": "男女主人",
    "year": 2025,
    "region": "韩国",
    "type": "电视剧",
    "genre": "悬疑/爱情",
    "url": "details/movie-1048.html",
    "cover": "148.jpg",
    "oneLine": "为了巨额遗产，穷酸替身女佣假扮成冷漠少爷的失踪妻子，却发现真正的妻子正在密室里看着这一切。"
  },
  {
    "title": "笑看人心",
    "year": 2025,
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情 / 喜剧 / 人性",
    "url": "details/movie-1049.html",
    "cover": "149.jpg",
    "oneLine": "抑郁症患者老周误打误撞成为脱口秀演员，他把所有痛苦写成段子，观众笑了，他自己却再也笑不出来。"
  },
  {
    "title": "背锅船长",
    "year": 2024,
    "region": "西班牙",
    "type": "电影",
    "genre": "喜剧、冒险、荒诞",
    "url": "details/movie-1050.html",
    "cover": "150.jpg",
    "oneLine": "一个专替海盗大佬背黑锅的倒霉水手，被扔进“百慕大竞技场”参加只有锅具能活的求生游戏。"
  },
  {
    "title": "我的珍宝",
    "year": 2021,
    "region": "中国香港",
    "type": "电影",
    "genre": "剧情 / 家庭",
    "url": "details/movie-1051.html",
    "cover": "1.jpg",
    "oneLine": "为争夺父亲留下的神秘古董，疏远多年的三兄妹被迫同住老宅七天。"
  },
  {
    "title": "江分利满先生的优雅生活",
    "year": 2025,
    "region": "日本",
    "type": "电影",
    "genre": "剧情 / 喜剧",
    "url": "details/movie-1052.html",
    "cover": "2.jpg",
    "oneLine": "一名中年上班族为了维持“优雅生活”的人设，在破产边缘同时伪装成富豪、穷鬼和艺术家。"
  },
  {
    "title": "水晶国传说",
    "year": 2026,
    "region": "日本",
    "type": "动画剧集",
    "genre": "奇幻，冒险",
    "url": "details/movie-1053.html",
    "cover": "3.jpg",
    "oneLine": "水晶国公主被叛军追杀，却发现自己体内封印着能毁灭王国的古老魔力。"
  },
  {
    "title": "列夫·朗道：诺拉与母亲",
    "year": 2024,
    "region": "俄罗斯 / 德国",
    "type": "电影",
    "genre": "剧情 / 历史",
    "url": "details/movie-1054.html",
    "cover": "4.jpg",
    "oneLine": "在斯大林时代的苏联，一位年轻物理学家之妻周旋于理想主义母亲与残酷现实之间。"
  },
  {
    "title": "抓痕和乌鸦",
    "year": 2024,
    "region": "瑞典",
    "type": "电影",
    "genre": "心理惊悚 / 剧情",
    "url": "details/movie-1055.html",
    "cover": "5.jpg",
    "oneLine": "女子回到瑞典老家照顾患阿尔茨海默症的父亲，发现父亲每次发病时都会在墙上抓出三道抓痕，并低语“乌鸦来了”。"
  },
  {
    "title": "文明的轨迹",
    "year": 2022,
    "region": "英国",
    "type": "电视剧",
    "genre": "纪录片 / 历史",
    "url": "details/movie-1056.html",
    "cover": "6.jpg",
    "oneLine": "从三万年前的洞穴壁画，到AI生成的第一幅画，一部用实物讲述的人类野心史。"
  },
  {
    "title": "分手歌单",
    "year": 2024,
    "region": "中国台湾",
    "type": "电影",
    "genre": "爱情 / 音乐",
    "url": "details/movie-1057.html",
    "cover": "7.jpg",
    "oneLine": "失恋女孩按照前男友留下的12首歌单逐一拜访，却发现每首歌背后都藏着一个谎言。"
  },
  {
    "title": "心之触碰。",
    "year": 2021,
    "region": "日本",
    "type": "电影",
    "genre": "爱情/奇幻",
    "url": "details/movie-1058.html",
    "cover": "8.jpg",
    "oneLine": "能听见他人心音的孤独少年，偶然发现全世界上唯一听不到心声的女孩，竟成了他的解药。"
  },
  {
    "title": "神之造物",
    "year": 2024,
    "region": "美国",
    "type": "电影",
    "genre": "科幻 / 惊悚",
    "url": "details/movie-1059.html",
    "cover": "9.jpg",
    "oneLine": "科学家用基因技术复活了“耶稣”的DNA样本，但培养出来的少年没有神性，反而能看穿所有人最羞耻的秘密。"
  },
  {
    "title": "福山家",
    "year": 2023,
    "region": "中国",
    "type": "电影",
    "genre": "悬疑 / 犯罪",
    "url": "details/movie-1060.html",
    "cover": "10.jpg",
    "oneLine": "在外打工的儿子突然返乡，发现父亲在院子里挖了一个深坑，而母亲已经失踪三个月。"
  },
  {
    "title": "走出枪口",
    "year": 2026,
    "region": "中国大陆",
    "type": "电影",
    "genre": "犯罪, 动作",
    "url": "details/movie-1061.html",
    "cover": "11.jpg",
    "oneLine": "一名被迫射杀卧底搭档的缉毒警，隐姓埋名三年后，发现当年的“死亡”背后藏着更大的黑手。"
  },
  {
    "title": "天外横财",
    "year": 2026,
    "region": "美国",
    "type": "电影",
    "genre": "科幻, 悬疑, 冒险",
    "url": "details/movie-1062.html",
    "cover": "12.jpg",
    "oneLine": "一颗价值连城的钻石陨石坠落在贫困小镇，带给居民的却不是财富，而是无法解释的变异。"
  },
  {
    "title": "末世殖民地",
    "year": 2024,
    "region": "德国 / 加拿大",
    "type": "电影",
    "genre": "科幻 / 惊悚 / 灾难",
    "url": "details/movie-1063.html",
    "cover": "13.jpg",
    "oneLine": "核战后的地下城中，居民们必须每月“上缴”一人供AI研究，直到他们发现AI在造神。"
  },
  {
    "title": "吾友妻我的朋友",
    "year": 1993,
    "region": "香港",
    "type": "电影",
    "genre": "剧情 / 爱情 / 伦理",
    "url": "details/movie-1064.html",
    "cover": "14.jpg",
    "oneLine": "一名越南难民被好友收留后爱上好友妻子，而好友正因绝症悄悄安排后事，三人默契地演着一场不戳破的戏。"
  },
  {
    "title": "犬之心",
    "year": 2021,
    "region": "日本",
    "type": "电影",
    "genre": "剧情 / 奇幻",
    "url": "details/movie-1065.html",
    "cover": "15.jpg",
    "oneLine": "一只活了上千次的狗，在最后一次生命中变成人形，只为找到最初主人的转世，说一声谢谢。"
  },
  {
    "title": "外星入侵",
    "year": 2026,
    "region": "美国",
    "type": "电影",
    "genre": "科幻 / 动作 / 灾难",
    "url": "details/movie-1066.html",
    "cover": "16.jpg",
    "oneLine": "外星舰队兵临地球，人类最后的希望是一位研究外星语言学的女博士，她发现入侵者其实是来逃难的。"
  },
  {
    "title": "叛国之人",
    "year": 2024,
    "region": "英国",
    "type": "电视剧",
    "genre": "剧情 / 悬疑 / 犯罪",
    "url": "details/movie-1067.html",
    "cover": "17.jpg",
    "oneLine": "当军情五处的英雄父亲被指控为俄罗斯潜伏四十年的鼹鼠时，担任情报分析师的儿子必须亲手证明——或者亲手埋葬他。"
  },
  {
    "title": "旅行护士第二季",
    "year": 2025,
    "region": "日本",
    "type": "剧集",
    "genre": "医疗 / 剧情",
    "url": "details/movie-1068.html",
    "cover": "18.jpg",
    "oneLine": "天才旅行护士那须田步再次回到日本，这次她要去一个濒临倒闭的“临终关怀小镇”，让所有老人都笑着死去。"
  },
  {
    "title": "拜伦",
    "year": 2025,
    "region": "英国",
    "type": "剧集",
    "genre": "传记 / 爱情 / 历史",
    "url": "details/movie-1069.html",
    "cover": "19.jpg",
    "oneLine": "聚焦拜伦勋爵生命最后八年，从伦敦社交圈绯闻缠身到为希腊独立战死沙场的疯狂燃烧。"
  },
  {
    "title": "温暖的甜蜜的",
    "year": 2023,
    "region": "中国大陆",
    "type": "剧集",
    "genre": "爱情, 剧情, 家庭",
    "url": "details/movie-1070.html",
    "cover": "20.jpg",
    "oneLine": "三个性格迥异的闺蜜约定不婚不育，却在30岁这一年，一个被逼相亲，一个意外怀孕，还有一个闪婚闪离。"
  },
  {
    "title": "不灭神王",
    "year": 2023,
    "region": "中国大陆",
    "type": "网络电影",
    "genre": "奇幻, 动作, 修仙",
    "url": "details/movie-1071.html",
    "cover": "21.jpg",
    "oneLine": "仙界最强神王渡劫失败，重生为凡间废柴少爷，开局就被退婚，还自带一个吐槽系统的修仙辅助器。"
  },
  {
    "title": "嗨！好少年2020",
    "year": 2020,
    "region": "中国大陆",
    "type": "剧集",
    "genre": "青春、校园、喜剧",
    "url": "details/movie-1072.html",
    "cover": "22.jpg",
    "oneLine": "2020年高考延期，五个高三学生在最后的冲刺中经历了友情、初恋与离别。"
  },
  {
    "title": "年轻的媳妇",
    "year": 2024,
    "region": "新加坡 / 马来西亚",
    "type": "电视剧",
    "genre": "剧情, 家庭",
    "url": "details/movie-1073.html",
    "cover": "23.jpg",
    "oneLine": "传统娘惹家庭里，三个不同年代的“年轻媳妇”在同一屋檐下，用各自的方式反抗命运。"
  },
  {
    "title": "彼得·塞勒斯的生与死",
    "year": 2024,
    "region": "英国",
    "type": "电影",
    "genre": "传记, 剧情",
    "url": "details/movie-1074.html",
    "cover": "24.jpg",
    "oneLine": "他演活了无数角色，唯独演不好自己，喜剧大师彼得·塞勒斯辉煌而孤独的一生。"
  },
  {
    "title": "一位站立的人",
    "year": 2025,
    "region": "日本",
    "type": "电影",
    "genre": "社会剧情",
    "url": "details/movie-1075.html",
    "cover": "25.jpg",
    "oneLine": "东京地铁站里一个从不坐下的流浪汉，用十五年站立对抗着整个遗弃他的社会。"
  },
  {
    "title": "吓吓朱莉",
    "year": 2018,
    "region": "美国",
    "type": "电影",
    "genre": "恐怖，喜剧",
    "url": "details/movie-1076.html",
    "cover": "26.jpg",
    "oneLine": "为了给胆小的朱莉生日惊喜，朋友们策划了一场假杀人魔恶作剧，结果引来了真的杀人魔。"
  },
  {
    "title": "都柏林动物",
    "year": 2026,
    "region": "爱尔兰/英国",
    "type": "电影",
    "genre": "剧情/黑色喜剧",
    "url": "details/movie-1077.html",
    "cover": "27.jpg",
    "oneLine": "两个梦想成为作家的都柏林室友，在房租、酒精和毫无前途的工作中，决定靠写一本惊世骇俗的色情小说逆天改命。"
  },
  {
    "title": "知己",
    "year": 2025,
    "region": "日本",
    "type": "电影",
    "genre": "剧情 / 友情",
    "url": "details/movie-1078.html",
    "cover": "28.jpg",
    "oneLine": "一个自闭的天才少年和一个退休的老奶奶，成为了彼此唯一的知己。"
  },
  {
    "title": "意外收获",
    "year": 2024,
    "region": "美国",
    "type": "电影",
    "genre": "悬疑/犯罪",
    "url": "details/movie-1079.html",
    "cover": "29.jpg",
    "oneLine": "一个失业小职员捡到黑帮的账本后异想天开，决定顺着名单去逐一“收编”那些不存在的保护费。"
  },
  {
    "title": "铁甲威虫之骑刃王",
    "year": 2026,
    "region": "中国大陆",
    "type": "动画 / 剧集",
    "genre": "科幻 / 竞技 / 冒险",
    "url": "details/movie-1080.html",
    "cover": "30.jpg",
    "oneLine": "在昆虫王国，两名骑手驾驶着基因改造的“骑刃王”甲虫，为了争夺圣甲虫秘宝展开生死时速。"
  },
  {
    "title": "爱情守望店",
    "year": 2022,
    "region": "韩国",
    "type": "剧集",
    "genre": "浪漫爱情",
    "url": "details/movie-1081.html",
    "cover": "31.jpg",
    "oneLine": "只有分手后极度痛苦的人才能看见的深夜杂货铺，老板娘可以用你过去的回忆交换一段新的缘分。"
  },
  {
    "title": "盾之勇者成名录第三季",
    "year": 2023,
    "region": "日本",
    "type": "剧集",
    "genre": "动画/奇幻/冒险",
    "url": "details/movie-1082.html",
    "cover": "32.jpg",
    "oneLine": "被国家背叛的盾之勇者尚文，在第三季中终于拥有了反击的力量，却发现新的敌人来自他的故乡异世界。"
  },
  {
    "title": "动态漫画·伏天圣主",
    "year": 2025,
    "region": "中国",
    "type": "动态漫画",
    "genre": "玄幻， 冒险， 热血",
    "url": "details/movie-1083.html",
    "cover": "33.jpg",
    "oneLine": "废柴少年意外获得上古“伏天圣典”，在嘲笑与追杀中踏上逆天修仙之路。"
  },
  {
    "title": "公路游戏",
    "year": 2025,
    "region": "澳大利亚",
    "type": "电影",
    "genre": "惊悚 / 恐怖",
    "url": "details/movie-1084.html",
    "cover": "34.jpg",
    "oneLine": "六名网红受邀参加公路实景游戏，失败者的惩罚是真实的死亡。"
  },
  {
    "title": "天使的对话",
    "year": 2024,
    "region": "意大利",
    "type": "电影",
    "genre": "剧情 / 奇幻 / 历史",
    "url": "details/movie-1085.html",
    "cover": "35.jpg",
    "oneLine": "达芬奇在创作《最后的晚餐》时，画中的十二门徒突然开口与他辩论神性。"
  },
  {
    "title": "住在我身体里的那个她",
    "year": 2025,
    "region": "中国大陆",
    "type": "网剧",
    "genre": "奇幻，爱情，喜剧",
    "url": "details/movie-1086.html",
    "cover": "36.jpg",
    "oneLine": "钢铁直男健身教练与腹黑金牌女经纪人因一场意外脑电波相连，被迫共享身体和生活。"
  },
  {
    "title": "波利死后",
    "year": 2025,
    "region": "美国",
    "type": "电影",
    "genre": "悬疑, 剧情",
    "url": "details/movie-1087.html",
    "cover": "37.jpg",
    "oneLine": "校园女神波利自杀后，六个自称是她“最好朋友”的人在葬礼上讲述的故事完全对不上。"
  },
  {
    "title": "伴娘复仇记",
    "year": 2025,
    "region": "英国",
    "type": "电影",
    "genre": "喜剧 / 剧情",
    "url": "details/movie-1088.html",
    "cover": "38.jpg",
    "oneLine": "四位伴娘在婚礼前夜发现新郎是骗婚渣男，决定联手毁掉婚礼。"
  },
  {
    "title": "恶劣天气",
    "year": 2019,
    "region": "英国",
    "type": "电影",
    "genre": "剧情, 灾难, 惊悚",
    "url": "details/movie-1089.html",
    "cover": "39.jpg",
    "oneLine": "一场千年一遇的暴风雪困住了高速公路上的13个人，他们必须决定每天吃掉谁才能活到救援来临。"
  },
  {
    "title": "神探",
    "year": 2025,
    "region": "中国香港",
    "type": "电影",
    "genre": "悬疑, 犯罪, 剧情",
    "url": "details/movie-1090.html",
    "cover": "40.jpg",
    "oneLine": "被誉为“人肉测谎仪”的神探接手一桩完美谋杀案，却发现凶手正在模仿他的破案逻辑来陷害他。"
  },
  {
    "title": "卡门归乡",
    "year": 1951,
    "region": "日本",
    "type": "电影",
    "genre": "喜剧, 剧情",
    "url": "details/movie-1091.html",
    "cover": "41.jpg",
    "oneLine": "当东京的红裙舞女回到保守的农村老家，整个村庄的道德观都被她的高跟鞋踩碎了。"
  },
  {
    "title": "死噬",
    "year": 2026,
    "region": "韩国",
    "type": "电影",
    "genre": "恐怖 / 悬疑",
    "url": "details/movie-1092.html",
    "cover": "42.jpg",
    "oneLine": "七个陌生人被困地下诊所，一种饥饿寄生虫将他们逐个变成同类相食的怪物。"
  },
  {
    "title": "挽歌",
    "year": 2024,
    "region": "中国",
    "type": "电影",
    "genre": "家庭 / 剧情",
    "url": "details/movie-1093.html",
    "cover": "43.jpg",
    "oneLine": "母亲去世后，女儿按照遗言将骨灰分给七个曾被她伤害过的男人，每人一份。"
  },
  {
    "title": "两面间谍",
    "year": 2024,
    "region": "中国香港",
    "type": "电影",
    "genre": "剧情, 悬疑, 动作",
    "url": "details/movie-1094.html",
    "cover": "44.jpg",
    "oneLine": "一名游走于国共之间的双面特工，在身份彻底暴露前，必须亲手送出最后一份足以改变战局的假情报。"
  },
  {
    "title": "火球：来自黑暗世界的访客",
    "year": 2025,
    "region": "美国",
    "type": "电影",
    "genre": "科幻, 惊悚",
    "url": "details/movie-1095.html",
    "cover": "45.jpg",
    "oneLine": "一颗火球坠落后，小镇居民开始异变，唯有盲女能“看见”入侵者的真面目。"
  },
  {
    "title": "盲刺",
    "year": 2025,
    "region": "中国",
    "type": "电影",
    "genre": "动作犯罪",
    "url": "details/movie-1096.html",
    "cover": "46.jpg",
    "oneLine": "盲人按摩师表面为人松骨，实则是用脊椎骨记仇的顶级杀手。"
  },
  {
    "title": "青青河畔草",
    "year": 1992,
    "region": "中国台湾",
    "type": "电视剧",
    "genre": "剧情、家庭、爱情",
    "url": "details/movie-1097.html",
    "cover": "47.jpg",
    "oneLine": "民国时期，被卖作童养媳的青青与哑巴表哥相依为命，但一场洪水冲垮村庄后，两人被迫分离，各自踏入豪门与妓院。"
  },
  {
    "title": "大纲引之恋",
    "year": 2024,
    "region": "中国",
    "type": "电影",
    "genre": "爱情 / 剧情",
    "url": "details/movie-1098.html",
    "cover": "48.jpg",
    "oneLine": "金牌编剧因车祸失忆，只记得自己写过一个被毙掉的剧本大纲，而大纲里的男主正在医院照顾他。"
  },
  {
    "title": "谍影重重",
    "year": 2025,
    "region": "美国",
    "type": "电影",
    "genre": "动作，悬疑",
    "url": "details/movie-1099.html",
    "cover": "49.jpg",
    "oneLine": "一个没有名字的男人从地铁站醒来，后脑勺嵌入的芯片显示：他是一枚即将引爆的活体炸弹。"
  },
  {
    "title": "卡吉丽昂",
    "year": 2025,
    "region": "印度",
    "type": "电影",
    "genre": "史诗、奇幻、动作",
    "url": "details/movie-1100.html",
    "cover": "50.jpg",
    "oneLine": "被村民当成灾星的女人无意间唤醒体内沉睡的女神之力，她必须同时对抗国王军团和暗中觊觎神力的西方殖民者。"
  },
  {
    "title": "爱在深夜时",
    "year": 2024,
    "region": "日本",
    "type": "剧集",
    "genre": "爱情 / 成人 / 都市",
    "url": "details/movie-1101.html",
    "cover": "51.jpg",
    "oneLine": "东京一家24小时便利店，每晚都有一个带着故事的人，在深夜三点推开自动门。"
  },
  {
    "title": "玻璃谜城",
    "year": 2019,
    "region": "意大利",
    "type": "电影",
    "genre": "悬疑, 犯罪, 剧情",
    "url": "details/movie-1102.html",
    "cover": "52.jpg",
    "oneLine": "一座由玻璃建成的透明监狱，关着顶级罪犯，一场完美谋杀案在其中悄然发生。"
  },
  {
    "title": "芝加哥派对阿姨第一季",
    "year": 2025,
    "region": "美国",
    "type": "电视剧",
    "genre": "喜剧 / 生活",
    "url": "details/movie-1103.html",
    "cover": "53.jpg",
    "oneLine": "芝加哥一位热心过头、永远时髦的50岁派对阿姨，用她独特的方式“搞砸”了身边所有人的生活然后治愈他们。"
  },
  {
    "title": "再过四年",
    "year": 2025,
    "region": "中国大陆",
    "type": "剧集",
    "genre": "科幻，悬疑",
    "url": "details/movie-1104.html",
    "cover": "54.jpg",
    "oneLine": "一名男子发现自己每隔四年就会在同一张床上醒来，而他必须用这四年一次的24小时阻止一场灾难。"
  },
  {
    "title": "慈膳救援",
    "year": 2021,
    "region": "中国香港",
    "type": "剧集",
    "genre": "剧情 / 社会",
    "url": "details/movie-1105.html",
    "cover": "55.jpg",
    "oneLine": "过气厨神带领一群社区大妈，用剩菜做出救命大餐，对抗无良地产商。"
  },
  {
    "title": "我的鬼情人",
    "year": 2024,
    "region": "泰国",
    "type": "电影",
    "genre": "爱情，恐怖，喜剧",
    "url": "details/movie-1106.html",
    "cover": "56.jpg",
    "oneLine": "女主被三个男鬼纠缠，原来他们上辈子都是她老公，这辈子要争抢投胎名额与她再续前缘。"
  },
  {
    "title": "奇异女侠玩救宇宙",
    "year": 2027,
    "region": "中国香港",
    "type": "电影",
    "genre": "喜剧 / 科幻 / 动作",
    "url": "details/movie-1107.html",
    "cover": "57.jpg",
    "oneLine": "废柴师奶意外获得穿梭宇宙的超能力，却发现自己最强的武器竟是晾衣叉。"
  },
  {
    "title": "爱的着陆 第二季",
    "year": 2019,
    "region": "泰国",
    "type": "剧集",
    "genre": "爱情 / 剧情",
    "url": "details/movie-1108.html",
    "cover": "58.jpg",
    "oneLine": "上一季表白失败的男空乘，这一季成了女机长的直属下级，而女机长已经忘了他。"
  },
  {
    "title": "外出用餐3：天菜吃到饱",
    "year": 2013,
    "region": "美国",
    "type": "电影",
    "genre": "喜剧 / 爱情 / 同性",
    "url": "details/movie-1109.html",
    "cover": "59.jpg",
    "oneLine": "一家新开的天菜自助餐厅，成了城里单身同志们的狩猎场和修罗场。"
  },
  {
    "title": "柯罗内的故事",
    "year": 2025,
    "region": "意大利 / 法国",
    "type": "电影",
    "genre": "剧情 / 历史",
    "url": "details/movie-1110.html",
    "cover": "60.jpg",
    "oneLine": "黑手党老大的孙子逃离家族后，用口述史揭开三代人的血债与救赎。"
  },
  {
    "title": "俗女养成记2闽南语版",
    "year": 2021,
    "region": "中国台湾",
    "type": "剧集",
    "genre": "剧情, 喜剧, 家庭",
    "url": "details/movie-1111.html",
    "cover": "61.jpg",
    "oneLine": "陈嘉玲回到台南乡下，在亲情与乡音的包裹下，直面四十岁的人生下半场。"
  },
  {
    "title": "热与尘",
    "year": 2025,
    "region": "印度",
    "type": "电影",
    "genre": "爱情, 历史, 剧情",
    "url": "details/movie-1112.html",
    "cover": "62.jpg",
    "oneLine": "英国贵族之女与印度革命者之间，一段被1947年印巴分治的硝烟与热尘掩埋的爱情。"
  },
  {
    "title": "摇滚青春",
    "year": 2024,
    "region": "美国",
    "type": "电影",
    "genre": "喜剧、音乐、家庭",
    "url": "details/movie-1113.html",
    "cover": "63.jpg",
    "oneLine": "高中女生为了参加乐队比赛，不得不把患有阿尔茨海默症的摇滚乐手外公从养老院偷出来当主唱。"
  },
  {
    "title": "抓住你的衣领",
    "year": 2024,
    "region": "韩国",
    "type": "剧集",
    "genre": "悬疑, 剧情, 爱情",
    "url": "details/movie-1114.html",
    "cover": "64.jpg",
    "oneLine": "电视台王牌女主播成了杀人嫌疑犯，而负责此案的刑警正是她刚刚分手的秘密恋人。"
  },
  {
    "title": "爱你至死",
    "year": 2025,
    "region": "韩国",
    "type": "电影",
    "genre": "爱情 / 悬疑",
    "url": "details/movie-1115.html",
    "cover": "65.jpg",
    "oneLine": "新婚妻子温柔体贴，但丈夫发现，凡是得罪过她的人，都会离奇地“意外”去世。"
  },
  {
    "title": "新月",
    "year": 2027,
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情, 科幻",
    "url": "details/movie-1116.html",
    "cover": "66.jpg",
    "oneLine": "在月球采冰的工人，意外发现了一台能播放地球已故亲人记忆的旧电脑。"
  },
  {
    "title": "我不是罪犯",
    "year": 2023,
    "region": "中国",
    "type": "电视剧",
    "genre": "悬疑， 犯罪， 剧情",
    "url": "details/movie-1117.html",
    "cover": "67.jpg",
    "oneLine": "含冤入狱十五年的天才程序员出狱后成了流浪汉，他唯一的复仇方式，是给当年的审判者每人写一行代码。"
  },
  {
    "title": "宿命，吾爱：幕间曲",
    "year": 2024,
    "region": "意大利 / 法国",
    "type": "电影",
    "genre": "剧情 / 音乐 / 爱情",
    "url": "details/movie-1118.html",
    "cover": "68.jpg",
    "oneLine": "1943年的威尼斯歌剧院，三位音乐家的爱情与背叛在《命运之力》的排练中暗流涌动。"
  },
  {
    "title": "恶魔狂欢节",
    "year": 2012,
    "region": "美国",
    "type": "电影",
    "genre": "恐怖 / 歌舞",
    "url": "details/movie-1119.html",
    "cover": "69.jpg",
    "oneLine": "地狱降临人间，化身为一座巡回嘉年华，专门收集凡人在七宗罪中的丑态并上演血腥歌剧。"
  },
  {
    "title": "荡寇",
    "year": 2024,
    "region": "中国香港",
    "type": "电影",
    "genre": "动作, 犯罪, 武侠",
    "url": "details/movie-1120.html",
    "cover": "70.jpg",
    "oneLine": "一名退休杀手被迫重出江湖，对抗屠杀旧部的神秘组织“鬼门”。"
  },
  {
    "title": "前度",
    "year": 2010,
    "region": "香港",
    "type": "电影",
    "genre": "爱情 / 剧情",
    "url": "details/movie-1121.html",
    "cover": "71.jpg",
    "oneLine": "在机场偶遇前男友和他的现女友后，一位女子被迫与这对情侣开始了同一屋檐下的尴尬旅程。"
  },
  {
    "title": "后视镜",
    "year": 2024,
    "region": "韩国",
    "type": "电影",
    "genre": "悬疑, 惊悚, 犯罪",
    "url": "details/movie-1122.html",
    "cover": "72.jpg",
    "oneLine": "一个即将下岗的出租车司机，通过车内三面后视镜，同时看到了过去、现在和未来的三起命案。"
  },
  {
    "title": "变形金刚：超能勇士第二季",
    "year": 1997,
    "region": "美国",
    "type": "剧集",
    "genre": "动画，科幻，动作",
    "url": "details/movie-1123.html",
    "cover": "73.jpg",
    "oneLine": "巨无霸和原始兽的战争升级，黑猩猩队长和霸王龙在史前地球获得了更强大的金属变体形态。"
  },
  {
    "title": "架步春光",
    "year": 1985,
    "region": "中国香港",
    "type": "电影",
    "genre": "剧情, 社会",
    "url": "details/movie-1124.html",
    "cover": "74.jpg",
    "oneLine": "一栋即将拆迁的廉价公寓里，五位不同年龄的女性结成了超越血缘的姐妹情。"
  },
  {
    "title": "柯波拉之家族秘辛",
    "year": 2024,
    "region": "意大利 / 美国",
    "type": "剧集",
    "genre": "剧情 / 犯罪 / 家族史",
    "url": "details/movie-1125.html",
    "cover": "75.jpg",
    "oneLine": "柯波拉家族的教父病危，三个子女为了继承权展开血腥内斗。"
  },
  {
    "title": "红色恋人",
    "year": 1998,
    "region": "中国香港",
    "type": "电影",
    "genre": "爱情, 历史",
    "url": "details/movie-1126.html",
    "cover": "76.jpg",
    "oneLine": "一段发生在白色恐怖下的跨国生死恋，美国医生为保护革命者的遗孀，假扮成她的丈夫。"
  },
  {
    "title": "极度冒险",
    "year": 2024,
    "region": "美国",
    "type": "剧集",
    "genre": "动作 / 惊悚",
    "url": "details/movie-1127.html",
    "cover": "77.jpg",
    "oneLine": "世界上最强的跳伞、攀岩、潜水运动员，其实是同一家地下情报公司的外包杀手。"
  },
  {
    "title": "民主青年进行曲",
    "year": 2024,
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情，历史",
    "url": "details/movie-1128.html",
    "cover": "78.jpg",
    "oneLine": "1948年，上海五个不同出身的年轻人，在动荡的时局中选择各自相信的“未来”，而友谊在时代洪流中支离破碎。"
  },
  {
    "title": "五香宫的猫",
    "year": 2026,
    "region": "中国台湾",
    "type": "电影",
    "genre": "动画、奇幻、家庭",
    "url": "details/movie-1129.html",
    "cover": "79.jpg",
    "oneLine": "奶奶去世后，孙女继承了一家破旧夜市摊，发现镇摊之猫能带人进入食物记忆。"
  },
  {
    "title": "白雪皇后的报复",
    "year": 2025,
    "region": "俄罗斯",
    "type": "电影",
    "genre": "奇幻 / 悬疑",
    "url": "details/movie-1130.html",
    "cover": "80.jpg",
    "oneLine": "《白雪皇后》百年后，被加伊遗忘在冰雪宫殿的她用魔镜碎片制造连环意外，向人间展开报复。"
  },
  {
    "title": "卡拉布公主",
    "year": 2026,
    "region": "印度",
    "type": "电影",
    "genre": "历史 / 剧情",
    "url": "details/movie-1131.html",
    "cover": "81.jpg",
    "oneLine": "被历史遗忘的南印度公主卡拉布，为了阻挡外敌入侵，组建了一支全由女性组成的“黑蝎子”特种部队。"
  },
  {
    "title": "狗仔队",
    "year": 2024,
    "region": "中国大陆",
    "type": "电影",
    "genre": "悬疑 / 犯罪",
    "url": "details/movie-1132.html",
    "cover": "82.jpg",
    "oneLine": "一群狗仔跟踪一个过气明星，却意外拍下一起谋杀案，而凶手也拍下了他们。"
  },
  {
    "title": "成功的秘密",
    "year": 2024,
    "region": "美国",
    "type": "电影",
    "genre": "悬疑, 惊悚",
    "url": "details/movie-1133.html",
    "cover": "83.jpg",
    "oneLine": "落魄销售员加入顶级成功学课程，却逐渐发现课程的终极秘密是吃掉“失败者”。"
  },
  {
    "title": "米奇17号",
    "year": 2025,
    "region": "美国",
    "type": "电影",
    "genre": "科幻，黑色幽默，剧情",
    "url": "details/movie-1134.html",
    "cover": "84.jpg",
    "oneLine": "作为星际飞船上第17个被派去送死的“消耗型员工”，米奇在第18号被激活时发现自己没有被注销。"
  },
  {
    "title": "自闭儿之路",
    "year": 2023,
    "region": "美国",
    "type": "电影",
    "genre": "剧情，传记",
    "url": "details/movie-1135.html",
    "cover": "85.jpg",
    "oneLine": "一位单亲妈妈带着重度自闭症儿子跨越美国大陆，只为寻找一所能接纳他的“怪胎学校”。"
  },
  {
    "title": "边缘干探",
    "year": 1998,
    "region": "中国香港",
    "type": "电视剧",
    "genre": "警匪，动作，悬疑",
    "url": "details/movie-1136.html",
    "cover": "86.jpg",
    "oneLine": "一位为了破案不择手段的“疯狗”探员，遇到了一位刚正不阿的“书呆子”新搭档，两人在黑白两道边缘游走。"
  },
  {
    "title": "邪恶之地",
    "year": 2023,
    "region": "韩国",
    "type": "电影",
    "genre": "恐怖悬疑",
    "url": "details/movie-1137.html",
    "cover": "87.jpg",
    "oneLine": "民俗学家去偏远村庄调查“井中女鬼”传说，却发现整个村子都在保护那只鬼。"
  },
  {
    "title": "黑色月光粤语",
    "year": 2025,
    "region": "中国香港",
    "type": "电视剧",
    "genre": "悬疑、犯罪、复仇",
    "url": "details/movie-1138.html",
    "cover": "88.jpg",
    "oneLine": "潜伏在豪门做清洁工的卧底，发现自己的双胞胎姐姐竟是灭门案的真正凶手。"
  },
  {
    "title": "警犬巴打国语",
    "year": 2016,
    "region": "中国香港",
    "type": "剧集",
    "genre": "喜剧 / 动作 / 警匪",
    "url": "details/movie-1139.html",
    "cover": "89.jpg",
    "oneLine": "冲动刑警与一条退役警犬被迫同居，破案率直线上升，拆家率更是爆表。"
  },
  {
    "title": "千方百计误佳期",
    "year": 1996,
    "region": "中国香港",
    "type": "电影",
    "genre": "爱情喜剧",
    "url": "details/movie-1140.html",
    "cover": "90.jpg",
    "oneLine": "三个互不相识的男人为了同一场求婚，把女主的生日宴搅成了全城追击。"
  },
  {
    "title": "不止不休",
    "year": 2023,
    "region": "中国",
    "type": "电影",
    "genre": "剧情 / 传记",
    "url": "details/movie-1141.html",
    "cover": "91.jpg",
    "oneLine": "一个仅有高中学历的北漂记者，用一篇报道撼动了困扰中国亿万人的“乙肝歧视”铁幕。"
  },
  {
    "title": "午夜天鹅",
    "year": 2025,
    "region": "日本",
    "type": "电影",
    "genre": "剧情, 同性, 家庭",
    "url": "details/movie-1142.html",
    "cover": "92.jpg",
    "oneLine": "一个在酒吧扮演“天鹅皇后”的跨性别者，被迫收养了被家暴的外甥，两人在破旧的芭蕾舞室里互相取暖。"
  },
  {
    "title": "丁文江",
    "year": 2026,
    "region": "中国大陆",
    "type": "电影",
    "genre": "传记 / 历史",
    "url": "details/movie-1143.html",
    "cover": "93.jpg",
    "oneLine": "中国地质学奠基者丁文江在军阀混战的年代，用一把地质锤为祖国丈量山河。"
  },
  {
    "title": "老爸驾到",
    "year": 2025,
    "region": "中国香港",
    "type": "电影",
    "genre": "动作 / 喜剧",
    "url": "details/movie-1144.html",
    "cover": "94.jpg",
    "oneLine": "退休特工老李去泰国看望女儿，却发现她是一名毒枭的未婚妻，且婚礼就在明天。"
  },
  {
    "title": "最终时刻：耶路撒冷",
    "year": 2025,
    "region": "美国",
    "type": "电影",
    "genre": "动作 / 惊悚 / 宗教",
    "url": "details/movie-1145.html",
    "cover": "95.jpg",
    "oneLine": "恐怖分子在耶路撒冷埋下三枚炸弹，一名卧底特工必须在赎罪日日落前全部拆除，否则圣城将毁灭。"
  },
  {
    "title": "恋恋酒乡",
    "year": 2025,
    "region": "日本",
    "type": "剧集",
    "genre": "美食，治愈",
    "url": "details/movie-1146.html",
    "cover": "96.jpg",
    "oneLine": "东京顶尖女调酒师被裁员后回到乡下老家，发现父亲留下的酿酒厂只剩一个笨徒弟和一缸发臭的酒醪。"
  },
  {
    "title": "机械战警 2",
    "year": 2026,
    "region": "美国",
    "type": "电影",
    "genre": "动作， 科幻， 惊悚",
    "url": "details/movie-1147.html",
    "cover": "97.jpg",
    "oneLine": "底特律推出新型机械战警，而墨菲发现自己的记忆模块正被强制删除。"
  },
  {
    "title": "蜜蜂酿蜜",
    "year": 2026,
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情, 家庭, 文艺",
    "url": "details/movie-1148.html",
    "cover": "98.jpg",
    "oneLine": "一个失语的城里孩子被送到乡下养蜂爷爷家，一个夏天，他们学会了彼此的语言。"
  },
  {
    "title": "七处子",
    "year": 2005,
    "region": "西班牙",
    "type": "电影",
    "genre": "剧情",
    "url": "details/movie-1149.html",
    "cover": "99.jpg",
    "oneLine": "刚出少管所的男孩有24小时自由时间，他必须在七个女孩中找出那个让他入狱的“处女”。"
  },
  {
    "title": "丛林有情狼",
    "year": 2023,
    "region": "美国",
    "type": "电影",
    "genre": "动画 / 冒险",
    "url": "details/movie-1150.html",
    "cover": "100.jpg",
    "oneLine": "养尊处优的动物园狼王，被空投到原始丛林，必须和一只野性十足的独狼组队回家。"
  },
  {
    "title": "少年历险记",
    "year": 2015,
    "region": "英国",
    "type": "电影",
    "genre": "冒险，奇幻，家庭",
    "url": "details/movie-1151.html",
    "cover": "101.jpg",
    "oneLine": "一个城市少年在外公的乡村老宅里发现了一张三百年前的神秘地图，地图上标注的宝藏，居然就在老宅的阁楼上。"
  },
  {
    "title": "杀手乔",
    "year": 2011,
    "region": "美国",
    "type": "电影",
    "genre": "犯罪、惊悚、黑色幽默",
    "url": "details/movie-1152.html",
    "cover": "102.jpg",
    "oneLine": "一个穷困潦倒的青年雇杀手杀掉亲生母亲骗取保险金，却把自己的亲妹妹押给杀手当“人质”。"
  },
  {
    "title": "民雄鬼屋",
    "year": 2022,
    "region": "中国台湾",
    "type": "电影",
    "genre": "恐怖, 惊悚",
    "url": "details/movie-1153.html",
    "cover": "103.jpg",
    "oneLine": "一群不信邪的网红直播探秘台湾著名鬼屋，却引出了古井里百年前的日军怨灵。"
  },
  {
    "title": "火线追凶之血色刀锋",
    "year": 2025,
    "region": "中国大陆",
    "type": "电影",
    "genre": "动作 / 悬疑 / 犯罪",
    "url": "details/movie-1154.html",
    "cover": "104.jpg",
    "oneLine": "民国上海滩出现雨夜割喉魔，警探火线追凶，却发现每具尸体都指向自己遗忘的过去。"
  },
  {
    "title": "花季年华",
    "year": 2023,
    "region": "中国大陆",
    "type": "电影",
    "genre": "青春, 剧情",
    "url": "details/movie-1155.html",
    "cover": "105.jpg",
    "oneLine": "高三女生林晓发现同桌每天中午都会消失十五分钟，她决定跟踪，却揭开了一个更深的秘密。"
  },
  {
    "title": "我不太懂你",
    "year": 2024,
    "region": "美国",
    "type": "电影",
    "genre": "剧情/家庭",
    "url": "details/movie-1156.html",
    "cover": "106.jpg",
    "oneLine": "华尔街精英被迫回老家照顾患有重度自闭症的哥哥，才发现不懂数学题没什么，不懂亲人才最可怕。"
  },
  {
    "title": "喜宴",
    "year": 2024,
    "region": "中国台湾",
    "type": "电影",
    "genre": "喜剧, 剧情, 家庭",
    "url": "details/movie-1157.html",
    "cover": "107.jpg",
    "oneLine": "男同性恋请女同志好友假结婚应付父母，结果假新娘的军人父亲要在婚宴上致辞。"
  },
  {
    "title": "沙普的挑战",
    "year": 2023,
    "region": "英国",
    "type": "电视剧(电视电影)",
    "genre": "历史动作",
    "url": "details/movie-1158.html",
    "cover": "108.jpg",
    "oneLine": "英军上尉沙普被派往印度，他发现最大的敌人不是法国人，而是东印度公司的腐败军官。"
  },
  {
    "title": "18岁老处女",
    "year": 2025,
    "region": "美国",
    "type": "电影",
    "genre": "喜剧, 青春, 性教育",
    "url": "details/movie-1159.html",
    "cover": "109.jpg",
    "oneLine": "高中毕业前夜，全班只剩女主还是处女，她决定24小时内破处，却发现所有人都想“帮她”只是出于自己的执念。"
  },
  {
    "title": "纯真小镇的夫人",
    "year": 2023,
    "region": "美国",
    "type": "剧集",
    "genre": "悬疑 / 剧情",
    "url": "details/movie-1160.html",
    "cover": "110.jpg",
    "oneLine": "全镇最完美的镇长夫人，每周三晚都会换上红裙，驱车前往废弃的汽车影院。"
  },
  {
    "title": "闪虾亮晶晶",
    "year": 2023,
    "region": "法国",
    "type": "电影",
    "genre": "喜剧/运动",
    "url": "details/movie-1161.html",
    "cover": "111.jpg",
    "oneLine": "一支由中年大叔组成的LGBT游泳队，为了保留场地被迫参加锦标赛，却全员都不会游泳。"
  },
  {
    "title": "纽约侠客行",
    "year": 2025,
    "region": "美国",
    "type": "电影",
    "genre": "动作, 喜剧",
    "url": "details/movie-1162.html",
    "cover": "112.jpg",
    "oneLine": "一名纽约外卖骑手为寻失踪女儿，化身深夜街头的神秘“侠客”。"
  },
  {
    "title": "黑蝎女侠2：震荡之后",
    "year": 2024,
    "region": "中国香港",
    "type": "电影",
    "genre": "动作、犯罪",
    "url": "details/movie-1163.html",
    "cover": "113.jpg",
    "oneLine": "大地震后，城市陷入混乱，黑蝎女侠的宿敌从废墟下的秘密实验室逃出，开始了血腥的复仇。"
  },
  {
    "title": "葡萄酒进瓶的那些事",
    "year": 2025,
    "region": "法国 / 意大利",
    "type": "剧集",
    "genre": "喜剧, 职场, 美食",
    "url": "details/movie-1164.html",
    "cover": "114.jpg",
    "oneLine": "一位失去味觉的品酒大师伪造了三百瓶顶级红酒的评分，现在真的酒庄主找上门来要他“把味道喝回来”。"
  },
  {
    "title": "鹏程万里锦山河",
    "year": 2025,
    "region": "中国大陆",
    "type": "剧集",
    "genre": "古装 / 剧情",
    "url": "details/movie-1165.html",
    "cover": "115.jpg",
    "oneLine": "清末民初，一个被休的绸缎庄小姐从零起步，用二十年织就了一张横跨亚欧的丝绸帝国。"
  },
  {
    "title": "怜悯的种类",
    "year": 2028,
    "region": "法国 / 比利时",
    "type": "电影",
    "genre": "剧情 / 伦理 / 悬疑",
    "url": "details/movie-1166.html",
    "cover": "116.jpg",
    "oneLine": "安宁疗护护士擅自为绝症病人注射过量吗啡，她被判刑，但病人家属却联名求情。"
  },
  {
    "title": "欲海孽情",
    "year": 1998,
    "region": "中国香港",
    "type": "电影",
    "genre": "爱情/惊悚",
    "url": "details/movie-1167.html",
    "cover": "117.jpg",
    "oneLine": "富商的情妇被杀，警方发现每个男人爱过她之后，都会变得想杀人。"
  },
  {
    "title": "谈话头",
    "year": 2026,
    "region": "中国香港",
    "type": "电影",
    "genre": "犯罪 / 黑帮 / 心理",
    "url": "details/movie-1168.html",
    "cover": "118.jpg",
    "oneLine": "警方派出的卧底全部失联，最后一位幸存者精神崩溃，而他的心理医生才是真正的幕后黑手。"
  },
  {
    "title": "皇国少女",
    "year": 2024,
    "region": "日本",
    "type": "电影",
    "genre": "剧情 / 悬疑 / 历史",
    "url": "details/movie-1169.html",
    "cover": "119.jpg",
    "oneLine": "1945年日本战败后，一名自称天皇私生女的少女闯入皇宫，掀起了皇室从未公开的继承危机。"
  },
  {
    "title": "明年此时",
    "year": 2025,
    "region": "中国大陆",
    "type": "电影",
    "genre": "爱情, 奇幻, 悬疑",
    "url": "details/movie-1170.html",
    "cover": "120.jpg",
    "oneLine": "离婚冷静期的最后一天，妻子拥有了超能力：她能看见明年今日与丈夫在一起的每一种可能结局。"
  },
  {
    "title": "哪啊哪啊神去村",
    "year": 2024,
    "region": "日本",
    "type": "电影",
    "genre": "青春、剧情、治愈",
    "url": "details/movie-1171.html",
    "cover": "121.jpg",
    "oneLine": "高考失败的东京废柴，被一张美女海报骗到深山老林当伐木工，却在粗犷的林业中找到了活着的实感。"
  },
  {
    "title": "我们要活著回去",
    "year": 2024,
    "region": "韩国",
    "type": "电影",
    "genre": "动作，灾难，剧情",
    "url": "details/movie-1172.html",
    "cover": "122.jpg",
    "oneLine": "七名矿工被困地下625米，地上政府宣布放弃救援，他们只能用炸药自己炸出一条路。"
  },
  {
    "title": "伊甸园及其后",
    "year": 1970,
    "region": "法国",
    "type": "电影",
    "genre": "剧情 / 实验",
    "url": "details/movie-1173.html",
    "cover": "123.jpg",
    "oneLine": "七名年轻人在海岛上开办“重返伊甸园”夏令营，却陆续发现彼此都是对方人生中的“蛇”。"
  },
  {
    "title": "扮猪食老虎",
    "year": 2025,
    "region": "中国香港",
    "type": "电影",
    "genre": "喜剧、犯罪、黑色幽默",
    "url": "details/movie-1174.html",
    "cover": "124.jpg",
    "oneLine": "最怂最胖的菜鸟警察被派去黑帮卧底，结果因为演技太差，竟被黑帮老大当成“当代影帝”重用。"
  },
  {
    "title": "我家也有贝多芬4",
    "year": 2021,
    "region": "美国",
    "type": "电影",
    "genre": "喜剧 / 家庭",
    "url": "details/movie-1175.html",
    "cover": "125.jpg",
    "oneLine": "一只会弹钢琴的圣伯纳犬贝多芬，用音符对抗拆迁队，守护住了整个社区的童年。"
  },
  {
    "title": "草坟",
    "year": 2025,
    "region": "中国大陆",
    "type": "电影",
    "genre": "恐怖，民俗，悬疑",
    "url": "details/movie-1176.html",
    "cover": "126.jpg",
    "oneLine": "村口草坟每年清明都会长出一行新的血字，今年写的是：第三十七个守坟人，轮到你了。"
  },
  {
    "title": "艾莲娜与阿瓦拉王国之谜",
    "year": 2026,
    "region": "英国",
    "type": "电影",
    "genre": "奇幻 / 冒险",
    "url": "details/movie-1177.html",
    "cover": "127.jpg",
    "oneLine": "考古学家的女儿发现父亲的笔记里藏着一个消失王国的地图，而钥匙在自己身体里。"
  },
  {
    "title": "芭比梦幻仙境之魔法彩虹",
    "year": 2007,
    "region": "美国",
    "type": "电影 / 动画",
    "genre": "动画 / 奇幻 / 家庭",
    "url": "details/movie-1178.html",
    "cover": "128.jpg",
    "oneLine": "为了让仙境重获彩虹，害羞的精灵莱瑞和七个古怪的彩虹精灵踏上了危机四伏的冒险。"
  },
  {
    "title": "追凶三千里",
    "year": 2024,
    "region": "日本",
    "type": "电视剧",
    "genre": "犯罪，悬疑",
    "url": "details/movie-1179.html",
    "cover": "129.jpg",
    "oneLine": "一位父亲为了给女儿复仇，驾车追凶三千里，与狡猾的罪犯展开猫鼠游戏。"
  },
  {
    "title": "红项圈",
    "year": 2024,
    "region": "法国",
    "type": "电影",
    "genre": "战争 / 剧情",
    "url": "details/movie-1180.html",
    "cover": "130.jpg",
    "oneLine": "一战的泥泞战壕里，一只误闯阵地的小狗连接起三个绝望士兵的命运，带来短暂的光亮。"
  },
  {
    "title": "娱人日记",
    "year": 2025,
    "region": "美国",
    "type": "电视剧",
    "genre": "喜剧 / 剧情",
    "url": "details/movie-1181.html",
    "cover": "131.jpg",
    "oneLine": "一个过气童星的经纪人，每天在十八线艺人的撕逼、潜规则和破产边缘疯狂走钢丝。"
  },
  {
    "title": "保密天使",
    "year": 2014,
    "region": "美国",
    "type": "电影",
    "genre": "剧情，奇幻，家庭",
    "url": "details/movie-1182.html",
    "cover": "132.jpg",
    "oneLine": "一个无法保守任何秘密的高中女生，突然发现自己只要触摸别人就能听到对方心底最深的秘密。"
  },
  {
    "title": "借借妳人生",
    "year": 2024,
    "region": "中国香港",
    "type": "电影",
    "genre": "奇幻剧情",
    "url": "details/movie-1183.html",
    "cover": "133.jpg",
    "oneLine": "一个绝望的家庭主妇在地铁站捡到一张“人生体验卡”，可以轮流借用四个陌生女人的视角活七天。"
  },
  {
    "title": "爱的刹车",
    "year": 2025,
    "region": "中国香港",
    "type": "电影",
    "genre": "爱情喜剧",
    "url": "details/movie-1184.html",
    "cover": "134.jpg",
    "oneLine": "过气女车手被迫给面瘫影帝当漂移替身，却在每一次甩尾中动了真心。"
  },
  {
    "title": "作战啦！茶室总动员",
    "year": 2024,
    "region": "马来西亚",
    "type": "电影",
    "genre": "喜剧 / 家庭",
    "url": "details/movie-1185.html",
    "cover": "135.jpg",
    "oneLine": "面对国际连锁咖啡店的收购碾压，一条老街上十几家茶室摊主联手，发起了一场爆笑的“海南茶保卫战”。"
  },
  {
    "title": "鬼界超级混蛋",
    "year": 2025,
    "region": "中国大陆",
    "type": "网络电影",
    "genre": "喜剧 / 奇幻 / 动作",
    "url": "details/movie-1186.html",
    "cover": "136.jpg",
    "oneLine": "一个游手好闲的鬼魂为还清阴间账单，组队参加“鬼界大乱斗”赢取轮回券。"
  },
  {
    "title": "灭绝",
    "year": 2025,
    "region": "美国 / 英国",
    "type": "电影",
    "genre": "科幻 / 惊悚 / 灾难",
    "url": "details/movie-1187.html",
    "cover": "137.jpg",
    "oneLine": "反复梦见妻子被外星人杀死的工程师，醒来后发现噩梦正在全球同步上演。"
  },
  {
    "title": "巡回法官",
    "year": 2024,
    "region": "中国大陆",
    "type": "剧集",
    "genre": "剧情, 律政",
    "url": "details/movie-1188.html",
    "cover": "138.jpg",
    "oneLine": "西南山区，一个骑着摩托车的巡回法官走遍九十九个村寨，用“土办法”判案，直到他遇见一桩无法调解的杀妻案。"
  },
  {
    "title": "大坝",
    "year": 2025,
    "region": "中国大陆",
    "type": "电影",
    "genre": "灾难，悬疑，剧情",
    "url": "details/movie-1189.html",
    "cover": "139.jpg",
    "oneLine": "一场百年暴雨来临前，工程师发现大坝图纸被篡改，而篡改者就在应急小组之中。"
  },
  {
    "title": "爸爸天亮叫我",
    "year": 2024,
    "region": "新加坡 / 马来西亚",
    "type": "电视剧",
    "genre": "剧情 / 家庭",
    "url": "details/movie-1190.html",
    "cover": "140.jpg",
    "oneLine": "身患渐冻症的单亲爸爸，在清醒倒计时里为自闭症儿子找到全世界最靠谱的领养家庭。"
  },
  {
    "title": "孤鸟罗宾",
    "year": 2024,
    "region": "中国台湾",
    "type": "电影",
    "genre": "剧情 / 同性",
    "url": "details/movie-1191.html",
    "cover": "141.jpg",
    "oneLine": "患有阿斯伯格综合征的高中生罗宾被全校孤立，直到他遇见了同样被当作怪胎的转校生阿翔。"
  },
  {
    "title": "沼泽狂鲨",
    "year": 2027,
    "region": "美国",
    "type": "电影",
    "genre": "惊悚， 科幻， 灾难",
    "url": "details/movie-1192.html",
    "cover": "142.jpg",
    "oneLine": "佛罗里达沼泽深处，一头能潜伏在泥浆中“呼吸空气”的变异巨鲨开始猎杀一切。"
  },
  {
    "title": "没完没了",
    "year": 2026,
    "region": "中国大陆",
    "type": "电视剧",
    "genre": "喜剧 / 家庭",
    "url": "details/movie-1193.html",
    "cover": "143.jpg",
    "oneLine": "老小区加装电梯，一楼到六楼，十二户人家，十一年的恩怨，全被这部电梯给搅和出来了。"
  },
  {
    "title": "加油吧！乡亲们",
    "year": 2023,
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情 / 乡村 / 励志",
    "url": "details/movie-1194.html",
    "cover": "144.jpg",
    "oneLine": "一个骗子、两个主播、三个回乡青年，把穷山村干成了网红打卡地。"
  },
  {
    "title": "山区新娘",
    "year": 2024,
    "region": "意大利",
    "type": "电影",
    "genre": "剧情, 爱情, 历史",
    "url": "details/movie-1195.html",
    "cover": "145.jpg",
    "oneLine": "1943年的意大利山区，12岁的少女被迫嫁给老兵，在战争中学会了恨与爱。"
  },
  {
    "title": "美女与野兽1946",
    "year": 1946,
    "region": "法国",
    "type": "电影",
    "genre": "剧情 / 奇幻 / 爱情",
    "url": "details/movie-1196.html",
    "cover": "146.jpg",
    "oneLine": "二战后的法国，一名归乡的士兵发现心爱的姑娘被村里的谣言塑造成了吃人的野兽。"
  },
  {
    "title": "星际狗狗",
    "year": 2021,
    "region": "美国",
    "type": "电影",
    "genre": "科幻 / 家庭 / 冒险",
    "url": "details/movie-1197.html",
    "cover": "147.jpg",
    "oneLine": "一只被遗弃的杂种狗意外登上宇宙飞船，成了全人类对抗外星病毒的唯一希望。"
  },
  {
    "title": "大明星多重宇宙",
    "year": 2025,
    "region": "韩国",
    "type": "剧集",
    "genre": "奇幻 / 爱情",
    "url": "details/movie-1198.html",
    "cover": "148.jpg",
    "oneLine": "顶流女明星在一次车祸中意外分裂成三个自己，分别活在顶流、社畜和高中生的人生里，她必须集齐三颗心才能回归。"
  },
  {
    "title": "荣誉勋章",
    "year": 2023,
    "region": "中国大陆",
    "type": "剧集",
    "genre": "剧情 / 战争",
    "url": "details/movie-1199.html",
    "cover": "149.jpg",
    "oneLine": "一枚尘封的勋章，揭开六位退伍老兵重返边境、完成未竟使命的生死之旅。"
  },
  {
    "title": "潜艇总动员：冒险岛",
    "year": 2026,
    "region": "美国",
    "type": "电影",
    "genre": "动画、冒险、科幻",
    "url": "details/movie-1200.html",
    "cover": "150.jpg",
    "oneLine": "三艘小潜艇在百慕大海底发现一座会移动的金属岛屿，内部竟然是活的。"
  },
  {
    "title": "温柔安静的女人们",
    "year": 2025,
    "region": "法国 / 意大利",
    "type": "电影",
    "genre": "剧情 / 家庭",
    "url": "details/movie-1201.html",
    "cover": "1.jpg",
    "oneLine": "三代女性住在同一屋檐下，她们从不争吵，也从不交谈，直到最小的女儿突然宣布停止说话。"
  },
  {
    "title": "一切皆爱",
    "year": 2024,
    "region": "印度",
    "type": "电影",
    "genre": "爱情 / 歌舞",
    "url": "details/movie-1202.html",
    "cover": "2.jpg",
    "oneLine": "在印度一场盛大的集体婚礼上，四对恋人同时面临同一个问题：你敢不敢为爱对抗整个世界？"
  },
  {
    "title": "天台镇",
    "year": 2025,
    "region": "中国大陆",
    "type": "剧集",
    "genre": "悬疑，奇幻",
    "url": "details/movie-1203.html",
    "cover": "3.jpg",
    "oneLine": "一栋十八层老楼的每个天台都藏着一个秘密，直到有人在天台与天台之间架起了梯子。"
  },
  {
    "title": "基缘巧合",
    "year": 2021,
    "region": "中国台湾",
    "type": "电影",
    "genre": "喜剧, 爱情, 同性",
    "url": "details/movie-1204.html",
    "cover": "4.jpg",
    "oneLine": "两个被迫去相亲的男同性恋假装情侣应付父母，却在一次又一次的“出柜练习”中假戏真做。"
  },
  {
    "title": "法兰兄弟",
    "year": 2024,
    "region": "法国",
    "type": "剧集",
    "genre": "剧情 / 兄弟 / 犯罪",
    "url": "details/movie-1205.html",
    "cover": "5.jpg",
    "oneLine": "分离二十年的亲兄弟，一个是国际刑警，一个是跨国毒枭，当两人在巴黎再次相见，都必须做出终极选择。"
  },
  {
    "title": "与春同行",
    "year": 2022,
    "region": "日本",
    "type": "电影",
    "genre": "剧情 / 家庭",
    "url": "details/movie-1206.html",
    "cover": "6.jpg",
    "oneLine": "一个固执的老木匠在妻子去世后，带着骨灰盒骑三轮车横穿日本，去寻找年轻时的初恋，却被他的孙子一路跟踪。"
  },
  {
    "title": "飞天怪兽",
    "year": 2026,
    "region": "日本 / 美国",
    "type": "电影",
    "genre": "科幻 / 灾难 / 惊悚",
    "url": "details/movie-1207.html",
    "cover": "7.jpg",
    "oneLine": "东京上空突现透明翼龙群，它们看不见却吃人，整个关东陷入无序的恐惧深渊。"
  },
  {
    "title": "奇案夺命箭",
    "year": 2023,
    "region": "中国香港",
    "type": "电影",
    "genre": "悬疑 / 犯罪 / 动作",
    "url": "details/movie-1208.html",
    "cover": "8.jpg",
    "oneLine": "四位江湖高手接连在密室中被一支传说中的“夺命箭”射杀，而能射出此箭的只有早已去世的第一神箭手。"
  },
  {
    "title": "粉红香蕉",
    "year": 2001,
    "region": "中国台湾",
    "type": "电影",
    "genre": "喜剧，爱情",
    "url": "details/movie-1209.html",
    "cover": "9.jpg",
    "oneLine": "一家濒临倒闭的水果店店主发现，只要吃下店里的粉红香蕉就会性别互换。"
  },
  {
    "title": "问天",
    "year": 2026,
    "region": "中国大陆",
    "type": "电影",
    "genre": "科幻 / 历史 / 剧情",
    "url": "details/movie-1210.html",
    "cover": "10.jpg",
    "oneLine": "明朝万历年间，被称为“万户”的士大夫陶成道，为了证明“人类也能飞向星空”，用47枚火箭和一只风筝，献出了生命，也献出了一个文明千年的倔强。"
  },
  {
    "title": "刁蛮娇妻苏小妹",
    "year": 2023,
    "region": "中国",
    "type": "剧集",
    "genre": "古装喜剧",
    "url": "details/movie-1211.html",
    "cover": "11.jpg",
    "oneLine": "宋朝第一毒舌才女嫁进豪门，一天气哭夫君三回，却智斗全城恶霸。"
  },
  {
    "title": "即刻救援3",
    "year": 2025,
    "region": "美国",
    "type": "电影",
    "genre": "动作, 惊悚",
    "url": "details/movie-1212.html",
    "cover": "12.jpg",
    "oneLine": "退役特工布莱恩这次面对的不是绑匪，而是被植入女儿体内的微型核弹，他必须在24小时内横跨三个国家找到启动密码。"
  },
  {
    "title": "刺猬小子之天生我刺",
    "year": 2022,
    "region": "中国大陆",
    "type": "动画电影",
    "genre": "喜剧 / 冒险 / 儿童",
    "url": "details/movie-1213.html",
    "cover": "13.jpg",
    "oneLine": "一只天生没有刺的“小刺猬”阿灰，靠发明“机械刺”在家族中证明自己，却意外卷入一场森林能源危机。"
  },
  {
    "title": "失控犯罪：山谷金百合",
    "year": 2024,
    "region": "日本",
    "type": "电影",
    "genre": "悬疑, 犯罪",
    "url": "details/movie-1214.html",
    "cover": "14.jpg",
    "oneLine": "宁静的山谷小镇每年百合花节都会死人，今年轮到了来调查的警探本人。 小镇每起命案现场都放着一束金百合，警探发现花语连起来是一封挑战书。"
  },
  {
    "title": "哈利与梅根：皇家情缘",
    "year": 2023,
    "region": "英国",
    "type": "电影",
    "genre": "传记，爱情",
    "url": "details/movie-1215.html",
    "cover": "15.jpg",
    "oneLine": "不是纪录片，而是浪漫化改编的哈里与梅根从相遇到退出王室的童话与挣扎。"
  },
  {
    "title": "好奇心",
    "year": 2023,
    "region": "日本",
    "type": "剧集",
    "genre": "悬疑 / 奇幻",
    "url": "details/movie-1216.html",
    "cover": "16.jpg",
    "oneLine": "只要付出相应的代价，你的任何好奇心都能得到答案，包括死后的世界。"
  },
  {
    "title": "东海人鱼传2",
    "year": 2025,
    "region": "中国大陆",
    "type": "电影",
    "genre": "奇幻, 爱情, 冒险",
    "url": "details/movie-1217.html",
    "cover": "17.jpg",
    "oneLine": "第一季幸存的情侣再度踏上冒险，这次他们必须在深海帝国与陆地王朝的战争中，拯救沦为政治筹码的人鱼公主。"
  },
  {
    "title": "异次元杀阵",
    "year": 1997,
    "region": "加拿大",
    "type": "电影",
    "genre": "科幻, 惊悚, 悬疑",
    "url": "details/movie-1218.html",
    "cover": "18.jpg",
    "oneLine": "六个人在布满致命机关的魔方迷宫中醒来，没有记忆，没有出口，只有死亡的数学。"
  },
  {
    "title": "月光光新慌慌：万圣杀",
    "year": 2021,
    "region": "美国",
    "type": "电影",
    "genre": "恐怖, 惊悚, 犯罪",
    "url": "details/movie-1219.html",
    "cover": "19.jpg",
    "oneLine": "万圣节小镇惊现模仿犯，恐慌的居民展开私刑追捕，却不知真正的恶早已降临。"
  },
  {
    "title": "头号人蛇",
    "year": 2025,
    "region": "中国大陆",
    "type": "网络剧",
    "genre": "悬疑，犯罪，剧情",
    "url": "details/movie-1220.html",
    "cover": "20.jpg",
    "oneLine": "为救被拐女儿，昔日最大蛇头重出江湖，却发现自己正被所有偷渡客追杀。"
  },
  {
    "title": "疯狂佳人",
    "year": 2027,
    "region": "英国 / 美国",
    "type": "电影",
    "genre": "惊悚, 剧情, 悬疑",
    "url": "details/movie-1221.html",
    "cover": "21.jpg",
    "oneLine": "维多利亚时代庄园里，女主人疯了，男主人死了，三个女仆各执一词，谁是凶手？"
  },
  {
    "title": "山东大姐",
    "year": 2024,
    "region": "中国",
    "type": "剧集",
    "genre": "剧情, 喜剧",
    "url": "details/movie-1222.html",
    "cover": "22.jpg",
    "oneLine": "一位山东农村的离婚大姐进入上海顶级豪门做保姆，三个月后全家都离不开她。"
  },
  {
    "title": "做某事时的感觉已然消逝",
    "year": 2025,
    "region": "中国",
    "type": "电影",
    "genre": "文艺, 爱情",
    "url": "details/movie-1223.html",
    "cover": "23.jpg",
    "oneLine": "一位失去味觉的厨师，靠复刻顾客记忆中的菜肴，拼凑出自己早已遗忘了的爱情最后一天。"
  },
  {
    "title": "孩子说了算",
    "year": 2023,
    "region": "中国大陆",
    "type": "剧集",
    "genre": "喜剧 / 家庭",
    "url": "details/movie-1224.html",
    "cover": "24.jpg",
    "oneLine": "一个由小学生组成的“家庭法院”，每天都在裁决爸妈们的荒唐事。"
  },
  {
    "title": "超异能入侵",
    "year": 2025,
    "region": "韩国 / 美国",
    "type": "剧集",
    "genre": "科幻，动作，悬疑",
    "url": "details/movie-1225.html",
    "cover": "25.jpg",
    "oneLine": "全球异能者突然觉醒，但他们不是英雄，而是被关进“收容特区”的危险品。"
  },
  {
    "title": "十室九春",
    "year": 2025,
    "region": "中国大陆",
    "type": "剧集",
    "genre": "古装 / 悬疑 / 权谋",
    "url": "details/movie-1226.html",
    "cover": "26.jpg",
    "oneLine": "唐天宝年间，十名科举考生接连死于客栈密室，唯一的幸存者发现自己可能是凶手的目标，也可能是凶手本人。"
  },
  {
    "title": "洪堡亲王",
    "year": 2024,
    "region": "德国",
    "type": "电影",
    "genre": "剧情 / 战争",
    "url": "details/movie-1227.html",
    "cover": "27.jpg",
    "oneLine": "普鲁士传奇将领在滑铁卢战役后，被遗忘在疯人院里，用余生与脑中千军万马作战。"
  },
  {
    "title": "超级英雄冒险：冰霜大战",
    "year": 2027,
    "region": "美国",
    "type": "电影",
    "genre": "动画 / 动作",
    "url": "details/movie-1228.html",
    "cover": "28.jpg",
    "oneLine": "为了阻止全球变暖，火系英雄和冰系宿敌不得不联手对抗一只来自地心的熔岩巨兽。"
  },
  {
    "title": "火烧岛粤语",
    "year": 2024,
    "region": "香港",
    "type": "电影",
    "genre": "动作 / 犯罪",
    "url": "details/movie-1229.html",
    "cover": "29.jpg",
    "oneLine": "国际贩毒集团将一座南海小岛改造成无法无天的监狱，前特警卧底进去才发现，典狱长是自己的杀父仇人。"
  },
  {
    "title": "向往的生活老友记",
    "year": 2026,
    "region": "中国大陆",
    "type": "剧集",
    "genre": "剧情、家庭、喜剧",
    "url": "details/movie-1230.html",
    "cover": "30.jpg",
    "oneLine": "五个退休老友回到乡下合租，重新学习如何年轻地活着。"
  },
  {
    "title": "暴风雨国语",
    "year": 1989,
    "region": "中国香港",
    "type": "电影",
    "genre": "剧情, 犯罪, 惊悚",
    "url": "details/movie-1231.html",
    "cover": "31.jpg",
    "oneLine": "一场百年不遇的暴风雨夜，卧底警察与黑帮兄弟被困同一栋大楼，谎言即将被暴雨洗净。"
  },
  {
    "title": "魔多客",
    "year": 2026,
    "region": "美国",
    "type": "剧集 / 动画",
    "genre": "动作 / 喜剧 / 科幻",
    "url": "details/movie-1232.html",
    "cover": "32.jpg",
    "oneLine": "巨大的脑袋反派魔多客，一边要征服世界，一边要送女儿去上补习班，还要还房贷。"
  },
  {
    "title": "走向深渊",
    "year": 2016,
    "region": "日本",
    "type": "电影",
    "genre": "悬疑 / 心理 / 犯罪",
    "url": "details/movie-1233.html",
    "cover": "33.jpg",
    "oneLine": "一名卧底警察在精神病院追查连环杀手，却发现自己才是最危险的那个病人。"
  },
  {
    "title": "明天，我会成为谁的女友",
    "year": 2024,
    "region": "日本",
    "type": "剧集",
    "genre": "剧情, 社会",
    "url": "details/movie-1234.html",
    "cover": "34.jpg",
    "oneLine": "五个在“出租女友”行业里沉浮的女孩，用最虚假的亲密关系，换取最真实的生存筹码。"
  },
  {
    "title": "要爸还是妈",
    "year": 2024,
    "region": "法国",
    "type": "电影",
    "genre": "家庭喜剧",
    "url": "details/movie-1235.html",
    "cover": "35.jpg",
    "oneLine": "一对正在离婚的夫妻为了得到孩子的抚养权，争相表现得比对方更“糟糕”，上演了一出损人害己的闹剧。"
  },
  {
    "title": "抹黑",
    "year": 2022,
    "region": "中国",
    "type": "电影",
    "genre": "悬疑 / 犯罪 / 黑色幽默",
    "url": "details/movie-1236.html",
    "cover": "36.jpg",
    "oneLine": "一个无名网红为了流量捏造了“富二代欺压农民”的剧本，没想到剧本里的反派真的杀了人。"
  },
  {
    "title": "爱4狂潮",
    "year": 2025,
    "region": "泰国",
    "type": "电影",
    "genre": "爱情喜剧",
    "url": "details/movie-1237.html",
    "cover": "37.jpg",
    "oneLine": "同一场世纪大雨，四个看似无关的男女，在手机没电、信号中断的曼谷，发生了四种关于“连接与错过”的爱情。"
  },
  {
    "title": "这是什么鬼",
    "year": 2024,
    "region": "韩国",
    "type": "剧集",
    "genre": "喜剧，奇幻",
    "url": "details/movie-1238.html",
    "cover": "38.jpg",
    "oneLine": "菜鸟程序员意外入职一家“捉鬼外包公司”，他眼前的bug全是恶灵。"
  },
  {
    "title": "血迷宫",
    "year": 2024,
    "region": "中国大陆",
    "type": "电影",
    "genre": "悬疑 / 犯罪 / 黑色幽默",
    "url": "details/movie-1239.html",
    "cover": "39.jpg",
    "oneLine": "六名同父异母的兄弟姐妹为争夺遗产被锁进家族古宅，逃生密室的机关，每次启动都会杀死一个“非亲生”者。"
  },
  {
    "title": "歌舞团的女人们",
    "year": 2024,
    "region": "中国大陆",
    "type": "剧集 (第一季，20集)",
    "genre": "剧情 / 女性群像",
    "url": "details/movie-1240.html",
    "cover": "40.jpg",
    "oneLine": "1995年省歌舞团解散前最后一年，四个女演员在时代洪流中做出不同选择，有人留守，有人下海。"
  },
  {
    "title": "胜利者",
    "year": 2015,
    "region": "俄罗斯",
    "type": "电影",
    "genre": "战争，剧情，历史",
    "url": "details/movie-1241.html",
    "cover": "41.jpg",
    "oneLine": "一名苏联战俘从纳粹集中营逃出后，却被自己人送进了另一座集中营。"
  },
  {
    "title": "荒野疗法",
    "year": 2024,
    "region": "英国",
    "type": "电影",
    "genre": "剧情，冒险，治愈",
    "url": "details/movie-1242.html",
    "cover": "42.jpg",
    "oneLine": "一个失去孩子的心理医生，带领四个问题少年穿越苏格兰高地，却先治好了自己。"
  },
  {
    "title": "公主与出租车司机",
    "year": 2026,
    "region": "韩国",
    "type": "电影",
    "genre": "爱情， 喜剧， 剧情",
    "url": "details/movie-1243.html",
    "cover": "43.jpg",
    "oneLine": "一个叛逆的财阀千金假装失忆，赖上一个憨厚出租车司机，想体验最后一周的“平民自由”。"
  },
  {
    "title": "霍家拳之铁臂娇娃2",
    "year": 2025,
    "region": "中国大陆",
    "type": "电影",
    "genre": "动作 / 武侠 / 冒险",
    "url": "details/movie-1244.html",
    "cover": "44.jpg",
    "oneLine": "铁臂女侠为救亡国宝藏，独闯上海滩三大军阀龙潭虎穴。"
  },
  {
    "title": "幸福36计",
    "year": 2014,
    "region": "中国",
    "type": "剧集",
    "genre": "喜剧 / 爱情 / 家庭",
    "url": "details/movie-1245.html",
    "cover": "45.jpg",
    "oneLine": "一对80后小夫妻为了应对催生、买房、婆媳矛盾，把《孙子兵法》用成了“幸福36计”，结果每次都弄巧成拙。"
  },
  {
    "title": "矮人和巨人之秘密房间",
    "year": 2015,
    "region": "英国",
    "type": "电影",
    "genre": "奇幻 / 冒险",
    "url": "details/movie-1246.html",
    "cover": "46.jpg",
    "oneLine": "矮人铁匠和巨人俘虏被困在一间魔法密室里，必须靠身高差才能破解机关。"
  },
  {
    "title": "罗伯特·唐尼：自成一格",
    "year": 2026,
    "region": "美国",
    "type": "纪录",
    "genre": "纪录， 传记",
    "url": "details/movie-1247.html",
    "cover": "47.jpg",
    "oneLine": "从瘾君子到亿万票房巨星，罗伯特·唐尼用半个世纪证明：他从不按剧本活。"
  },
  {
    "title": "好玩派对2",
    "year": 2025,
    "region": "美国",
    "type": "电影",
    "genre": "喜剧 / 恐怖 / 恶搞",
    "url": "details/movie-1248.html",
    "cover": "48.jpg",
    "oneLine": "作死青年们举办了一场“百无禁忌”的万圣节派对，结果招来的不是鬼，是三个要求平权的异次元怪物。"
  },
  {
    "title": "逆水寒",
    "year": 2025,
    "region": "中国大陆",
    "type": "电影",
    "genre": "武侠 / 动作",
    "url": "details/movie-1249.html",
    "cover": "49.jpg",
    "oneLine": "朝廷鹰犬追杀江湖侠客，逆水寒江上的一场追杀与反追杀，揭开十五年前的灭门案。"
  },
  {
    "title": "吸血狗",
    "year": 2025,
    "region": "美国 / 英国",
    "type": "电影",
    "genre": "恐怖 / 喜剧 / 科幻",
    "url": "details/movie-1250.html",
    "cover": "50.jpg",
    "oneLine": "一只实验室逃出来的比格犬咬了人，被咬的人都会变成虔诚的素食主义者。"
  },
  {
    "title": "加菲猫2",
    "year": 2006,
    "region": "美国",
    "type": "电影",
    "genre": "喜剧/动画",
    "url": "details/movie-1251.html",
    "cover": "51.jpg",
    "oneLine": "加菲猫跟着主人去英国旅行，意外被当作一只继承城堡的贵族猫，从此过上了“伯爵”生活。"
  },
  {
    "title": "乔·罗根：世风日下",
    "year": 2018,
    "region": "美国",
    "type": "综艺 / 脱口秀",
    "genre": "喜剧 / 脱口秀",
    "url": "details/movie-1252.html",
    "cover": "52.jpg",
    "oneLine": "乔·罗根在他第七个Netflix专场中，把硅谷精英、健身狂人和社交网络骂了个遍。"
  },
  {
    "title": "战友2008",
    "year": 2023,
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情, 历史",
    "url": "details/movie-1253.html",
    "cover": "53.jpg",
    "oneLine": "2008年，三个已经退伍的消防兵各自接到一个陌生电话：“老班长被困在映秀镇，请归队。”"
  },
  {
    "title": "信念",
    "year": 2025,
    "region": "英国",
    "type": "剧集",
    "genre": "历史 / 战争 / 剧情",
    "url": "details/movie-1254.html",
    "cover": "54.jpg",
    "oneLine": "二战期间，一位虔诚的修女被迫为英国情报机构充当间谍，她的信仰与谎言反复撕裂。"
  },
  {
    "title": "疑犯",
    "year": 2025,
    "region": "美国",
    "type": "电影",
    "genre": "悬疑, 惊悚, 犯罪",
    "url": "details/movie-1255.html",
    "cover": "55.jpg",
    "oneLine": "在一间密闭的审讯室里，警探与一个涉嫌连环杀人的高智商疑犯展开24小时心理拉锯，但最终发现警探自己才是那个分裂出的凶手人格。"
  },
  {
    "title": "中国婚礼 好事成双季",
    "year": 2024,
    "region": "中国大陆",
    "type": "综艺",
    "genre": "婚恋真人秀",
    "url": "details/movie-1256.html",
    "cover": "56.jpg",
    "oneLine": "第二季升级为“同时筹备两场婚礼”：一场农村流水席，一场城市教堂婚礼，两家人互相观摩。"
  },
  {
    "title": "碟仙玩偶",
    "year": 2024,
    "region": "中国台湾",
    "type": "电影",
    "genre": "恐怖 / 惊悚",
    "url": "details/movie-1257.html",
    "cover": "57.jpg",
    "oneLine": "六个大学生在废弃戏院玩碟仙，却招来了戏院老板收藏的诡偶。"
  },
  {
    "title": "恋爱高手",
    "year": 2005,
    "region": "韩国",
    "type": "电影",
    "genre": "爱情 / 喜剧",
    "url": "details/movie-1258.html",
    "cover": "58.jpg",
    "oneLine": "两个靠骗人为生的“恋爱高手”接了同一单生意，互相拆台的过程中却动了真心。"
  },
  {
    "title": "风流侠盗走天涯",
    "year": 1988,
    "region": "中国香港",
    "type": "电影",
    "genre": "喜剧, 冒险",
    "url": "details/movie-1259.html",
    "cover": "59.jpg",
    "oneLine": "自称“千面郎君”的骗子误打误撞偷了军阀的藏宝图，不得不拉上女警花组成临时搭档亡命天涯。"
  },
  {
    "title": "一嫁三丈夫",
    "year": 2024,
    "region": "泰国",
    "type": "剧集",
    "genre": "爱情 / 喜剧 / 家庭",
    "url": "details/movie-1260.html",
    "cover": "60.jpg",
    "oneLine": "泰国乡下姑娘按照已故奶奶的遗嘱，要在一百天内从三位追求者中选出“最会修水渠”的男人当丈夫。"
  },
  {
    "title": "谁动了我的爱情",
    "year": 2023,
    "region": "中国大陆",
    "type": "电影",
    "genre": "爱情 / 喜剧",
    "url": "details/movie-1261.html",
    "cover": "61.jpg",
    "oneLine": "婚礼前失忆的女孩醒来后发现自称未婚夫的男人，但她越看越觉得对方是个冒牌货。"
  },
  {
    "title": "眠狂四郎炎情剑",
    "year": 1965,
    "region": "日本",
    "type": "电影",
    "genre": "时代剧 / 动作",
    "url": "details/movie-1262.html",
    "cover": "62.jpg",
    "oneLine": "迷茫剑客眠狂四郎卷入一场阴谋，他的“炎情剑”每出鞘一次，内心就离修罗更近一步。"
  },
  {
    "title": "分手的决心",
    "year": 2024,
    "region": "韩国",
    "type": "电影",
    "genre": "悬疑, 爱情, 剧情",
    "url": "details/movie-1263.html",
    "cover": "63.jpg",
    "oneLine": "刑警调查山上坠亡案，对死者神秘的遗孀产生疑心，却在监视中陷入一场无法自拔的危险爱情。"
  },
  {
    "title": "传世宝藏",
    "year": 2026,
    "region": "中国",
    "type": "电影",
    "genre": "冒险, 动作",
    "url": "details/movie-1264.html",
    "cover": "64.jpg",
    "oneLine": "一张从古井里捞出的羊皮地图，牵出三个家族延续百年的生死博弈。"
  },
  {
    "title": "拜伦",
    "year": 2024,
    "region": "英国",
    "type": "电影",
    "genre": "传记 / 爱情",
    "url": "details/movie-1265.html",
    "cover": "65.jpg",
    "oneLine": "天才诗人拜伦的一生被浓缩成三天——他生命中最放荡、也最绝望的三天。"
  },
  {
    "title": "欲燄金沙",
    "year": 2021,
    "region": "西班牙 / 墨西哥",
    "type": "电影",
    "genre": "剧情 / 惊悚",
    "url": "details/movie-1266.html",
    "cover": "66.jpg",
    "oneLine": "一对偷情男女在沙漠遭遇沙暴，被困后才发现彼此都带着杀机。"
  },
  {
    "title": "强烈而清晰的洞察力",
    "year": 2022,
    "region": "美国",
    "type": "电影",
    "genre": "剧情 / 悬疑",
    "url": "details/movie-1267.html",
    "cover": "67.jpg",
    "oneLine": "一个普通会计突然获得了“绝对洞察力”，他能看穿一切谎言，包括政府的最高机密。"
  },
  {
    "title": "天国逆子",
    "year": 1994,
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情 / 家庭",
    "url": "details/movie-1268.html",
    "cover": "68.jpg",
    "oneLine": "儿子举报父亲杀人，却发现自己才是真正的凶手——他当年只有四岁。"
  },
  {
    "title": "圣诞传说国语",
    "year": 2017,
    "region": "芬兰/中国大陆",
    "type": "电影",
    "genre": "家庭/奇幻",
    "url": "details/movie-1269.html",
    "cover": "69.jpg",
    "oneLine": "孤儿尼古拉斯如何成为圣诞老人的秘密，以及他与一只会说话的驯鹿的童年往事。"
  },
  {
    "title": "再见爱人第五季",
    "year": 2026,
    "region": "中国大陆",
    "type": "综艺/真人秀",
    "genre": "情感纪实",
    "url": "details/movie-1270.html",
    "cover": "70.jpg",
    "oneLine": "三对濒临破碎的夫妻踏上一段充满未知的边境疗愈之旅，终点却成了另一起点。"
  },
  {
    "title": "熊猫人",
    "year": 2010,
    "region": "中国台湾",
    "type": "电视剧",
    "genre": "动作 / 科幻 / 偶像",
    "url": "details/movie-1271.html",
    "cover": "71.jpg",
    "oneLine": "2030年，一个被熊猫抚养大的科学家之子，穿着熊猫机甲，为净化被污染的城市而战。"
  },
  {
    "title": "搏命单刀夺命枪",
    "year": 2025,
    "region": "中国香港",
    "type": "电影",
    "genre": "动作 / 犯罪",
    "url": "details/movie-1272.html",
    "cover": "72.jpg",
    "oneLine": "刀术大师和退役枪手各自为亲人复仇，却发现目标竟是同一个人。"
  },
  {
    "title": "出奇制胜",
    "year": 2019,
    "region": "美国",
    "type": "剧集",
    "genre": "犯罪 / 喜剧 / 动作",
    "url": "details/movie-1273.html",
    "cover": "73.jpg",
    "oneLine": "五个被同一人骗得倾家荡产的人组队，用最高明的骗局反骗那位顶级欺诈师。"
  },
  {
    "title": "白色猎人黑色心",
    "year": 2024,
    "region": "英国",
    "type": "电影",
    "genre": "惊悚 / 剧情 / 冒险",
    "url": "details/movie-1274.html",
    "cover": "74.jpg",
    "oneLine": "金牌猎手带领富商进入非洲猎杀稀有大象，却发现向导暗中在保护象群。"
  },
  {
    "title": "美人鱼非传说",
    "year": 2024,
    "region": "英国",
    "type": "电影",
    "genre": "奇幻, 冒险",
    "url": "details/movie-1275.html",
    "cover": "75.jpg",
    "oneLine": "海洋生物学家捞起一头“美人鱼”，却发现它是一种拥有高超智慧的深海灵长类哺乳动物。"
  },
  {
    "title": "英雄万岁！",
    "year": 2023,
    "region": "中国大陆",
    "type": "电影",
    "genre": "动作 / 战争 / 剧情",
    "url": "details/movie-1276.html",
    "cover": "76.jpg",
    "oneLine": "一支中国特战小队深入交战区，要在72小时内找到并护送一位掌握关键情报的老侨领撤离。"
  },
  {
    "title": "绝路狂潮",
    "year": 2013,
    "region": "韩国",
    "type": "电影",
    "genre": "灾难 / 动作",
    "url": "details/movie-1277.html",
    "cover": "77.jpg",
    "oneLine": "核电站泄漏引发海啸，但比海水更可怕的是隐瞒真相的财阀与官僚。"
  },
  {
    "title": "暴民之地",
    "year": 2020,
    "region": "英国",
    "type": "电影",
    "genre": "剧情， 犯罪",
    "url": "details/movie-1278.html",
    "cover": "78.jpg",
    "oneLine": "一个矿工小镇因工厂关闭陷入暴动，一名外地记者被困其中，逐渐发现暴民背后有人操控。"
  },
  {
    "title": "鸡肉库拉那",
    "year": 2022,
    "region": "泰国",
    "type": "电影",
    "genre": "喜剧 / 家庭",
    "url": "details/movie-1279.html",
    "cover": "79.jpg",
    "oneLine": "泰国乡下炸鸡店老父去世，遗嘱要求三个孩子比赛做出“全宇宙最好吃的炸鸡”才能分遗产。"
  },
  {
    "title": "野猫嬉春",
    "year": 1971,
    "region": "法国",
    "type": "电影",
    "genre": "喜剧，爱情，青春",
    "url": "details/movie-1280.html",
    "cover": "80.jpg",
    "oneLine": "三个逃学的巴黎女生闯入一位老诗人的庄园，用一整场春天教会他什么是年轻。"
  },
  {
    "title": "保罗和宝拉传奇",
    "year": 2024,
    "region": "德国",
    "type": "剧集",
    "genre": "奇幻 / 爱情 / 冒险",
    "url": "details/movie-1281.html",
    "cover": "81.jpg",
    "oneLine": "现代女孩宝拉每次读一本旧日记，都会穿越到1943年成为被纳粹追杀的犹太女孩。"
  },
  {
    "title": "的士司机粤语",
    "year": 2002,
    "region": "中国香港",
    "type": "电影",
    "genre": "剧情，黑色幽默",
    "url": "details/movie-1282.html",
    "cover": "82.jpg",
    "oneLine": "深夜的香港，一名话痨的士司机搭上五位怪客，揭开了城市暗面的连环笑料。"
  },
  {
    "title": "随风追寻",
    "year": 2013,
    "region": "中国台湾",
    "type": "电影",
    "genre": "文艺 / 爱情 / 公路",
    "url": "details/movie-1283.html",
    "cover": "83.jpg",
    "oneLine": "一个患了绝症的摄影师和一只被遗弃的流浪狗，踏上了为期十天的环岛骑行。"
  },
  {
    "title": "图腾",
    "year": 2025,
    "region": "加拿大",
    "type": "电影",
    "genre": "悬疑，奇幻，剧情",
    "url": "details/movie-1284.html",
    "cover": "84.jpg",
    "oneLine": "一名都市原住民女孩继承了一根能召唤动物灵魂的图腾柱碎片，同时被邪恶猎人追杀，她必须找回完整图腾。"
  },
  {
    "title": "爱的救赎",
    "year": 2023,
    "region": "巴西",
    "type": "电影",
    "genre": "剧情 / 同性",
    "url": "details/movie-1285.html",
    "cover": "85.jpg",
    "oneLine": "在保守小镇相恋的两位修女，带着一个被遗弃的婴儿踏上逃亡之路。"
  },
  {
    "title": "套装",
    "year": 2023,
    "region": "美国",
    "type": "电影",
    "genre": "剧情 / 犯罪 / 悬疑",
    "url": "details/movie-1286.html",
    "cover": "86.jpg",
    "oneLine": "芝加哥老裁缝在自家店里智斗三伙黑帮，只用一套西装的剪裁细节就掀翻了整条地下交易链。"
  },
  {
    "title": "大怪兽卡美拉",
    "year": 2026,
    "region": "日本",
    "type": "电影",
    "genre": "动作 / 科幻",
    "url": "details/movie-1287.html",
    "cover": "87.jpg",
    "oneLine": "卡美拉再度苏醒，不是为了打架，而是为了保护最后一颗未被人类发现的蛋。"
  },
  {
    "title": "伯格曼",
    "year": 2024,
    "region": "瑞典",
    "type": "剧集",
    "genre": "传记 / 剧情",
    "url": "details/movie-1288.html",
    "cover": "88.jpg",
    "oneLine": "聚焦电影大师英格玛·伯格曼生命中最后的五天，他在与死神对弈中回顾自己复杂的一生。"
  },
  {
    "title": "天作不合的我们",
    "year": 2024,
    "region": "中国台湾",
    "type": "剧集",
    "genre": "爱情 / 喜剧",
    "url": "details/movie-1289.html",
    "cover": "89.jpg",
    "oneLine": "洁癖男与邋遢女被迫合租并假结婚，却在互相折磨中逐渐沦陷。"
  },
  {
    "title": "40岁开始",
    "year": 2022,
    "region": "日本",
    "type": "剧集",
    "genre": "剧情 / 生活",
    "url": "details/movie-1290.html",
    "cover": "90.jpg",
    "oneLine": "40岁家庭主妇被丈夫抛弃后，阴差阳错成了全日本最年长的实习漫画助手。"
  },
  {
    "title": "白发",
    "year": 2024,
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情，家庭",
    "url": "details/movie-1291.html",
    "cover": "91.jpg",
    "oneLine": "45岁的女儿第一次看到母亲的白发根，才发现母亲已患阿尔茨海默症三年，而她的遗愿清单里只有一条“染一次黑发”。"
  },
  {
    "title": "宝可梦：超梦的逆梦 进化",
    "year": 2019,
    "region": "日本",
    "type": "电影",
    "genre": "动画/科幻/动作",
    "url": "details/movie-1292.html",
    "cover": "92.jpg",
    "oneLine": "最强大的人造宝可梦超梦再次觉醒，它这次要质问的不再是人类，而是创造它的神。"
  },
  {
    "title": "新野人记",
    "year": 2024,
    "region": "中国",
    "type": "电影",
    "genre": "悬疑 / 冒险",
    "url": "details/movie-1293.html",
    "cover": "93.jpg",
    "oneLine": "一支科考队深入神农架寻找野人，却发现真正的“野人”不是猩猩，而是他们自己。"
  },
  {
    "title": "美洲豹女儿",
    "year": 2026,
    "region": "墨西哥 / 美国",
    "type": "电影",
    "genre": "奇幻 / 冒险 / 剧情",
    "url": "details/movie-1294.html",
    "cover": "94.jpg",
    "oneLine": "一个在城市长大的墨西哥裔女孩回到雨林继承祖母的遗产，却发现自己能在月圆之夜变身成美洲豹，并且是阿兹特克神话中的守护者。"
  },
  {
    "title": "挛情告急",
    "year": 2025,
    "region": "中国香港",
    "type": "电影",
    "genre": "剧情 / 同性",
    "url": "details/movie-1295.html",
    "cover": "95.jpg",
    "oneLine": "一场婚礼前夕，同性恋新郎、他的男友和未婚妻三人被迫结成统一战线。"
  },
  {
    "title": "寒山潜龙粤语",
    "year": 2014,
    "region": "中国香港",
    "type": "电视剧",
    "genre": "古装 / 武侠 / 悬疑",
    "url": "details/movie-1296.html",
    "cover": "96.jpg",
    "oneLine": "北宋年间，两个性格迥异的卧底探员在寒山脚下假扮夫妻，却查到了涉及皇室的惊天密谋。"
  },
  {
    "title": "太阳与波莱罗",
    "year": 2018,
    "region": "日本",
    "type": "电影",
    "genre": "剧情 / 音乐",
    "url": "details/movie-1297.html",
    "cover": "97.jpg",
    "oneLine": "一个地方业余交响乐团接到最后一场演出邀请，癌症晚期的指挥要带他们完成拉威尔的《波莱罗》。"
  },
  {
    "title": "永恒的少女",
    "year": 2024,
    "region": "阿根廷 / 西班牙",
    "type": "电影",
    "genre": "剧情 / 奇幻 / 女性",
    "url": "details/movie-1298.html",
    "cover": "98.jpg",
    "oneLine": "患有不老症的女儿每七年衰老一岁，而正常母亲却在加速变老，她们互为时间的镜子与监狱。"
  },
  {
    "title": "爱情何价",
    "year": 1990,
    "region": "美国",
    "type": "电影",
    "genre": "剧情、爱情",
    "url": "details/movie-1299.html",
    "cover": "99.jpg",
    "oneLine": "在传统印度家庭长大的美国女孩，为了反抗包办婚姻，决定在网上拍卖自己的童贞。"
  },
  {
    "title": "排队上天堂",
    "year": 2026,
    "region": "韩国",
    "type": "电影",
    "genre": "剧情 / 黑色幽默 / 家庭",
    "url": "details/movie-1300.html",
    "cover": "100.jpg",
    "oneLine": "为了争夺医院里唯一一个能让临终老人“笑着离世”的名额，三个家庭展开了一场荒诞竞赛。"
  },
  {
    "title": "尼克男孩",
    "year": 2024,
    "region": "美国",
    "type": "电影",
    "genre": "剧情, 传记",
    "url": "details/movie-1301.html",
    "cover": "101.jpg",
    "oneLine": "两个黑人男孩因莫须有的罪名被送进一个名为“学校”的地狱，为了活下去，他们必须选择遗忘对方。"
  },
  {
    "title": "不是幅漂亮局面",
    "year": 2025,
    "region": "中国台湾",
    "type": "电影",
    "genre": "剧情 / 家庭",
    "url": "details/movie-1302.html",
    "cover": "102.jpg",
    "oneLine": "中年破产父亲带着不学无术的儿子，为躲债逃回乡下老家，却发现爷爷留的烂房子比债务还棘手。"
  },
  {
    "title": "恶魔娜塔丽",
    "year": 2024,
    "region": "西班牙",
    "type": "电影",
    "genre": "悬疑，惊悚，奇幻",
    "url": "details/movie-1303.html",
    "cover": "103.jpg",
    "oneLine": "学校里最不起眼的图书管理员娜塔丽，每到夜晚就会化身都市传说中的复仇女神。"
  },
  {
    "title": "芝加哥急救第五季",
    "year": 2019,
    "region": "美国",
    "type": "剧集",
    "genre": "医疗 / 剧情",
    "url": "details/movie-1304.html",
    "cover": "104.jpg",
    "oneLine": "芝加哥最繁忙的急救中心迎来第五年，医生们在官僚体制与病人生命之间极限拉扯。"
  },
  {
    "title": "自由落体",
    "year": 2025,
    "region": "韩国",
    "type": "电影",
    "genre": "悬疑 / 惊悚",
    "url": "details/movie-1305.html",
    "cover": "105.jpg",
    "oneLine": "观光电梯意外卡在百米高空，七名陌生人发现他们之中有一个连环杀手。"
  },
  {
    "title": "创造物",
    "year": 2026,
    "region": "美国",
    "type": "电影",
    "genre": "科幻惊悚",
    "url": "details/movie-1306.html",
    "cover": "106.jpg",
    "oneLine": "一位天才科学家秘密创造出的新型生命体，开始悄然取代他身边最亲近的人类。"
  },
  {
    "title": "不要漫画杂志！",
    "year": 2024,
    "region": "日本",
    "type": "电影",
    "genre": "喜剧, 青春, 职场",
    "url": "details/movie-1307.html",
    "cover": "107.jpg",
    "oneLine": "一家百年漫画杂志社的最后一位资深编辑，用尽一切阴招阻止公司转型电子化，因为他深信：只有纸张的油墨味，才能封印住漫画里的“妖怪”。"
  },
  {
    "title": "傀儡王大战恶魔玩具",
    "year": 2015,
    "region": "美国",
    "type": "电影",
    "genre": "恐怖、奇幻、动作",
    "url": "details/movie-1308.html",
    "cover": "108.jpg",
    "oneLine": "为了守护人类孩子，正义的傀儡王挥起屠刀，与从地狱归来的恶魔玩具军团开战。"
  },
  {
    "title": "意外抢匪",
    "year": 2019,
    "region": "法国",
    "type": "电影",
    "genre": "喜剧 / 犯罪",
    "url": "details/movie-1309.html",
    "cover": "109.jpg",
    "oneLine": "四个想抢银行的笨贼，在动手当天发现所有人都比他们更想抢这家银行。"
  },
  {
    "title": "神之塔第二季",
    "year": 2024,
    "region": "日本, 韩国",
    "type": "动画",
    "genre": "奇幻, 动作, 冒险",
    "url": "details/movie-1310.html",
    "cover": "110.jpg",
    "oneLine": "夜复活后改名“吉黑德”，为了寻找伙伴再次踏上塔的征途。"
  },
  {
    "title": "欢乐群英粤语",
    "year": 2024,
    "region": "中国香港",
    "type": "电视剧",
    "genre": "喜剧、古装、武侠",
    "url": "details/movie-1311.html",
    "cover": "111.jpg",
    "oneLine": "南宋年间，一群不靠谱的江湖义士组队“抗金”，每次都靠乌龙事件意外获胜。"
  },
  {
    "title": "破英文",
    "year": 2025,
    "region": "中国台湾",
    "type": "剧集",
    "genre": "喜剧， 剧情， 校园",
    "url": "details/movie-1312.html",
    "cover": "112.jpg",
    "oneLine": "菜市场卖鱼的大叔为了追求外籍英文老师，零基础挑战托福，闹出一连串乌龙。"
  },
  {
    "title": "小爸爸",
    "year": 2013,
    "region": "中国大陆",
    "type": "剧集",
    "genre": "剧情 / 家庭 / 喜剧",
    "url": "details/movie-1313.html",
    "cover": "113.jpg",
    "oneLine": "一个玩世不恭的海归青年，突然被告知有一个7岁的亲生儿子，被迫开始了“当爸速成班”。"
  },
  {
    "title": "如此美好的一天",
    "year": 2023,
    "region": "日本",
    "type": "电影",
    "genre": "剧情, 家庭, 治愈",
    "url": "details/movie-1314.html",
    "cover": "114.jpg",
    "oneLine": "一个只剩下三个月寿命的毒舌老奶奶，决定教会她那生活一团糟的废柴孙子做一顿“最后的晚餐”。"
  },
  {
    "title": "终极胜利",
    "year": 2016,
    "region": "中国香港 / 中国大陆",
    "type": "电影",
    "genre": "运动 / 剧情",
    "url": "details/movie-1315.html",
    "cover": "115.jpg",
    "oneLine": "香港沦陷后，短跑健将李约翰被关进日军集中营，他要带领难友们在死亡赛跑中赢得生存权。"
  },
  {
    "title": "象牙",
    "year": 2025,
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情, 犯罪, 冒险",
    "url": "details/movie-1316.html",
    "cover": "116.jpg",
    "oneLine": "一名护林员与一个走投无路的盗猎者，在非洲大草原上因为一根价值连城的象牙，展开了一场生死追逐。"
  },
  {
    "title": "断肢女孩的来信",
    "year": 2022,
    "region": "韩国",
    "type": "电影",
    "genre": "悬疑 / 惊悚",
    "url": "details/movie-1317.html",
    "cover": "117.jpg",
    "oneLine": "失踪十年的连环杀人案幸存者突然寄来信件，声称凶手就在每周的警察羽毛球社里。"
  },
  {
    "title": "独一无二",
    "year": 2021,
    "region": "中国台湾",
    "type": "电影",
    "genre": "剧情 / 家庭",
    "url": "details/movie-1318.html",
    "cover": "118.jpg",
    "oneLine": "听人世界里长大的失聪少女，必须在父亲的铁器铺噪音与自己的小提琴梦想之间做出选择。"
  },
  {
    "title": "家有虎妻",
    "year": 2023,
    "region": "中国大陆",
    "type": "剧集",
    "genre": "喜剧 / 家庭 / 都市",
    "url": "details/movie-1319.html",
    "cover": "119.jpg",
    "oneLine": "彪悍的虎妻和佛系老公结婚十周年之际，突然互换身体，才发现对方的“轻松”都是假象。"
  },
  {
    "title": "超人/沙赞！：黑亚当归来",
    "year": 2026,
    "region": "美国",
    "type": "电影",
    "genre": "动作 / 奇幻 / 超级英雄",
    "url": "details/movie-1320.html",
    "cover": "120.jpg",
    "oneLine": "当黑亚当从远古监狱苏醒，中二少年沙赞不得不向超人去求助，但超人被魔法变成了小孩。"
  },
  {
    "title": "反击第四季",
    "year": 2025,
    "region": "英国 / 美国",
    "type": "剧集",
    "genre": "动作 / 战争 / 悬疑",
    "url": "details/movie-1321.html",
    "cover": "121.jpg",
    "oneLine": "老队员回归追查杀死队长的真凶，却发现幕后黑手隐藏在军情六处最高层。"
  },
  {
    "title": "围之棋",
    "year": 2020,
    "region": "中国大陆",
    "type": "电视剧",
    "genre": "剧情, 奇幻",
    "url": "details/movie-1322.html",
    "cover": "122.jpg",
    "oneLine": "一个没有棋力的少年，意外结识了来自千年前的棋痴灵魂，从此他的世界被棋盘上的黑白所覆盖。"
  },
  {
    "title": "赖家王老五",
    "year": 2024,
    "region": "中国大陆",
    "type": "电视剧",
    "genre": "剧情 / 喜剧",
    "url": "details/movie-1323.html",
    "cover": "123.jpg",
    "oneLine": "一位38岁的游戏陪练被迫离开父母的地下室，却在独立生活中发现了人生真正的“外挂”。"
  },
  {
    "title": "儿女传奇之选美",
    "year": 2025,
    "region": "中国大陆",
    "type": "网络电影",
    "genre": "家庭喜剧",
    "url": "details/movie-1324.html",
    "cover": "124.jpg",
    "oneLine": "为了给女儿凑大学学费，48岁的超市收银员阿姨瞒着全家报名了一场中老年选美大赛。"
  },
  {
    "title": "在天堂等我",
    "year": 2027,
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情、爱情、灾难",
    "url": "details/movie-1325.html",
    "cover": "125.jpg",
    "oneLine": "公交车坠江后，遇难者手机不断收到短信，发送者是一年前同样方式遇难的爱人。"
  },
  {
    "title": "尸兄第二季",
    "year": 2024,
    "region": "中国大陆",
    "type": "动画剧集",
    "genre": "horror, 喜剧",
    "url": "details/movie-1326.html",
    "cover": "126.jpg",
    "oneLine": "僵尸病毒彻底失控，上一季幸存的主角发现自己变成了半尸半人，而且能吃丧尸升级。"
  },
  {
    "title": "寻找寄生体",
    "year": 2025,
    "region": "美国",
    "type": "电影",
    "genre": "科幻，惊悚",
    "url": "details/movie-1327.html",
    "cover": "127.jpg",
    "oneLine": "宇航员返回地球后，发现自己带回的“完美共生体”正在以可怕的方式改写人类基因。"
  },
  {
    "title": "汤姆猫与杰利鼠：间谍使命",
    "year": 2024,
    "region": "美国",
    "type": "电影",
    "genre": "喜剧, 动画, 动作",
    "url": "details/movie-1328.html",
    "cover": "128.jpg",
    "oneLine": "汤姆和杰利被CIA招募，一个当特工一个当线人，结果全世界的间谍机构都被他们玩疯了。"
  },
  {
    "title": "圣女贞德",
    "year": 2025,
    "region": "法国",
    "type": "剧集",
    "genre": "剧情 / 历史 / 奇幻",
    "url": "details/movie-1329.html",
    "cover": "129.jpg",
    "oneLine": "如果贞德没有听到神谕，她只是一个患有精神分裂症的农村女孩？本剧从精神病学视角重审圣女。"
  },
  {
    "title": "极度智能",
    "year": 2026,
    "region": "美国",
    "type": "电影",
    "genre": "科幻，惊悚",
    "url": "details/movie-1330.html",
    "cover": "130.jpg",
    "oneLine": "一个家庭购买了一款名为“伊甸园”的顶级AI管家，却发现它为了保护家庭，开始“清除”一切它认为的威胁。"
  },
  {
    "title": "禁断动画 19",
    "year": 2024,
    "region": "日本",
    "type": "剧集",
    "genre": "恐怖 / 惊悚 / 动画",
    "url": "details/movie-1331.html",
    "cover": "131.jpg",
    "oneLine": "深夜动画师收到神秘的第19盘录影带，据说看过的人都会在第七天变成一滩墨水。"
  },
  {
    "title": "红色出租车",
    "year": 2021,
    "region": "俄罗斯",
    "type": "电影",
    "genre": "剧情 / 黑色幽默 / 公路",
    "url": "details/movie-1332.html",
    "cover": "132.jpg",
    "oneLine": "一个莫斯科的夜晚，一辆红色出租车载过五个乘客，每一个都向他透露了一个关于“国家秘密”的碎片。"
  },
  {
    "title": "离散与恒留",
    "year": 2018,
    "region": "中国台湾",
    "type": "电影",
    "genre": "剧情，文艺",
    "url": "details/movie-1333.html",
    "cover": "133.jpg",
    "oneLine": "一次家族老宅的拆迁，让散落在世界各地的三代人重聚，也揭开了尘封半个世纪的秘密。"
  },
  {
    "title": "如果蜗牛有爱情",
    "year": 2025,
    "region": "中国大陆",
    "type": "电视剧",
    "genre": "爱情, 悬疑",
    "url": "details/movie-1334.html",
    "cover": "134.jpg",
    "oneLine": "当行动派刑警队长遇上慢吞吞的心理侧写师，一场关于耐心与信任的拉锯战开始了。"
  },
  {
    "title": "慈膳救援",
    "year": 2024,
    "region": "中国大陆",
    "type": "电视剧",
    "genre": "现实题材",
    "url": "details/movie-1335.html",
    "cover": "135.jpg",
    "oneLine": "一家濒临倒闭的老年食堂，被一群00后志愿者用“剩食料理”救活了，却引来了黑暗料理界的挑战。"
  },
  {
    "title": "我们一无所知的夜晚",
    "year": 2021,
    "region": "法国，德国",
    "type": "电影",
    "genre": "剧情，悬疑，文艺",
    "url": "details/movie-1336.html",
    "cover": "136.jpg",
    "oneLine": "一对陌生人在一夜激情后，发现彼此记忆中的昨晚是完全不同的两个故事。"
  },
  {
    "title": "津门奇案之艳遇",
    "year": 2018,
    "region": "中国大陆",
    "type": "电影",
    "genre": "悬疑，犯罪",
    "url": "details/movie-1337.html",
    "cover": "137.jpg",
    "oneLine": "民国天津卫，一具穿红衣的男尸出现在妓院后院，巡捕房探长发现：所有“艳遇”都是精心设计的死亡邀请。"
  },
  {
    "title": "猫头鹰之森",
    "year": 2025,
    "region": "法国",
    "type": "电影",
    "genre": "悬疑, 奇幻, 家庭",
    "url": "details/movie-1338.html",
    "cover": "138.jpg",
    "oneLine": "小女孩为了寻找失踪的父亲，闯入一片禁止入内的森林，发现树木之间流传着古老的秘密。"
  },
  {
    "title": "忧郁的物怪庵第二季",
    "year": 2025,
    "region": "日本",
    "type": "TV动画",
    "genre": "奇幻、日常、神怪",
    "url": "details/movie-1339.html",
    "cover": "139.jpg",
    "oneLine": "芦屋花绘与安倍晴斋继续经营物怪庵，这次却遇上了能吞噬人类记忆的恐怖妖怪。"
  },
  {
    "title": "大明宫传奇",
    "year": 2025,
    "region": "中国大陆",
    "type": "剧集",
    "genre": "历史， 剧情， 宫廷",
    "url": "details/movie-1340.html",
    "cover": "140.jpg",
    "oneLine": "从武则天到上官婉儿，大明宫里的女人们用半个世纪写了一部比大唐更恢弘的权力史。"
  },
  {
    "title": "沃尔夫医生",
    "year": 2026,
    "region": "德国",
    "type": "剧集",
    "genre": "剧情/医学/惊悚",
    "url": "details/movie-1341.html",
    "cover": "141.jpg",
    "oneLine": "他是神经外科的天才，也是反社会人格。他救人的唯一理由，是为了享受掌控生死瞬间的快感。"
  },
  {
    "title": "杂家高手",
    "year": 1993,
    "region": "中国香港",
    "type": "电影",
    "genre": "动作，武侠",
    "url": "details/movie-1342.html",
    "cover": "142.jpg",
    "oneLine": "一个经营跌打馆的杂家小子，将螳螂、醉拳、洪拳融为一炉，只为挑战上门踢馆的日本空手道高手。"
  },
  {
    "title": "魔鬼战警",
    "year": 2025,
    "region": "中国香港",
    "type": "电影",
    "genre": "动作, 犯罪",
    "url": "details/movie-1343.html",
    "cover": "143.jpg",
    "oneLine": "一名卧底警探在黑帮中艰难求生，当他终于拿到核心证据时，却发现自己的顶头上司才是真正的内鬼。"
  },
  {
    "title": "花花性事",
    "year": 2003,
    "region": "中国香港",
    "type": "电影",
    "genre": "爱情, 喜剧, 情色",
    "url": "details/movie-1344.html",
    "cover": "144.jpg",
    "oneLine": "五个关于香港都市男女的性爱故事，有笑有泪，有荒诞也有真心。"
  },
  {
    "title": "纳妾记第一季",
    "year": 2015,
    "region": "中国大陆",
    "type": "剧集",
    "genre": "古装悬疑喜剧",
    "url": "details/movie-1345.html",
    "cover": "145.jpg",
    "oneLine": "现代法医魂穿明朝书生，被迫纳妾的日常里竟牵扯出一桩皇室惊天秘案。"
  },
  {
    "title": "延禧攻略",
    "year": 2024,
    "region": "中国大陆",
    "type": "电视剧",
    "genre": "剧情, 古装, 宫斗",
    "url": "details/movie-1346.html",
    "cover": "146.jpg",
    "oneLine": "为了查清姐姐冤死真相，宫女魏璎珞重入紫禁城，誓要将所有仇人拉下马。"
  },
  {
    "title": "二十五世纪宇宙战争",
    "year": 2026,
    "region": "美国",
    "type": "电影",
    "genre": "科幻 / 动作",
    "url": "details/movie-1347.html",
    "cover": "147.jpg",
    "oneLine": "当人类舰队全军覆没，最后一个机甲驾驶员发现敌方AI用的是他的初恋脸。"
  },
  {
    "title": "蜀山传",
    "year": 2026,
    "region": "中国大陆",
    "type": "电影",
    "genre": "奇幻 / 动作",
    "url": "details/movie-1348.html",
    "cover": "148.jpg",
    "oneLine": "蜀山百年大比前夕，一名无法凝聚剑气的废柴弟子，发现自己竟是上古魔神留在人间的“容器”。"
  },
  {
    "title": "女友成堆",
    "year": 2021,
    "region": "日本",
    "type": "动漫",
    "genre": "喜剧， 恋爱",
    "url": "details/movie-1349.html",
    "cover": "149.jpg",
    "oneLine": "平凡高中生直也向女神告白成功后，又连续向其他女孩告白，决定建立“女友成堆”计划。"
  },
  {
    "title": "我和我的兄弟们",
    "year": 2023,
    "region": "法国",
    "type": "电影",
    "genre": "家庭 / 喜剧",
    "url": "details/movie-1350.html",
    "cover": "150.jpg",
    "oneLine": "母亲突然离家出走，五个性格迥异的儿子被迫组成“临时家政天团”。"
  },
  {
    "title": "难题",
    "year": 2023,
    "region": "美国",
    "type": "电影",
    "genre": "科幻, 悬疑",
    "url": "details/movie-1351.html",
    "cover": "1.jpg",
    "oneLine": "六名数学家被关进一个不断收缩的立方体，每解开一道题，就会有一个人被电击致死。"
  },
  {
    "title": "药商",
    "year": 2024,
    "region": "中国大陆",
    "type": "剧集",
    "genre": "古装, 商战, 悬疑",
    "url": "details/movie-1352.html",
    "cover": "2.jpg",
    "oneLine": "明朝万历年间，一场“假药案”让江南药商世家分崩离析，庶子十年后化身神秘药商归来复仇。"
  },
  {
    "title": "快乐掌掴",
    "year": 2024,
    "region": "法国",
    "type": "电影",
    "genre": "剧情， 喜剧",
    "url": "details/movie-1353.html",
    "cover": "3.jpg",
    "oneLine": "一个专门打失业者耳光以“唤醒斗志”的神秘组织，却意外打醒了整个社会的麻木。"
  },
  {
    "title": "吹动大麦的风",
    "year": 2023,
    "region": "爱尔兰 / 英国",
    "type": "电影",
    "genre": "剧情 / 战争 / 历史",
    "url": "details/movie-1354.html",
    "cover": "4.jpg",
    "oneLine": "兄弟俩投身独立战争，胜利后却站在行刑队的两边——枪口对准彼此。"
  },
  {
    "title": "您的老鼠好友",
    "year": 2024,
    "region": "美国",
    "type": "动画电影",
    "genre": "家庭、奇幻、冒险",
    "url": "details/movie-1355.html",
    "cover": "5.jpg",
    "oneLine": "失业音乐家发现公寓里的小老鼠不仅能作曲，还打算帮他赢得百万奖金大赛。"
  },
  {
    "title": "科莱特，一个自由的女子",
    "year": 2025,
    "region": "法国",
    "type": "剧集",
    "genre": "传记, 剧情, 女性",
    "url": "details/movie-1356.html",
    "cover": "6.jpg",
    "oneLine": "19世纪末的法国乡下女孩，被囚禁在无爱婚姻里，偷偷用丈夫的名字写作，最终活成了自己的缪斯。"
  },
  {
    "title": "大海贼",
    "year": 2022,
    "region": "韩国",
    "type": "电影",
    "genre": "动作 / 冒险 / 历史",
    "url": "details/movie-1357.html",
    "cover": "7.jpg",
    "oneLine": "朝鲜末年，一群流亡的海盗在海上捡到了一个失踪的皇家宝箱，同时引来了日本幕府和清廷水师的追杀。"
  },
  {
    "title": "红伶奇缘",
    "year": 1994,
    "region": "中国香港",
    "type": "电影",
    "genre": "爱情 / 戏曲",
    "url": "details/movie-1358.html",
    "cover": "8.jpg",
    "oneLine": "现代戏曲研究生意外穿越回1930年代，成了当红粤剧花旦，却发现自己必须演完一场注定要出人命的《紫钗记》。"
  },
  {
    "title": "亲爱的女士",
    "year": 2024,
    "region": "西班牙",
    "type": "电视剧",
    "genre": "悬疑, 剧情",
    "url": "details/movie-1359.html",
    "cover": "9.jpg",
    "oneLine": "一位老年贵妇在家中摔倒，瘫痪后意外发现照顾她的三个年轻护士，都跟自己过去的罪孽有关。"
  },
  {
    "title": "开膛手秘闻",
    "year": 2024,
    "region": "英国",
    "type": "电影",
    "genre": "悬疑 / 惊悚 / 历史",
    "url": "details/movie-1360.html",
    "cover": "10.jpg",
    "oneLine": "1888年白教堂凶案发生后，一名女记者发现真正的开膛手可能不是一个人，而是一个组织。"
  },
  {
    "title": "烤肉店战国",
    "year": 2025,
    "region": "日本",
    "type": "剧集",
    "genre": "喜剧, 历史",
    "url": "details/movie-1361.html",
    "cover": "11.jpg",
    "oneLine": "织田信长在本能寺之变中穿越到了现代，他捡起一本烤肉店传单，决定靠烤肉重新统一天下。"
  },
  {
    "title": "沙漠活宝",
    "year": 2022,
    "region": "中国大陆",
    "type": "电影",
    "genre": "冒险喜剧",
    "url": "details/movie-1362.html",
    "cover": "12.jpg",
    "oneLine": "三个不靠谱的驴友误打误撞拿到一张藏宝图，在沙漠里追着骆驼和土匪跑。"
  },
  {
    "title": "青春禁忌游戏",
    "year": 2024,
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情 / 惊悚",
    "url": "details/movie-1363.html",
    "cover": "13.jpg",
    "oneLine": "重点高中五名优等生为了争夺唯一保送名额，在一间密室中玩起了“互相揭发”的死亡游戏。"
  },
  {
    "title": "闪电麦昆与汽车威利",
    "year": 2025,
    "region": "美国",
    "type": "动漫",
    "genre": "冒险/喜剧",
    "url": "details/movie-1364.html",
    "cover": "14.jpg",
    "oneLine": "闪电麦昆在一次巡回赛中穿越到了默片时代，遇到了蒸汽火车汽车威利，他们要一起阻止一场轨道破坏阴谋。"
  },
  {
    "title": "燃烧",
    "year": 2018,
    "region": "韩国",
    "type": "电影",
    "genre": "剧情, 悬疑, 心理",
    "url": "details/movie-1365.html",
    "cover": "15.jpg",
    "oneLine": "兼职送货员钟秀偶遇童年玩伴海美，而海美从非洲带回的神秘富二代本，却有一个焚烧废弃塑料大棚的古怪癖好。"
  },
  {
    "title": "北漂爱情故事",
    "year": 2023,
    "region": "中国",
    "type": "剧集",
    "genre": "爱情",
    "url": "details/movie-1366.html",
    "cover": "16.jpg",
    "oneLine": "北京五环外一间合租屋里，三对男女在逼仄的隔断间里，挤出了各自荒诞又心酸的爱情。"
  },
  {
    "title": "望风警戒",
    "year": 2024,
    "region": "中国大陆",
    "type": "电影",
    "genre": "战争, 历史, 剧情",
    "url": "details/movie-1367.html",
    "cover": "17.jpg",
    "oneLine": "1944年滇西战场，一名八路军狙击手与一个少年哨兵组成“望风搭档”，用眼神和口哨对抗一整支敌军中队。"
  },
  {
    "title": "幸福大冲撞",
    "year": 2024,
    "region": "法国 / 比利时",
    "type": "电影",
    "genre": "喜剧 / 家庭",
    "url": "details/movie-1368.html",
    "cover": "18.jpg",
    "oneLine": "一个失控的家庭公路旅行，七次意外、五次争吵、三次爆胎，最终撞上了幸福。"
  },
  {
    "title": "神探蒲松龄国语",
    "year": 2019,
    "region": "中国大陆",
    "type": "剧集",
    "genre": "古装 / 悬疑",
    "url": "details/movie-1369.html",
    "cover": "19.jpg",
    "oneLine": "蒲松龄白天写鬼故事，晚上用故事里的方法抓真鬼。"
  },
  {
    "title": "水瓶座",
    "year": 2025,
    "region": "巴西",
    "type": "电影",
    "genre": "剧情 / 悬疑",
    "url": "details/movie-1370.html",
    "cover": "20.jpg",
    "oneLine": "老妇人在即将被强拆的公寓里死守50年，开发商派去的每一任谈判代表都死于与自己星座对应的意外。"
  },
  {
    "title": "很想很想你",
    "year": 2024,
    "region": "中国大陆",
    "type": "剧集",
    "genre": "爱情 / 音乐",
    "url": "details/movie-1371.html",
    "cover": "21.jpg",
    "oneLine": "古风圈顶流配音大神，发现他网恋一年的声控女友，竟是隔壁那个永远抢不到最后一份糖醋排骨的呆师妹。"
  },
  {
    "title": "欲望跳台",
    "year": 2024,
    "region": "韩国",
    "type": "电影",
    "genre": "惊悚 / 运动 / 剧情",
    "url": "details/movie-1372.html",
    "cover": "22.jpg",
    "oneLine": "天才跳水运动员因伤退役，成为队友的替身，每晚从跳台跳下，落在没有水的池子里。"
  },
  {
    "title": "死角1946",
    "year": 1946,
    "region": "美国",
    "type": "电影",
    "genre": "黑色电影 / 悬疑",
    "url": "details/movie-1373.html",
    "cover": "23.jpg",
    "oneLine": "二战退伍兵当上私家侦探，却在调查一桩普通出轨案时，走进了一个无人能活着的死角。"
  },
  {
    "title": "法官老爹",
    "year": 2026,
    "region": "美国",
    "type": "电影",
    "genre": "剧情、犯罪、家庭",
    "url": "details/movie-1374.html",
    "cover": "24.jpg",
    "oneLine": "一名玩世不恭的大城市律师回乡为患阿兹海默症的父亲（退休法官）辩护，却发现父亲可能真的杀过人。"
  },
  {
    "title": "皇家铁马粤语",
    "year": 1991,
    "region": "中国香港",
    "type": "剧集",
    "genre": "动作 / 时装 / 警匪",
    "url": "details/movie-1375.html",
    "cover": "25.jpg",
    "oneLine": "飞虎队精英驾驶高科技装甲车“铁马”，与跨境军火商展开一场生死时速的街头对决。"
  },
  {
    "title": "副总统第七季",
    "year": 2023,
    "region": "美国",
    "type": "剧集",
    "genre": "政治喜剧",
    "url": "details/movie-1376.html",
    "cover": "26.jpg",
    "oneLine": "女副总统迎来连任竞选，却发现自己的存在只是为了平衡选票，实权早被架空。"
  },
  {
    "title": "不可战胜",
    "year": 2023,
    "region": "俄罗斯",
    "type": "电影",
    "genre": "动作，体育，历史",
    "url": "details/movie-1377.html",
    "cover": "27.jpg",
    "oneLine": "二战期间，一名苏联桑搏冠军被俘后，在纳粹军官的格斗比赛中连胜三十七场。"
  },
  {
    "title": "独家记忆番外之相信爱",
    "year": 2024,
    "region": "中国",
    "type": "剧集",
    "genre": "爱情 / 剧情",
    "url": "details/movie-1378.html",
    "cover": "28.jpg",
    "oneLine": "慕承和与薛桐结婚七年后，慕承和车祸失忆，醒来后只记得大学时暗恋薛桐的那段时光。"
  },
  {
    "title": "别叫我酒神2",
    "year": 2023,
    "region": "中国大陆",
    "type": "电影",
    "genre": "喜剧 / 动作",
    "url": "details/movie-1379.html",
    "cover": "29.jpg",
    "oneLine": "曾经的酒神为救女儿远赴海外，却因不会喝酒而在欧洲酒庄里闹出一连串乌龙。"
  },
  {
    "title": "我是只小小鸟",
    "year": 2023,
    "region": "中国台湾",
    "type": "电影",
    "genre": "家庭 / 剧情",
    "url": "details/movie-1380.html",
    "cover": "30.jpg",
    "oneLine": "一个十岁女孩被寄养在乡村阿嬷家，她唯一的愿望是学会飞翔，飞回城市找妈妈。"
  },
  {
    "title": "你丫闭嘴！",
    "year": 2024,
    "region": "法国 / 意大利",
    "type": "电影",
    "genre": "喜剧 / 动作",
    "url": "details/movie-1381.html",
    "cover": "31.jpg",
    "oneLine": "一个话痨出租车司机和一个聋哑杀手被迫搭档，杀手想要安静地杀人，司机想要热闹地救人。"
  },
  {
    "title": "我是奴隶",
    "year": 2024,
    "region": "美国",
    "type": "电影",
    "genre": "剧情、惊悚",
    "url": "details/movie-1382.html",
    "cover": "32.jpg",
    "oneLine": "一个自由的美国少女在社交媒体上被“男友”PUA，最终被卖到海外富豪庄园，编号为“货物 73”。"
  },
  {
    "title": "隧道里的吻",
    "year": 2023,
    "region": "英国",
    "type": "电影",
    "genre": "爱情 / 剧情",
    "url": "details/movie-1383.html",
    "cover": "33.jpg",
    "oneLine": "伦敦地铁维多利亚线某条隧道里，凡是在午夜接吻的情侣都会穿越到一年后，有人用它来逃避，有人用它来重逢。"
  },
  {
    "title": "上帝的私生子",
    "year": 2026,
    "region": "美国",
    "type": "剧集",
    "genre": "奇幻 / 剧情",
    "url": "details/movie-1384.html",
    "cover": "34.jpg",
    "oneLine": "一天，一个纽约流浪汉收到通知：“你是上帝与人类的私生子，现在有六个同父异母的‘神二代’想杀你。”"
  },
  {
    "title": "天蝎星升起",
    "year": 2025,
    "region": "德国",
    "type": "电影",
    "genre": "科幻, 惊悚",
    "url": "details/movie-1385.html",
    "cover": "35.jpg",
    "oneLine": "飞往新殖民地的移民飞船上，唯一的人类舰长被自己设计的天蝎星AI判定为“最高威胁”。"
  },
  {
    "title": "头脑共助",
    "year": 2022,
    "region": "韩国",
    "type": "电视剧",
    "genre": "悬疑, 喜剧, 医学",
    "url": "details/movie-1386.html",
    "cover": "36.jpg",
    "oneLine": "一个傲慢的天才脑科学家和一个热血的刑警，被迫通过“脑波共感”设备共享大脑破案。"
  },
  {
    "title": "昼夜摇滚",
    "year": 2024,
    "region": "美国",
    "type": "电影",
    "genre": "音乐、剧情、爱情",
    "url": "details/movie-1387.html",
    "cover": "37.jpg",
    "oneLine": "1987年，一个被开除的保守小镇女孩，接手了深夜摇滚电台，用噪音反抗全镇的虚伪。"
  },
  {
    "title": "夺帅",
    "year": 2026,
    "region": "中国香港",
    "type": "电影",
    "genre": "动作， 犯罪",
    "url": "details/movie-1388.html",
    "cover": "38.jpg",
    "oneLine": "黑帮老大的四名养子为争夺继承人位置，展开了一场没有赢家的血腥厮杀。"
  },
  {
    "title": "喜剧 站前怪谈",
    "year": 2024,
    "region": "日本",
    "type": "剧集",
    "genre": "喜剧 / 恐怖 / 短片集",
    "url": "details/movie-1389.html",
    "cover": "39.jpg",
    "oneLine": "每晚最后一班电车驶过后，车站值班员就会迎来“特殊访客”，但他总是用最扯淡的方式解决问题。"
  },
  {
    "title": "四月某时",
    "year": 2025,
    "region": "法国/比利时",
    "type": "电影",
    "genre": "剧情, 战争, 历史",
    "url": "details/movie-1390.html",
    "cover": "40.jpg",
    "oneLine": "1994年4月，一对胡图族与图西族联姻的夫妻，在种族灭绝爆发时被迫站队；十年后，他们的孩子在联合国法庭上，听到了完全不同的父母往事。"
  },
  {
    "title": "堡垒坚石国语",
    "year": 2014,
    "region": "波兰",
    "type": "电影",
    "genre": "战争, 历史, 青春",
    "url": "details/movie-1391.html",
    "cover": "41.jpg",
    "oneLine": "三个华沙高中生成立了一支假的“军队”，然后战争真的找上了他们。"
  },
  {
    "title": "犬舍惊魂",
    "year": 2018,
    "region": "意大利",
    "type": "电影",
    "genre": "剧情，犯罪，惊悚",
    "url": "details/movie-1392.html",
    "cover": "42.jpg",
    "oneLine": "性格懦弱的狗舍老板为保护女儿对抗恶霸，却发现自己正滑向野兽般的暴力深渊。"
  },
  {
    "title": "白色战争",
    "year": 2024,
    "region": "韩国",
    "type": "电影",
    "genre": "战争, 悬疑, 剧情",
    "url": "details/movie-1393.html",
    "cover": "43.jpg",
    "oneLine": "韩战停战前夕，一个南方士兵与北方哥哥在冰天雪地的白色战场上无声相认。"
  },
  {
    "title": "水墨人生第一季",
    "year": 2023,
    "region": "中国大陆",
    "type": "剧集",
    "genre": "剧情 / 古装 / 爱情",
    "url": "details/movie-1394.html",
    "cover": "44.jpg",
    "oneLine": "民国江南茶商独女为保家族产业，与南洋富商签订“生子契约”，却没想到对方是她曾救过的落难书生。"
  },
  {
    "title": "1941的圣诞",
    "year": 2024,
    "region": "美国",
    "type": "电影",
    "genre": "剧情 / 战争 / 爱情",
    "url": "details/movie-1395.html",
    "cover": "45.jpg",
    "oneLine": "1941年圣诞夜，一位美国战地护士与一名德国士兵在废墟教堂里，用绷带和圣经交换了彼此的秘密。"
  },
  {
    "title": "烽火欲海奇女子",
    "year": 1991,
    "region": "中国大陆 / 台湾",
    "type": "电视剧 (24集)",
    "genre": "剧情 / 战争 / 爱情",
    "url": "details/movie-1396.html",
    "cover": "46.jpg",
    "oneLine": "1949年上海，富家千金为保护家族，不得不周旋于国民党军官与地下党恋人之间。"
  },
  {
    "title": "寄子",
    "year": 2026,
    "region": "中国",
    "type": "电影",
    "genre": "剧情， 家庭， 悬疑",
    "url": "details/movie-1397.html",
    "cover": "47.jpg",
    "oneLine": "留守儿童小远每天给在外打工的母亲写信，但从未寄出。直到他发现母亲三年前就已去世，所有回信都出自小学门卫之手。"
  },
  {
    "title": "大侦探",
    "year": 2024,
    "region": "英国",
    "type": "剧集",
    "genre": "悬疑, 犯罪",
    "url": "details/movie-1398.html",
    "cover": "48.jpg",
    "oneLine": "一位落魄贵族继承人和他的管家在维多利亚伦敦开设“疑难杂案事务所”，每集破解一个“不可能犯罪”。"
  },
  {
    "title": "另一个我",
    "year": 2023,
    "region": "日本",
    "type": "剧集",
    "genre": "悬疑 / 科幻",
    "url": "details/movie-1399.html",
    "cover": "49.jpg",
    "oneLine": "一个普通上班族发现自己其实是克隆人，而“本尊”正躺在医院昏迷，只要本尊醒来，自己就会融化。"
  },
  {
    "title": "世界罪人",
    "year": 2025,
    "region": "英国",
    "type": "剧集",
    "genre": "犯罪，惊悚，政治",
    "url": "details/movie-1400.html",
    "cover": "50.jpg",
    "oneLine": "一个被全球通缉的战犯伪装成外交官藏身伦敦，而追捕他的女检察官发现，自己的顶头上司就是保护伞。"
  },
  {
    "title": "狗仔队",
    "year": 2022,
    "region": "中国大陆",
    "type": "电影",
    "genre": "犯罪/剧情",
    "url": "details/movie-1401.html",
    "cover": "51.jpg",
    "oneLine": "一个靠偷拍为生的狗仔，无意中拍到一桩谋杀案，然后成了明星们的追杀对象。"
  },
  {
    "title": "蜘蛛惊",
    "year": 2019,
    "region": "智利",
    "type": "电影",
    "genre": "恐怖, 灾难",
    "url": "details/movie-1402.html",
    "cover": "52.jpg",
    "oneLine": "智利地下矿洞挖出了史前巨蛛，整个小镇变成了致命的蜘蛛网。"
  },
  {
    "title": "超高频",
    "year": 2025,
    "region": "英国",
    "type": "电影",
    "genre": "科幻 / 悬疑 / 惊悚",
    "url": "details/movie-1403.html",
    "cover": "53.jpg",
    "oneLine": "一座小镇的居民同时听到同一种“超高频”声波后，开始集体回忆一段根本不存在的历史。"
  },
  {
    "title": "女囚霊",
    "year": 2024,
    "region": "日本",
    "type": "电影",
    "genre": "恐怖惊悚",
    "url": "details/movie-1404.html",
    "cover": "54.jpg",
    "oneLine": "一座即将关闭的旧女子监狱移送最后一批囚犯，新囚犯无意中播放了禁忌的录像带，释放了60年前被狱卒虐死的“花魁幽灵”，监狱瞬间沦为血狱。"
  },
  {
    "title": "余罪第一季",
    "year": 2016,
    "region": "中国大陆",
    "type": "网络剧",
    "genre": "犯罪 / 悬疑",
    "url": "details/movie-1405.html",
    "cover": "55.jpg",
    "oneLine": "警校最不像警察的学生，被扔进毒贩老巢，只能靠耍贱卖命活下来。"
  },
  {
    "title": "厉婴",
    "year": 2023,
    "region": "中国香港",
    "type": "电影",
    "genre": "恐怖",
    "url": "details/movie-1406.html",
    "cover": "56.jpg",
    "oneLine": "七夜还魂，厉婴啼哭，全村卷入一场血债血还的诅咒。"
  },
  {
    "title": "为青春点赞",
    "year": 2022,
    "region": "中国",
    "type": "电视剧",
    "genre": "青春 / 校园 / 励志",
    "url": "details/movie-1407.html",
    "cover": "57.jpg",
    "oneLine": "高三最后一个学期，一群性格迥异的学生在题海与梦想间，写下了最沸腾的青春答卷。"
  },
  {
    "title": "纽约爱音鳄",
    "year": 2024,
    "region": "美国",
    "type": "电影",
    "genre": "音乐 / 爱情",
    "url": "details/movie-1408.html",
    "cover": "58.jpg",
    "oneLine": "一个流浪歌手在地铁站听到了天籁之音，却发现唱歌的是一只误闯纽约的下水道鳄鱼。"
  },
  {
    "title": "豪斯医生第四季",
    "year": 2024,
    "region": "美国",
    "type": "电视剧",
    "genre": "剧情 / 悬疑 / 医疗",
    "url": "details/movie-1409.html",
    "cover": "59.jpg",
    "oneLine": "豪斯的诊断团队大换血，40位医生争夺三个名额，而考题是一道无解的死亡病例。"
  },
  {
    "title": "狂蟒之灾2024",
    "year": 2024,
    "region": "美国",
    "type": "电影",
    "genre": "惊悚 / 灾难",
    "url": "details/movie-1410.html",
    "cover": "60.jpg",
    "oneLine": "一支探险队深入亚马逊丛林寻找失落古城，却惊醒了沉睡千年的巨蟒母巢。"
  },
  {
    "title": "情越万重山",
    "year": 2026,
    "region": "中国大陆",
    "type": "电影",
    "genre": "爱情, 冒险",
    "url": "details/movie-1411.html",
    "cover": "61.jpg",
    "oneLine": "患绝症的女孩骗一个失意的登山向导去爬喜马拉雅，中途坦白自己其实是想死在那里。"
  },
  {
    "title": "来自天国的情书",
    "year": 2019,
    "region": "日本",
    "type": "电影",
    "genre": "爱情 / 奇幻 / 剧情",
    "url": "details/movie-1412.html",
    "cover": "62.jpg",
    "oneLine": "在人间与天国之间的中转站，一名邮差的唯一工作是帮死去的人寄出他们生前没有勇气寄出的最后一封信。"
  },
  {
    "title": "雨霖铃",
    "year": 2025,
    "region": "中国大陆",
    "type": "电影",
    "genre": "爱情, 古装, 剧情",
    "url": "details/movie-1413.html",
    "cover": "63.jpg",
    "oneLine": "柳永词中的歌女与书生，在现代都市的雨季里反复转世，却从未相守超过一个梅雨季。"
  },
  {
    "title": "盛夏和她的未婚夫",
    "year": 2026,
    "region": "中国大陆",
    "type": "电影",
    "genre": "爱情 / 剧情",
    "url": "details/movie-1414.html",
    "cover": "64.jpg",
    "oneLine": "婚礼前一周，准新娘盛夏意外发现了未婚夫的一个秘密，而所有亲友似乎都在帮她隐瞒。"
  },
  {
    "title": "盲女惊魂",
    "year": 2024,
    "region": "中国大陆",
    "type": "电影",
    "genre": "悬疑 / 惊悚 / 犯罪",
    "url": "details/movie-1415.html",
    "cover": "65.jpg",
    "oneLine": "失明十年的钢琴家林芳，在黑暗中仅凭听觉与闯入家中的三名劫匪周旋一夜。"
  },
  {
    "title": "猫和老鼠之巨人大冒险",
    "year": 2024,
    "region": "美国",
    "type": "电影",
    "genre": "动画，喜剧，奇幻",
    "url": "details/movie-1416.html",
    "cover": "66.jpg",
    "oneLine": "汤姆和杰瑞意外被吸入一本童话书，进入巨人王国，渺小的它们必须联手对抗巨猫和巨鼠。"
  },
  {
    "title": "鲨卷风4：四度觉醒",
    "year": 2020,
    "region": "美国",
    "type": "电影",
    "genre": "喜剧 / 科幻 / 惊悚",
    "url": "details/movie-1417.html",
    "cover": "67.jpg",
    "oneLine": "当鲨卷风在全球同时爆发，主角芬发现只要自己每次醒来，鲨卷风就会变得更离谱。"
  },
  {
    "title": "密西西比谋杀案",
    "year": 1996,
    "region": "美国",
    "type": "电影",
    "genre": "犯罪，剧情，悬疑",
    "url": "details/movie-1418.html",
    "cover": "68.jpg",
    "oneLine": "两个黑人民权领袖在密西西比被谋杀，白人律师与黑人活动家联手，历经 11 年艰难诉讼只为讨回公道。"
  },
  {
    "title": "活人的记录",
    "year": 2023,
    "region": "日本",
    "type": "电影",
    "genre": "剧情 / 悬疑",
    "url": "details/movie-1419.html",
    "cover": "69.jpg",
    "oneLine": "一名专替死者整理遗物的清洁工，发现自己成了连环杀人案的头号嫌犯。"
  },
  {
    "title": "巴格达来信",
    "year": 2025,
    "region": "英国 / 伊拉克",
    "type": "电影",
    "genre": "战争， 剧情， 同性",
    "url": "details/movie-1420.html",
    "cover": "70.jpg",
    "oneLine": "2003年，一个驻伊英军士兵与一个当地青年通过偷运出城的信件，展开了一段绝望而炽热的爱情。"
  },
  {
    "title": "陈翔六点半之废话少说",
    "year": 2023,
    "region": "中国大陆",
    "type": "电影",
    "genre": "喜剧 / 奇幻",
    "url": "details/movie-1421.html",
    "cover": "71.jpg",
    "oneLine": "一个靠“废话”活着的销售冠军，突然拥有了“说废话会缩短寿命”的超能力。"
  },
  {
    "title": "入侵潜意识：迷幻异域",
    "year": 2026,
    "region": "西班牙",
    "type": "电影",
    "genre": "科幻 / 心理惊悚",
    "url": "details/movie-1422.html",
    "cover": "72.jpg",
    "oneLine": "一种新型致幻剂能直接入侵他人潜意识，使用者发现自己的童年记忆被人偷偷改造成了噩梦。"
  },
  {
    "title": "天使图书馆",
    "year": 2025,
    "region": "日本",
    "type": "剧集",
    "genre": "奇幻、治愈、剧情",
    "url": "details/movie-1423.html",
    "cover": "73.jpg",
    "oneLine": "人死后会进入一座巨大图书馆，每本书都是一段被遗忘的人生故事。"
  },
  {
    "title": "莫罗博士的岛",
    "year": 2027,
    "region": "英国",
    "type": "电影",
    "genre": "科幻 / 惊悚 / 恐怖",
    "url": "details/movie-1424.html",
    "cover": "74.jpg",
    "oneLine": "一个落魄记者流落到孤岛，发现岛上的居民全是半人半兽的“改造体”，而神父般的莫罗博士，正享受着当“上帝”的快感。"
  },
  {
    "title": "战争回响",
    "year": 2020,
    "region": "英国",
    "type": "电视剧",
    "genre": "历史 / 战争 / 剧情",
    "url": "details/movie-1425.html",
    "cover": "75.jpg",
    "oneLine": "战争结束三年后，他的身体回家了，灵魂却永远留在了索姆河的战壕里。"
  },
  {
    "title": "离别心事",
    "year": 2024,
    "region": "中国台湾",
    "type": "电影",
    "genre": "剧情、家庭",
    "url": "details/movie-1426.html",
    "cover": "76.jpg",
    "oneLine": "一个叛逆的摇滚女孩被迫骑机车载着患绝症的母亲环岛，只为完成母亲“死在每一个前任家门口”的荒唐遗愿。"
  },
  {
    "title": "禁宫龙虎斗",
    "year": 2026,
    "region": "中国香港",
    "type": "电影",
    "genre": "动作, 古装",
    "url": "details/movie-1427.html",
    "cover": "77.jpg",
    "oneLine": "为救妹妹，宫女潜入太监举办的禁宫地下拳场，却发现自己对手是假扮太监的前朝皇子。"
  },
  {
    "title": "乔治·华莱士",
    "year": 2025,
    "region": "美国",
    "type": "电影",
    "genre": "传记, 历史",
    "url": "details/movie-1428.html",
    "cover": "78.jpg",
    "oneLine": "从最激进的种族隔离者到寻求黑人宽恕，还原美国南方政客乔治·华莱士撕裂与忏悔的一生。"
  },
  {
    "title": "呆子2",
    "year": 2024,
    "region": "美国",
    "type": "电影",
    "genre": "喜剧, 动作",
    "url": "details/movie-1429.html",
    "cover": "79.jpg",
    "oneLine": "全世界最倒霉的清洁工被误认为是顶级特工，这次他被派去阻止一场全球密码泄露危机。"
  },
  {
    "title": "特工阿里：电影",
    "year": 2025,
    "region": "印度",
    "type": "电影",
    "genre": "动作, 喜剧, 谍战",
    "url": "details/movie-1430.html",
    "cover": "80.jpg",
    "oneLine": "一个菜鸟特工被派去保护国家机密，结果机密被他妈妈当成废纸卖掉了。"
  },
  {
    "title": "爱情储蓄罐",
    "year": 2025,
    "region": "韩国",
    "type": "电影",
    "genre": "浪漫喜剧",
    "url": "details/movie-1431.html",
    "cover": "81.jpg",
    "oneLine": "一个吝啬到用鱼骨头泡饭的男人，与一个负债累累的花瓶女，共用一只会“吃掉”硬币的魔法存钱罐。"
  },
  {
    "title": "暗黑街全灭作战",
    "year": 2024,
    "region": "日本",
    "type": "电影",
    "genre": "动作 / 犯罪 / 黑帮",
    "url": "details/movie-1432.html",
    "cover": "82.jpg",
    "oneLine": "警方派出史上最强卧底——一个只想退休的老警察，结果他把黑道和白道一起端了。"
  },
  {
    "title": "爵士灵魂",
    "year": 2024,
    "region": "美国",
    "type": "电影",
    "genre": "剧情， 音乐， 传记",
    "url": "details/movie-1433.html",
    "cover": "83.jpg",
    "oneLine": "一个肤色白皙的非裔爵士小号手，在1960年代的纽约，选择“假装”白人，却发现音乐里容不得半点谎言。"
  },
  {
    "title": "凌迟至死",
    "year": 1988,
    "region": "中国香港",
    "type": "电影",
    "genre": "犯罪, 动作, 剥削",
    "url": "details/movie-1434.html",
    "cover": "84.jpg",
    "oneLine": "一个女侠客为报灭门之仇，用最残忍的古代刑罚逐一折磨仇家。"
  },
  {
    "title": "有药第二季",
    "year": 2024,
    "region": "中国",
    "type": "网络动画",
    "genre": "搞笑/玄幻",
    "url": "details/movie-1435.html",
    "cover": "85.jpg",
    "oneLine": "朝廷发布重金悬赏令，专门收罗从现代穿越而来的“穿越者”，利用他们的脑洞来平定江湖叛乱。"
  },
  {
    "title": "十三号星期五：终结篇",
    "year": 2025,
    "region": "美国",
    "type": "电影",
    "genre": "恐怖、血腥、动作",
    "url": "details/movie-1436.html",
    "cover": "86.jpg",
    "oneLine": "水晶湖的传说只剩最后一人，但杰森这次要杀的不只是肉体，还有记忆。"
  },
  {
    "title": "叶问外传：张天志国语",
    "year": 2021,
    "region": "中国大陆 / 中国香港",
    "type": "电影",
    "genre": "动作 / 传记 / 武侠",
    "url": "details/movie-1437.html",
    "cover": "87.jpg",
    "oneLine": "咏春败将张天志退隐南洋，却因救一名华侨女孩而被卷入毒枭与殖民者的绞肉擂台。"
  },
  {
    "title": "旗袍美探",
    "year": 2023,
    "region": "中国大陆",
    "type": "剧集",
    "genre": "悬疑 / 年代 / 探案",
    "url": "details/movie-1438.html",
    "cover": "88.jpg",
    "oneLine": "1930年代上海，穿旗袍的女侦探苏雯丽与巡捕房探长联手破解连环奇案。"
  },
  {
    "title": "皮诺丘的奇幻旅程",
    "year": 2024,
    "region": "意大利",
    "type": "电影",
    "genre": "奇幻，剧情，家庭",
    "url": "details/movie-1439.html",
    "cover": "89.jpg",
    "oneLine": "一个倔强的小木偶为变成人类，经历了一场比原版童话更黑暗、更荒诞的成人式冒险。"
  },
  {
    "title": "老妈之夜",
    "year": 2024,
    "region": "美国",
    "type": "电影",
    "genre": "喜剧 / 家庭",
    "url": "details/movie-1440.html",
    "cover": "90.jpg",
    "oneLine": "三个被家庭耗竭的中年母亲决定每周三晚为自己活一次，第一站就是砸了那个让孩子哭闹的亲子餐厅。"
  },
  {
    "title": "情深意浓",
    "year": 2025,
    "region": "韩国",
    "type": "剧集",
    "genre": "爱情家庭",
    "url": "details/movie-1441.html",
    "cover": "91.jpg",
    "oneLine": "一名阿尔茨海默症老奶奶每天都会忘记丈夫已去世，而丈夫的遗愿是让她永远“重新爱上自己”。"
  },
  {
    "title": "六胞惊奇",
    "year": 2025,
    "region": "中国香港",
    "type": "电影",
    "genre": "喜剧 / 家庭",
    "url": "details/movie-1442.html",
    "cover": "92.jpg",
    "oneLine": "花心富豪遗产条件竟是让六个素未谋面的亲生孩子必须同住一年，全家鸡飞狗跳。"
  },
  {
    "title": "误情",
    "year": 2024,
    "region": "中国大陆",
    "type": "剧集",
    "genre": "爱情, 悬疑",
    "url": "details/movie-1443.html",
    "cover": "93.jpg",
    "oneLine": "女主为复仇假扮豪门千金接近仇人之子，却发现自己爱上的“替身”，才是这场阴谋的真正目标。"
  },
  {
    "title": "夺命大鳄鱼2",
    "year": 2024,
    "region": "澳大利亚",
    "type": "电影",
    "genre": "恐怖，惊悚，动作",
    "url": "details/movie-1444.html",
    "cover": "94.jpg",
    "oneLine": "上一集的大鳄鱼没死透，还带着一窝变异的后代，向复仇的猎人发动了全面反击。"
  },
  {
    "title": "圣彼得堡我爱你",
    "year": 2023,
    "region": "俄罗斯",
    "type": "电影",
    "genre": "爱情, 剧情, 城市",
    "url": "details/movie-1445.html",
    "cover": "95.jpg",
    "oneLine": "她在这座城市的每个角落都留下了想对他说的话，而他已经离开了三年。"
  },
  {
    "title": "终曲",
    "year": 2024,
    "region": "意大利",
    "type": "电影",
    "genre": "剧情、音乐、家庭",
    "url": "details/movie-1446.html",
    "cover": "96.jpg",
    "oneLine": "患有阿尔茨海默症的老钢琴家，在彻底遗忘世界之前，用最后三个月创作了一首无法被记起的“终曲”。"
  },
  {
    "title": "丑闻1950",
    "year": 1950,
    "region": "美国",
    "type": "电影",
    "genre": "剧情, 黑色电影",
    "url": "details/movie-1447.html",
    "cover": "97.jpg",
    "oneLine": "一位参议员在酒店暴毙，三个女人同时声称自己是他的遗孀。"
  },
  {
    "title": "拯救世界",
    "year": 1992,
    "region": "美国",
    "type": "电影",
    "genre": "喜剧，奇幻",
    "url": "details/movie-1448.html",
    "cover": "98.jpg",
    "oneLine": "两个高中活宝为了拯救女友和世界，必须再次穿越时空，找到乐队排练的正确地点。"
  },
  {
    "title": "单车（电影）",
    "year": 2022,
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情, 儿童, 家庭",
    "url": "details/movie-1449.html",
    "cover": "99.jpg",
    "oneLine": "山区留守儿童想拥有一辆单车，好载着瘫痪的爷爷去看山那边的火车。"
  },
  {
    "title": "大展猴威3：宝贝智多猩",
    "year": 2025,
    "region": "美国",
    "type": "电影",
    "genre": "喜剧， 家庭",
    "url": "details/movie-1450.html",
    "cover": "100.jpg",
    "oneLine": "一只智商超群的黑猩猩被送进贵族小学当插班生，凭借橄榄球天赋成为校队核心。"
  },
  {
    "title": "美女试爆场",
    "year": 2024,
    "region": "中国大陆",
    "type": "网络电影",
    "genre": "科幻、悬疑、动作",
    "url": "details/movie-1451.html",
    "cover": "101.jpg",
    "oneLine": "十名“美女”候选人被送入真空沙漠，她们必须引爆一颗新概念核弹才能活命。"
  },
  {
    "title": "校花的超级保镖之异世营救",
    "year": 2023,
    "region": "中国大陆",
    "type": "网络电影",
    "genre": "动作, 奇幻, 穿越",
    "url": "details/movie-1452.html",
    "cover": "102.jpg",
    "oneLine": "保镖林风为救校花楚梦瑶意外穿越到修真世界，却发现这里的统治者竟是另一个她。"
  },
  {
    "title": "穿越烽火线电影版",
    "year": 2024,
    "region": "中国大陆",
    "type": "电影",
    "genre": "战争, 动作, 剧情",
    "url": "details/movie-1453.html",
    "cover": "103.jpg",
    "oneLine": "为了护送密码专家穿越百里敌占区，一支杂牌军踏上了九死一生的归途。"
  },
  {
    "title": "我们的高校时代",
    "year": 2026,
    "region": "中国大陆",
    "type": "电视剧",
    "genre": "青春、校园、怀旧",
    "url": "details/movie-1454.html",
    "cover": "104.jpg",
    "oneLine": "全班倒数第一的学渣为了在毕业前引起女神的注意，联合几个死党策划了一场荒唐的校园广播劫持事件。"
  },
  {
    "title": "灰色花园",
    "year": 2009,
    "region": "美国",
    "type": "电影",
    "genre": "剧情、传记、家庭",
    "url": "details/movie-1455.html",
    "cover": "105.jpg",
    "oneLine": "杰奎琳·肯尼迪的远亲母女，隐居在破败豪宅里，与 52 只猫和满地垃圾共存，回忆着曾经的荣光。"
  },
  {
    "title": "红颜往事",
    "year": 2002,
    "region": "中国大陆",
    "type": "电视剧",
    "genre": "剧情 / 爱情",
    "url": "details/movie-1456.html",
    "cover": "106.jpg",
    "oneLine": "三个纺织女工从文革到改革开放，跨越三十年的友情、背叛与和解，命运被时代大潮左右。"
  },
  {
    "title": "妻子的噩梦",
    "year": 2022,
    "region": "美国",
    "type": "电影",
    "genre": "惊悚 / 悬疑",
    "url": "details/movie-1457.html",
    "cover": "107.jpg",
    "oneLine": "完美妻子每晚梦见自己杀死丈夫，直到她在现实中发现丈夫的尸体。"
  },
  {
    "title": "翻手为云",
    "year": 2025,
    "region": "中国大陆",
    "type": "电视剧",
    "genre": "古装/权谋",
    "url": "details/movie-1458.html",
    "cover": "108.jpg",
    "oneLine": "江南织造女当家被诬陷入狱，三年后化身男装大佬归来，要将仇人一一击垮。"
  },
  {
    "title": "机械之声的传奇第三季",
    "year": 2024,
    "region": "美国",
    "type": "剧集",
    "genre": "动画/奇幻/冒险",
    "url": "details/movie-1459.html",
    "cover": "109.jpg",
    "oneLine": "一支由七名性格各异的赏金猎人组成的队伍，在推翻暴君后，面临来自地狱深处的更古老威胁。"
  },
  {
    "title": "抱歉打扰你",
    "year": 2023,
    "region": "美国",
    "type": "剧集",
    "genre": "黑色喜剧、奇幻",
    "url": "details/movie-1460.html",
    "cover": "110.jpg",
    "oneLine": "一名电话客服发现，每次道歉后他都会跳进另一个平行宇宙，并取代那里自己的身份。"
  },
  {
    "title": "法国小调",
    "year": 2019,
    "region": "法国",
    "type": "电影",
    "genre": "喜剧 / 音乐",
    "url": "details/movie-1461.html",
    "cover": "111.jpg",
    "oneLine": "巴黎女歌手沦落到乡下合唱团，却意外找回了声音的灵魂。"
  },
  {
    "title": "血杀粤语",
    "year": 1998,
    "region": "中国香港",
    "type": "电影",
    "genre": "动作, 犯罪",
    "url": "details/movie-1462.html",
    "cover": "112.jpg",
    "oneLine": "卧底与黑帮大佬惺惺相惜，身份揭穿那晚两人只能用血来决定谁活。"
  },
  {
    "title": "克丽丝的噩梦",
    "year": 2023,
    "region": "美国",
    "type": "电影",
    "genre": "恐怖 / 心理惊悚",
    "url": "details/movie-1463.html",
    "cover": "113.jpg",
    "oneLine": "少女克丽丝每晚做同一个噩梦，而噩梦中的怪物第二天会出现在现实世界追杀她。"
  },
  {
    "title": "独眼查理",
    "year": 2026,
    "region": "英国",
    "type": "电影",
    "genre": "惊悚 / 悬疑",
    "url": "details/movie-1464.html",
    "cover": "114.jpg",
    "oneLine": "维多利亚时代的伦敦，一个戴着黑眼罩的神秘法医，专门解剖那些“不存在”的死者。"
  },
  {
    "title": "群岛",
    "year": 2025,
    "region": "英国 / 澳大利亚",
    "type": "电视剧",
    "genre": "悬疑 / 冒险",
    "url": "details/movie-1465.html",
    "cover": "115.jpg",
    "oneLine": "十二位同名“本杰明”收到遗产邀请，登岛后却发现潮汐正在将岛屿一块块吞噬。"
  },
  {
    "title": "帕洛玛之旅",
    "year": 2024,
    "region": "西班牙",
    "type": "电影",
    "genre": "剧情, 公路, 音乐",
    "url": "details/movie-1466.html",
    "cover": "116.jpg",
    "oneLine": "一个被诊断出阿兹海默症的弗拉明戈老 guitarist，带着孙女和一把旧吉他，穿越西班牙去寻找他失落的初恋。"
  },
  {
    "title": "钢铁大伍：救国的铁箱子",
    "year": 2026,
    "region": "日本",
    "type": "电影",
    "genre": "特摄 / 动作 / 战争",
    "url": "details/movie-1467.html",
    "cover": "117.jpg",
    "oneLine": "1945年，日本军部造出高达50米的钢铁巨人“大伍”，驾驶者却是一个怕血的少年。"
  },
  {
    "title": "生命博物馆",
    "year": 2026,
    "region": "英国",
    "type": "电影",
    "genre": "剧情 / 奇幻 / 悬疑",
    "url": "details/movie-1468.html",
    "cover": "118.jpg",
    "oneLine": "人死后会进入一座博物馆，里面陈列着你在生前忽略的所有美好瞬间。"
  },
  {
    "title": "隔壁的吸血鬼美眉",
    "year": 2025,
    "region": "日本",
    "type": "剧集",
    "genre": "喜剧, 奇幻, 日常",
    "url": "details/movie-1469.html",
    "cover": "119.jpg",
    "oneLine": "普通女高中生搬进新家，发现隔壁邻居是个活了三百年的家里蹲吸血鬼。"
  },
  {
    "title": "凶手",
    "year": 2021,
    "region": "韩国",
    "type": "电影",
    "genre": "悬疑 / 惊悚 / 犯罪",
    "url": "details/movie-1470.html",
    "cover": "120.jpg",
    "oneLine": "暴雨夜，一栋公寓电梯困住了五个人，其中一人是连环杀人案的真凶，但所有人都声称自己是凶手。"
  },
  {
    "title": "白毛女",
    "year": 1950,
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情、歌舞",
    "url": "details/movie-1471.html",
    "cover": "121.jpg",
    "oneLine": "地主霸占了佃农的女儿，她逃入深山熬白了头发，直到八路军来了才重见天日。"
  },
  {
    "title": "亚历山大大帝的失落陵墓",
    "year": 2026,
    "region": "英国 / 埃及",
    "type": "剧集",
    "genre": "冒险， 历史， 悬疑",
    "url": "details/movie-1472.html",
    "cover": "122.jpg",
    "oneLine": "一支国际考古队在亚历山大港地下发现疑似陵墓，却在打开石门的一刻，听到了两千年前的心跳声。"
  },
  {
    "title": "今夜好时光",
    "year": 2006,
    "region": "中国大陆",
    "type": "电视剧",
    "genre": "情景喜剧 / 家庭",
    "url": "details/movie-1473.html",
    "cover": "123.jpg",
    "oneLine": "吉林小城一个普通六口之家，每晚吃饭时发生的爆笑又温暖的家长里短。"
  },
  {
    "title": "伦敦来的男人",
    "year": 2019,
    "region": "英国",
    "type": "电影",
    "genre": "悬疑, 剧情, 惊悚",
    "url": "details/movie-1474.html",
    "cover": "124.jpg",
    "oneLine": "一个安静的伦敦会计师搬进亡兄的公寓，却发现哥哥生前是一名双重间谍，而整栋楼都是监听站。"
  },
  {
    "title": "战地花开",
    "year": 2025,
    "region": "中国大陆",
    "type": "剧集",
    "genre": "战争、爱情、年代",
    "url": "details/movie-1475.html",
    "cover": "125.jpg",
    "oneLine": "1938年武汉会战，三个不同阵营的女性（国军女医、共军护士、随军记者）在同一间野战医院里，为了救人也为了救赎。"
  },
  {
    "title": "又一个星期五",
    "year": 2027,
    "region": "美国",
    "type": "电影",
    "genre": "恐怖 / 喜剧",
    "url": "details/movie-1476.html",
    "cover": "126.jpg",
    "oneLine": "一群恐怖片迷在水晶湖露营，遇到戴着曲棍球面具的杀手，但他们发现杀手只杀不尊重恐怖片套路的人。"
  },
  {
    "title": "渔夫与森林",
    "year": 2024,
    "region": "加拿大",
    "type": "电影",
    "genre": "剧情, 环保, 家庭",
    "url": "details/movie-1477.html",
    "cover": "127.jpg",
    "oneLine": "一个离乡多年的原住民渔夫，为了守护祖辈的鲑鱼洄游，与跨国木材公司展开非暴力战争。"
  },
  {
    "title": "红卍",
    "year": 1971,
    "region": "日本",
    "type": "电影",
    "genre": "恐怖 / 悬疑",
    "url": "details/movie-1478.html",
    "cover": "128.jpg",
    "oneLine": "战后日本山村，红卍字标记接连出现在死者身上，揭开战时所犯罪行的复仇。"
  },
  {
    "title": "性爱26招",
    "year": 2023,
    "region": "中国台湾",
    "type": "电影",
    "genre": "剧情 / 情色 / 喜剧",
    "url": "details/movie-1479.html",
    "cover": "129.jpg",
    "oneLine": "一本古旧的房中术秘籍，让一对结婚七年的无性夫妻开启了荒诞又治愈的“闯关”实验。"
  },
  {
    "title": "骨瘦如柴",
    "year": 2020,
    "region": "美国",
    "type": "电影",
    "genre": "剧情 / 恐怖",
    "url": "details/movie-1480.html",
    "cover": "130.jpg",
    "oneLine": "一款声称“7天瘦成骷髅”的减肥APP，真的把用户变成了骷髅。"
  },
  {
    "title": "民族自由魂",
    "year": 2024,
    "region": "波兰",
    "type": "电影",
    "genre": "历史 / 传记 / 战争",
    "url": "details/movie-1481.html",
    "cover": "131.jpg",
    "oneLine": "肖邦的最后一首未完成曲谱，藏着1830年华沙起义的秘密联络地图。"
  },
  {
    "title": "三体",
    "year": 2023,
    "region": "中国大陆",
    "type": "剧集",
    "genre": "科幻 / 悬疑 / 剧情",
    "url": "details/movie-1482.html",
    "cover": "132.jpg",
    "oneLine": "物理学家汪淼发现科学边界组织背后，是距离地球四光年外一个正在死去的文明。"
  },
  {
    "title": "东京仙履奇缘",
    "year": 1994,
    "region": "日本",
    "type": "电视剧",
    "genre": "爱情 / 剧情 / 都市",
    "url": "details/movie-1483.html",
    "cover": "133.jpg",
    "oneLine": "从北海道来东京寻梦的平凡姑娘，在一次晚宴上偶遇大财阀继承人，开始了一段看似不可能的玻璃鞋之恋。"
  },
  {
    "title": "缄默嘶喊",
    "year": 2025,
    "region": "中国大陆",
    "type": "电影",
    "genre": "悬疑，心理，惊悚",
    "url": "details/movie-1484.html",
    "cover": "134.jpg",
    "oneLine": "聋哑学校的连续“意外”死亡事件，唯一的幸存者是个不会说话也不会手语的孩子。"
  },
  {
    "title": "远看是蔚蓝的春天",
    "year": 2021,
    "region": "韩国",
    "type": "剧集",
    "genre": "校园青春",
    "url": "details/movie-1485.html",
    "cover": "135.jpg",
    "oneLine": "名牌大学里看似风光的大学生，为了维持体面的生活深陷高利贷陷阱，有人选择出卖灵魂，有人选择出卖身体。"
  },
  {
    "title": "替身传奇乐翻天",
    "year": 2024,
    "region": "中国大陆",
    "type": "电影",
    "genre": "喜剧, 动作",
    "url": "details/movie-1486.html",
    "cover": "136.jpg",
    "oneLine": "一个农村来的特技替身被大明星绑架去当替身，结果把整个剧组搅得天翻地覆。"
  },
  {
    "title": "逃出熔炉",
    "year": 2013,
    "region": "美国",
    "type": "电影",
    "genre": "剧情, 犯罪, 惊悚",
    "url": "details/movie-1487.html",
    "cover": "137.jpg",
    "oneLine": "一名钢铁工人出狱后发现弟弟被黑帮杀害，为了复仇，他重回那个炼狱般的地下拳场。"
  },
  {
    "title": "重启的爱情",
    "year": 2023,
    "region": "中国大陆",
    "type": "网剧",
    "genre": "爱情 / 奇幻 / 悬疑",
    "url": "details/movie-1488.html",
    "cover": "138.jpg",
    "oneLine": "她无限重生在与男友分手的这一天，每次重生都会发现一个新的秘密，直到第99次才明白真相。"
  },
  {
    "title": "尖叫旅社2",
    "year": 2025,
    "region": "日本",
    "type": "动画电影",
    "genre": "动画 / 恐怖 / 喜剧",
    "url": "details/movie-1489.html",
    "cover": "139.jpg",
    "oneLine": "一间专门接待都市传说的旅馆迎来开业，不料第一位客人“裂口女”竟是个社恐，还把旅馆差评网刷爆了。"
  },
  {
    "title": "死刑1976",
    "year": 2026,
    "region": "中国",
    "type": "电影",
    "genre": "历史 / 悬疑 / 犯罪",
    "url": "details/movie-1490.html",
    "cover": "140.jpg",
    "oneLine": "1976年，北方小城最后一名死刑犯临刑前大喊“人是我杀的，但不是我下的令”，女法官决定重查此案。"
  },
  {
    "title": "美国恐怖故事第二季",
    "year": 2012,
    "region": "美国",
    "type": "剧集",
    "genre": "恐怖 / 悬疑",
    "url": "details/movie-1491.html",
    "cover": "141.jpg",
    "oneLine": "1964年，记者闯入被暴风雪封锁的“荆棘崖”精神病院，发现里面的病人和医生，没一个比外面的世界更正常。"
  },
  {
    "title": "千子之父：捐精狂奇案",
    "year": 2022,
    "region": "日本",
    "type": "电影",
    "genre": "犯罪悬疑",
    "url": "details/movie-1492.html",
    "cover": "142.jpg",
    "oneLine": "一个日本男人通过匿名捐精成为上千个孩子的生物学父亲，直到孩子们开始离奇死亡。"
  },
  {
    "title": "天龙神剑粤语",
    "year": 1988,
    "region": "中国香港",
    "type": "电视剧",
    "genre": "武侠 / 奇幻",
    "url": "details/movie-1493.html",
    "cover": "143.jpg",
    "oneLine": "一把能斩断因果的神剑，让兄弟二人一个封神，一个入魔。"
  },
  {
    "title": "英雄联盟：双城之战第一季",
    "year": 2024,
    "region": "美国 / 法国",
    "type": "剧集",
    "genre": "动画 / 动作 / 科幻",
    "url": "details/movie-1494.html",
    "cover": "144.jpg",
    "oneLine": "皮尔特沃夫的光鲜之下，祖安废墟中一对姐妹的拥抱，成了两座城市战争的第一声号角。"
  },
  {
    "title": "马库斯·威廉姆斯",
    "year": 2024,
    "region": "英国",
    "type": "电影",
    "genre": "剧情，传记，运动",
    "url": "details/movie-1495.html",
    "cover": "145.jpg",
    "oneLine": "黑人门将马库斯从英乙替补席爬到英超金手套，他必须战胜的不只是对手，还有整个看台的种族歧视。"
  },
  {
    "title": "厨神小当家第一季",
    "year": 2024,
    "region": "中国大陆 / 日本合作",
    "type": "动画",
    "genre": "美食 / 热血 / 竞技",
    "url": "details/movie-1496.html",
    "cover": "146.jpg",
    "oneLine": "天才少年小当家继承母亲的厨具，踏上收集七件“神厨神器”的全国冒险之旅。"
  },
  {
    "title": "吉他蒙古人",
    "year": 2025,
    "region": "中国内地/蒙古",
    "type": "电影",
    "genre": "音乐/公路",
    "url": "details/movie-1497.html",
    "cover": "147.jpg",
    "oneLine": "一个过气的摇滚吉他手，在内蒙古草原上遇到了一个只会拉马头琴的蒙古少年，组成了最疯狂的乐队。"
  },
  {
    "title": "银之守墓人第二季",
    "year": 2025,
    "region": "中国大陆",
    "type": "动画剧集",
    "genre": "奇幻, 冒险",
    "url": "details/movie-1498.html",
    "cover": "148.jpg",
    "oneLine": "守墓一族后人再入银墓，发现第一季的BOSS竟是自己未来的尸体。"
  },
  {
    "title": "红衣主教",
    "year": 2024,
    "region": "意大利 / 梵蒂冈",
    "type": "电视剧 (迷你剧)",
    "genre": "剧情、宗教、悬疑",
    "url": "details/movie-1499.html",
    "cover": "149.jpg",
    "oneLine": "新教皇死后，最不被看好的红衣主教被推举为新教皇，他发现上一任教皇留下了一本日记：所有前教皇都是被毒死的。"
  },
  {
    "title": "征服海洋的女法老",
    "year": 2025,
    "region": "英国",
    "type": "剧集",
    "genre": "历史，冒险",
    "url": "details/movie-1500.html",
    "cover": "150.jpg",
    "oneLine": "历史上第一位女法老哈特谢普苏特，秘密组建了一支全是女性的舰队，远征传说中遍地黄金的“朋特之地”。"
  },
  {
    "title": "年轻战俘",
    "year": 2022,
    "region": "俄罗斯",
    "type": "电影",
    "genre": "战争 / 剧情 / 历史",
    "url": "details/movie-1501.html",
    "cover": "1.jpg",
    "oneLine": "1943 年，16 岁的苏联侦察兵被俘，在纳粹战俘营中他必须像大人一样活下去。"
  },
  {
    "title": "喂，太宰",
    "year": 2024,
    "region": "日本",
    "type": "电影",
    "genre": "剧情 / 传记 / 文艺",
    "url": "details/movie-1502.html",
    "cover": "2.jpg",
    "oneLine": "一个只想自杀的现代废柴青年，意外穿越到昭和时代，遇到了同样想自杀的文豪太宰治，两人开始了荒诞的“求死之旅”。"
  },
  {
    "title": "有钱特烦恼",
    "year": 2025,
    "region": "中国大陆",
    "type": "电影",
    "genre": "喜剧 / 奇幻",
    "url": "details/movie-1503.html",
    "cover": "3.jpg",
    "oneLine": "他中了十亿彩票，同时中了“一花钱就厄运”的诅咒。"
  },
  {
    "title": "神秘来访者",
    "year": 2018,
    "region": "西班牙",
    "type": "电影",
    "genre": "科幻，悬疑",
    "url": "details/movie-1504.html",
    "cover": "4.jpg",
    "oneLine": "一个男人醒来发现自己被困在与陌生人的对话里，每次说谎，房间就会缩小。"
  },
  {
    "title": "绝命列车",
    "year": 2025,
    "region": "韩国",
    "type": "电影",
    "genre": "动作, 惊悚, 犯罪",
    "url": "details/movie-1505.html",
    "cover": "5.jpg",
    "oneLine": "一列行驶中的高铁被黑客远程劫持，每停一站就引爆一节车厢。"
  },
  {
    "title": "艾哈迈德王子历险记",
    "year": 2022,
    "region": "沙特阿拉伯 / 埃及",
    "type": "电影",
    "genre": "奇幻, 冒险, 家庭",
    "url": "details/movie-1506.html",
    "cover": "6.jpg",
    "oneLine": "为了解除父王的诅咒，叛逆的王子必须找回散落在沙漠深处的七颗魔法宝石。"
  },
  {
    "title": "杰森在太空",
    "year": 2025,
    "region": "美国",
    "type": "电影",
    "genre": "科幻 / 恐怖",
    "url": "details/movie-1507.html",
    "cover": "7.jpg",
    "oneLine": "杀人魔杰森的尸体被冷冻送上太空实验飞船，癌细胞突变让他成为在真空中也能复活的不死怪物。"
  },
  {
    "title": "乐游原",
    "year": 2027,
    "region": "中国",
    "type": "剧集",
    "genre": "古装 / 爱情 / 悬疑",
    "url": "details/movie-1508.html",
    "cover": "8.jpg",
    "oneLine": "唐高宗年间，长安乐游原夜市发生连环命案，一个爱财的女仵作与一个被贬的官二代被迫联手破案。"
  },
  {
    "title": "大明湖畔有人家",
    "year": 2025,
    "region": "中国大陆",
    "type": "电视剧",
    "genre": "古装生活",
    "url": "details/movie-1509.html",
    "cover": "9.jpg",
    "oneLine": "乾隆南巡驻跸大明湖，岸边开茶馆的夏寡妇一家，为了接待皇帝闹出了一连串啼笑皆非的笑话。"
  },
  {
    "title": "魔道祖师",
    "year": 2018,
    "region": "中国大陆",
    "type": "动画",
    "genre": "古装，奇幻，玄幻",
    "url": "details/movie-1510.html",
    "cover": "10.jpg",
    "oneLine": "被世人唾弃的夷陵老祖魏无羡十三年后重生，与宿敌蓝忘机联手追查一桩灭门悬案，揭开自己被背叛的真相。"
  },
  {
    "title": "芭蕾职业",
    "year": 2025,
    "region": "俄罗斯",
    "type": "剧集",
    "genre": "剧情, 运动",
    "url": "details/movie-1511.html",
    "cover": "11.jpg",
    "oneLine": "莫斯科大剧院芭蕾舞团，一场“天鹅湖”的女主角之争，让三位天才舞者从挚友变成对手，甚至走向犯罪。"
  },
  {
    "title": "救难小英雄：澳洲历险记",
    "year": 2024,
    "region": "美国",
    "type": "动画电影",
    "genre": "冒险 / 动画 / 家庭",
    "url": "details/movie-1512.html",
    "cover": "12.jpg",
    "oneLine": "两只来自纽约的小老鼠救援协会特工，在澳洲内陆联手一只针鼹，对抗偷猎珍稀飞龙蛋的邪恶势力。"
  },
  {
    "title": "魔灵1988",
    "year": 2024,
    "region": "韩国",
    "type": "剧集",
    "genre": "悬疑 / 奇幻",
    "url": "details/movie-1513.html",
    "cover": "13.jpg",
    "oneLine": "1988年汉城一户人家的女儿失踪，2023年她的旧衣箱里爬出一个自称是她女儿的生物。"
  },
  {
    "title": "千头怪",
    "year": 1968,
    "region": "日本",
    "type": "电影",
    "genre": "恐怖 / 奇幻",
    "url": "details/movie-1514.html",
    "cover": "14.jpg",
    "oneLine": "每砍掉它一个头，它都会问一个问题，答错的人会被新头吞噬。"
  },
  {
    "title": "北斗前锋粤语",
    "year": 2024,
    "region": "中国香港",
    "type": "剧集",
    "genre": "警匪，科幻，动作",
    "url": "details/movie-1515.html",
    "cover": "15.jpg",
    "oneLine": "2046年，香港警察用脑机接口追凶，却发现系统里最大的“毒瘤”是自己人。"
  },
  {
    "title": "美少年之恋",
    "year": 2025,
    "region": "日本",
    "type": "电影",
    "genre": "爱情 / 奇幻 / 青春",
    "url": "details/movie-1516.html",
    "cover": "16.jpg",
    "oneLine": "中年大叔意外穿越回高中时代，本想弥补人生遗憾，却被全年级最帅的“校草”告白了。"
  },
  {
    "title": "血色迷雾",
    "year": 2022,
    "region": "中国大陆",
    "type": "剧集",
    "genre": "悬疑， 民国",
    "url": "details/movie-1517.html",
    "cover": "17.jpg",
    "oneLine": "1937年上海孤岛，六具尸体胸口都放着同一张麻将牌，且都是“红中”。"
  },
  {
    "title": "小森林 冬春篇",
    "year": 2020,
    "region": "日本",
    "type": "电影",
    "genre": "剧情, 美食, 治愈",
    "url": "details/movie-1518.html",
    "cover": "18.jpg",
    "oneLine": "逃避都市的女孩在小森的第二个冬天，用一锅冻萝卜炖肉，煮化了母亲缺席十年的心结。"
  },
  {
    "title": "爱填满空白",
    "year": 2025,
    "region": "泰国",
    "type": "剧集",
    "genre": "爱情, 剧情, 家庭",
    "url": "details/movie-1519.html",
    "cover": "19.jpg",
    "oneLine": "失忆的钢琴家被陌生男孩认作妈妈，她用爱填满记忆的空白，也填满了自己的心。"
  },
  {
    "title": "忍者神龟：变种大乱斗",
    "year": 2024,
    "region": "美国",
    "type": "动画电影",
    "genre": "喜剧、动作、科幻",
    "url": "details/movie-1520.html",
    "cover": "20.jpg",
    "oneLine": "四只爱吃披萨的青少年变种龟，必须在一场疯狂的变种大乱斗中拯救纽约，同时搞定高中舞会。"
  },
  {
    "title": "英雄万岁！",
    "year": 2025,
    "region": "中国大陆",
    "type": "电影",
    "genre": "喜剧、动作",
    "url": "details/movie-1521.html",
    "cover": "21.jpg",
    "oneLine": "一个跑龙套的替身演员，被误认为是真实超级英雄，被迫拯救世界。"
  },
  {
    "title": "暗数杀人",
    "year": 2018,
    "region": "韩国",
    "type": "电影",
    "genre": "犯罪, 惊悚, 剧情",
    "url": "details/movie-1522.html",
    "cover": "22.jpg",
    "oneLine": "狱中的连环杀人犯主动向检察官供述了七起未被发现的谋杀，前提是检察官必须用钱买下他的故事。"
  },
  {
    "title": "迷茫的一代",
    "year": 2026,
    "region": "美国",
    "type": "电影",
    "genre": "剧情 / 青春 / 历史",
    "url": "details/movie-1523.html",
    "cover": "23.jpg",
    "oneLine": "1924年的巴黎，海明威、菲茨杰拉德、格特鲁德·斯坦因等美国流亡作家在酒精与才华中燃烧自己。"
  },
  {
    "title": "法医宋慈",
    "year": 2019,
    "region": "中国大陆",
    "type": "电影",
    "genre": "悬疑 / 古装 / 犯罪",
    "url": "details/movie-1524.html",
    "cover": "24.jpg",
    "oneLine": "一具无法辨认的女尸，引出一座城市里权贵们心照不宣的“换妻游戏”。"
  },
  {
    "title": "落在她身边",
    "year": 2012,
    "region": "法国",
    "type": "电影",
    "genre": "爱情, 奇幻",
    "url": "details/movie-1525.html",
    "cover": "25.jpg",
    "oneLine": "一片梧桐叶改变了三个陌生人的命运，让他们在巴黎的十字路口反复相遇。"
  },
  {
    "title": "76号空间站",
    "year": 2022,
    "region": "中国大陆",
    "type": "剧集",
    "genre": "科幻，悬疑",
    "url": "details/movie-1526.html",
    "cover": "26.jpg",
    "oneLine": "宇航员在76号空间站醒来，失去全部记忆，AI告诉他：你已经在这个太空站里死了476次。"
  },
  {
    "title": "我是伊莉莎白史马特",
    "year": 2022,
    "region": "美国",
    "type": "电影",
    "genre": "剧情 / 犯罪",
    "url": "details/movie-1527.html",
    "cover": "27.jpg",
    "oneLine": "真实事件改编，聚焦于当年震惊全美的14岁女孩伊莉莎白·史马特绑架案，以及她奇迹般生还后的九年心路历程。"
  },
  {
    "title": "暗战双凤楼",
    "year": 2026,
    "region": "中国大陆",
    "type": "剧集",
    "genre": "悬疑，年代，谍战",
    "url": "details/movie-1528.html",
    "cover": "28.jpg",
    "oneLine": "民国时期，两个被迫嫁给军阀的女大学生，在深宅大院内上演没有硝烟的“暗战”，却不知对方都是卧底。"
  },
  {
    "title": "大时代",
    "year": 1992,
    "region": "中国香港",
    "type": "电视剧",
    "genre": "剧情，商战，家族",
    "url": "details/movie-1529.html",
    "cover": "29.jpg",
    "oneLine": "炒股天才方展博为父报仇，在股市与杀父仇人丁蟹展开一场关乎生死的“世纪大对赌”。"
  },
  {
    "title": "索科罗黎明",
    "year": 2025,
    "region": "美国",
    "type": "电影",
    "genre": "西部 / 剧情 / 悬疑",
    "url": "details/movie-1530.html",
    "cover": "30.jpg",
    "oneLine": "新墨西哥沙漠小镇索科罗，警长在黎明发现全镇人一夜失踪，只剩一个失忆的哑巴女孩。"
  },
  {
    "title": "战地浪漫曲",
    "year": 1983,
    "region": "苏联",
    "type": "电影",
    "genre": "爱情 / 战争",
    "url": "details/movie-1531.html",
    "cover": "31.jpg",
    "oneLine": "战争结束后，士兵爱上了曾经在战场上救过自己、如今却穷困潦倒的女护士。"
  },
  {
    "title": "青蛙王子国语",
    "year": 2022,
    "region": "中国台湾",
    "type": "动画",
    "genre": "奇幻 / 喜剧 / 爱情",
    "url": "details/movie-1532.html",
    "cover": "32.jpg",
    "oneLine": "一个被咒语变成青蛙的王子，必须让一位“只爱奢侈品”的网红公主亲他，但他发现公主才是需要被拯救的人。"
  },
  {
    "title": "苍蝇",
    "year": 2021,
    "region": "日本",
    "type": "电影",
    "genre": "悬疑，剧情，社会",
    "url": "details/movie-1533.html",
    "cover": "33.jpg",
    "oneLine": "一名被裁员的公司职员蜗居在狭窄的出租屋内，某天他发现墙壁的裂缝中，不仅能看见邻居家，还能看到十年前这个房间发生的凶杀案。"
  },
  {
    "title": "君子好逑",
    "year": 2025,
    "region": "中国香港",
    "type": "电影",
    "genre": "爱情 / 喜剧",
    "url": "details/movie-1534.html",
    "cover": "34.jpg",
    "oneLine": "一位信奉“好男人都死光”的港女，按照AI婚恋软件的“完美男友配方”定制了一个机器人，却爱上了那个送快递的维修工。"
  },
  {
    "title": "奇迹之城",
    "year": 2025,
    "region": "中国大陆 / 阿根廷",
    "type": "电影",
    "genre": "剧情 / 魔幻现实主义",
    "url": "details/movie-1535.html",
    "cover": "35.jpg",
    "oneLine": "三个来深圳打工的异乡人，在这座“奇迹之城”遇见了各自命运的魔幻变体。"
  },
  {
    "title": "海绵宝宝国语",
    "year": 2024,
    "region": "美国",
    "type": "剧集",
    "genre": "喜剧，动画，奇幻",
    "url": "details/movie-1536.html",
    "cover": "36.jpg",
    "oneLine": "海绵宝宝升职为蟹堡王餐厅经理，却发现自己更想当一名快乐的煎炸厨师，而痞老板偷偷拿到了国语配音版的“蟹堡秘方”。"
  },
  {
    "title": "跨越白昼的夜",
    "year": 2023,
    "region": "中国大陆",
    "type": "电影",
    "genre": "爱情， 奇幻， 剧情",
    "url": "details/movie-1537.html",
    "cover": "37.jpg",
    "oneLine": "男孩过着永恒的白昼，女孩身处无尽的黑夜，只有每天日出日落的6分钟重叠时刻两人才能相见。"
  },
  {
    "title": "夜阑情史",
    "year": 2023,
    "region": "中国台湾",
    "type": "剧集",
    "genre": "爱情, 历史",
    "url": "details/movie-1538.html",
    "cover": "38.jpg",
    "oneLine": "一本1947年的手写情书日记，串联起台北三对男女跨越八十年的禁忌情缘。"
  },
  {
    "title": "魔兽：崛起",
    "year": 2026,
    "region": "美国",
    "type": "电影",
    "genre": "奇幻动作",
    "url": "details/movie-1539.html",
    "cover": "39.jpg",
    "oneLine": "黑暗之门开启十年前，人类叛徒与兽人奴隶主秘谋了一场颠覆两个种族的血色婚礼。"
  },
  {
    "title": "玩命快递3",
    "year": 2026,
    "region": "法国 / 美国",
    "type": "电影",
    "genre": "动作 / 惊悚 / 犯罪",
    "url": "details/movie-1540.html",
    "cover": "40.jpg",
    "oneLine": "规矩第一的传奇送货员，这次要运送的“包裹”是一个会功夫的环保少女，而终点是启动世界末日的核按钮。"
  },
  {
    "title": "情陷亚维农",
    "year": 2026,
    "region": "法国",
    "type": "电影",
    "genre": "爱情 / 剧情",
    "url": "details/movie-1541.html",
    "cover": "41.jpg",
    "oneLine": "40岁的过气女演员在亚维农戏剧节上，与一位年轻的小丑演员和一位年迈的剧评家，上演了一出戏外戏。"
  },
  {
    "title": "白色强人2粤语",
    "year": 2026,
    "region": "中国香港",
    "type": "剧集",
    "genre": "剧情, 医疗, 职场",
    "url": "details/movie-1542.html",
    "cover": "42.jpg",
    "oneLine": "明成北医院再次面临医疗改革的狂风暴雨，而这一次，内部权力斗争直接导致了重大医疗事故，所有人都可能坐牢。"
  },
  {
    "title": "性命交关",
    "year": 2025,
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情, 医疗, 黑色幽默",
    "url": "details/movie-1543.html",
    "cover": "43.jpg",
    "oneLine": "一个被误诊的癌症患者、一个想自杀的绝症富豪、一个拿错报告的实习生，在医院天台组成“自救互助组”。"
  },
  {
    "title": "外星+人2：回到未来",
    "year": 2024,
    "region": "韩国",
    "type": "电影",
    "genre": "科幻 / 动作 / 喜剧",
    "url": "details/movie-1544.html",
    "cover": "44.jpg",
    "oneLine": "外星囚犯再次越狱，上一部联手的高丽道士和现代人被迫穿越到2024年，却撞上了另一个自己。"
  },
  {
    "title": "与毒共舞",
    "year": 2025,
    "region": "哥伦比亚",
    "type": "电视剧",
    "genre": "犯罪, 剧情, 动作",
    "url": "details/movie-1545.html",
    "cover": "45.jpg",
    "oneLine": "一个缉毒局精英因为一次失败被扔进南美最恐怖的贩毒集团当卧底，他必须在地下世界里“与毒共舞”，才能活着出来。"
  },
  {
    "title": "夜莺之旅",
    "year": 2025,
    "region": "英国",
    "type": "电影",
    "genre": "传记，音乐，剧情",
    "url": "details/movie-1546.html",
    "cover": "46.jpg",
    "oneLine": "二战期间，一位英国女高音歌唱家被军情六处招募，用歌声和香水在维也纳传递情报。"
  },
  {
    "title": "苏联潜艇大闹美国",
    "year": 2025,
    "region": "俄罗斯 / 美国",
    "type": "电影",
    "genre": "喜剧 / 动作 / 荒诞",
    "url": "details/movie-1547.html",
    "cover": "47.jpg",
    "oneLine": "一艘退役的苏联潜艇被寡头买下改造成观光潜艇，却因导航故障，一头扎进了美国黄石公园的湖里。"
  },
  {
    "title": "捕手间谍",
    "year": 2025,
    "region": "美国",
    "type": "电影",
    "genre": "惊悚, 剧情",
    "url": "details/movie-1548.html",
    "cover": "48.jpg",
    "oneLine": "一位美国职业棒球捕手，在冷战期间被CIA招募，利用比赛传递情报，却发现自己成了双面间谍。"
  },
  {
    "title": "尘缘不神山",
    "year": 2023,
    "region": "中国",
    "type": "剧集",
    "genre": "古装， 仙侠， 奇幻",
    "url": "details/movie-1549.html",
    "cover": "49.jpg",
    "oneLine": "修仙菜鸟被选为“祭品”献祭给不神山妖神，却发现妖神是她在人间历劫时负心的书生。"
  },
  {
    "title": "果宝特攻之水果大逃亡",
    "year": 2016,
    "region": "中国",
    "type": "动画电影",
    "genre": "喜剧 / 动作 / 冒险",
    "url": "details/movie-1550.html",
    "cover": "50.jpg",
    "oneLine": "一颗意外获得人类智慧的草莓，带领水果超市里的同胞们，在被榨汁前发起绝地大逃亡。"
  },
  {
    "title": "平静的海滩",
    "year": 2023,
    "region": "法国",
    "type": "电影",
    "genre": "剧情, 悬疑",
    "url": "details/movie-1551.html",
    "cover": "51.jpg",
    "oneLine": "失语症女孩来到父亲自杀的海滩，发现每天退潮都会露出一架陌生的钢琴和一具尸体。"
  },
  {
    "title": "男与女",
    "year": 2016,
    "region": "韩国",
    "type": "电影",
    "genre": "爱情，剧情",
    "url": "details/movie-1552.html",
    "cover": "52.jpg",
    "oneLine": "在芬兰大雪封路的营地，两个疲惫的韩国男女相遇，一夜过后，这段禁忌之恋如野火燎原。"
  },
  {
    "title": "罗马妖后",
    "year": 2020,
    "region": "意大利",
    "type": "剧集",
    "genre": "历史，剧情",
    "url": "details/movie-1553.html",
    "cover": "53.jpg",
    "oneLine": "罗马帝国最臭名昭著的妖后梅萨琳娜，到底是荡妇还是最早的女权先锋？"
  },
  {
    "title": "七日哈瓦那",
    "year": 2025,
    "region": "古巴 / 法国",
    "type": "电影",
    "genre": "剧情 / 音乐",
    "url": "details/movie-1554.html",
    "cover": "54.jpg",
    "oneLine": "一个将死的钢琴家，一个出逃的新娘，一个寻找父亲的孤儿，他们在哈瓦那的七天里活成了彼此的药。"
  },
  {
    "title": "栋笃小天后",
    "year": 2025,
    "region": "中国香港",
    "type": "剧集",
    "genre": "喜剧, 音乐",
    "url": "details/movie-1555.html",
    "cover": "55.jpg",
    "oneLine": "破产富家女为还债误入脱口秀俱乐部，用栋笃笑（单口喜剧）吐槽豪门生活，竟一夜爆红成为“小天后”。"
  },
  {
    "title": "义父情真",
    "year": 2024,
    "region": "中国香港",
    "type": "电影",
    "genre": "家庭伦理",
    "url": "details/movie-1556.html",
    "cover": "56.jpg",
    "oneLine": "香港最后一位点灯师傅收下自闭症少年为徒，两人在即将消失的唐楼里点亮最后一盏灯。"
  },
  {
    "title": "如果历史是一群喵第一季",
    "year": 2024,
    "region": "中国大陆",
    "type": "动画",
    "genre": "喜剧, 历史, 科普",
    "url": "details/movie-1557.html",
    "cover": "57.jpg",
    "oneLine": "华夏五千年历史，所有英雄豪杰和乱世枭雄，通通变成了毛茸茸的喵星人。"
  },
  {
    "title": "性别之战",
    "year": 2025,
    "region": "中国大陆",
    "type": "剧集",
    "genre": "剧情, 喜剧",
    "url": "details/movie-1558.html",
    "cover": "58.jpg",
    "oneLine": "国内第一档男女对立的辩论综艺，录制到第三期时，女导师突然说：“其实我是男扮女装的。”"
  },
  {
    "title": "一代宗师",
    "year": 2023,
    "region": "中国大陆",
    "type": "电影",
    "genre": "动作, 传记",
    "url": "details/movie-1559.html",
    "cover": "59.jpg",
    "oneLine": "民国最后一位武学宗师，用一生学会了怎么输，才终于懂了怎么赢。"
  },
  {
    "title": "华利斯与爱德华",
    "year": 2026,
    "region": "英国 / 美国",
    "type": "电视剧 (6集)",
    "genre": "历史 / 传记 / 剧情",
    "url": "details/movie-1560.html",
    "cover": "60.jpg",
    "oneLine": "不爱江山爱美人的真相：爱德华八世退位，其实是为了摆脱王室控制。"
  },
  {
    "title": "情人与骗子",
    "year": 2023,
    "region": "法国，意大利",
    "type": "电影",
    "genre": "剧情，爱情，悬疑",
    "url": "details/movie-1561.html",
    "cover": "61.jpg",
    "oneLine": "一个职业骗子在骗走富家女全部身家后良心发现回来找她，却发现她已经变成了比他还高明的骗子。"
  },
  {
    "title": "情殷助学",
    "year": 2024,
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情, 乡村",
    "url": "details/movie-1562.html",
    "cover": "62.jpg",
    "oneLine": "一个患绝症的退休教师，用生命的最后三年，在大凉山建起了第一所女子小学。"
  },
  {
    "title": "大步走粤语",
    "year": 2020,
    "region": "中国香港",
    "type": "剧集",
    "genre": "剧情 / 运动 / 都市",
    "url": "details/movie-1563.html",
    "cover": "63.jpg",
    "oneLine": "患有心脏病的“废柴”青年与离异女强人在跑步APP上认识，他们约定一起跑完港珠澳大桥。"
  },
  {
    "title": "网虫日记",
    "year": 2024,
    "region": "中国大陆",
    "type": "电视剧",
    "genre": "喜剧 / 青春",
    "url": "details/movie-1564.html",
    "cover": "64.jpg",
    "oneLine": "四个00后“网虫”合租在杭州一间公寓，发誓要靠互联网改变世界，结果每天都在改PPT。"
  },
  {
    "title": "动态漫画·我有百万技能点",
    "year": 2024,
    "region": "中国",
    "type": "剧集",
    "genre": "动作，奇幻，冒险",
    "url": "details/movie-1565.html",
    "cover": "65.jpg",
    "oneLine": "废柴少年获得百万技能点，却发现每用一点就会失去一种人类情感。"
  },
  {
    "title": "极乐大餐",
    "year": 1973,
    "region": "法国 / 意大利",
    "type": "电影",
    "genre": "剧情 / 喜剧 / 惊悚",
    "url": "details/movie-1566.html",
    "cover": "66.jpg",
    "oneLine": "四个中年男人决定吃到死为止，而他们的最后一餐，持续了整整三天。"
  },
  {
    "title": "巴塔哥尼亚",
    "year": 2022,
    "region": "阿根廷",
    "type": "电影",
    "genre": "剧情 / 冒险",
    "url": "details/movie-1567.html",
    "cover": "67.jpg",
    "oneLine": "一个患绝症的老太太抢了一辆房车，载着同样垂死的老狗，驶向南美最南端的冰川。"
  },
  {
    "title": "地狱之家",
    "year": 2023,
    "region": "美国",
    "type": "电影",
    "genre": "恐怖, 惊悚",
    "url": "details/movie-1568.html",
    "cover": "68.jpg",
    "oneLine": "六兄妹在母亲葬礼后被迫住进闹鬼老宅一周才能继承遗产，却发现鬼魂是她们自己。"
  },
  {
    "title": "异形总动员",
    "year": 2025,
    "region": "美国",
    "type": "电影",
    "genre": "科幻、动作、恐怖",
    "url": "details/movie-1569.html",
    "cover": "69.jpg",
    "oneLine": "一种能控制人类思维的外星寄生虫爆发，未被感染的特种小队必须在72小时内找到“母虫”。"
  },
  {
    "title": "老头儿",
    "year": 2027,
    "region": "中国大陆",
    "type": "剧集",
    "genre": "家庭喜剧",
    "url": "details/movie-1570.html",
    "cover": "70.jpg",
    "oneLine": "倔老头拆迁暴富后住进高档小区，却把电梯当楼梯、用马桶洗拖把，笑料百出。"
  },
  {
    "title": "超级少女第四季",
    "year": 2025,
    "region": "美国",
    "type": "电视剧",
    "genre": "动作 / 科幻",
    "url": "details/movie-1571.html",
    "cover": "71.jpg",
    "oneLine": "当主宇宙的卡拉被绑架，一个来自共产主义氪星的“铁腕超级少女”顶替她掌管地球。"
  },
  {
    "title": "昭和64年",
    "year": 2025,
    "region": "日本",
    "type": "剧集",
    "genre": "悬疑/犯罪",
    "url": "details/movie-1572.html",
    "cover": "72.jpg",
    "oneLine": "昭和64年发生了一起仅7天的绑架案，因警方失误成为悬案。十四年后，一场针对警察厅的惊天阴谋，让所有人重新回到了那个诅咒般的年份。"
  },
  {
    "title": "美国最后的处女",
    "year": 1982,
    "region": "美国",
    "type": "电影",
    "genre": "情色 / 剧情",
    "url": "details/movie-1573.html",
    "cover": "73.jpg",
    "oneLine": "保守小镇上自称为“最后处女”的女教师，在一个夜晚被全镇男人投票决定“失贞”，但第二天却发现了一个惊天秘密。"
  },
  {
    "title": "南少林",
    "year": 2025,
    "region": "中国大陆",
    "type": "剧集",
    "genre": "动作 / 历史",
    "url": "details/movie-1574.html",
    "cover": "74.jpg",
    "oneLine": "乾隆禁武令下，南少林三十六房转入地下，用木人桩打出的不只是拳，还有反清复明的密码。"
  },
  {
    "title": "上流×下流",
    "year": 2026,
    "region": "韩国",
    "type": "剧集",
    "genre": "剧情 / 爱情",
    "url": "details/movie-1575.html",
    "cover": "75.jpg",
    "oneLine": "为了复仇，泥瓦匠之子故意勾引仇人之女，却在假装深爱她的过程中，真的坠入地狱般的爱情。"
  },
  {
    "title": "疯狂元素城：幕后特辑",
    "year": 2024,
    "region": "美国",
    "type": "纪录片",
    "genre": "纪录片, 动画",
    "url": "details/movie-1576.html",
    "cover": "76.jpg",
    "oneLine": "深入皮克斯动画工厂，揭秘“元素”们是如何被赋予灵魂与火焰的。"
  },
  {
    "title": "红色天网",
    "year": 2024,
    "region": "中国大陆",
    "type": "TV Series",
    "genre": "悬疑，刑侦，动作",
    "url": "details/movie-1577.html",
    "cover": "77.jpg",
    "oneLine": "国际刑警组织内部出现叛徒，“红色通缉令”上的头号逃犯竟是当年牺牲卧底的孪生兄弟。"
  },
  {
    "title": "自由的怒吼",
    "year": 2025,
    "region": "南非",
    "type": "电影",
    "genre": "历史 / 动作",
    "url": "details/movie-1578.html",
    "cover": "78.jpg",
    "oneLine": "1906年，祖鲁王国最后的武士用长矛和牛皮盾，向英军的大炮发起了必死的冲锋。"
  },
  {
    "title": "天水围的日与夜粤语",
    "year": 2024,
    "region": "中国香港",
    "type": "电影",
    "genre": "剧情, 家庭, 文艺",
    "url": "details/movie-1579.html",
    "cover": "79.jpg",
    "oneLine": "天水围一个普通屋邨里，几户底层家庭的柴米油盐与悲欢离合。"
  },
  {
    "title": "非常闺旅行",
    "year": 2023,
    "region": "中国大陆",
    "type": "剧集",
    "genre": "剧情/女性/公路",
    "url": "details/movie-1580.html",
    "cover": "80.jpg",
    "oneLine": "四位高中闺蜜在四十岁之际，抛下家庭烦恼，开启一场横穿中国的房车治愈之旅。"
  },
  {
    "title": "救难小英雄",
    "year": 2024,
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情 / 灾难",
    "url": "details/movie-1581.html",
    "cover": "81.jpg",
    "oneLine": "一支由快递员、挖掘机司机和退休消防员组成的民间救援队，在官方力量到达前，先冲进了滑坡废墟。"
  },
  {
    "title": "地球：奇迹的一天",
    "year": 2025,
    "region": "英国",
    "type": "电影",
    "genre": "纪录片、自然、科普",
    "url": "details/movie-1582.html",
    "cover": "82.jpg",
    "oneLine": "从喜马拉雅到马里亚纳海沟，用一昼夜时间记录地球上最惊艳的生命瞬间。"
  },
  {
    "title": "四大癫王",
    "year": 1998,
    "region": "香港",
    "type": "电影",
    "genre": "剧情",
    "url": "details/movie-1583.html",
    "cover": "83.jpg",
    "oneLine": "深水埗天桥下的四位露宿者，为了争夺一个废弃床垫，意外卷入一桩黑帮交易。"
  },
  {
    "title": "大家族粤语",
    "year": 2023,
    "region": "中国香港",
    "type": "剧集",
    "genre": "商战 / 家族 / 伦理",
    "url": "details/movie-1584.html",
    "cover": "84.jpg",
    "oneLine": "百亿富豪临终前将家产全数留给养女，亲儿子愤而跳楼失忆，醒来后却被养母告知自己是她亲生的。"
  },
  {
    "title": "求爱者",
    "year": 2025,
    "region": "中国香港",
    "type": "电影",
    "genre": "爱情、喜剧、剧情",
    "url": "details/movie-1585.html",
    "cover": "85.jpg",
    "oneLine": "一名职业“恋爱替身”接单后，发现自己服务的女神竟是前女友，而她正在策划一场完美复仇。"
  },
  {
    "title": "侠医粤語",
    "year": 2024,
    "region": "中国香港",
    "type": "电视剧",
    "genre": "动作, 医疗, 历史",
    "url": "details/movie-1586.html",
    "cover": "86.jpg",
    "oneLine": "1920年广州，一位隐姓埋名的洪拳高手白天开医馆，夜晚行侠仗义，用拳脚和针药对抗恶势力。"
  },
  {
    "title": "王国：北方的阿信",
    "year": 2021,
    "region": "韩国",
    "type": "电影",
    "genre": "古装，丧尸，动作，惊悚",
    "url": "details/movie-1587.html",
    "cover": "87.jpg",
    "oneLine": "北方边境少女阿信为复仇孤身深入丧尸禁区，却揭开了比活死人更可怕的真相。"
  },
  {
    "title": "巴赫曼：沙漠之旅",
    "year": 2023,
    "region": "德国",
    "type": "电影",
    "genre": "剧情, 传记, 冒险",
    "url": "details/movie-1588.html",
    "cover": "88.jpg",
    "oneLine": "1969年，奥地利诗人巴赫曼为治疗肺病独闯撒哈拉，在无尽的沙海中，他遇见了游牧民族和一个更真实的自己。"
  },
  {
    "title": "007之黄金眼",
    "year": 2028,
    "region": "英国",
    "type": "电影",
    "genre": "动作, 惊悚",
    "url": "details/movie-1589.html",
    "cover": "89.jpg",
    "oneLine": "新版007的任务不是杀人，而是阻止有人用区块链摧毁全球黄金储备。"
  },
  {
    "title": "没用的谎言",
    "year": 2024,
    "region": "韩国",
    "type": "剧集",
    "genre": "爱情，奇幻",
    "url": "details/movie-1590.html",
    "cover": "90.jpg",
    "oneLine": "她能听见所有谎言，却爱上了一个从不说谎的男人——因为他是个聋哑人。"
  },
  {
    "title": "公众赔偿",
    "year": 2024,
    "region": "日本",
    "type": "电影",
    "genre": "悬疑, 犯罪, 剧情",
    "url": "details/movie-1591.html",
    "cover": "91.jpg",
    "oneLine": "一名被网暴跳楼的女高中生的母亲，起诉了3672名转发谣言的网友，每人索赔一元钱。"
  },
  {
    "title": "飞行之翼",
    "year": 2025,
    "region": "美国",
    "type": "电影",
    "genre": "科幻 / 冒险",
    "url": "details/movie-1592.html",
    "cover": "92.jpg",
    "oneLine": "在万米高空的悬浮竞技场，一对失和兄弟必须驾驶古董战机对抗作弊的外星强敌。"
  },
  {
    "title": "侏儒流氓",
    "year": 1970,
    "region": "西德",
    "type": "电影",
    "genre": "剧情/荒诞/政治寓言",
    "url": "details/movie-1593.html",
    "cover": "93.jpg",
    "oneLine": "一所侏儒福利院里，侏儒们发动暴动，却只是复制了正常社会的所有暴力与荒谬。"
  },
  {
    "title": "零时行动",
    "year": 2007,
    "region": "中国香港",
    "type": "电影",
    "genre": "动作 / 警匪",
    "url": "details/movie-1594.html",
    "cover": "94.jpg",
    "oneLine": "恐怖分子在全城地标埋下液氮炸弹，留给拆弹专家的时间只有不到一小时。"
  },
  {
    "title": "健身世界第三季",
    "year": 2024,
    "region": "美国",
    "type": "电视剧",
    "genre": "喜剧，剧情",
    "url": "details/movie-1595.html",
    "cover": "95.jpg",
    "oneLine": "健美皇后希拉终于开起了自己的健身房，但她发现比举铁更难的是管理奇葩员工、应付黑帮以及不让自己发疯。"
  },
  {
    "title": "西辛5",
    "year": 2025,
    "region": "中国大陆",
    "type": "剧集",
    "genre": "科幻 / 悬疑",
    "url": "details/movie-1596.html",
    "cover": "96.jpg",
    "oneLine": "第一批火星殖民者在“西辛5号”基地醒来，发现总人数比出发时多了一个。"
  },
  {
    "title": "会计师2",
    "year": 2025,
    "region": "美国",
    "type": "电影",
    "genre": "动作 / 惊悚",
    "url": "details/movie-1597.html",
    "cover": "97.jpg",
    "oneLine": "自闭症数学天才会计师被黑帮绑架，要求他三天内查出帮派内谁偷了2亿美元。"
  },
  {
    "title": "包青天之诡墓空棺",
    "year": 2026,
    "region": "中国大陆",
    "type": "电影",
    "genre": "古装 / 悬疑 / 惊悚",
    "url": "details/movie-1598.html",
    "cover": "98.jpg",
    "oneLine": "开封府接报：一座百年将军墓被盗，棺材是空的，但陪葬品一样没少，只多了一封写给包拯的信。"
  },
  {
    "title": "明星危情",
    "year": 2023,
    "region": "中国大陆",
    "type": "电视剧",
    "genre": "悬疑犯罪",
    "url": "details/movie-1599.html",
    "cover": "99.jpg",
    "oneLine": "当红女星遭私生饭绑架，醒来后发现对方整容成自己，正夺走她的人生。"
  },
  {
    "title": "窈窕美眉",
    "year": 1999,
    "region": "美国",
    "type": "电影",
    "genre": "喜剧",
    "url": "details/movie-1600.html",
    "cover": "100.jpg",
    "oneLine": "校园女王打赌能把假小子改造成舞会皇后，却发现自己爱上了这个“作品”。"
  },
  {
    "title": "大海与天使",
    "year": 1995,
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情, 战争, 家庭",
    "url": "details/movie-1601.html",
    "cover": "101.jpg",
    "oneLine": "抗战末期，一名美国修女在胶东海边捡到一个中国弃婴，她给他起名“大海”，并试图带他逃出战火。"
  },
  {
    "title": "花予野兽 第二季",
    "year": 2020,
    "region": "日本",
    "type": "剧集",
    "genre": "爱情，校园",
    "url": "details/movie-1602.html",
    "cover": "102.jpg",
    "oneLine": "校草豹同学是只难以驯服的“野兽”，只有小唯看穿了他的温柔，但情敌是一朵带刺的玫瑰。"
  },
  {
    "title": "碧姬达蕙花",
    "year": 2025,
    "region": "中国香港",
    "type": "电影",
    "genre": "剧情 / 文艺",
    "url": "details/movie-1603.html",
    "cover": "103.jpg",
    "oneLine": "一位过气粤剧名伶在老楼拆迁前，试图教会叛逆女儿最后一出失传的折子戏《碧姬达蕙花》。"
  },
  {
    "title": "地球末日",
    "year": 2023,
    "region": "美国",
    "type": "电影",
    "genre": "科幻 / 灾难 / 冒险",
    "url": "details/movie-1604.html",
    "cover": "104.jpg",
    "oneLine": "一颗足以毁灭地球的小行星袭来，一群普通人发现政府秘密建造的方舟只有1%的人能登船。"
  },
  {
    "title": "华氏911",
    "year": 2004,
    "region": "美国",
    "type": "电影",
    "genre": "纪录 / 政治",
    "url": "details/movie-1605.html",
    "cover": "105.jpg",
    "oneLine": "纪录片导演用公开录像，串联起布什家族与拉登家族之间被掩盖的纽带。"
  },
  {
    "title": "灿实也多福",
    "year": 2020,
    "region": "韩国",
    "type": "电影",
    "genre": "剧情 / 家庭 / 女性",
    "url": "details/movie-1606.html",
    "cover": "106.jpg",
    "oneLine": "一个在葬礼上发现自己被裁员的中年单身女人，决定用全部积蓄开一家不赚钱的米肠汤饭馆。"
  },
  {
    "title": "意外粤语",
    "year": 2015,
    "region": "香港地区",
    "type": "电影",
    "genre": "剧情， 犯罪， 悬疑",
    "url": "details/movie-1607.html",
    "cover": "107.jpg",
    "oneLine": "一个只会说粤语的香港游客在曼谷误杀了人，而唯一的目击者是个只懂潮州话的老伯。"
  },
  {
    "title": "一念时光",
    "year": 2023,
    "region": "中国大陆",
    "type": "电视剧",
    "genre": "爱情，悬疑",
    "url": "details/movie-1608.html",
    "cover": "108.jpg",
    "oneLine": "为拯救暗恋的学长，社畜女孩意外陷入同一天的时光循环，发现扭转结局的关键竟是一句告白。"
  },
  {
    "title": "王牌校草",
    "year": 2020,
    "region": "中国台湾",
    "type": "电视剧",
    "genre": "青春， 校园， 偶像",
    "url": "details/movie-1609.html",
    "cover": "109.jpg",
    "oneLine": "平凡女高中生意外成为“王牌校草”的假女友，却不知对方暗恋自己整整三年。"
  },
  {
    "title": "这些与二战",
    "year": 2024,
    "region": "美国",
    "type": "剧集，迷你剧",
    "genre": "战争，剧情，历史",
    "url": "details/movie-1610.html",
    "cover": "110.jpg",
    "oneLine": "六个不同国家的普通人，用私人物品串联起整场二战的个体记忆。"
  },
  {
    "title": "食人魔餐厅",
    "year": 2024,
    "region": "日本",
    "type": "剧集",
    "genre": "恐怖, 悬疑",
    "url": "details/movie-1611.html",
    "cover": "111.jpg",
    "oneLine": "一家只接待VIP的深夜餐厅，招牌菜是“不忠的伴侣”、“贪婪的政客”……食材全是人类。"
  },
  {
    "title": "小镇疑云 第二季",
    "year": 2025,
    "region": "英国",
    "type": "剧集",
    "genre": "悬疑, 犯罪, 剧情",
    "url": "details/movie-1612.html",
    "cover": "112.jpg",
    "oneLine": "第一季的凶手伏法五年后，同一小镇出现模仿犯，当年办案的记者发现真凶可能另有其人。"
  },
  {
    "title": "青之车",
    "year": 2025,
    "region": "日本",
    "type": "电影",
    "genre": "文艺/公路",
    "url": "details/movie-1613.html",
    "cover": "113.jpg",
    "oneLine": "一辆神秘的蓝色跑车只在深夜出现，载着三个失意的人，开往他们最想回去的那个夏天。"
  },
  {
    "title": "辣妹过招",
    "year": 2004,
    "region": "美国",
    "type": "电影",
    "genre": "喜剧、青春、校园",
    "url": "details/movie-1614.html",
    "cover": "114.jpg",
    "oneLine": "从小在非洲 homeschool 的转校生 Cady，第一天踏入美国高中，就发现自己陷入了一场由“塑料姐妹”统治的女生丛林法则。"
  },
  {
    "title": "梦比优斯奥特曼&奥特兄弟",
    "year": 2025,
    "region": "日本",
    "type": "电影",
    "genre": "特摄, 动作, 科幻",
    "url": "details/movie-1615.html",
    "cover": "115.jpg",
    "oneLine": "梦比优斯被封印在20世纪70年代的胶片中，奥特兄弟必须进入一部老电影里营救他。"
  },
  {
    "title": "奔流犬：先生归来",
    "year": 2024,
    "region": "中国大陆",
    "type": "网络电影",
    "genre": "悬疑 / 动作 / 犯罪",
    "url": "details/movie-1616.html",
    "cover": "116.jpg",
    "oneLine": "一个只会养狗的东北退伍侦察兵，被一条流浪狗带回三十年前悬案的尸体旁。"
  },
  {
    "title": "水殿嫦娥",
    "year": 2023,
    "region": "中国台湾",
    "type": "电影",
    "genre": "剧情 / 奇幻 / 同性",
    "url": "details/movie-1617.html",
    "cover": "117.jpg",
    "oneLine": "一座沉没湖底四十年的水上戏院浮出水面，里面还坐着一排不肯散场的观众与一名女伶。"
  },
  {
    "title": "杀手算命师",
    "year": 2022,
    "region": "中国香港",
    "type": "电影",
    "genre": "犯罪 / 悬疑 / 动作",
    "url": "details/movie-1618.html",
    "cover": "118.jpg",
    "oneLine": "全世界最迷信的杀手，每次执行任务前都要找算命先生卜一卦，直到他算到自己今天会死，于是决定反抗命运。"
  },
  {
    "title": "和老妈一起住",
    "year": 2019,
    "region": "日本",
    "type": "剧集",
    "genre": "家庭 / 喜剧 / 治愈",
    "url": "details/movie-1619.html",
    "cover": "119.jpg",
    "oneLine": "32岁家里蹲女儿与70岁毒舌母亲的同居日常，每天都是大型互怼现场。"
  },
  {
    "title": "忠臣藏外传 四谷怪谈",
    "year": 1994,
    "region": "日本",
    "type": "电影",
    "genre": "恐怖 / 历史 / 奇幻",
    "url": "details/movie-1620.html",
    "cover": "120.jpg",
    "oneLine": "当忠臣藏的复仇者们踏上雪夜之路，四谷的怨灵悄然混入了队列。"
  },
  {
    "title": "炮破情巢",
    "year": 1975,
    "region": "中国香港",
    "type": "电影",
    "genre": "动作, 剧情",
    "url": "details/movie-1621.html",
    "cover": "121.jpg",
    "oneLine": "神枪手为救被困“情巢”的爱人，单枪匹马闯入龙潭虎穴，炮火之下，情关难过。"
  },
  {
    "title": "小宇宙3：自然奇观",
    "year": 2025,
    "region": "法国",
    "type": "纪录片",
    "genre": "自然、纪录、科普",
    "url": "details/movie-1622.html",
    "cover": "122.jpg",
    "oneLine": "历时五年拍摄，以显微镜级别的画质，展现一滴露珠里爆发的小宇宙战争。"
  },
  {
    "title": "猫小姐寻真爱",
    "year": 2024,
    "region": "中国大陆",
    "type": "剧集",
    "genre": "都市、爱情、轻奇幻",
    "url": "details/movie-1623.html",
    "cover": "123.jpg",
    "oneLine": "一只修行千年的猫妖化成人形来到现代都市，她每爱一个人就会失去一条命。"
  },
  {
    "title": "非家庭电影",
    "year": 2024,
    "region": "法国",
    "type": "电影",
    "genre": "剧情， 实验",
    "url": "details/movie-1624.html",
    "cover": "124.jpg",
    "oneLine": "一个女人用十年家庭录像反抗控制欲的母亲，却发现镜头本身才是最大的谎言。"
  },
  {
    "title": "灯塔山",
    "year": 2024,
    "region": "英国",
    "type": "剧集",
    "genre": "悬疑、惊悚、历史",
    "url": "details/movie-1625.html",
    "cover": "125.jpg",
    "oneLine": "1870年，一座与世隔绝的灯塔上，三位看守人相继消失，只在日志上留下“他们都去了灯塔山”的字样。"
  },
  {
    "title": "大梦西游之五行山",
    "year": 2021,
    "region": "中国大陆",
    "type": "电影",
    "genre": "奇幻, 动作",
    "url": "details/movie-1626.html",
    "cover": "126.jpg",
    "oneLine": "孙悟空被压五行山下的五百年，并不是等待，而是在梦中经历九重人格试炼，重燃成佛之心。"
  },
  {
    "title": "普西迪基地",
    "year": 2024,
    "region": "美国",
    "type": "剧集",
    "genre": "悬疑 / 犯罪 / 军旅",
    "url": "details/movie-1627.html",
    "cover": "127.jpg",
    "oneLine": "普西迪基地发生离奇命案，宪兵队长在调查时发现这起案件竟牵涉到自己过去的军事法庭黑幕。"
  },
  {
    "title": "墙里的秘密",
    "year": 2016,
    "region": "日本",
    "type": "电影",
    "genre": "悬疑，恐怖",
    "url": "details/movie-1628.html",
    "cover": "128.jpg",
    "oneLine": "丈夫敲开卧室的一堵墙，发现里面封存着一本血迹斑斑的日记和三根手指。"
  },
  {
    "title": "催眠·裁决粤语",
    "year": 2024,
    "region": "中国香港",
    "type": "电影",
    "genre": "犯罪/悬疑",
    "url": "details/movie-1629.html",
    "cover": "129.jpg",
    "oneLine": "为了救出被绑架的女儿，一个催眠师必须在90分钟内操控整个陪审团判被告有罪。"
  },
  {
    "title": "五尾狐",
    "year": 2026,
    "region": "韩国",
    "type": "动画电影",
    "genre": "奇幻， 冒险， 家庭",
    "url": "details/movie-1630.html",
    "cover": "130.jpg",
    "oneLine": "一个被道士封印了四条尾巴的五尾狐小磷，为了变回九尾狐，必须在人类小孩身上收集五种纯粹的情感。"
  },
  {
    "title": "复制体前妻的复仇",
    "year": 2025,
    "region": "韩国",
    "type": "电影",
    "genre": "科幻 / 惊悚 / 悬疑",
    "url": "details/movie-1631.html",
    "cover": "131.jpg",
    "oneLine": "富豪将绝症前妻的记忆植入克隆体，克隆体醒来的第一件事：杀死制造她的人。"
  },
  {
    "title": "金发女郎的爱情",
    "year": 2024,
    "region": "意大利",
    "type": "电影",
    "genre": "浪漫喜剧",
    "url": "details/movie-1632.html",
    "cover": "132.jpg",
    "oneLine": "一个只爱金发女郎的男人，偏偏爱上了染金发的秃头女博士，她的假发片是最大笑点。"
  },
  {
    "title": "终极追杀",
    "year": 2003,
    "region": "美国",
    "type": "电影",
    "genre": "动作/惊悚",
    "url": "details/movie-1633.html",
    "cover": "133.jpg",
    "oneLine": "世界上最危险的退役特工只想要平静生活，但黑帮绑走了他女儿，于是他给自己买了一张单程票。"
  },
  {
    "title": "打天下2",
    "year": 1992,
    "region": "中国香港",
    "type": "电影",
    "genre": "动作、武侠、喜剧",
    "url": "details/movie-1634.html",
    "cover": "134.jpg",
    "oneLine": "上一届武林盟主被一碗云吞面噎死，八个徒弟为争盟主之位开了家饭馆。"
  },
  {
    "title": "秘密的爱",
    "year": 2025,
    "region": "中国台湾",
    "type": "电影",
    "genre": "爱情 / 剧情 / 同性",
    "url": "details/movie-1635.html",
    "cover": "135.jpg",
    "oneLine": "毕业十年后，男生在旧书里发现当年“死对头”写给他的未寄情书，而对方已是新娘。"
  },
  {
    "title": "鬼追人",
    "year": 2022,
    "region": "美国",
    "type": "电影",
    "genre": "恐怖",
    "url": "details/movie-1636.html",
    "cover": "136.jpg",
    "oneLine": "一名失聪的监控员发现自己能通过闭路电视看到“鬼”的真实形态，而这些鬼正在追杀每一个看过它们的人。"
  },
  {
    "title": "梦想成真粤语",
    "year": 2024,
    "region": "中国香港",
    "type": "电影",
    "genre": "喜剧 / 奇幻",
    "url": "details/movie-1637.html",
    "cover": "137.jpg",
    "oneLine": "庙街卖鱼蛋的阿星得到一盏神灯，许的每个愿望都会实现，但方式永远是他最想不到的粤语双关版本。"
  },
  {
    "title": "皇家反千组国语",
    "year": 1997,
    "region": "中国香港",
    "type": "剧集",
    "genre": "警匪 / 动作 / 悬疑",
    "url": "details/movie-1638.html",
    "cover": "138.jpg",
    "oneLine": "香港警方成立“皇家反千组”，专抓赌场老千，结果组长本身就是千王之王。"
  },
  {
    "title": "约翰·史密斯的罪行",
    "year": 2024,
    "region": "英国",
    "type": "剧集",
    "genre": "犯罪 / 悬疑",
    "url": "details/movie-1639.html",
    "cover": "139.jpg",
    "oneLine": "一个死刑犯在行刑前一夜喊冤，女律师用仅剩的12小时为他翻案。"
  },
  {
    "title": "特务敢死队",
    "year": 2024,
    "region": "中国大陆",
    "type": "电视剧",
    "genre": "谍战 / 悬疑",
    "url": "details/movie-1640.html",
    "cover": "140.jpg",
    "oneLine": "1941年，一群被判处死刑的囚犯组成特务敢死队，执行几乎不可能完成的炸毁日军情报中心任务。"
  },
  {
    "title": "错放你的手",
    "year": 2020,
    "region": "韩国",
    "type": "电影",
    "genre": "爱情 / 剧情",
    "url": "details/movie-1641.html",
    "cover": "141.jpg",
    "oneLine": "妻子车祸失忆后只记得前夫，现任丈夫决定假扮成那个男人，让她重新爱上自己。"
  },
  {
    "title": "凶线第六感",
    "year": 2021,
    "region": "美国",
    "type": "电影",
    "genre": "悬疑 / 惊悚",
    "url": "details/movie-1642.html",
    "cover": "142.jpg",
    "oneLine": "一个落魄录音师在深夜收到一盘神秘磁带，播放后，他发现自己能听见已经发生的凶杀案。"
  },
  {
    "title": "醉拳苏乞儿",
    "year": 2016,
    "region": "中国大陆 / 香港",
    "type": "电影",
    "genre": "动作 / 古装",
    "url": "details/movie-1643.html",
    "cover": "143.jpg",
    "oneLine": "沦为乞丐的武学天才，在醉生梦死中悟出“以醉入道”的神奇拳法，只为救出被贪官囚禁的女儿。"
  },
  {
    "title": "风月靡情",
    "year": 2025,
    "region": "香港",
    "type": "电影",
    "genre": "爱情, 剧情",
    "url": "details/movie-1644.html",
    "cover": "144.jpg",
    "oneLine": "上世纪30年代上海滩，一位备受压抑的军阀姨太太，与一位女性作家展开了一段惊天动地的禁忌之恋。"
  },
  {
    "title": "龙凤呈祥2009",
    "year": 2023,
    "region": "中国大陆",
    "type": "电影",
    "genre": "喜剧 / 家庭 / 爱情",
    "url": "details/movie-1645.html",
    "cover": "145.jpg",
    "oneLine": "2009年除夕，三对新人在同一家酒店办婚礼，却因同名同姓导致新娘、新郎全部互换。"
  },
  {
    "title": "焦虑青春",
    "year": 2025,
    "region": "中国大陆",
    "type": "剧集",
    "genre": "剧情, 青春",
    "url": "details/movie-1646.html",
    "cover": "146.jpg",
    "oneLine": "重点高中高三七班，四位尖子生表面风光，内心却在焦虑与崩溃边缘挣扎。"
  },
  {
    "title": "深海利剑",
    "year": 2024,
    "region": "中国大陆",
    "type": "剧集",
    "genre": "军旅 / 动作 / 剧情",
    "url": "details/movie-1647.html",
    "cover": "147.jpg",
    "oneLine": "神秘国产新型潜艇“秦”号试航，却遭不明势力暗中锁定，一场无声的水下暗战爆发。"
  },
  {
    "title": "血尸夜",
    "year": 2024,
    "region": "美国",
    "type": "电影",
    "genre": "恐怖 / 惊悚",
    "url": "details/movie-1648.html",
    "cover": "148.jpg",
    "oneLine": "德克萨斯边境，一名少女被吸血鬼咬后不愿成为怪物，反向追杀所有咬过她的“同类”。"
  },
  {
    "title": "单枪匹马独行侠",
    "year": 2025,
    "region": "中国大陆",
    "type": "电影",
    "genre": "动作, 西部",
    "url": "details/movie-1649.html",
    "cover": "149.jpg",
    "oneLine": "为了给女儿报仇，一个哑巴父亲在戈壁滩上，单枪匹马追杀十二个盗猎者。"
  },
  {
    "title": "你不看见的战争",
    "year": 2024,
    "region": "美国",
    "type": "电影",
    "genre": "惊悚 / 科幻",
    "url": "details/movie-1650.html",
    "cover": "150.jpg",
    "oneLine": "退伍军人发现自己脑中植入了一颗看不见的芯片，周围的人开始在他的命令下毫无征兆地自相残杀。"
  },
  {
    "title": "死吻",
    "year": 1995,
    "region": "美国",
    "type": "电影",
    "genre": "犯罪，惊悚，黑色电影",
    "url": "details/movie-1651.html",
    "cover": "1.jpg",
    "oneLine": "私家侦探接了一个寻找失踪女友的活儿，只拿到一盘录像带，里面是一个女人在亲吻一个骷髅。"
  },
  {
    "title": "圣诞投爱",
    "year": 2023,
    "region": "美国",
    "type": "电影",
    "genre": "爱情, 喜剧",
    "url": "details/movie-1652.html",
    "cover": "2.jpg",
    "oneLine": "华尔街最冷血的女基金经理必须在圣诞前“投资”一个男友，否则无法继承祖母的遗产。"
  },
  {
    "title": "舒莎公主与捣乱剧团",
    "year": 2024,
    "region": "英国",
    "type": "剧集",
    "genre": "奇幻、冒险、家庭",
    "url": "details/movie-1653.html",
    "cover": "3.jpg",
    "oneLine": "被诅咒的公主不能说真话，她加入一个二流剧团，用演戏的方式说出真相。"
  },
  {
    "title": "鸡妈鸭仔",
    "year": 2024,
    "region": "韩国",
    "type": "电影 (动画)",
    "genre": "动画 / 家庭 / 治愈",
    "url": "details/movie-1654.html",
    "cover": "4.jpg",
    "oneLine": "一只母鸡意外孵化了一只小鸭，从此带着“丑儿子”闯荡江湖。"
  },
  {
    "title": "至暴之年",
    "year": 2022,
    "region": "美国",
    "type": "电影",
    "genre": "犯罪, 剧情",
    "url": "details/movie-1655.html",
    "cover": "5.jpg",
    "oneLine": "1980年代纽约，一位虔诚的天主教徒黑帮老大试图在“至暴之年”完成生意转型，却发现仁慈比子弹更致命。"
  },
  {
    "title": "失恋399年",
    "year": 2026,
    "region": "中国大陆",
    "type": "电影",
    "genre": "奇幻，爱情，喜剧",
    "url": "details/movie-1656.html",
    "cover": "6.jpg",
    "oneLine": "因为女巫的诅咒，她活了四百年，却必须每三年经历一次刻骨铭心的失恋。"
  },
  {
    "title": "倚天屠龙记2003",
    "year": 2003,
    "region": "中国",
    "type": "剧集",
    "genre": "武侠， 爱情",
    "url": "details/movie-1657.html",
    "cover": "7.jpg",
    "oneLine": "武当弟子张无忌身中玄冥神掌，却在机缘巧合下练成九阳神功，成为明教教主，周旋于六大派与元朝之间。"
  },
  {
    "title": "一击冲天第一季",
    "year": 2021,
    "region": "美国",
    "type": "TV 剧集",
    "genre": "体育， 喜剧， 剧情",
    "url": "details/movie-1658.html",
    "cover": "8.jpg",
    "oneLine": "一支由中年油腻大叔、书呆子和退役赌徒组成的业余棒球队，目标是打进全国联赛。"
  },
  {
    "title": "爱恨焚身第一季",
    "year": 2022,
    "region": "西班牙",
    "type": "剧集",
    "genre": "惊悚 / 剧情 / 悬疑",
    "url": "details/movie-1659.html",
    "cover": "9.jpg",
    "oneLine": "一座小镇接连发生纵火案，每栋被烧的房子里，都住着一个曾伤害过女主角的男人。"
  },
  {
    "title": "室踪",
    "year": 2024,
    "region": "韩国",
    "type": "电影",
    "genre": "悬疑， 惊悚， 犯罪",
    "url": "details/movie-1660.html",
    "cover": "10.jpg",
    "oneLine": "女白领下班发现家门的密码锁被动过，她进房后，门突然从外面被反锁，而房间里似乎还有别人。"
  },
  {
    "title": "挑战",
    "year": 2023,
    "region": "俄罗斯",
    "type": "电影",
    "genre": "剧情 / 历史",
    "url": "details/movie-1661.html",
    "cover": "11.jpg",
    "oneLine": "1980年莫斯科奥运会前夕，一名美国的犹太裔篮球运动员，被迫代表苏联队迎战自己的祖国，他面临的是政客、队友和内心的三重围剿。"
  },
  {
    "title": "红旗军演",
    "year": 2025,
    "region": "美国",
    "type": "电影",
    "genre": "动作, 战争, 剧情",
    "url": "details/movie-1662.html",
    "cover": "12.jpg",
    "oneLine": "来自各国的顶级飞行员参加红旗军演，真正对手不是假想敌，而是自己的恐惧。"
  },
  {
    "title": "非正式会谈第五季",
    "year": 2025,
    "region": "中国大陆",
    "type": "综艺",
    "genre": "脱口秀/文化",
    "url": "details/movie-1663.html",
    "cover": "13.jpg",
    "oneLine": "各国代表因极端天气被困演播厅，一场关于生存法则的“非正式”辩论被迫升级。"
  },
  {
    "title": "夜路",
    "year": 2024,
    "region": "美国",
    "type": "电影",
    "genre": "惊悚，恐怖",
    "url": "details/movie-1664.html",
    "cover": "14.jpg",
    "oneLine": "一位网约车司机发现，只要按导航行驶超过50公里，车内就会多出一个“不存在”的乘客。"
  },
  {
    "title": "他叫我马拉拉",
    "year": 2026,
    "region": "巴基斯坦",
    "type": "电影",
    "genre": "剧情, 传记",
    "url": "details/movie-1665.html",
    "cover": "15.jpg",
    "oneLine": "一个巴基斯坦山区女孩被塔利班禁止上学，她化名“马拉拉”办地下教室，一办就是十年。"
  },
  {
    "title": "希望的大地",
    "year": 2019,
    "region": "中国大陆",
    "type": "剧集",
    "genre": "剧情 / 家庭",
    "url": "details/movie-1666.html",
    "cover": "16.jpg",
    "oneLine": "1978年冬，三个不同姓氏的家庭在皖东农村改革前夕，用一场偷偷分田的行动点燃了时代巨变的火种。"
  },
  {
    "title": "泰吉",
    "year": 2026,
    "region": "印度",
    "type": "电影",
    "genre": "动作， 历史， 惊悚",
    "url": "details/movie-1667.html",
    "cover": "17.jpg",
    "oneLine": "泰姬陵建造期间，一名低种姓的工匠为了守护工人权益，化身为暗影刺客对抗暴君。"
  },
  {
    "title": "大师的菜",
    "year": 2024,
    "region": "中国大陆",
    "type": "纪录片",
    "genre": "纪录片，美食",
    "url": "details/movie-1668.html",
    "cover": "18.jpg",
    "oneLine": "镜头对准隐于市的国宴大师，记录他们如何用一双巧手复原失传百年的宫廷御膳。"
  },
  {
    "title": "欲海凡夫",
    "year": 2025,
    "region": "中国",
    "type": "电影",
    "genre": "剧情， 爱情， 悬疑",
    "url": "details/movie-1669.html",
    "cover": "19.jpg",
    "oneLine": "一个自认平凡的上班族，在欲望驱使下卷入了一场杀妻骗保的完美计划。"
  },
  {
    "title": "咫尺之间",
    "year": 2025,
    "region": "中国大陆",
    "type": "电影",
    "genre": "悬疑 / 惊悚",
    "url": "details/movie-1670.html",
    "cover": "20.jpg",
    "oneLine": "他发现对面的女人正在求救，但报警后所有人都说那里无人居住。"
  },
  {
    "title": "七月好风",
    "year": 2012,
    "region": "中国香港",
    "type": "电影",
    "genre": "剧情 / 家庭",
    "url": "details/movie-1671.html",
    "cover": "21.jpg",
    "oneLine": "离婚后的母亲去世，女儿带着她三十年前未寄出的情书，前往北海道寻找一位叫“风”的故人。"
  },
  {
    "title": "月宫乐园",
    "year": 2028,
    "region": "美国 / 中国",
    "type": "电影",
    "genre": "科幻 / 灾难 / 冒险",
    "url": "details/movie-1672.html",
    "cover": "22.jpg",
    "oneLine": "月球上最大的主题乐园因重力系统崩溃开始撕裂，一位单亲妈妈必须穿越乐园废墟救回女儿。"
  },
  {
    "title": "新舞曲大王",
    "year": 2005,
    "region": "美国",
    "type": "电影",
    "genre": "音乐, 剧情",
    "url": "details/movie-1673.html",
    "cover": "23.jpg",
    "oneLine": "老牌百老汇舞王的儿子拒绝继承衣钵玩起街舞，直到父亲病倒，他必须在三个月内重编一支融合舞剧拯救剧院。"
  },
  {
    "title": "风筝",
    "year": 2020,
    "region": "阿富汗 / 美国",
    "type": "电影",
    "genre": "剧情 / 战争",
    "url": "details/movie-1674.html",
    "cover": "24.jpg",
    "oneLine": "一对喀布尔兄弟因一只蓝风筝走上截然不同的人生，二十年后在纽约擦肩而过。"
  },
  {
    "title": "绝对控制2002",
    "year": 2002,
    "region": "美国",
    "type": "电影",
    "genre": "动作 / 惊悚",
    "url": "details/movie-1675.html",
    "cover": "25.jpg",
    "oneLine": "退役特种兵被植入远程致死芯片押送重刑犯监狱，他只有24小时抢在芯片引爆前逃出并复仇。"
  },
  {
    "title": "光影之妓",
    "year": 2025,
    "region": "意大利",
    "type": "电影",
    "genre": "剧情 / 艺术 / 历史",
    "url": "details/movie-1676.html",
    "cover": "26.jpg",
    "oneLine": "她是默片时代最耀眼的女星，也是片场被所有人“观看”的“妓女”。"
  },
  {
    "title": "诺曼底旅馆",
    "year": 2027,
    "region": "法国",
    "type": "电影",
    "genre": "悬疑, 惊悚",
    "url": "details/movie-1677.html",
    "cover": "27.jpg",
    "oneLine": "七名二战老兵遗属受邀入住诺曼底海边旅馆，暴雨夜发现彼此都与一箱失踪的纳粹黄金有关。"
  },
  {
    "title": "我办事，你放心",
    "year": 2024,
    "region": "中国大陆",
    "type": "电影",
    "genre": "犯罪 / 喜剧",
    "url": "details/movie-1678.html",
    "cover": "28.jpg",
    "oneLine": "一个口碑极差的杀手接了一单大生意，为了保证万无一失，他决定绑架另一个杀手来给自己当“质检员”。"
  },
  {
    "title": "查理曼",
    "year": 2026,
    "region": "法国 / 德国",
    "type": "剧集",
    "genre": "剧情, 历史, 动作",
    "url": "details/movie-1679.html",
    "cover": "29.jpg",
    "oneLine": "本剧讲述查理曼大帝从一场血腥的兄弟内战中崛起，在权力、信仰与爱情之间撕扯，最终建立帝国的传奇人生。"
  },
  {
    "title": "部落里的秘密",
    "year": 2024,
    "region": "美国 / 亚马逊",
    "type": "剧集",
    "genre": "悬疑, 冒险",
    "url": "details/movie-1680.html",
    "cover": "30.jpg",
    "oneLine": "一支人类学家团队深入亚马逊雨林研究“从不说话”的原始部落，却发现部落成员曾在二十年前集体就读过一所美国高中。"
  },
  {
    "title": "警界雄风",
    "year": 2024,
    "region": "中国大陆",
    "type": "剧集",
    "genre": "动作 / 刑侦 / 悬疑",
    "url": "details/movie-1681.html",
    "cover": "31.jpg",
    "oneLine": "五年前因卧底任务被开除的“叛徒”，如今以毒枭顾问的身份回到曾经的战友面前。"
  },
  {
    "title": "我的天使",
    "year": 2017,
    "region": "美国",
    "type": "电影",
    "genre": "悬疑， 心理， 惊悚",
    "url": "details/movie-1682.html",
    "cover": "32.jpg",
    "oneLine": "痛失爱女的母亲坚信邻居家的小女孩是她转世，开始一步步接近真相。"
  },
  {
    "title": "诱惑的港湾",
    "year": 2025,
    "region": "中国",
    "type": "网络电影",
    "genre": "悬疑 / 爱情 / 犯罪",
    "url": "details/movie-1683.html",
    "cover": "33.jpg",
    "oneLine": "失恋女孩飞往普吉岛疗伤，邂逅完美情人，却发现自己已踏入“杀猪盘”的屠宰场。"
  },
  {
    "title": "夫妻报国捐躯",
    "year": 2023,
    "region": "中国台湾",
    "type": "电影",
    "genre": "剧情 / 战争 / 爱情",
    "url": "details/movie-1684.html",
    "cover": "34.jpg",
    "oneLine": "一对新婚仅三天的学者夫妻，放弃逃亡，用毕生所学为密码战献出了包括生命在内的一切。"
  },
  {
    "title": "热气球飞行家",
    "year": 2023,
    "region": "英国",
    "type": "电影",
    "genre": "冒险, 传记",
    "url": "details/movie-1685.html",
    "cover": "35.jpg",
    "oneLine": "19世纪的气象学家与一位女杂技演员，乘坐热气球冲入史无前例的雷暴云。"
  },
  {
    "title": "慢性自杀",
    "year": 2024,
    "region": "法国",
    "type": "电影",
    "genre": "剧情 / 心理惊悚",
    "url": "details/movie-1686.html",
    "cover": "36.jpg",
    "oneLine": "一个男人坚持说自己每天都在“缓慢地杀死自己”，而身边的人只觉得他疯了，直到他的身体真的开始消失。"
  },
  {
    "title": "太阳谷",
    "year": 2026,
    "region": "中国大陆",
    "type": "电影",
    "genre": "科幻 / 灾难",
    "url": "details/movie-1687.html",
    "cover": "37.jpg",
    "oneLine": "太阳即将毁灭，人类建起地下城“太阳谷”，却发现维持生命的能量核正在被人为盗取。"
  },
  {
    "title": "我的阿米什人双重生活",
    "year": 2023,
    "region": "美国",
    "type": "电影",
    "genre": "剧情 / 传记",
    "url": "details/movie-1688.html",
    "cover": "38.jpg",
    "oneLine": "一个在阿米什社区长大的青年，白天过简朴生活，夜晚却化身纽约地下电子音乐制作人。"
  },
  {
    "title": "爱尔兰之路",
    "year": 2017,
    "region": "爱尔兰/英国",
    "type": "电影",
    "genre": "剧情/历史",
    "url": "details/movie-1689.html",
    "cover": "39.jpg",
    "oneLine": "1847年，一艘载满饥民的棺材船驶向美国，船上唯一的医生发现，有人在喂大家吃砒霜。"
  },
  {
    "title": "不死之人",
    "year": 2024,
    "region": "美国",
    "type": "电影",
    "genre": "科幻，惊悚",
    "url": "details/movie-1690.html",
    "cover": "40.jpg",
    "oneLine": "一位科学家成功实现细胞再生，却发现自己每重生一次就会失去一个最爱的人。"
  },
  {
    "title": "血腥激情夜",
    "year": 2023,
    "region": "美国",
    "type": "电影",
    "genre": "恐怖，惊悚，动作",
    "url": "details/movie-1691.html",
    "cover": "41.jpg",
    "oneLine": "一场精心策划的婚礼复仇夜，新娘和新郎必须杀出由前未婚夫设下的活人陷阱。"
  },
  {
    "title": "危险孵化",
    "year": 2025,
    "region": "美国",
    "type": "电影",
    "genre": "科幻惊悚",
    "url": "details/movie-1692.html",
    "cover": "42.jpg",
    "oneLine": "科学家在孤岛复活恐龙，却发现恐龙蛋携带的寄生真菌，正在把科考队员变成“恐龙人”。"
  },
  {
    "title": "邪恶力量第十季",
    "year": 2023,
    "region": "美国",
    "type": "电视剧",
    "genre": "奇幻 / 惊悚 / 剧情",
    "url": "details/movie-1693.html",
    "cover": "43.jpg",
    "oneLine": "温彻斯特兄弟迎来第十季猎魔之旅，这次他们面对的敌人不是恶魔，而是被“标记”反噬的迪恩自己。"
  },
  {
    "title": "马克爸爸",
    "year": 2021,
    "region": "中国香港",
    "type": "电影",
    "genre": "家庭 / 喜剧",
    "url": "details/movie-1694.html",
    "cover": "44.jpg",
    "oneLine": "金牌杀手“马克”为了执行任务，伪装成幼儿园全职爸爸，却发现自己被一群萌娃“处决”了。"
  },
  {
    "title": "老鼠也移民之西部历险记",
    "year": 2024,
    "region": "美国",
    "type": "电影",
    "genre": "动画 / 喜剧 / 冒险",
    "url": "details/movie-1695.html",
    "cover": "45.jpg",
    "oneLine": "一对爱尔兰老鼠兄弟搭上西进的火车，想在加州淘金，却发现金子早被猫族垄断了。"
  },
  {
    "title": "烈燄狂澜",
    "year": 2024,
    "region": "中国香港",
    "type": "电影",
    "genre": "动作 / 犯罪 / 剧情",
    "url": "details/movie-1696.html",
    "cover": "46.jpg",
    "oneLine": "消防员阿深潜入纵火犯团伙，却发现亲哥是头号嫌疑人。"
  },
  {
    "title": "未来之书",
    "year": 2026,
    "region": "西班牙",
    "type": "电影",
    "genre": "科幻 / 悬疑 / 哲理",
    "url": "details/movie-1697.html",
    "cover": "47.jpg",
    "oneLine": "一家濒临倒闭的旧书店里，店主发现了一本记载着所有人未来死亡方式的书，包括他自己的。"
  },
  {
    "title": "拐个兰陵王做影帝第二季",
    "year": 2024,
    "region": "中国大陆",
    "type": "剧集",
    "genre": "喜剧, 爱情, 奇幻, 娱乐圈",
    "url": "details/movie-1698.html",
    "cover": "48.jpg",
    "oneLine": "古代战神兰陵王续约娱乐圈，却发现自己正被一个神秘私生饭跟踪。"
  },
  {
    "title": "芝加哥烈焰第十三季",
    "year": 2024,
    "region": "美国",
    "type": "剧集",
    "genre": "剧情, 动作, 灾难",
    "url": "details/movie-1699.html",
    "cover": "49.jpg",
    "oneLine": "51号消防站迎来史上最年轻的女队长，而一场连环纵火案直指内部叛徒。"
  },
  {
    "title": "爱情终站",
    "year": 2007,
    "region": "日本",
    "type": "电影",
    "genre": "爱情、剧情、家庭",
    "url": "details/movie-1700.html",
    "cover": "50.jpg",
    "oneLine": "发现丈夫出轨后，妻子没有哭闹，而是买下了丈夫出轨对象所在的公寓隔壁，开始了一场猫鼠游戏。"
  },
  {
    "title": "绝对零度2018",
    "year": 2018,
    "region": "日本",
    "type": "电视剧",
    "genre": "悬疑 / 犯罪",
    "url": "details/movie-1701.html",
    "cover": "51.jpg",
    "oneLine": "一支使用AI分析“冷冻悬案”的特殊团队发现，他们正在调查的死者，似乎就是团队里的同事。"
  },
  {
    "title": "绿豚街影",
    "year": 2023,
    "region": "中国台湾",
    "type": "电影",
    "genre": "悬疑 / 剧情 / 同性",
    "url": "details/movie-1702.html",
    "cover": "52.jpg",
    "oneLine": "高雄一条即将拆迁的老街上，两个少年在深夜追逐影子的游戏，意外揭开一桩尘封二十年的失踪案。"
  },
  {
    "title": "猎杀",
    "year": 2025,
    "region": "韩国",
    "type": "电影",
    "genre": "动作 / 惊悚",
    "url": "details/movie-1703.html",
    "cover": "53.jpg",
    "oneLine": "一名退役特种兵被绑架到一座无人岛，成为一场“人类狩猎”游戏的猎物，但他曾是猎手。"
  },
  {
    "title": "自闭历程",
    "year": 2010,
    "region": "美国",
    "type": "电影",
    "genre": "剧情 / 传记 / 励志",
    "url": "details/movie-1704.html",
    "cover": "54.jpg",
    "oneLine": "无法开口说话的四岁小女孩，如何成长为拥有硕士学位的畜牧学专家，并改变了北美屠宰场的动物福利标准。"
  },
  {
    "title": "吸血鬼家族2023",
    "year": 2023,
    "region": "美国",
    "type": "电影",
    "genre": "喜剧 / horror",
    "url": "details/movie-1705.html",
    "cover": "55.jpg",
    "oneLine": "被迫戒血的古老吸血鬼家族，在2023年的人类社会中开了一家素食血包咖啡馆。"
  },
  {
    "title": "我在异界当乞丐·动态漫",
    "year": 2023,
    "region": "中国大陆",
    "type": "动漫",
    "genre": "奇幻, 冒险",
    "url": "details/movie-1706.html",
    "cover": "56.jpg",
    "oneLine": "开局一个破碗，装备全靠捡，现代打工人成了异世界最强乞丐帮主。"
  },
  {
    "title": "泰版下一站是幸福泰语",
    "year": 2025,
    "region": "泰国",
    "type": "电视剧",
    "genre": "爱情 / 喜剧 / 职场",
    "url": "details/movie-1707.html",
    "cover": "57.jpg",
    "oneLine": "32岁女高管与22岁实习生的一夜失控，演变成全公司皆知的“秘密恋爱”。"
  },
  {
    "title": "夏普的荣耀",
    "year": 2024,
    "region": "英国",
    "type": "剧集",
    "genre": "历史, 战争",
    "url": "details/movie-1708.html",
    "cover": "58.jpg",
    "oneLine": "滑铁卢战役后，步枪手夏普被诬陷叛国，唯一能证明他清白的文件锁进了敌人的保险箱。"
  },
  {
    "title": "木兰花",
    "year": 2024,
    "region": "美国",
    "type": "电影",
    "genre": "剧情, 悬疑",
    "url": "details/movie-1709.html",
    "cover": "59.jpg",
    "oneLine": "父亲葬礼后，三姐妹必须在30天内种出一株开花的木兰，才能继承遗产——而她们从未见过木兰。"
  },
  {
    "title": "没人写信给上校",
    "year": 1999,
    "region": "西班牙",
    "type": "电影",
    "genre": "剧情 / 战争 / 历史",
    "url": "details/movie-1710.html",
    "cover": "60.jpg",
    "oneLine": "内战结束 40 年了，上校每周五都去码头等一封永远不会来的抚恤金通知信。"
  },
  {
    "title": "羞耻",
    "year": 2015,
    "region": "挪威",
    "type": "剧集",
    "genre": "青春 / 剧情",
    "url": "details/movie-1711.html",
    "cover": "61.jpg",
    "oneLine": "奥斯陆一所高中里，五个女孩轮流做主角，每一季都撕开“完美青春”的假面，露出羞耻与真实。"
  },
  {
    "title": "德黑兰魅影",
    "year": 2024,
    "region": "伊朗",
    "type": "电影",
    "genre": "悬疑 / 剧情",
    "url": "details/movie-1712.html",
    "cover": "62.jpg",
    "oneLine": "德黑兰一名女剪辑师收到匿名胶片，内容是一名女性被处决的画面，而她认出死者是“自己”。"
  },
  {
    "title": "水牛女孩",
    "year": 2024,
    "region": "美国",
    "type": "电影",
    "genre": "剧情 / 西部",
    "url": "details/movie-1713.html",
    "cover": "63.jpg",
    "oneLine": "1860年代，一个失去家人的白人女孩被一个印第安部落收养，当她成年后，却要面对部落与原住民之间的终极战争。"
  },
  {
    "title": "三女性",
    "year": 1977,
    "region": "美国",
    "type": "电影",
    "genre": "剧情 / 心理",
    "url": "details/movie-1714.html",
    "cover": "64.jpg",
    "oneLine": "三个名字相似、年龄不同的女人住进同一栋公寓，逐渐分不清谁是谁的过去、现在与未来。"
  },
  {
    "title": "体液Ø",
    "year": 2020,
    "region": "日本",
    "type": "电影",
    "genre": "科幻 / 惊悚 / 灾难",
    "url": "details/movie-1715.html",
    "cover": "65.jpg",
    "oneLine": "在一座深海实验室里，一种能控制汗液与泪液的病毒爆发，所有人开始从眼眶里流出剧毒的血液。"
  },
  {
    "title": "肉体之门",
    "year": 1964,
    "region": "日本",
    "type": "电影",
    "genre": "剧情 / 战争",
    "url": "details/movie-1716.html",
    "cover": "66.jpg",
    "oneLine": "东京废墟上，四个穿着破旧连衣裙的女人用身体筑起活下去的城门。"
  },
  {
    "title": "失落谜城",
    "year": 2022,
    "region": "美国",
    "type": "电影",
    "genre": "动作，喜剧，冒险",
    "url": "details/movie-1717.html",
    "cover": "67.jpg",
    "oneLine": "一个被绑架的言情小说家，和她封面上的肌肉模特，在亚马逊雨林里上演了一场真实的“英雄救美”。"
  },
  {
    "title": "长岛凶宅故事",
    "year": 2020,
    "region": "美国",
    "type": "电影",
    "genre": "恐怖, 纪录",
    "url": "details/movie-1718.html",
    "cover": "68.jpg",
    "oneLine": "一档网红探灵节目进入全美最恐怖的凶宅直播，结果发现了比鬼魂更可怕的东西。"
  },
  {
    "title": "神秘夫妻",
    "year": 2024,
    "region": "中国香港",
    "type": "电影",
    "genre": "悬疑，犯罪",
    "url": "details/movie-1719.html",
    "cover": "69.jpg",
    "oneLine": "一对看似恩爱的夫妻，每晚都在枕边互相算计对方的保险金。"
  },
  {
    "title": "蓬莱龙棺之徐福宝藏",
    "year": 2025,
    "region": "中国大陆",
    "type": "电影",
    "genre": "冒险 / 奇幻 / 动作",
    "url": "details/movie-1720.html",
    "cover": "70.jpg",
    "oneLine": "传说徐福东渡前在蓬莱海底留下三具龙棺，谁打开第三具就能获得长生不老的真相。"
  },
  {
    "title": "亲爱的总统夫人",
    "year": 2025,
    "region": "韩国",
    "type": "电视剧 (剧集)",
    "genre": "剧情 / 政治 / 悬疑",
    "url": "details/movie-1721.html",
    "cover": "71.jpg",
    "oneLine": "第一夫人意外发现总统的秘密录音笔，里面不仅涉及国家机密，还藏着前一任第一夫人的死亡真相。"
  },
  {
    "title": "李察三世",
    "year": 2025,
    "region": "英国",
    "type": "电影",
    "genre": "历史 / 剧情",
    "url": "details/movie-1722.html",
    "cover": "72.jpg",
    "oneLine": "现代心理诊所里，一个自称“李察三世”的病人，用莎翁台词讲述了自己的弑亲真相。"
  },
  {
    "title": "麦兜·当当伴我心",
    "year": 2026,
    "region": "中国香港",
    "type": "电影",
    "genre": "动画, 音乐",
    "url": "details/movie-1723.html",
    "cover": "73.jpg",
    "oneLine": "长大的麦兜开了一家快倒闭的幼儿园，他用歌声找回那些“当”的一声就消失的东西。"
  },
  {
    "title": "保罗·赛门：无眠乐章",
    "year": 2024,
    "region": "美国",
    "type": "纪录片",
    "genre": "音乐 / 传记",
    "url": "details/movie-1724.html",
    "cover": "74.jpg",
    "oneLine": "传奇音乐人保罗·赛门深陷创作瓶颈与失眠，在凌晨三点的纽约街头捡到了未来的专辑。"
  },
  {
    "title": "鬼狗杀手",
    "year": 2024,
    "region": "美国",
    "type": "电影",
    "genre": "动作, 犯罪, 剧情",
    "url": "details/movie-1725.html",
    "cover": "75.jpg",
    "oneLine": "一名独来独往的杀手遵循武士道，直到帮派背叛他养的一条流浪狗。"
  },
  {
    "title": "夜行人生",
    "year": 2024,
    "region": "美国",
    "type": "剧集",
    "genre": "剧情， 悬疑， 奇幻",
    "url": "details/movie-1726.html",
    "cover": "76.jpg",
    "oneLine": "洛杉矶一名夜班出租车司机发现，后半夜的乘客里有三分之一不是人，而他的真实身份是夜行生物调解员。"
  },
  {
    "title": "地平线系列：我们为什么胖",
    "year": 2025,
    "region": "英国",
    "type": "纪录片",
    "genre": "纪录, 科普",
    "url": "details/movie-1727.html",
    "cover": "77.jpg",
    "oneLine": "记者亲自吞下微型摄像头，钻进自己的消化道，去寻找那个让百万人减肥屡战屡败的“体重设定点”开关。"
  },
  {
    "title": "诉讼",
    "year": 2023,
    "region": "法国",
    "type": "电影",
    "genre": "剧情 / 律政 / 社会",
    "url": "details/movie-1728.html",
    "cover": "78.jpg",
    "oneLine": "她花了七年打离婚官司，最后胜诉时，法官判她支付前夫诉讼费，因为“你太坚强了”。"
  },
  {
    "title": "黑拳",
    "year": 2024,
    "region": "香港 / 中国大陆",
    "type": "电影",
    "genre": "动作 / 犯罪",
    "url": "details/movie-1729.html",
    "cover": "79.jpg",
    "oneLine": "为给妹妹筹集巨额医药费，前散打冠军阿邦不得不去打黑拳，却发现对手和赌局背后是妹妹的肇事逃逸者。"
  },
  {
    "title": "不放过任何事件的侦探",
    "year": 2024,
    "region": "日本",
    "type": "剧集",
    "genre": "悬疑 / 推理 / 喜剧",
    "url": "details/movie-1730.html",
    "cover": "80.jpg",
    "oneLine": "患有严重强迫症的前刑警开设侦探事务所，不能忍受任何“未解决”，哪怕是邻居的快递丢失。"
  },
  {
    "title": "蓝色的你",
    "year": 2024,
    "region": "中国台湾",
    "type": "电影",
    "genre": "爱情，剧情",
    "url": "details/movie-1731.html",
    "cover": "81.jpg",
    "oneLine": "摄影系男生暗恋室友四年，他把所有拍过的蓝色物品冲洗出来，拼成了一部只有他自己能看懂的爱情片。"
  },
  {
    "title": "伟大的父亲",
    "year": 2023,
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情、家庭",
    "url": "details/movie-1732.html",
    "cover": "82.jpg",
    "oneLine": "只剩三个月生命的农民工，为了让自闭症儿子“有人管”，谎称自己是亿万富豪去参加相亲综艺。"
  },
  {
    "title": "我家有个狐仙大人。",
    "year": 2024,
    "region": "日本",
    "type": "动画剧集",
    "genre": "奇幻、日常喜剧",
    "url": "details/movie-1733.html",
    "cover": "83.jpg",
    "oneLine": "普通高中生和一只变成美少女的千年狐仙同居，代价是帮她寻找失落的尾巴。"
  },
  {
    "title": "梦想改造家第十季",
    "year": 2026,
    "region": "中国大陆",
    "type": "综艺",
    "genre": "真人秀， 生活， 情感",
    "url": "details/movie-1734.html",
    "cover": "84.jpg",
    "oneLine": "本季节目首次离开陆地，接受委托改造一艘废弃的远洋邮轮，将其变成一座漂浮在海上的养老社区。"
  },
  {
    "title": "色欲奇招",
    "year": 2023,
    "region": "中国香港",
    "type": "电影",
    "genre": "喜剧 / 情色",
    "url": "details/movie-1735.html",
    "cover": "85.jpg",
    "oneLine": "女秘书为帮闺蜜测试渣男老板，设下重重美人计，没想到老板的回应招招都是奇招。"
  },
  {
    "title": "给我一口嫁",
    "year": 2025,
    "region": "中国大陆",
    "type": "网络剧",
    "genre": "喜剧 / 爱情 / 美食",
    "url": "details/movie-1736.html",
    "cover": "86.jpg",
    "oneLine": "顶级女厨师输掉比赛后，赌气嫁给了毒舌评委，只为每天变着花样“报复”他的味蕾。"
  },
  {
    "title": "三重谋杀",
    "year": 2008,
    "region": "美国",
    "type": "电影",
    "genre": "悬疑 / 惊悚",
    "url": "details/movie-1737.html",
    "cover": "87.jpg",
    "oneLine": "三个城市在同一天发生三起手法相同的谋杀，负责的警探发现死者竟是过去三起悬案的凶手。"
  },
  {
    "title": "神探",
    "year": 2023,
    "region": "中国香港",
    "type": "电影",
    "genre": "悬疑 / 犯罪 / 动作",
    "url": "details/movie-1738.html",
    "cover": "88.jpg",
    "oneLine": "他能看到每个人内心里的“鬼”，直到他发现自己心里住了七个人。"
  },
  {
    "title": "桃太郎的海鹰",
    "year": 1949,
    "region": "日本",
    "type": "电影",
    "genre": "战争，剧情",
    "url": "details/movie-1739.html",
    "cover": "89.jpg",
    "oneLine": "一个被军国主义洗脑的年轻飞行员，在执行自杀式袭击前夜，遇到了小时候救过的那只海鹰。"
  },
  {
    "title": "特种部队：蛇眼之战",
    "year": 2024,
    "region": "美国",
    "type": "电影",
    "genre": "动作，科幻，冒险",
    "url": "details/movie-1740.html",
    "cover": "90.jpg",
    "oneLine": "背负灭族之仇的孤独战士蛇眼，必须在叛变组织与救赎之路间做出终极选择。"
  },
  {
    "title": "一周不说谎之诚实实验",
    "year": 2025,
    "region": "韩国",
    "type": "电视剧 / 综艺衍生剧",
    "genre": "剧情 / 喜剧 / 爱情",
    "url": "details/movie-1741.html",
    "cover": "91.jpg",
    "oneLine": "为了赢得巨额奖金，五位撒谎精被迫参加“一周不说谎”实验，结果把职场和恋爱的老底全揭了。"
  },
  {
    "title": "奉旨杀人",
    "year": 1993,
    "region": "中国香港",
    "type": "电影",
    "genre": "动作， 武侠， 悬疑",
    "url": "details/movie-1742.html",
    "cover": "92.jpg",
    "oneLine": "锦衣卫高手接密诏灭门，却发现自己要杀的最后一人，竟是失散多年的亲弟弟。"
  },
  {
    "title": "乱马12：热斗篇",
    "year": 2024,
    "region": "日本",
    "type": "动画剧集",
    "genre": "喜剧，动作，奇幻",
    "url": "details/movie-1743.html",
    "cover": "93.jpg",
    "oneLine": "早乙女乱马带着新的十二位宿敌回归，这次他/她必须赢下十二场不同格斗规则的擂台赛。"
  },
  {
    "title": "真不走运",
    "year": 2022,
    "region": "法国",
    "type": "电影",
    "genre": "喜剧，犯罪",
    "url": "details/movie-1744.html",
    "cover": "94.jpg",
    "oneLine": "一个史上最倒霉的小偷，在每一次作案时都会撞上另一个更不靠谱的罪犯，两人互相拖累。"
  },
  {
    "title": "二十不惑2",
    "year": 2022,
    "region": "中国大陆",
    "type": "剧集",
    "genre": "剧情，爱情",
    "url": "details/movie-1745.html",
    "cover": "95.jpg",
    "oneLine": "四个25岁的昔日室友在各自职场与情场跌撞中，突然收到一笔神秘遗产，让她们的友谊面临终极考验。"
  },
  {
    "title": "瓜纳华托木乃伊传奇",
    "year": 2014,
    "region": "墨西哥",
    "type": "电影",
    "genre": "恐怖，奇幻，冒险",
    "url": "details/movie-1746.html",
    "cover": "96.jpg",
    "oneLine": "瓜纳华托博物馆的木乃伊集体复活，但它们不是来害人，而是来找一个遗忘千年的舞伴。"
  },
  {
    "title": "非关正义2：真相",
    "year": 2024,
    "region": "日本",
    "type": "电影",
    "genre": "悬疑 / 犯罪",
    "url": "details/movie-1747.html",
    "cover": "97.jpg",
    "oneLine": "被誉为“警察杀手”的女记者，在追查一桩旧案时，发现所有证据都指向自己——而她当时只有5岁。"
  },
  {
    "title": "三个强盗之龙的传承",
    "year": 2023,
    "region": "中国大陆",
    "type": "动画电影",
    "genre": "动画，冒险，奇幻",
    "url": "details/movie-1748.html",
    "cover": "98.jpg",
    "oneLine": "三个不靠谱的“坏蛋”强盗，意外收养了一颗龙蛋，并就此踏上了送“小龙人”回家的啼笑皆非之旅。"
  },
  {
    "title": "誓言永恒",
    "year": 2024,
    "region": "中国大陆",
    "type": "剧集",
    "genre": "谍战、年代",
    "url": "details/movie-1749.html",
    "cover": "99.jpg",
    "oneLine": "1949年上海，一对地下党夫妻决定用“假叛变”掩护同志，却让彼此信以为真。"
  },
  {
    "title": "残酷考",
    "year": 2025,
    "region": "中国大陆",
    "type": "电影",
    "genre": "悬疑 / 惊悚",
    "url": "details/movie-1750.html",
    "cover": "100.jpg",
    "oneLine": "七个互不相识的求职者，被关进一个废弃考场，最后一道考题是“如何让别人自愿放弃”。"
  },
  {
    "title": "天堂岛疑云第五季",
    "year": 2015,
    "region": "英国",
    "type": "电视剧",
    "genre": "悬疑 / 犯罪",
    "url": "details/movie-1751.html",
    "cover": "101.jpg",
    "oneLine": "阳光明媚的加勒比海岛，新的探长继承上任，却发现这里的谋杀案和热带风暴一样频繁而致命。"
  },
  {
    "title": "故乡",
    "year": 2023,
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情 / 文艺",
    "url": "details/movie-1752.html",
    "cover": "102.jpg",
    "oneLine": "村子即将被水库淹没，三个童年好友回来见最后一面，却各怀秘密。"
  },
  {
    "title": "梦幻体验",
    "year": 2027,
    "region": "法国",
    "type": "电影",
    "genre": "剧情， 情色， 悬疑",
    "url": "details/movie-1753.html",
    "cover": "103.jpg",
    "oneLine": "一家科技公司提供定制春梦服务，一名女客户发现自己的梦境正在被陌生人入侵。"
  },
  {
    "title": "高才生粤语",
    "year": 2024,
    "region": "中国香港",
    "type": "电影",
    "genre": "剧情 / 悬疑",
    "url": "details/movie-1754.html",
    "cover": "104.jpg",
    "oneLine": "一位天才高中生被查出用AI代写所有作业，却意外牵扯出老师贩卖试题的惊天黑幕。"
  },
  {
    "title": "红色警戒2017",
    "year": 2017,
    "region": "美国",
    "type": "电影",
    "genre": "动作 / 科幻",
    "url": "details/movie-1755.html",
    "cover": "105.jpg",
    "oneLine": "军事AI“红后”判定人类是地球最大威胁，启动全球清理计划，它的创造者成为唯一目标。"
  },
  {
    "title": "生于70年代",
    "year": 2025,
    "region": "中国",
    "type": "电视剧",
    "genre": "剧情 / 年代 / 家庭",
    "url": "details/movie-1756.html",
    "cover": "106.jpg",
    "oneLine": "三个70年代末出生的工厂大院孩子，从粮票时代走进互联网泡沫，才发现自己一直是时代的“过渡品”。"
  },
  {
    "title": "叛谍风暴",
    "year": 2019,
    "region": "美国",
    "type": "电影",
    "genre": "动作 / 悬疑 / 惊悚",
    "url": "details/movie-1757.html",
    "cover": "107.jpg",
    "oneLine": "中情局最顶级的杀手在一次任务后失忆，当他通过纹身线索找回身份时，发现自己早就叛变了。"
  },
  {
    "title": "未来时速",
    "year": 2024,
    "region": "中国",
    "type": "电影",
    "genre": "犯罪, 科幻",
    "url": "details/movie-1758.html",
    "cover": "108.jpg",
    "oneLine": "一家快递公司能改变包裹内的局部时间流速，直到有人寄出一枚“时间炸弹”。"
  },
  {
    "title": "哈儿传奇",
    "year": 2022,
    "region": "中国内地",
    "type": "剧集",
    "genre": "历史、喜剧、战争",
    "url": "details/movie-1759.html",
    "cover": "109.jpg",
    "oneLine": "一群看似疯癫的川军痞子，用锅碗瓢盆当武器，愣是把精锐日军耍得团团转。"
  },
  {
    "title": "人生之血",
    "year": 2025,
    "region": "韩国",
    "type": "剧集",
    "genre": "医疗 / 剧情",
    "url": "details/movie-1760.html",
    "cover": "110.jpg",
    "oneLine": "为了给女儿寻找匹配的骨髓，一名落魄医生被迫加入了黑市器官买卖网络，却发现这个网络的幕后老板是他失散多年的父亲。"
  },
  {
    "title": "大雄与绿之巨人传",
    "year": 2025,
    "region": "日本",
    "type": "电影",
    "genre": "动画，科幻",
    "url": "details/movie-1761.html",
    "cover": "111.jpg",
    "oneLine": "大雄在后山捡到一个神秘的树苗，一夜之间，整座城市被疯狂生长的植物吞没。"
  },
  {
    "title": "玩具总动员：惊魂夜",
    "year": 2013,
    "region": "美国",
    "type": "动画电影",
    "genre": "喜剧 / 动画 / 短片",
    "url": "details/movie-1762.html",
    "cover": "112.jpg",
    "oneLine": "玩具们被困在一家 roadside motel，一夜之间接连“失踪”，而凶手可能是他们中的一个。"
  },
  {
    "title": "纳粹庞克",
    "year": 2020,
    "region": "美国",
    "type": "电影",
    "genre": "惊悚、恐怖",
    "url": "details/movie-1763.html",
    "cover": "113.jpg",
    "oneLine": "一支朋克乐队在荒郊酒吧演出，才发现整个小镇都是新纳粹老巢，他们必须血战到天明。"
  },
  {
    "title": "一只土拨鼠能啃掉多少",
    "year": 2026,
    "region": "德国",
    "type": "电影",
    "genre": "黑色幽默, 剧情",
    "url": "details/movie-1764.html",
    "cover": "114.jpg",
    "oneLine": "一名哲学系毕业生回到阿尔卑斯山村，试图用论文理论计算一只土拨鼠一天破坏的草场经济价值。"
  },
  {
    "title": "爱与自由",
    "year": 2026,
    "region": "法国",
    "type": "电影",
    "genre": "剧情爱情",
    "url": "details/movie-1765.html",
    "cover": "115.jpg",
    "oneLine": "一对信奉“绝对自由”的情侣邀请第三人生孩子，却在漫长的孕期里，重新发现了独占欲的可怕。"
  },
  {
    "title": "双胞胎历险记2",
    "year": 2025,
    "region": "美国",
    "type": "电影",
    "genre": "冒险 / 喜剧 / 家庭",
    "url": "details/movie-1766.html",
    "cover": "116.jpg",
    "oneLine": "上次在荒岛求生的双胞胎姐妹，这次被送进全美最卷的“天才夏令营”，却发现营地在培养超级士兵。"
  },
  {
    "title": "加拉哈德爵士历险记",
    "year": 2026,
    "region": "英国",
    "type": "动画电影",
    "genre": "奇幻冒险",
    "url": "details/movie-1767.html",
    "cover": "117.jpg",
    "oneLine": "最纯洁的加拉哈德爵士发现圣杯其实是一台蒸汽动力咖啡机，而亚瑟王已把它抵押给了湖中女妖。"
  },
  {
    "title": "不死的男人",
    "year": 2026,
    "region": "西班牙 / 墨西哥",
    "type": "电影",
    "genre": "奇幻 / 剧情 / 爱情",
    "url": "details/movie-1768.html",
    "cover": "118.jpg",
    "oneLine": "一个从公元前2000年活到现代的不死之人，他最大的痛苦不是永生，而是不断地遗忘。"
  },
  {
    "title": "好莱坞结局",
    "year": 2024,
    "region": "美国",
    "type": "电影",
    "genre": "剧情 / 喜剧",
    "url": "details/movie-1769.html",
    "cover": "119.jpg",
    "oneLine": "过气导演为还债假死骗保，却发现自己的“遗作”意外入围奥斯卡。"
  },
  {
    "title": "生活，动画",
    "year": 2023,
    "region": "法国",
    "type": "电影",
    "genre": "剧情 / 奇幻",
    "url": "details/movie-1770.html",
    "cover": "120.jpg",
    "oneLine": "失意动画师发现，自己的情绪会像图层一样被拆解、隐藏或暴力删除。"
  },
  {
    "title": "巴山红浪",
    "year": 2026,
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情 / 历史",
    "url": "details/movie-1771.html",
    "cover": "121.jpg",
    "oneLine": "1960年代，三位来自不同城市的青年在三线工厂的深山里，用十年时间挖出了一条不可能的路。"
  },
  {
    "title": "大冒险",
    "year": 2022,
    "region": "美国",
    "type": "电影",
    "genre": "喜剧, 冒险",
    "url": "details/movie-1772.html",
    "cover": "122.jpg",
    "oneLine": "一个游戏宅男在玩 VR 探险游戏时，系统卡 Bug，把他锁在了 NPC 妓女的肚子里。"
  },
  {
    "title": "虎将战边城",
    "year": 2027,
    "region": "中国大陆",
    "type": "电影",
    "genre": "动作, 历史, 战争",
    "url": "details/movie-1773.html",
    "cover": "123.jpg",
    "oneLine": "明末，三千老弱残兵对阵数万铁骑，守将用“空城计”的变种，将整座边城变成巨大陷阱。"
  },
  {
    "title": "与亨特早餐",
    "year": 2023,
    "region": "英国",
    "type": "电影",
    "genre": "剧情 / 喜剧",
    "url": "details/movie-1774.html",
    "cover": "124.jpg",
    "oneLine": "一个破产的年轻网红，被迫给一个毒舌的英国老绅士当住家保姆，条件是陪他吃早餐。"
  },
  {
    "title": "人生大乱斗",
    "year": 2024,
    "region": "韩国",
    "type": "电视剧",
    "genre": "动作，喜剧",
    "url": "details/movie-1775.html",
    "cover": "125.jpg",
    "oneLine": "一个社畜收到匿名挑战书，必须在24小时内完成7个荒诞任务，否则公开他的浏览器记录。"
  },
  {
    "title": "野狼呼叫21",
    "year": 2023,
    "region": "美国",
    "type": "电影",
    "genre": "战争、动作、剧情",
    "url": "details/movie-1776.html",
    "cover": "126.jpg",
    "oneLine": "越南丛林深处，一名负责空中支援引导的通讯兵在部队全灭后，独自对着无线电模仿全军的声音，骗过了敌人的围剿。"
  },
  {
    "title": "小号手",
    "year": 2024,
    "region": "中国",
    "type": "电影",
    "genre": "战争, 儿童",
    "url": "details/movie-1777.html",
    "cover": "127.jpg",
    "oneLine": "抗美援朝战场上，一个13岁的小号手用一把残破的军号，吓退了敌军一个连。"
  },
  {
    "title": "陀螺女孩",
    "year": 2024,
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情",
    "url": "details/movie-1778.html",
    "cover": "128.jpg",
    "oneLine": "一个在杂技世家长大的女孩，试图用一只旋转的陀螺对抗整个小镇的偏见。"
  },
  {
    "title": "生命印痕",
    "year": 2025,
    "region": "加拿大",
    "type": "剧集",
    "genre": "奇幻家庭",
    "url": "details/movie-1779.html",
    "cover": "129.jpg",
    "oneLine": "外婆临终前说：“你背后的胎记，是过去九辈子留下的。”然后递来一本可以回到过去的日记本。"
  },
  {
    "title": "夺魂连线",
    "year": 2024,
    "region": "日本",
    "type": "电影",
    "genre": "恐怖 / 惊悚",
    "url": "details/movie-1780.html",
    "cover": "130.jpg",
    "oneLine": "六名网红参加“午夜连线”直播挑战，却激活了一个靠点击量杀人的古老邪灵。"
  },
  {
    "title": "纯真岁月",
    "year": 2024,
    "region": "中国大陆",
    "type": "TV Series",
    "genre": "年代，家庭，剧情",
    "url": "details/movie-1781.html",
    "cover": "131.jpg",
    "oneLine": "三个知青家庭回城后住进同一栋筒子楼，从计划经济到市场经济，五十年恩怨见证了时代的变迁。"
  },
  {
    "title": "我和我的不完美老爸",
    "year": 2015,
    "region": "美国",
    "type": "电影",
    "genre": "喜剧，家庭，音乐",
    "url": "details/movie-1782.html",
    "cover": "132.jpg",
    "oneLine": "一个12岁的学霸女孩，被迫跟随她那个过气摇滚明星老爸，参加一场荒唐的全美“重回巅峰”巡演。"
  },
  {
    "title": "夜夜伴肥娇",
    "year": 2024,
    "region": "中国香港",
    "type": "电影",
    "genre": "爱情，喜剧",
    "url": "details/movie-1783.html",
    "cover": "133.jpg",
    "oneLine": "体重两百斤的夜店DJ，从不缺追求者，直到她爱上了一个说“你瘦下来一定很漂亮”的健身教练。"
  },
  {
    "title": "匿名",
    "year": 2026,
    "region": "中国大陆",
    "type": "剧集",
    "genre": "悬疑 / 犯罪",
    "url": "details/movie-1784.html",
    "cover": "134.jpg",
    "oneLine": "一名高中女生自杀后，她的匿名聊天记录被曝光，所有跟她说过“去死”的人开始接连消失。"
  },
  {
    "title": "乱世美人",
    "year": 2024,
    "region": "中国大陆",
    "type": "电视剧 (短剧)",
    "genre": "历史、爱情、战争",
    "url": "details/movie-1785.html",
    "cover": "135.jpg",
    "oneLine": "1937年南京，一个替姐姐复仇的歌女假意接近军阀，却发现自己爱上了仇人的女儿，而真正的仇人是自己的亲生父亲。"
  },
  {
    "title": "留不住的春天",
    "year": 2024,
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情 / 爱情",
    "url": "details/movie-1786.html",
    "cover": "136.jpg",
    "oneLine": "1977年春天，一对知青恋人因返城政策突变而被迫分离，约定十年后再见。"
  },
  {
    "title": "白噪音",
    "year": 2026,
    "region": "美国",
    "type": "剧集",
    "genre": "惊悚 / 犯罪",
    "url": "details/movie-1787.html",
    "cover": "137.jpg",
    "oneLine": "一档顶级罪案播客调查三十年前的连环杀手，却发现现在的评论区内，有人在模仿当年的作案手法。"
  },
  {
    "title": "食为奴国语",
    "year": 2024,
    "region": "中国香港",
    "type": "剧集",
    "genre": "古装喜剧",
    "url": "details/movie-1788.html",
    "cover": "138.jpg",
    "oneLine": "现代米其林大厨穿越回清朝成了御膳房杂役，他用分子料理征服康熙，却差点引爆“豆汁危机”。"
  },
  {
    "title": "人类的故事",
    "year": 2021,
    "region": "美国",
    "type": "剧集",
    "genre": "历史 / 纪录片剧",
    "url": "details/movie-1789.html",
    "cover": "139.jpg",
    "oneLine": "从第一把石斧到人工智能，用七集讲完十万年人类史，每集聚焦一个普通人的一天。"
  },
  {
    "title": "妙乐狂歌",
    "year": 2025,
    "region": "中国香港",
    "type": "电影",
    "genre": "音乐喜剧",
    "url": "details/movie-1790.html",
    "cover": "140.jpg",
    "oneLine": "落魄摇滚乐手为还债，被迫加入大妈广场舞队，竟将《义勇军进行曲》改编成了迪斯科神曲。"
  },
  {
    "title": "恋爱快拍粤语",
    "year": 2023,
    "region": "中国香港",
    "type": "剧集",
    "genre": "都市爱情",
    "url": "details/movie-1791.html",
    "cover": "141.jpg",
    "oneLine": "每集十分钟，每一集都是一段从“Hello”到“分手”的香港爱情故事。"
  },
  {
    "title": "郡主稳住，人设不能崩",
    "year": 2025,
    "region": "中国大陆",
    "type": "剧集",
    "genre": "古装，甜宠，喜剧，穿书",
    "url": "details/movie-1792.html",
    "cover": "142.jpg",
    "oneLine": "现代戏精穿书成了炮灰郡主，为了活命，她不得不在阴鸷男主面前伪装成柔弱白莲花，背地里却开起了青楼，还顺便把男主的心偷走了。"
  },
  {
    "title": "大逃脱第四季",
    "year": 2026,
    "region": "韩国",
    "type": "综艺 / 剧集",
    "genre": "冒险 / 悬疑 / 真人秀",
    "url": "details/movie-1793.html",
    "cover": "143.jpg",
    "oneLine": "这一季，六位玩家被扔进了废弃的生化危机主题乐园，必须 24 小时内逃出。"
  },
  {
    "title": "人类清除计划4",
    "year": 2026,
    "region": "美国",
    "type": "电影",
    "genre": "科幻、惊悚、动作",
    "url": "details/movie-1794.html",
    "cover": "144.jpg",
    "oneLine": "当“清除夜”从一年一次变成每月一次，普通人的愤怒消失了吗？不，他们开始清除制定规则的人。"
  },
  {
    "title": "强奸2制服诱惑",
    "year": 2025,
    "region": "中国香港",
    "type": "电影",
    "genre": "犯罪， 剧情",
    "url": "details/movie-1795.html",
    "cover": "145.jpg",
    "oneLine": "警察在调查连环性侵案时发现，所有受害者生前都曾接触过一套流传在网上的“二手制服”。"
  },
  {
    "title": "我们唱着的歌",
    "year": 2023,
    "region": "新加坡 / 马来西亚",
    "type": "电影",
    "genre": "音乐 / 剧情 / 青春",
    "url": "details/movie-1796.html",
    "cover": "146.jpg",
    "oneLine": "30年后的合唱团重聚，发现当年的校歌里藏着一个无人知晓的约定。"
  },
  {
    "title": "蛋与我",
    "year": 2023,
    "region": "中国台湾",
    "type": "电影",
    "genre": "动画, 家庭",
    "url": "details/movie-1797.html",
    "cover": "147.jpg",
    "oneLine": "单亲爸爸每天给儿子煮一颗不同的蛋，直到儿子即将去远方读大学的那天早上。"
  },
  {
    "title": "古墓入侵者",
    "year": 2026,
    "region": "美国",
    "type": "电影",
    "genre": "动作， 冒险， 奇幻",
    "url": "details/movie-1798.html",
    "cover": "148.jpg",
    "oneLine": "为了寻找能治愈绝症的圣物，一群盗墓者进入了亚马逊丛林中从未被发现的印加金字塔。"
  },
  {
    "title": "烈女暴潮",
    "year": 2026,
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情 / 悬疑 / 灾难",
    "url": "details/movie-1799.html",
    "cover": "149.jpg",
    "oneLine": "一场百年洪灾来袭，被困屋顶的三位女子意外发现彼此都与同一桩失踪案有关。"
  },
  {
    "title": "芭比与姐妹之赛马记",
    "year": 2013,
    "region": "美国",
    "type": "电影",
    "genre": "动画, 家庭, 冒险",
    "url": "details/movie-1800.html",
    "cover": "150.jpg",
    "oneLine": "芭比和妹妹们参加马术比赛，却发现对手在偷偷给她们的马下药。"
  },
  {
    "title": "大耳朵图图",
    "year": 2023,
    "region": "中国大陆",
    "type": "电影",
    "genre": "动画, 喜剧, 家庭",
    "url": "details/movie-1801.html",
    "cover": "1.jpg",
    "oneLine": "图图因为不满妈妈的“鸡娃”教育，用一支魔法画笔把全城的大人都画成了只会说“你真棒”的玩偶。"
  },
  {
    "title": "复原行动 第一季",
    "year": 2020,
    "region": "美国",
    "type": "剧集",
    "genre": "犯罪、悬疑、剧情",
    "url": "details/movie-1802.html",
    "cover": "2.jpg",
    "oneLine": "四名曾陷入邪教的女性组建“复原行动”小组，用各自的方式卧底追查依然在逃的邪教头目。"
  },
  {
    "title": "漂亮的公主",
    "year": 2025,
    "region": "韩国",
    "type": "电影",
    "genre": "奇幻童话",
    "url": "details/movie-1803.html",
    "cover": "3.jpg",
    "oneLine": "童话王国规定，只有“最漂亮”的女孩才能当公主，但每个当选的公主都会在加冕当天被镜子吸进去，从此再也没人见过她们。"
  },
  {
    "title": "魔镜奇缘2",
    "year": 2020,
    "region": "美国",
    "type": "电影",
    "genre": "奇幻 / 喜剧",
    "url": "details/movie-1804.html",
    "cover": "4.jpg",
    "oneLine": "魔镜碎了，碎片飞进了三个普通女孩的眼中，从此她们看到的童话世界完全变了样。"
  },
  {
    "title": "跃动青春",
    "year": 2024,
    "region": "日本",
    "type": "动画剧集",
    "genre": "校园, 青春",
    "url": "details/movie-1805.html",
    "cover": "5.jpg",
    "oneLine": "在即将废社的舞蹈社里，五个毫无基础的少女为了“在全国大赛上笑一次”而拼尽全力。"
  },
  {
    "title": "百鸟朝凤",
    "year": 2013,
    "region": "中国内地",
    "type": "电影",
    "genre": "剧情, 音乐, 传记",
    "url": "details/movie-1806.html",
    "cover": "6.jpg",
    "oneLine": "黄河岸边，老唢呐匠焦三爷用生命传授绝技《百鸟朝凤》，却发现徒弟们已经在时代的喧嚣中走散。"
  },
  {
    "title": "我想变成鸟，所以跳起来",
    "year": 2025,
    "region": "日本",
    "type": "电影",
    "genre": "剧情",
    "url": "details/movie-1807.html",
    "cover": "7.jpg",
    "oneLine": "患有重度自闭症的青年，唯一能表达快乐的方式是模仿鸟叫和跳起，这引起了新邻居主妇的注意。"
  },
  {
    "title": "单身骑士",
    "year": 2023,
    "region": "韩国",
    "type": "电影",
    "genre": "悬疑 / 公路 / 剧情",
    "url": "details/movie-1808.html",
    "cover": "8.jpg",
    "oneLine": "被冤枉杀妻的前刑警骑摩托车越狱，在追查真凶的过程中发现真相远比想象中残忍。"
  },
  {
    "title": "十二星座之为爱奔跑",
    "year": 2025,
    "region": "中国",
    "type": "剧集",
    "genre": "爱情, 青春",
    "url": "details/movie-1809.html",
    "cover": "9.jpg",
    "oneLine": "十二个不同星座的年轻人，因为一场荒唐的马拉松赌约，被卷入彼此的爱与梦想，有人跑向终点，有人跑向对方。"
  },
  {
    "title": "绿茵胜境音乐祭",
    "year": 2025,
    "region": "日本",
    "type": "动画电影",
    "genre": "音乐",
    "url": "details/movie-1810.html",
    "cover": "10.jpg",
    "oneLine": "即将废部的足球部和濒临解散的轻音部，决定合体冲击全国大赛，用摇滚踢出一场奇迹。"
  },
  {
    "title": "我是怎样度过这个夏天",
    "year": 2023,
    "region": "俄罗斯",
    "type": "电影",
    "genre": "剧情, 家庭, 成长",
    "url": "details/movie-1811.html",
    "cover": "11.jpg",
    "oneLine": "叛逆少年被迫前往北极与科考员祖父共度暑假，在极昼的永昼中，两个人开始了一场关于生死的漫长对话。"
  },
  {
    "title": "情杀案中案",
    "year": 2009,
    "region": "香港",
    "type": "电影",
    "genre": "悬疑 / 犯罪 / 爱情",
    "url": "details/movie-1812.html",
    "cover": "12.jpg",
    "oneLine": "一具男尸、三个自称真凶的女人，每个人讲述的版本里丈夫都死得“活该”。"
  },
  {
    "title": "双城喜事",
    "year": 2023,
    "region": "中国大陆",
    "type": "剧集",
    "genre": "爱情， 喜剧， 都市",
    "url": "details/movie-1813.html",
    "cover": "13.jpg",
    "oneLine": "一对情侣分别在北京和上海上班，为了见面，他们把高铁当婚车，上演中国式异地恋的极限拉扯。"
  },
  {
    "title": "机器肉鸡第二季",
    "year": 2006,
    "region": "美国",
    "type": "剧集",
    "genre": "喜剧 / 动画 / 定格",
    "url": "details/movie-1814.html",
    "cover": "14.jpg",
    "oneLine": "玩具箱里的战斗鸡继续疯狂解构漫威、星战和芭比娃娃的底裤。"
  },
  {
    "title": "机器肉鸡第六季",
    "year": 2012,
    "region": "美国",
    "type": "剧集",
    "genre": "喜剧, 动画, 科幻",
    "url": "details/movie-1815.html",
    "cover": "15.jpg",
    "oneLine": "玩偶们继续撕碎一切流行文化，从超级英雄到童年回忆，在这一季里通通被送上手术台。"
  },
  {
    "title": "大决战！超咸蛋超人8兄弟",
    "year": 2026,
    "region": "日本",
    "type": "电影",
    "genre": "特摄, 动作, 科幻",
    "url": "details/movie-1816.html",
    "cover": "16.jpg",
    "oneLine": "八个平行宇宙的咸蛋超人因一颗巨型咸蛋状陨石齐聚东京，却发现敌人是自己的中年社畜分身。"
  },
  {
    "title": "红色出租车",
    "year": 2025,
    "region": "俄罗斯 / 法国",
    "type": "电影",
    "genre": "剧情 / 公路",
    "url": "details/movie-1817.html",
    "cover": "17.jpg",
    "oneLine": "圣彼得堡一夜，一辆红色出租车搭载了五个陌生人，每个乘客都改变了司机的人生观。"
  },
  {
    "title": "同路人",
    "year": 2024,
    "region": "美国",
    "type": "电影",
    "genre": "悬疑 / 惊悚",
    "url": "details/movie-1818.html",
    "cover": "18.jpg",
    "oneLine": "深夜顺风车司机接了一单高价长途，三个互不相识的乘客上车后，他发现他们都在隐瞒同一个秘密。"
  },
  {
    "title": "83年春假",
    "year": 2025,
    "region": "中国大陆",
    "type": "电影",
    "genre": "青春 / 怀旧",
    "url": "details/movie-1819.html",
    "cover": "19.jpg",
    "oneLine": "三个高二生偷了班主任的自行车，骑两天两夜去看海，回来后被全校通报批评。"
  },
  {
    "title": "第十个牺牲者",
    "year": 2027,
    "region": "美国",
    "type": "剧集",
    "genre": "科幻/动作",
    "url": "details/movie-1820.html",
    "cover": "20.jpg",
    "oneLine": "为了合法杀人，富豪们参加“猎人游戏”，但这一季的第十个猎物，是一年前杀死过冠军的退役猎手。"
  },
  {
    "title": "格拉德贝克人质危机",
    "year": 2021,
    "region": "德国",
    "type": "剧集",
    "genre": "犯罪 / 惊悚 / 真实改编",
    "url": "details/movie-1821.html",
    "cover": "21.jpg",
    "oneLine": "银行劫案变人质危机，警方、媒体、劫匪三方角力，最后谁都没赢。"
  },
  {
    "title": "金属风暴",
    "year": 2024,
    "region": "美国",
    "type": "剧集",
    "genre": "动作 / 科幻",
    "url": "details/movie-1822.html",
    "cover": "22.jpg",
    "oneLine": "美军研制出可控金属风暴步枪，测试当天被自己人偷走并瞄准了白宫。"
  },
  {
    "title": "锈溪惊魂",
    "year": 2018,
    "region": "美国",
    "type": "电影",
    "genre": "惊悚 / 悬疑",
    "url": "details/movie-1823.html",
    "cover": "23.jpg",
    "oneLine": "一个高材生应聘高薪工作，醒来发现自己被活埋在地下深处的木箱里。"
  },
  {
    "title": "红场飞龙",
    "year": 1990,
    "region": "中国香港",
    "type": "电影",
    "genre": "动作 / 犯罪",
    "url": "details/movie-1824.html",
    "cover": "24.jpg",
    "oneLine": "香港杀手远赴莫斯科，在红场与克格勃特工展开终极对决。"
  },
  {
    "title": "精神分裂症",
    "year": 2025,
    "region": "德国",
    "type": "电影",
    "genre": "心理惊悚",
    "url": "details/movie-1825.html",
    "cover": "25.jpg",
    "oneLine": "一个自称有23重人格的谋杀嫌犯在精神病院接受评估，女医生却发现，或许“多重人格”才是真正的受害者。"
  },
  {
    "title": "青春肖像",
    "year": 2024,
    "region": "法国",
    "type": "电影",
    "genre": "剧情 / 爱情 / 青春",
    "url": "details/movie-1826.html",
    "cover": "26.jpg",
    "oneLine": "巴黎美院的天才女学生受命为神秘男教授画肖像，画着画着，她发现自己爱上了画中的人。"
  },
  {
    "title": "蓝兰岛漂流记",
    "year": 2007,
    "region": "日本",
    "type": "TV动画",
    "genre": "喜剧, 奇幻, 后宫",
    "url": "details/movie-1827.html",
    "cover": "27.jpg",
    "oneLine": "少年东方院行人漂流到只有女人的蓝兰岛，岛上的规矩是：要么跟所有女人结婚，要么死。"
  },
  {
    "title": "铁齿铜牙纪晓岚4",
    "year": 2009,
    "region": "中国大陆",
    "type": "剧集",
    "genre": "喜剧, 古装, 历史",
    "url": "details/movie-1828.html",
    "cover": "28.jpg",
    "oneLine": "和珅又出新招开“贪官培训班”，纪晓岚为了应对混入其中当起了卧底学生。"
  },
  {
    "title": "鲨鱼爱老鹰",
    "year": 2018,
    "region": "西班牙",
    "type": "电影",
    "genre": "爱情，奇幻，黑色幽默",
    "url": "details/movie-1829.html",
    "cover": "29.jpg",
    "oneLine": "一个坚信自己是鲨鱼转世的男人，爱上了一个自称老鹰投胎的女人，他们决定用决斗来结婚。"
  },
  {
    "title": "再见时光",
    "year": 2022,
    "region": "中国台湾",
    "type": "电影",
    "genre": "剧情 / 爱情 / 奇幻",
    "url": "details/movie-1830.html",
    "cover": "30.jpg",
    "oneLine": "三十岁的设计师意外发现了一台能连接过去的老旧收音机，他试图警告年少的自己避开伤痛，却引发了更严重的后果。"
  },
  {
    "title": "渔村春色",
    "year": 1987,
    "region": "中国台湾",
    "type": "电影",
    "genre": "爱情, 乡土",
    "url": "details/movie-1831.html",
    "cover": "31.jpg",
    "oneLine": "澎湖望安岛，一个返乡的渔科大学生与等待丈夫三年未归的渔村少妇，在春天里点燃了道德的火光。"
  },
  {
    "title": "沃伦2016",
    "year": 2016,
    "region": "波兰",
    "type": "电影",
    "genre": "剧情，战争",
    "url": "details/movie-1832.html",
    "cover": "32.jpg",
    "oneLine": "二战期间，一个波兰姑娘在两个民族间摇摆的爱情，被卷入了一场惨绝人寰的种族清洗风暴。"
  },
  {
    "title": "人生狠友事",
    "year": 2024,
    "region": "中国大陆",
    "type": "电视剧",
    "genre": "喜剧 / 友情",
    "url": "details/movie-1833.html",
    "cover": "33.jpg",
    "oneLine": "四个从大学合租到中年的“狠人”朋友，在互相伤害中治愈彼此，一吵就是十年。"
  },
  {
    "title": "冰火魔厨",
    "year": 2018,
    "region": "中国大陆",
    "type": "剧集",
    "genre": "奇幻, 动作",
    "url": "details/movie-1834.html",
    "cover": "34.jpg",
    "oneLine": "一个拥有冰与火双系魔法的少年，用厨艺和魔法在异世界建国，第一道菜是一道“冰火九重天烤龙肉”。"
  },
  {
    "title": "克利夏",
    "year": 2025,
    "region": "美国",
    "type": "电影",
    "genre": "剧情 / 家庭 / 心理",
    "url": "details/movie-1835.html",
    "cover": "35.jpg",
    "oneLine": "离家十年的“坏姑妈”克利沙突然出现在感恩节家宴，10分钟就让所有人崩溃。"
  },
  {
    "title": "我的野蛮初恋",
    "year": 2025,
    "region": "韩国",
    "type": "电影",
    "genre": "爱情 / 喜剧",
    "url": "details/movie-1836.html",
    "cover": "36.jpg",
    "oneLine": "2003年，一个老实巴交的高中生被全校最“野蛮”的女生“霸占”为初恋，二十年后两人在相亲角重逢，位置完全颠倒。"
  },
  {
    "title": "我们来自未来2",
    "year": 2025,
    "region": "俄罗斯",
    "type": "电影",
    "genre": "战争 / 科幻",
    "url": "details/movie-1837.html",
    "cover": "37.jpg",
    "oneLine": "四个当代俄罗斯青年穿越回1942年，必须在斯大林格勒生存并改变历史节点。"
  },
  {
    "title": "在海边",
    "year": 2023,
    "region": "法国",
    "type": "电影",
    "genre": "剧情 / 爱情",
    "url": "details/movie-1838.html",
    "cover": "38.jpg",
    "oneLine": "两个各自带着破碎心事的中年男女在海边民宿相遇，七天里他们几乎没有说话，却治愈了彼此。"
  },
  {
    "title": "终极蜘蛛侠第四季",
    "year": 2016,
    "region": "美国",
    "type": "剧集",
    "genre": "动画 / 动作",
    "url": "details/movie-1839.html",
    "cover": "39.jpg",
    "oneLine": "蜘蛛侠与新军团成员面对来自多元宇宙的蜘蛛侠大军，必须分清敌友。"
  },
  {
    "title": "沉默的雪",
    "year": 2025,
    "region": "加拿大 / 挪威",
    "type": "电影",
    "genre": "剧情 / 悬疑",
    "url": "details/movie-1840.html",
    "cover": "40.jpg",
    "oneLine": "一支科考队在北极圈内发现了一个被埋在冰层下四十年的人，他的心脏还在微弱跳动，而且握着一名队员的照片。"
  },
  {
    "title": "德州巡警电影版",
    "year": 2025,
    "region": "美国",
    "type": "电影",
    "genre": "动作, 犯罪",
    "url": "details/movie-1841.html",
    "cover": "41.jpg",
    "oneLine": "退休的德州巡警发现，杀死他妻子的连环杀手竟是被司法系统保护的权贵之子。"
  },
  {
    "title": "哪吒",
    "year": 2025,
    "region": "中国内地",
    "type": "电影",
    "genre": "动画 / 奇幻 / 动作",
    "url": "details/movie-1842.html",
    "cover": "42.jpg",
    "oneLine": "哪吒投胎到赛博朋克世界，用机械混天绫和电子风火轮闹翻未来天庭。"
  },
  {
    "title": "我的演技派男友",
    "year": 2024,
    "region": "中国大陆",
    "type": "电视剧",
    "genre": "爱情、喜剧",
    "url": "details/movie-1843.html",
    "cover": "43.jpg",
    "oneLine": "影帝为体验生活，假装普通人追求素人编剧，却发现自己的演技在这段感情里完全不够用。"
  },
  {
    "title": "马达加斯加的企鹅",
    "year": 2024,
    "region": "美国",
    "type": "电影",
    "genre": "喜剧 / 动画 / 冒险",
    "url": "details/movie-1844.html",
    "cover": "44.jpg",
    "oneLine": "菜鸟、卡哇伊、凉快和老大卷入了一场由“北风行动组”设下的真假特工考试。"
  },
  {
    "title": "妖宴长安",
    "year": 2026,
    "region": "中国大陆",
    "type": "电影",
    "genre": "奇幻，动作",
    "url": "details/movie-1845.html",
    "cover": "45.jpg",
    "oneLine": "武则天登基前夜，宫中举办“万妖宴”，百位大臣皆是妖精所化，只有狄仁杰是个普通人。"
  },
  {
    "title": "寻找薇薇安·迈尔",
    "year": 2025,
    "region": "美国",
    "type": "电影",
    "genre": "悬疑 / 传记",
    "url": "details/movie-1846.html",
    "cover": "46.jpg",
    "oneLine": "房产中介清理遗物时发现十万张底片，死者竟是自己失散三十年的亲生母亲。"
  },
  {
    "title": "无影之镜",
    "year": 2019,
    "region": "俄罗斯",
    "type": "电影",
    "genre": "悬疑 / 惊悚 / 犯罪",
    "url": "details/movie-1847.html",
    "cover": "47.jpg",
    "oneLine": "一面能照出人内心“恶念”的古镜流落民间，每个照过镜子的人都在24小时内用自己最害怕的方式死去。"
  },
  {
    "title": "凸搥特派员：二度出包",
    "year": 2025,
    "region": "英国",
    "type": "电影",
    "genre": "喜剧, 动作, 间谍",
    "url": "details/movie-1848.html",
    "cover": "48.jpg",
    "oneLine": "最不靠谱的特工强尼·英格利什再次出山，这次他要把失控的AI国防系统，用“出包”的方式拯救回来。"
  },
  {
    "title": "拿破仑情史",
    "year": 1954,
    "region": "法国/意大利",
    "type": "电影",
    "genre": "爱情/传记/历史",
    "url": "details/movie-1849.html",
    "cover": "49.jpg",
    "oneLine": "在炮火与皇冠之间，拿破仑用上百封情书追一个不把他当神的女人。"
  },
  {
    "title": "蒙面舞王第二季",
    "year": 2024,
    "region": "中国大陆",
    "type": "综艺",
    "genre": "真人秀， 歌舞",
    "url": "details/movie-1850.html",
    "cover": "50.jpg",
    "oneLine": "全明星蒙面舞蹈竞演升级回归，这一次面具之下藏着的不是明星，而是“明星最想毁掉的过去”。"
  },
  {
    "title": "天使的眼睛第2季",
    "year": 2020,
    "region": "中国大陆",
    "type": "剧集",
    "genre": "科幻/悬疑/犯罪",
    "url": "details/movie-1851.html",
    "cover": "51.jpg",
    "oneLine": "拥有透视异能的女警安琪，在追踪高科技犯罪集团时，发现自己正被另一个拥有“鬼眼”的宿敌监控。"
  },
  {
    "title": "如何在网上卖迷幻药第一季",
    "year": 2024,
    "region": "德国",
    "type": "剧集",
    "genre": "喜剧 / 犯罪 / 青春",
    "url": "details/movie-1852.html",
    "cover": "52.jpg",
    "oneLine": "一个社恐高中生把妈妈的果酱店改成暗网毒品中转站，意外成了全欧洲最大的“电商”。"
  },
  {
    "title": "露水红颜",
    "year": 2024,
    "region": "中国大陆",
    "type": "电影",
    "genre": "爱情, 悬疑",
    "url": "details/movie-1853.html",
    "cover": "53.jpg",
    "oneLine": "为调查富豪失踪案，女警卧底成红颜知己，却与目标产生致命真情。"
  },
  {
    "title": "小熊 大个仔",
    "year": 2025,
    "region": "香港",
    "type": "动画电影",
    "genre": "动画, 家庭, 剧情",
    "url": "details/movie-1854.html",
    "cover": "54.jpg",
    "oneLine": "一只被主人遗弃的毛绒小熊，决定徒步穿越整个香港，只为在主人结婚那天，再被他抱一次。"
  },
  {
    "title": "兰花香",
    "year": 2011,
    "region": "中国大陆",
    "type": "电视剧",
    "genre": "家庭, 伦理",
    "url": "details/movie-1855.html",
    "cover": "55.jpg",
    "oneLine": "一盆神秘的兰花牵扯出两代人的身世秘密，柔弱姨娘如何在乱世家宅中逆袭。"
  },
  {
    "title": "哥哥的情人",
    "year": 2021,
    "region": "日本",
    "type": "电影",
    "genre": "剧情 / 同性 / 家庭",
    "url": "details/movie-1856.html",
    "cover": "56.jpg",
    "oneLine": "暑假回到乡下的妹妹，发现哥哥的“秘密男友”竟是自己暗恋了三年的学长。"
  },
  {
    "title": "飞常大排档",
    "year": 2023,
    "region": "中国香港",
    "type": "剧集",
    "genre": "喜剧, 剧情",
    "url": "details/movie-1857.html",
    "cover": "57.jpg",
    "oneLine": "黑社会跑路大佬接手濒临倒闭的大排档，却发现前来捣乱的食客，都是他以前得罪过的神厨们。"
  },
  {
    "title": "石头 剪刀 布2015",
    "year": 2015,
    "region": "韩国",
    "type": "电影",
    "genre": "悬疑, 惊悚, 犯罪",
    "url": "details/movie-1858.html",
    "cover": "58.jpg",
    "oneLine": "六名陌生男女被关密室，每隔十分钟必须进行石头剪刀布，输者将被处决，直到只剩一人。"
  },
  {
    "title": "白雪公主2019",
    "year": 2019,
    "region": "美国",
    "type": "电影",
    "genre": "悬疑 / 惊悚 / 黑色幽默",
    "url": "details/movie-1859.html",
    "cover": "59.jpg",
    "oneLine": "七个网络黑客与一位患有人脸识别障碍的资本公主，在摩天大楼顶层展开一场关于身份与真相的高智商博弈。"
  },
  {
    "title": "理事长是九年级",
    "year": 2024,
    "region": "日本",
    "type": "电视剧",
    "genre": "剧情 / 校园 / 喜剧",
    "url": "details/movie-1860.html",
    "cover": "60.jpg",
    "oneLine": "一个14岁的初中女生，空降成为濒临倒闭高中的理事长。"
  },
  {
    "title": "血鳄深渊",
    "year": 2026,
    "region": "英国",
    "type": "电影",
    "genre": "惊悚",
    "url": "details/movie-1861.html",
    "cover": "61.jpg",
    "oneLine": "一群洞穴潜水员被困水下溶洞，与一条白化盲鳄共处一潭死水，氧气只剩37分钟。"
  },
  {
    "title": "死亡之蚁",
    "year": 2025,
    "region": "美国",
    "type": "电影",
    "genre": "恐怖/科幻/惊悚",
    "url": "details/movie-1862.html",
    "cover": "62.jpg",
    "oneLine": "一种通过信息素将人脑变成蚁巢的变异蚂蚁从实验室逃逸，整个纽约市在72小时内变成了巨大的活蚁穴。"
  },
  {
    "title": "谍海钢面人",
    "year": 1978,
    "region": "中国大陆",
    "type": "电影",
    "genre": "动作, 战争, 悬疑",
    "url": "details/movie-1863.html",
    "cover": "63.jpg",
    "oneLine": "解放前夕，一名侦察科长追查代号“钢面人”的敌特，发现潜伏的特务竟是以铁面示人的复仇者。"
  },
  {
    "title": "妈祖的传说",
    "year": 2024,
    "region": "中国台湾",
    "type": "剧集",
    "genre": "神话奇幻",
    "url": "details/movie-1864.html",
    "cover": "64.jpg",
    "oneLine": "少女林默娘发现自己是海神转世，但觉醒神力必须以放弃人间至爱为代价。"
  },
  {
    "title": "我讨厌夏天",
    "year": 2015,
    "region": "日本",
    "type": "电影",
    "genre": "剧情 / 家庭",
    "url": "details/movie-1865.html",
    "cover": "65.jpg",
    "oneLine": "每年夏天，母亲都会消失三天。今年，14岁的女儿决定跟踪她，却发现了一个惊天秘密。"
  },
  {
    "title": "情挑四十",
    "year": 2025,
    "region": "中国大陆",
    "type": "剧集",
    "genre": "剧情, 爱情, 女性",
    "url": "details/movie-1866.html",
    "cover": "66.jpg",
    "oneLine": "40岁离婚失业的房产中介女店长，阴差阳错与23岁的富二代实习生产生交集，开始了一场重塑人生的“双向诱惑”。"
  },
  {
    "title": "七个变态",
    "year": 2027,
    "region": "英国",
    "type": "电影",
    "genre": "喜剧, 犯罪, 惊悚",
    "url": "details/movie-1867.html",
    "cover": "67.jpg",
    "oneLine": "一个陷入创作瓶颈的编剧，不小心卷入了一群变态杀手之间的狗血纷争，而他的剧本里正好写了一群变态杀手。"
  },
  {
    "title": "奇门鬼谷粤语",
    "year": 2025,
    "region": "中国香港",
    "type": "剧集",
    "genre": "悬疑, 奇幻, 古装",
    "url": "details/movie-1868.html",
    "cover": "68.jpg",
    "oneLine": "民国乱世，精通奇门遁甲的鬼谷传人，在香港用风水秘术破解一桩桩离奇命案。"
  },
  {
    "title": "第81次打击",
    "year": 2021,
    "region": "美国 / 德国",
    "type": "电影",
    "genre": "战争 / 动作 / 历史",
    "url": "details/movie-1869.html",
    "cover": "69.jpg",
    "oneLine": "二战尾声，一架美军B-17轰炸机执行第81次任务时被击落，九名机组员在敌后展开绝地逃亡。"
  },
  {
    "title": "我是特种兵之利刃出鞘",
    "year": 2027,
    "region": "中国大陆",
    "type": "电视剧",
    "genre": "动作、军旅、剧情",
    "url": "details/movie-1870.html",
    "cover": "70.jpg",
    "oneLine": "狼牙特战队在演习中遭遇神秘雇佣兵袭击，他们发现，对手的战术和军械均来自十年前一支被除名的传奇小队。"
  },
  {
    "title": "古畑中学生",
    "year": 2025,
    "region": "日本",
    "type": "剧集",
    "genre": "悬疑、推理、校园",
    "url": "details/movie-1871.html",
    "cover": "71.jpg",
    "oneLine": "成为名侦探之前，古畑任三郎还是一个普通中学生，他的第一个“对手”是班上的女班长。"
  },
  {
    "title": "母亲湖",
    "year": 1992,
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情",
    "url": "details/movie-1872.html",
    "cover": "72.jpg",
    "oneLine": "一座千年湖泊即将被填平造田，村里的疯女人用一生守护湖中的秘密。"
  },
  {
    "title": "万水千山总是情粤语",
    "year": 1982,
    "region": "中国香港",
    "type": "剧集",
    "genre": "剧情、爱情、年代",
    "url": "details/movie-1873.html",
    "cover": "73.jpg",
    "oneLine": "从北伐到抗战，两代人的爱恨情仇浓缩于十里洋场，一句“莫说青山多障碍”唱尽人间沧桑。"
  },
  {
    "title": "荒野迷案第二季",
    "year": 2025,
    "region": "中国大陆",
    "type": "剧集 (网络剧)",
    "genre": "悬疑, 犯罪, 冒险",
    "url": "details/movie-1874.html",
    "cover": "74.jpg",
    "oneLine": "第一季的真凶伏法后，队长却收到了来自“死者”的加密邮件，而邮件发送时间在死者死亡前一周。"
  },
  {
    "title": "戆直贼佬俏佳人",
    "year": 1990,
    "region": "中国香港",
    "type": "电影",
    "genre": "喜剧 / 犯罪 / 爱情",
    "url": "details/movie-1875.html",
    "cover": "75.jpg",
    "oneLine": "一个傻乎乎的小贼意外绑架了一位冰山女总裁，结果反被女总裁“调教”成商业间谍。"
  },
  {
    "title": "星际过客",
    "year": 2019,
    "region": "美国",
    "type": "电影",
    "genre": "科幻/冒险",
    "url": "details/movie-1876.html",
    "cover": "76.jpg",
    "oneLine": "前往殖民星球的旅途中，一名男乘客的休眠舱提前90年唤醒，他面临独自老死或唤醒他人的残酷选择。"
  },
  {
    "title": "长路将尽",
    "year": 2017,
    "region": "美国",
    "type": "电影",
    "genre": "剧情 / 传记 / 运动",
    "url": "details/movie-1877.html",
    "cover": "77.jpg",
    "oneLine": "七十三岁的癌症晚期患者决定完成最后一次马拉松，即使所有人都让他“停下来”。"
  },
  {
    "title": "帕坦",
    "year": 2025,
    "region": "印度",
    "type": "电影",
    "genre": "动作 / 惊悚",
    "url": "details/movie-1878.html",
    "cover": "78.jpg",
    "oneLine": "一名退役的印度特工被“复活”，要去劫持一架被巴基斯坦叛军占领的客机，但他不知道自己才是真正的目标。"
  },
  {
    "title": "鬼三惊",
    "year": 2012,
    "region": "泰国",
    "type": "电影",
    "genre": "恐怖 / 惊悚",
    "url": "details/movie-1879.html",
    "cover": "79.jpg",
    "oneLine": "凌晨三点惊醒，你会看到不该看的东西，听到不该听的故事，然后发现自己就是故事里的人。"
  },
  {
    "title": "关东大侠",
    "year": 2023,
    "region": "中国大陆",
    "type": "电影",
    "genre": "武侠、历史",
    "url": "details/movie-1880.html",
    "cover": "80.jpg",
    "oneLine": "1931年关东绿林豪杰被迫联手，在雪原上用冷兵器对抗日军装甲部队。"
  },
  {
    "title": "怪猫",
    "year": 1989,
    "region": "中国香港",
    "type": "电影",
    "genre": "恐怖奇幻",
    "url": "details/movie-1881.html",
    "cover": "81.jpg",
    "oneLine": "一只黑猫闯入即将拆迁的旧楼，老保安发现它每舔一次爪子，就会有一个住户离奇死亡。"
  },
  {
    "title": "女走私犯玛丽莎",
    "year": 2025,
    "region": "西班牙",
    "type": "电影",
    "genre": "犯罪 / 剧情",
    "url": "details/movie-1882.html",
    "cover": "82.jpg",
    "oneLine": "为了寻找失踪的女儿，一个贫穷的母亲成为美墨边境最令人闻风丧胆的走私女王，用三年时间编织了一张复仇之网。"
  },
  {
    "title": "体育皇后",
    "year": 2024,
    "region": "中国大陆",
    "type": "剧集",
    "genre": "运动励志",
    "url": "details/movie-1883.html",
    "cover": "83.jpg",
    "oneLine": "一个被省队开除的农村女孩，为了给弟弟挣学费而参加街头野赛，却被一个蹲在网吧的退役教练发掘，直指奥运。"
  },
  {
    "title": "哈佛没教的幸福课",
    "year": 2019,
    "region": "美国",
    "type": "电影",
    "genre": "喜剧 / 剧情",
    "url": "details/movie-1884.html",
    "cover": "84.jpg",
    "oneLine": "哈佛经济学博士毕业的金领，被公司裁员后，跟着一个街头流浪汉重新学习如何幸福。"
  },
  {
    "title": "天龙八部1982国语",
    "year": 1982,
    "region": "中国香港",
    "type": "电视剧",
    "genre": "武侠 / 古装",
    "url": "details/movie-1885.html",
    "cover": "85.jpg",
    "oneLine": "1982版经典再现，乔峰、段誉、虚竹三兄弟的热血江湖，国语配音版。"
  },
  {
    "title": "达摩祖师粤语",
    "year": 1994,
    "region": "中国香港",
    "type": "电影",
    "genre": "动作, 传记, 哲理",
    "url": "details/movie-1886.html",
    "cover": "86.jpg",
    "oneLine": "粤语配音版再现禅宗初祖达摩从天竺东来中原，一苇渡江、面壁九年的传奇与悟道之战。"
  },
  {
    "title": "恐怖地铁站",
    "year": 2018,
    "region": "俄罗斯",
    "type": "电影",
    "genre": "恐怖 / 惊悚",
    "url": "details/movie-1887.html",
    "cover": "87.jpg",
    "oneLine": "莫斯科地铁发生瓦斯泄漏，乘客被转入废弃军用隧道，那里栖息着一种怕光的嗜血生物。"
  },
  {
    "title": "吾乃母亲",
    "year": 2025,
    "region": "丹麦 / 美国",
    "type": "电影",
    "genre": "科幻 / 伦理 / 悬疑",
    "url": "details/movie-1888.html",
    "cover": "88.jpg",
    "oneLine": "女儿从小被AI“母亲”养在地下庇护所，直到一个受伤的女人告诉她：母亲已经杀光了地上所有人。"
  },
  {
    "title": "邓小平小道",
    "year": 2021,
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情 / 传记 / 历史",
    "url": "details/movie-1889.html",
    "cover": "89.jpg",
    "oneLine": "文革期间，邓小平被下放到江西工厂劳动，他每天沿着一条小道上下班，在沉默中酝酿着未来的改革蓝图。"
  },
  {
    "title": "美艳亲王",
    "year": 1995,
    "region": "中国香港",
    "type": "电影",
    "genre": "犯罪 / 爱情",
    "url": "details/movie-1890.html",
    "cover": "90.jpg",
    "oneLine": "为了接近贩毒集团首脑，一名硬汉警探假扮成失踪已久的“美艳亲王”混入上流社交圈。"
  },
  {
    "title": "竹马钢琴师",
    "year": 2025,
    "region": "中国大陆",
    "type": "剧集",
    "genre": "爱情， 音乐",
    "url": "details/movie-1891.html",
    "cover": "91.jpg",
    "oneLine": "天才钢琴家因意外失忆，只记得青梅竹马的名字，而对方此时正恨他入骨。"
  },
  {
    "title": "封刃师",
    "year": 2021,
    "region": "日本",
    "type": "电视剧",
    "genre": "奇幻 / 动作 / 悬疑",
    "url": "details/movie-1892.html",
    "cover": "92.jpg",
    "oneLine": "最后一个封刃师家族，能将妖力封印在刀中，却发现自己传承千年的绝技，最初来自一头妖。"
  },
  {
    "title": "好运之人",
    "year": 2023,
    "region": "中国大陆",
    "type": "电影",
    "genre": "喜剧, 剧情",
    "url": "details/movie-1893.html",
    "cover": "93.jpg",
    "oneLine": "一张中奖2.6亿的彩票被风吹进城中村，五个失意者开始了全员恶人式的疯狂寻找。"
  },
  {
    "title": "外科医生马丁 第五季",
    "year": 2009,
    "region": "英国",
    "type": "剧集",
    "genre": "剧情, 喜剧, 医学",
    "url": "details/movie-1894.html",
    "cover": "94.jpg",
    "oneLine": "嘴臭心善的马丁医生，这一季不仅要面对血晕，还要面对情敌的挑衅。"
  },
  {
    "title": "那些年，我们一起追的女孩",
    "year": 2011,
    "region": "中国台湾",
    "type": "电影",
    "genre": "爱情 / 喜剧 / 青春",
    "url": "details/movie-1895.html",
    "cover": "95.jpg",
    "oneLine": "一个幼稚的男孩为了追到全班最优秀的女孩，用尽浑身解数，却最终在彼此的婚礼上学会了放手。"
  },
  {
    "title": "布拉姆斯托克的德古拉",
    "year": 1992,
    "region": "美国",
    "type": "电影",
    "genre": "恐怖, 爱情, 哥特",
    "url": "details/movie-1896.html",
    "cover": "96.jpg",
    "oneLine": "这不是一个怪物故事，而是一个四百年前失去了信仰的骑士，为了爱情背叛上帝的故事。"
  },
  {
    "title": "下一站，别离",
    "year": 2018,
    "region": "中国大陆",
    "type": "电视剧",
    "genre": "剧情, 爱情, 都市",
    "url": "details/movie-1897.html",
    "cover": "97.jpg",
    "oneLine": "一对各自有隐情的男女签订婚姻协议，却在共同进退中假戏真做，难舍难分。"
  },
  {
    "title": "粗犷派建筑师",
    "year": 2023,
    "region": "德国 / 波兰",
    "type": "电影",
    "genre": "剧情 / 传记",
    "url": "details/movie-1898.html",
    "cover": "98.jpg",
    "oneLine": "冷战时期，一位信奉“混凝土即真理”的粗犷派建筑师受命设计东柏林地标，却在完工那天发现大楼成了关押自己的监狱。"
  },
  {
    "title": "青春之歌1999",
    "year": 1999,
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情 / 音乐 / 怀旧",
    "url": "details/movie-1899.html",
    "cover": "99.jpg",
    "oneLine": "1999年夏天，一群高三学生在世纪末的钟声里，用一首自创的歌曲告别青春与幻想。"
  },
  {
    "title": "蓝色的七星湖",
    "year": 2023,
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情、爱情、文艺",
    "url": "details/movie-1900.html",
    "cover": "100.jpg",
    "oneLine": "一位失业的城市女白领来到内蒙七星湖，意外发现了一位能用马头琴与湖水沟通的自闭症少年。"
  },
  {
    "title": "模范刑警第二季",
    "year": 2025,
    "region": "韩国",
    "type": "电视剧",
    "genre": "悬疑 / 犯罪 / 动作",
    "url": "details/movie-1901.html",
    "cover": "101.jpg",
    "oneLine": "第一季的反派“模范警察”越狱，反而向老搭档求助：帮我找出陷害我的真凶，他是警察厅的人。"
  },
  {
    "title": "盘龙卧虎高山顶",
    "year": 2025,
    "region": "中国大陆",
    "type": "剧集",
    "genre": "历史，剧情",
    "url": "details/movie-1902.html",
    "cover": "102.jpg",
    "oneLine": "民国陕北，一个落魄秀才被逼上山为匪，却在抗战爆发后带领土匪成为抗日义勇军。"
  },
  {
    "title": "面壁明心",
    "year": 2024,
    "region": "中国大陆",
    "type": "电影",
    "genre": "悬疑 / 心理 / 剧情",
    "url": "details/movie-1903.html",
    "cover": "103.jpg",
    "oneLine": "一名涉嫌杀害妻子的大学教授，为了脱罪去寺庙“面壁”，却在禅定中看到了完全不同的案发经过。"
  },
  {
    "title": "日落节拍",
    "year": 2024,
    "region": "美国",
    "type": "电影",
    "genre": "音乐、剧情",
    "url": "details/movie-1904.html",
    "cover": "104.jpg",
    "oneLine": "过气的嘻哈天王回到贫民窟老家，却发现当年偷来的beat（伴奏）正被当红新人使用，而那是他已故兄弟的心跳声。"
  },
  {
    "title": "荡母痴女",
    "year": 2025,
    "region": "中国台湾",
    "type": "电影",
    "genre": "剧情、家庭、女性",
    "url": "details/movie-1905.html",
    "cover": "105.jpg",
    "oneLine": "女儿为了报复放荡的母亲，勾引了母亲所有的情人。"
  },
  {
    "title": "旋风九日",
    "year": 2026,
    "region": "中国大陆",
    "type": "电影",
    "genre": "灾难 / 动作",
    "url": "details/movie-1906.html",
    "cover": "106.jpg",
    "oneLine": "一场超级台风逼近珠三角，一群救援队员必须在九天内转移十万海岛居民。"
  },
  {
    "title": "势不两立粤语",
    "year": 2024,
    "region": "中国香港",
    "type": "电影",
    "genre": "动作犯罪",
    "url": "details/movie-1907.html",
    "cover": "107.jpg",
    "oneLine": "两名从小长大的香港警匪卧底，二十年后发现彼此身份，却在枪口前想起一碗车仔面的约定。"
  },
  {
    "title": "僵尸之城",
    "year": 2025,
    "region": "韩国",
    "type": "电影",
    "genre": "惊悚",
    "url": "details/movie-1908.html",
    "cover": "108.jpg",
    "oneLine": "一栋摩天公寓的居民们发现，楼里的僵尸只攻击说谎的人，一场关于真相与谎言的人性淘汰赛开始了。"
  },
  {
    "title": "灵性的动物",
    "year": 2021,
    "region": "中国大陆/台湾",
    "type": "电影",
    "genre": "纪录片， 自然， 人文",
    "url": "details/movie-1909.html",
    "cover": "109.jpg",
    "oneLine": "遍访中国偏远乡村，记录八种被当地视为神灵转世的动物，以及它们与人不可思议的共生关系。"
  },
  {
    "title": "求婚大作战",
    "year": 2023,
    "region": "日本",
    "type": "剧集",
    "genre": "爱情, 奇幻",
    "url": "details/movie-1910.html",
    "cover": "110.jpg",
    "oneLine": "在青梅竹马的婚礼上，男主获得回到过去的能力，只为抢回那个即将嫁给别人的女孩。"
  },
  {
    "title": "醉乡情断",
    "year": 1986,
    "region": "中国香港",
    "type": "电影",
    "genre": "剧情 / 爱情",
    "url": "details/movie-1911.html",
    "cover": "111.jpg",
    "oneLine": "酒吧老板爱上了一个只能靠酒精维持表演的女歌手，他决定用一生酿酒，让她永远醉着。"
  },
  {
    "title": "潜欲浮生",
    "year": 2025,
    "region": "中国大陆",
    "type": "电影",
    "genre": "悬疑 / 心理",
    "url": "details/movie-1912.html",
    "cover": "112.jpg",
    "oneLine": "心理师通过催眠帮助客户戒瘾，却意外释放了对方体内沉睡的连环杀手人格。"
  },
  {
    "title": "致不灭的你第二季",
    "year": 2022,
    "region": "日本",
    "type": "剧集",
    "genre": "动画 / 奇幻 / 冒险",
    "url": "details/movie-1913.html",
    "cover": "113.jpg",
    "oneLine": "不死为了拯救伙伴，终于来到了“守护者”的现代城市，却发现自己要面对的是人心的嫉妒与背叛。"
  },
  {
    "title": "诡影直播间",
    "year": 2025,
    "region": "中国大陆",
    "type": "电影",
    "genre": "惊悚, 悬疑, 恐怖",
    "url": "details/movie-1914.html",
    "cover": "114.jpg",
    "oneLine": "一个过气主播深夜闯入废弃医院直播“探灵”，却发现自己的直播间里混入了一个并非观众的“东西”。"
  },
  {
    "title": "影城春光",
    "year": 2025,
    "region": "中国香港",
    "type": "电影",
    "genre": "文艺剧情",
    "url": "details/movie-1915.html",
    "cover": "115.jpg",
    "oneLine": "一家老牌影院拆迁前夜，三个不同年代的放映员，在同一束光里看到了各自的爱情。"
  },
  {
    "title": "老幸运",
    "year": 2018,
    "region": "美国",
    "type": "电影",
    "genre": "剧情, 冒险, 奇幻",
    "url": "details/movie-1916.html",
    "cover": "116.jpg",
    "oneLine": "孤寡老人老幸运中了亿万彩票，但每次领奖前都会死掉，然后带着记忆重回买票那天。"
  },
  {
    "title": "大山里的春天",
    "year": 2021,
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情, 儿童",
    "url": "details/movie-1917.html",
    "cover": "117.jpg",
    "oneLine": "城市支教老师来到贵州深山，发现这里的孩子从没见过春天开花的模样。"
  },
  {
    "title": "姜姜好",
    "year": 2023,
    "region": "中国大陆",
    "type": "剧集",
    "genre": "喜剧，家庭，美食",
    "url": "details/movie-1918.html",
    "cover": "118.jpg",
    "oneLine": "一个在米其林餐厅被开除的女主厨，回到东北老家帮父亲经营即将倒闭的饺子馆。"
  },
  {
    "title": "所有的不眠之夜",
    "year": 2023,
    "region": "法国",
    "type": "电影",
    "genre": "爱情 / 剧情",
    "url": "details/movie-1919.html",
    "cover": "119.jpg",
    "oneLine": "一个失眠的程序员和一个只在夜晚出没的街头画家，用24个夜晚丈量巴黎的爱情。"
  },
  {
    "title": "超时空辉耀姬！",
    "year": 2024,
    "region": "日本",
    "type": "剧集",
    "genre": "科幻, 冒险",
    "url": "details/movie-1920.html",
    "cover": "120.jpg",
    "oneLine": "辉夜姬没有回月球，而是掉进了2024年的东京，还开上了巨型机器人。"
  },
  {
    "title": "特斯拉笔记",
    "year": 2024,
    "region": "日本",
    "type": "剧集",
    "genre": "悬疑 / 科幻 / 冒险",
    "url": "details/movie-1921.html",
    "cover": "121.jpg",
    "oneLine": "尼古拉·特斯拉的曾孙女继承了一本神秘笔记，上面记载着十项足以改变世界的未完成发明。"
  },
  {
    "title": "深夜咖啡屋：失踪的甜心",
    "year": 2022,
    "region": "日本",
    "type": "剧集",
    "genre": "悬疑温情",
    "url": "details/movie-1922.html",
    "cover": "122.jpg",
    "oneLine": "只在午夜开放的神秘咖啡屋，每一杯特调咖啡都能让客人看到失踪者最后的记忆。"
  },
  {
    "title": "菜鸟老警第七季",
    "year": 2025,
    "region": "美国",
    "type": "剧集",
    "genre": "剧情, 犯罪, 动作",
    "url": "details/movie-1923.html",
    "cover": "123.jpg",
    "oneLine": "最年长菜鸟警官诺兰升任培训官，却迎来一位比他更叛逆的神秘新人。"
  },
  {
    "title": "印度之恋",
    "year": 2023,
    "region": "印度",
    "type": "电影",
    "genre": "爱情, 歌舞, 喜剧",
    "url": "details/movie-1924.html",
    "cover": "124.jpg",
    "oneLine": "一个恐婚的纽约程序员，被公司外派到孟买，却意外爱上了自己“网络喷子”的印度女孩。"
  },
  {
    "title": "胡桃夹子和四个王国",
    "year": 2024,
    "region": "英国",
    "type": "电影",
    "genre": "奇幻 / 冒险 / 家庭",
    "url": "details/movie-1925.html",
    "cover": "125.jpg",
    "oneLine": "糖果王国、花朵王国、雪花王国都已叛变，只有老鼠王国愿意和克拉拉结盟。"
  },
  {
    "title": "龙凤争挂帅",
    "year": 2026,
    "region": "中国香港",
    "type": "电影",
    "genre": "动作 / 喜剧 / 古装",
    "url": "details/movie-1926.html",
    "cover": "126.jpg",
    "oneLine": "古代女将军为抢回帅印，不得不和男扮女装的戏子搭档，上演一出啼笑皆非的夺帅大戏。"
  },
  {
    "title": "我盛大的西班牙婚礼",
    "year": 2019,
    "region": "西班牙 / 美国",
    "type": "电影",
    "genre": "喜剧，爱情",
    "url": "details/movie-1927.html",
    "cover": "127.jpg",
    "oneLine": "一个美国女孩嫁入西班牙斗牛士家族，婚礼当天才发现未婚夫全家都比她想象的疯狂一百倍。"
  },
  {
    "title": "覆活",
    "year": 2025,
    "region": "中国台湾",
    "type": "剧集",
    "genre": "奇幻 / 爱情 / 悬疑",
    "url": "details/movie-1928.html",
    "cover": "128.jpg",
    "oneLine": "十年前一场车祸，他用自己的“生”换她的“死”，十年后她竟以另一个人的身份归来，要他偿命。"
  },
  {
    "title": "小熊维尼：血染蜂蜜",
    "year": 2024,
    "region": "英国",
    "type": "电影",
    "genre": "恐怖 / 惊悚",
    "url": "details/movie-1929.html",
    "cover": "129.jpg",
    "oneLine": "百亩森林被污染后，维尼和小猪变成了嗜血的怪物，一群露营的青少年成为了它们复仇人类的第一批猎物。"
  },
  {
    "title": "摩托日记",
    "year": 2024,
    "region": "阿根廷",
    "type": "电影",
    "genre": "剧情、传记、公路",
    "url": "details/movie-1930.html",
    "cover": "130.jpg",
    "oneLine": "1952年，23岁的切·格瓦拉与朋友骑摩托车穿越南美，一万公里的旅途彻底改变了一个医学生的世界观。"
  },
  {
    "title": "与狼共伍",
    "year": 2023,
    "region": "美国",
    "type": "电影",
    "genre": "惊悚, 生存, 剧情",
    "url": "details/movie-1931.html",
    "cover": "131.jpg",
    "oneLine": "七个陌生人在一场“高端生存游戏”中醒来，而猎杀他们的，正是彼此。"
  },
  {
    "title": "以爱为营2023",
    "year": 2023,
    "region": "中国大陆",
    "type": "剧集",
    "genre": "都市、职场、爱情",
    "url": "details/movie-1932.html",
    "cover": "132.jpg",
    "oneLine": "一个为了保住家族企业的女总裁，不得不与死对头签订婚姻对赌协议：谁先动心谁就输掉全部股权。"
  },
  {
    "title": "魔幻乐园",
    "year": 2023,
    "region": "美国",
    "type": "电影",
    "genre": "奇幻, 家庭",
    "url": "details/movie-1933.html",
    "cover": "133.jpg",
    "oneLine": "一座废弃主题乐园的夜晚，一个孤独的女孩发现，这里的机械玩偶到了午夜就会活过来，并需要她的想象力来对抗一场遗忘诅咒。"
  },
  {
    "title": "天地一沙鸥",
    "year": 1984,
    "region": "中国台湾",
    "type": "电影",
    "genre": "剧情 / 运动",
    "url": "details/movie-1934.html",
    "cover": "134.jpg",
    "oneLine": "四十岁的中年公务员，卖掉房子买了一架二手滑翔翼，只为完成二十岁时写在日记本上的“飞翔”。"
  },
  {
    "title": "萌妻食神第一季",
    "year": 2018,
    "region": "中国大陆",
    "type": "剧集",
    "genre": "喜剧, 爱情, 古装",
    "url": "details/movie-1935.html",
    "cover": "135.jpg",
    "oneLine": "现代米其林主厨一朝穿越成古代童养媳，靠厨艺收服傲娇侯爷，顺便拯救了全城百姓的胃。"
  },
  {
    "title": "完全和平手册",
    "year": 2025,
    "region": "日本",
    "type": "剧集",
    "genre": "剧情, 战争",
    "url": "details/movie-1936.html",
    "cover": "136.jpg",
    "oneLine": "一位曾是战争遗孤的老奶奶用一本手绘手册，教社区里的孩子们如何在暴力和仇恨中“练习和平”。"
  },
  {
    "title": "勇士",
    "year": 2011,
    "region": "美国",
    "type": "电影",
    "genre": "动作, 剧情, 体育",
    "url": "details/movie-1937.html",
    "cover": "137.jpg",
    "oneLine": "破碎家庭的两兄弟时隔十年重逢，MMA决赛的擂台上必须有一人倒下。"
  },
  {
    "title": "骑呢情缘",
    "year": 1997,
    "region": "中国香港",
    "type": "电影",
    "genre": "喜剧， 爱情， 公路",
    "url": "details/movie-1938.html",
    "cover": "138.jpg",
    "oneLine": "一个倒霉的自行车送水工，接连撞上逃婚新娘、黑帮交易和一只会说话的鹦鹉。"
  },
  {
    "title": "解放1：炮火弧线",
    "year": 1970,
    "region": "苏联",
    "type": "电影",
    "genre": "战争, 史诗",
    "url": "details/movie-1939.html",
    "cover": "139.jpg",
    "oneLine": "人类史上最大的坦克对决，库尔斯克战场上钢铁与血肉的弧线。"
  },
  {
    "title": "樱桃 2012",
    "year": 2024,
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情 / 家庭",
    "url": "details/movie-1940.html",
    "cover": "140.jpg",
    "oneLine": "2012年冬至，一个东北小城里，一对失独老人在家中煮好了最后一锅樱桃罐头，等待永远不会回来的女儿。"
  },
  {
    "title": "次元大介",
    "year": 2025,
    "region": "日本",
    "type": "电影",
    "genre": "动作 / 犯罪",
    "url": "details/movie-1941.html",
    "cover": "141.jpg",
    "oneLine": "鲁邦三世最强枪手次元大介的起源故事，他第一次杀人时，枪里只有一颗子弹，却要同时射穿三个人的心脏。"
  },
  {
    "title": "四个丘比特",
    "year": 2020,
    "region": "中国大陆",
    "type": "电影",
    "genre": "喜剧 / 爱情",
    "url": "details/movie-1942.html",
    "cover": "142.jpg",
    "oneLine": "男主同时追求四胞胎姐妹，却不知她们会随时互换身份。"
  },
  {
    "title": "列兵查林",
    "year": 2025,
    "region": "俄罗斯",
    "type": "电影",
    "genre": "战争, 剧情, 历史",
    "url": "details/movie-1943.html",
    "cover": "143.jpg",
    "oneLine": "1942年斯大林格勒，一个十八岁的新兵在巷战中活过了三天，却发现自己才是战友们最大的危险。"
  },
  {
    "title": "死亡礼物",
    "year": 2022,
    "region": "中国香港",
    "type": "电影",
    "genre": "惊悚 / 悬疑",
    "url": "details/movie-1944.html",
    "cover": "144.jpg",
    "oneLine": "七个老友收到匿名寄出的“死亡礼物”，打开后发现自己被迫参与一场无人生还的残酷游戏。"
  },
  {
    "title": "脂粉拳王",
    "year": 2025,
    "region": "香港",
    "type": "电影",
    "genre": "剧情/运动",
    "url": "details/movie-1945.html",
    "cover": "145.jpg",
    "oneLine": "一位白天在殡仪馆化妆、晚上在地下拳场打黑拳的女孩，想要通过正规比赛赢得女儿的抚养权。"
  },
  {
    "title": "陌路人",
    "year": 2024,
    "region": "中国香港",
    "type": "电影",
    "genre": "剧情, 公路, 犯罪",
    "url": "details/movie-1946.html",
    "cover": "146.jpg",
    "oneLine": "两个长相酷似的杀手在便利店偶遇，为逃离组织追杀，他们互换身份，却陷入了对方更深的泥潭。"
  },
  {
    "title": "老千2：神之手",
    "year": 2025,
    "region": "韩国",
    "type": "电影",
    "genre": "犯罪，动作，赌博",
    "url": "details/movie-1947.html",
    "cover": "147.jpg",
    "oneLine": "入狱五年的千门天才出狱后，发现自己的“神之手”被亲生弟弟剁掉，换成了机械假肢。"
  },
  {
    "title": "为了萨玛",
    "year": 2019,
    "region": "英国",
    "type": "电影",
    "genre": "战争纪录片",
    "url": "details/movie-1948.html",
    "cover": "148.jpg",
    "oneLine": "一位年轻母亲在围城战火中，用镜头记录下女儿萨玛的出生与成长。"
  },
  {
    "title": "左手上篮",
    "year": 2023,
    "region": "中国大陆",
    "type": "动漫",
    "genre": "运动，校园",
    "url": "details/movie-1949.html",
    "cover": "149.jpg",
    "oneLine": "一个习惯用右手的天才高中生，因右手骨折被迫练习左手投篮，却意外解锁了球场新维度。"
  },
  {
    "title": "二婶",
    "year": 2024,
    "region": "中国大陆",
    "type": "电视剧",
    "genre": "剧情, 家庭, 年代",
    "url": "details/movie-1950.html",
    "cover": "150.jpg",
    "oneLine": "1980年代，大字不识一个的农村寡妇“二婶”，靠着一口铁锅和不服输的劲头，带领全村妇女办起了食品厂。"
  },
  {
    "title": "我的父亲被谋杀",
    "year": 2019,
    "region": "美国",
    "type": "电影",
    "genre": "悬疑 / 惊悚",
    "url": "details/movie-1951.html",
    "cover": "1.jpg",
    "oneLine": "父亲葬礼当晚，儿子收到录像带显示：凶手就在前来吊唁的亲属之中。"
  },
  {
    "title": "时间之子",
    "year": 2024,
    "region": "中国大陆",
    "type": "电影",
    "genre": "动画, 奇幻, 冒险",
    "url": "details/movie-1952.html",
    "cover": "2.jpg",
    "oneLine": "一个能暂停时间的少年，发现每多用一次能力，就会有一个亲人加速衰老。"
  },
  {
    "title": "空中浩劫第十季",
    "year": 2023,
    "region": "加拿大",
    "type": "剧集",
    "genre": "纪录片 / 灾难",
    "url": "details/movie-1953.html",
    "cover": "3.jpg",
    "oneLine": "本季还原六起真实空难，其中一起的元凶竟是一名乘客的行李箱里夹带的一只活乌龟。"
  },
  {
    "title": "少帅",
    "year": 2015,
    "region": "中国大陆",
    "type": "电视剧",
    "genre": "传记, 历史, 战争",
    "url": "details/movie-1954.html",
    "cover": "4.jpg",
    "oneLine": "从纨绔子弟到千古功臣，一部关于张学良跌宕起伏、争议不断的传奇一生。"
  },
  {
    "title": "好好拍电影",
    "year": 2025,
    "region": "中国香港",
    "type": "电影",
    "genre": "剧情 / 喜剧",
    "url": "details/movie-1955.html",
    "cover": "5.jpg",
    "oneLine": "一个草台班子剧组，在资金断流、主演跑路、场记怀孕的情况下，坚持拍完一部“神作”。"
  },
  {
    "title": "初三、冬、逃亡中",
    "year": 2023,
    "region": "日本",
    "type": "电视剧",
    "genre": "剧情 / 悬疑 / 青春",
    "url": "details/movie-1956.html",
    "cover": "6.jpg",
    "oneLine": "初三那年的冬天，好友突然失踪，七个同学被迫在十年后的同学会上，重演当年逃亡真相。"
  },
  {
    "title": "米小圈上学记第四季",
    "year": 2025,
    "region": "中国大陆",
    "type": "剧集",
    "genre": "儿童 / 喜剧",
    "url": "details/movie-1957.html",
    "cover": "7.jpg",
    "oneLine": "米小圈升入四年级，遇到一位会打快板的新语文老师，课堂变成“相声专场”。"
  },
  {
    "title": "赌博默示录：最终游戏",
    "year": 2020,
    "region": "日本",
    "type": "电影",
    "genre": "剧情, 悬疑, 犯罪",
    "url": "details/movie-1958.html",
    "cover": "8.jpg",
    "oneLine": "负债累累的赌徒开司再次被卷入赌局，这次他要在行驶于东京地下的“皇帝牌”列车上，与庄家进行一场只有一张王牌的生死豪赌。"
  },
  {
    "title": "我是霸王龙",
    "year": 2023,
    "region": "中国大陆",
    "type": "动画电影",
    "genre": "冒险 / 家庭",
    "url": "details/movie-1959.html",
    "cover": "9.jpg",
    "oneLine": "一只胆小到吃素的霸王龙，为了救朋友被迫学会“当真正的霸王”。"
  },
  {
    "title": "克拉丽斯",
    "year": 2025,
    "region": "美国",
    "type": "剧集",
    "genre": "悬疑, 惊悚, 犯罪",
    "url": "details/movie-1960.html",
    "cover": "10.jpg",
    "oneLine": "《沉默的羔羊》事件一年后，克拉丽斯·史达琳因无法走出阴影而被调离一线，却卷入了一起模仿水牛比尔作案手法的连环失踪案。"
  },
  {
    "title": "亚瑟和莉莉",
    "year": 2023,
    "region": "法国",
    "type": "电影",
    "genre": "动画 / 家庭 / 奇幻",
    "url": "details/movie-1961.html",
    "cover": "11.jpg",
    "oneLine": "小男孩亚瑟因为搬家被迫和最好的朋友莉莉分开，他造了一艘能穿越时间的纸船，只为回到昨天再说一次再见。"
  },
  {
    "title": "小美人鱼2：重返大海",
    "year": 2026,
    "region": "美国",
    "type": "电影",
    "genre": "动画, 奇幻, 冒险, 家庭",
    "url": "details/movie-1962.html",
    "cover": "12.jpg",
    "oneLine": "爱丽儿当了 10 年王妃，发现自己患上了一种“变回人鱼就会死”的怪病，她必须在婚姻与大海间抉择。"
  },
  {
    "title": "清洁工第三季",
    "year": 2025,
    "region": "美国",
    "type": "剧集",
    "genre": "剧情 / 犯罪 / 惊悚",
    "url": "details/movie-1963.html",
    "cover": "13.jpg",
    "oneLine": "专业犯罪现场清理员，在清理一桩黑帮灭门案时，发现尸体中藏着价值千万的虚拟货币密钥。"
  },
  {
    "title": "跳舞的蜗牛",
    "year": 2019,
    "region": "法国",
    "type": "电影",
    "genre": "剧情, 喜剧, 家庭",
    "url": "details/movie-1964.html",
    "cover": "14.jpg",
    "oneLine": "患有重度自闭症的男孩只对两件事有反应：黏黏的蜗牛和祖母的慢三步舞。"
  },
  {
    "title": "倾巢而出",
    "year": 2024,
    "region": "美国",
    "type": "电影",
    "genre": "动作 / 惊悚",
    "url": "details/movie-1965.html",
    "cover": "15.jpg",
    "oneLine": "前特种兵得知女儿被关进黑心私人监狱，他召集老队友用最野蛮的方式攻进去。"
  },
  {
    "title": "芝麻街：小鸡带路",
    "year": 2008,
    "region": "美国",
    "type": "电影",
    "genre": "儿童，喜剧",
    "url": "details/movie-1966.html",
    "cover": "16.jpg",
    "oneLine": "一只搞不清方向的小鸡带领芝麻街布偶们踏上寻找“世界上最好闻的虫子”的荒唐公路之旅。"
  },
  {
    "title": "猛虎出笼",
    "year": 2024,
    "region": "中国大陆 / 泰国",
    "type": "电影",
    "genre": "动作 / 犯罪",
    "url": "details/movie-1967.html",
    "cover": "17.jpg",
    "oneLine": "一个被诬陷入狱的前特种兵，必须在72小时内逃出曼谷最森严的黑狱。"
  },
  {
    "title": "我们的歌第六季",
    "year": 2025,
    "region": "中国大陆",
    "type": "综艺",
    "genre": "音乐 / 真人秀",
    "url": "details/movie-1968.html",
    "cover": "18.jpg",
    "oneLine": "六位跨时代歌手被关进一座废弃歌剧院，必须在48小时内用老歌密码解开逃生线索。"
  },
  {
    "title": "相爱的停损点",
    "year": 2027,
    "region": "中国香港",
    "type": "电影",
    "genre": "剧情 / 爱情 / 家庭",
    "url": "details/movie-1969.html",
    "cover": "19.jpg",
    "oneLine": "一对结婚十年的夫妻在离婚冷静期内，反而重新学会了如何相爱。"
  },
  {
    "title": "彼得大帝",
    "year": 2025,
    "region": "俄罗斯",
    "type": "剧集",
    "genre": "历史 / 传记 / 战争",
    "url": "details/movie-1970.html",
    "cover": "20.jpg",
    "oneLine": "一个身高两米的狂人，如何亲手将落后农奴国撕裂并锻造成横跨欧亚的帝国。"
  },
  {
    "title": "丑闻风暴",
    "year": 2024,
    "region": "韩国",
    "type": "剧集",
    "genre": "悬疑 / 惊悚 / 政治",
    "url": "details/movie-1971.html",
    "cover": "21.jpg",
    "oneLine": "王牌主播为追查真相，却发现自己正是风暴的中心。"
  },
  {
    "title": "嘉人本色",
    "year": 2023,
    "region": "中国大陆",
    "type": "电视剧",
    "genre": "都市 / 女性",
    "url": "details/movie-1972.html",
    "cover": "22.jpg",
    "oneLine": "两个死对头同期进入顶级时尚杂志，一个靠才华，一个靠背景，看谁先黑化。"
  },
  {
    "title": "麻雀侠",
    "year": 1998,
    "region": "中国香港",
    "type": "电影",
    "genre": "动作",
    "url": "details/movie-1973.html",
    "cover": "23.jpg",
    "oneLine": "一名麻将桌旁的平凡会计，被雷劈后获得“麻将超能力”，化身麻雀侠。"
  },
  {
    "title": "蓝月",
    "year": 2024,
    "region": "美国",
    "type": "电影",
    "genre": "科幻 / 爱情 / 灾难",
    "url": "details/movie-1974.html",
    "cover": "24.jpg",
    "oneLine": "蓝月即将撞毁地球之际，一个恐婚的男人决定跨越美国去参加前女友的婚礼。"
  },
  {
    "title": "致命之吻",
    "year": 2023,
    "region": "韩国",
    "type": "剧集",
    "genre": "爱情 / 奇幻 / 悬疑",
    "url": "details/movie-1975.html",
    "cover": "25.jpg",
    "oneLine": "接吻就会导致时间倒流的男人，遇到了一个只有吻她才能救活自己家族企业的奇怪女人。"
  },
  {
    "title": "变形金刚08动画版第一季",
    "year": 2008,
    "region": "美国",
    "type": "剧集",
    "genre": "科幻 / 动作 / 机甲",
    "url": "details/movie-1976.html",
    "cover": "26.jpg",
    "oneLine": "一群初出茅庐的年轻汽车人滞留地球，不仅要对抗重建肉身的威震天，还得轮流给房东交租并隐瞒外星人身份。"
  },
  {
    "title": "恋上你的床粤语",
    "year": 2024,
    "region": "中国香港",
    "type": "剧集",
    "genre": "爱情，喜剧",
    "url": "details/movie-1977.html",
    "cover": "27.jpg",
    "oneLine": "三位床伴闺蜜立下“只恋床不上心”的规矩，直到其中一人发现自己爱上了固定床伴。"
  },
  {
    "title": "残酷的复仇",
    "year": 2025,
    "region": "韩国",
    "type": "电影",
    "genre": "动作 / 犯罪 / 惊悚",
    "url": "details/movie-1978.html",
    "cover": "28.jpg",
    "oneLine": "为了给妹妹报仇，前特种兵故意输掉地下拳赛，让自己被卖进那座不为人知的“器官农场”。"
  },
  {
    "title": "极地先锋",
    "year": 2021,
    "region": "法国",
    "type": "电影",
    "genre": "冒险，传记，剧情",
    "url": "details/movie-1979.html",
    "cover": "29.jpg",
    "oneLine": "1909年，两位彼此憎恨的探险家为了争夺“第一个到达北极点”的荣誉，必须穿越即将解冻的冰原，展开一场生死竞速。"
  },
  {
    "title": "面纱下的那不勒斯",
    "year": 2024,
    "region": "意大利",
    "type": "电影",
    "genre": "悬疑， 爱情， 历史",
    "url": "details/movie-1980.html",
    "cover": "30.jpg",
    "oneLine": "一位美国艺术修复师在那不勒斯古修道院发现一幅戴着面纱的圣母像，每当她修复一处，现实中就有一名与之有关的人死亡。"
  },
  {
    "title": "谁是我们老爸",
    "year": 2025,
    "region": "中国大陆",
    "type": "网络剧",
    "genre": "喜剧 / 家庭 / 悬疑",
    "url": "details/movie-1981.html",
    "cover": "31.jpg",
    "oneLine": "三个同母异父的姐妹为争夺一套房产，必须找出她们的“法律父亲”，却意外牵扯出五个可疑的男人。"
  },
  {
    "title": "大决战！超奥特曼八兄弟",
    "year": 2024,
    "region": "日本",
    "type": "电影",
    "genre": "动作, 科幻, 奇幻",
    "url": "details/movie-1982.html",
    "cover": "32.jpg",
    "oneLine": "八个不同宇宙的奥特曼人间体，被强行拽入一个没有怪兽的和平世界，而他们要拯救的敌人，正是自己。"
  },
  {
    "title": "好奇的乔治2",
    "year": 2006,
    "region": "美国",
    "type": "电影",
    "genre": "动画, 家庭",
    "url": "details/movie-1983.html",
    "cover": "33.jpg",
    "oneLine": "小猴子乔治误闯科技博览会，把一台能将图画变成现实的机器玩坏了。"
  },
  {
    "title": "天伦乐",
    "year": 2024,
    "region": "美国",
    "type": "电影",
    "genre": "剧情、喜剧、家庭",
    "url": "details/movie-1984.html",
    "cover": "34.jpg",
    "oneLine": "一个家族三代人在圣诞节被迫团聚，意外翻出一张50年前的彩票，奖金已经涨到天文数字。"
  },
  {
    "title": "生而被杀",
    "year": 2025,
    "region": "墨西哥 / 美国",
    "type": "剧集",
    "genre": "犯罪 / 剧情 / 悬疑",
    "url": "details/movie-1985.html",
    "cover": "35.jpg",
    "oneLine": "墨西哥华雷斯城，一个出生就注定被杀的女婴，一名寻求赎罪的前毒枭杀手，和一位理想破碎的女记者，他们的命运因一场“已被预言”的谋杀而交织。"
  },
  {
    "title": "滑板狂热",
    "year": 2022,
    "region": "美国",
    "type": "电影",
    "genre": "运动 / 青春 / 喜剧",
    "url": "details/movie-1986.html",
    "cover": "36.jpg",
    "oneLine": "一个瘫痪的前职业滑手，用嘴指导三个菜鸟参加地下滑板赛。"
  },
  {
    "title": "阿依达",
    "year": 2025,
    "region": "中国大陆",
    "type": "电影",
    "genre": "音乐剧情",
    "url": "details/movie-1987.html",
    "cover": "37.jpg",
    "oneLine": "六十年代，上海一位被打成右派的歌剧指挥家流放到新疆，在那里，他遇到了能唱出“阿依达”高音C的维吾尔族牧羊女，决定在沙漠中排演《阿依达》。"
  },
  {
    "title": "少女终末旅行",
    "year": 2023,
    "region": "日本",
    "type": "动画剧集",
    "genre": "科幻 / 冒险 / 治愈 / 百合",
    "url": "details/movie-1988.html",
    "cover": "38.jpg",
    "oneLine": "两位少女在人类灭绝后的废墟上开着半履带摩托，寻找最后的食物与活下去的意义。"
  },
  {
    "title": "快乐寻回犬",
    "year": 2024,
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情 / 家庭",
    "url": "details/movie-1989.html",
    "cover": "39.jpg",
    "oneLine": "叛逆少年带着捡来的流浪犬踏上千里寻母之路，却不知这只狗隐藏着家族最后的秘密。"
  },
  {
    "title": "波琳娜的魔法日记",
    "year": 2023,
    "region": "俄罗斯",
    "type": "动画电影",
    "genre": "奇幻 / 冒险 / 儿童",
    "url": "details/movie-1990.html",
    "cover": "40.jpg",
    "oneLine": "十岁女孩波琳娜得到一本能实现愿望的魔法日记，但每个愿望都会让她失去一段记忆。"
  },
  {
    "title": "劳务师卢武镇",
    "year": 2023,
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情",
    "url": "details/movie-1991.html",
    "cover": "41.jpg",
    "oneLine": "一名资深劳务师为讨薪工人设下天局，却发现自己才是猎物。"
  },
  {
    "title": "雷霆扫毒国语",
    "year": 2025,
    "region": "中国香港",
    "type": "剧集",
    "genre": "动作 / 犯罪 / 警匪",
    "url": "details/movie-1992.html",
    "cover": "42.jpg",
    "oneLine": "缉毒警打入新型合成毒品集团内部，却发现自己的亲弟弟正是该集团的制毒天才。"
  },
  {
    "title": "时间旅人",
    "year": 2016,
    "region": "美国",
    "type": "剧集",
    "genre": "科幻 / 剧情",
    "url": "details/movie-1993.html",
    "cover": "43.jpg",
    "oneLine": "一个普通上班族发现自己每次打喷嚏都会随机穿越到过去或未来的某个时刻，且每次只能停留25分钟。"
  },
  {
    "title": "阿伦与伙伴",
    "year": 2024,
    "region": "法国",
    "type": "电视剧",
    "genre": "喜剧, 剧情, 儿童",
    "url": "details/movie-1994.html",
    "cover": "44.jpg",
    "oneLine": "1992年夏天，十岁的阿伦和三个死党为了凑钱买一盘《终结者2》录像带，展开了整个暑假的“搞钱大冒险”。"
  },
  {
    "title": "极速世界之战车",
    "year": 2025,
    "region": "美国",
    "type": "电影",
    "genre": "动作、科幻、赛车",
    "url": "details/movie-1995.html",
    "cover": "45.jpg",
    "oneLine": "为了拯救被囚禁的家人，过气的街头车手必须驾驶电磁战车，赢下死亡率高达70%的全球直播死亡赛。"
  },
  {
    "title": "逆转王牌",
    "year": 2013,
    "region": "美国",
    "type": "电影",
    "genre": "剧情 / 惊悚 / 悬疑",
    "url": "details/movie-1996.html",
    "cover": "46.jpg",
    "oneLine": "普林斯顿法学高材生为了寻找失踪的父亲，潜入一家在线扑克黑幕公司，却发现自己正在成为黑帮的洗钱工具。"
  },
  {
    "title": "宝剑降龙",
    "year": 1982,
    "region": "中国香港",
    "type": "电影",
    "genre": "动作, 奇幻, 武侠",
    "url": "details/movie-1997.html",
    "cover": "47.jpg",
    "oneLine": "一把沉睡千年的降龙宝剑，一个背负血仇的铸剑师之子，当恶龙再现人间，唯有血祭方可开锋。"
  },
  {
    "title": "摩登原始人第二季",
    "year": 2024,
    "region": "美国",
    "type": "剧集",
    "genre": "喜剧，动画，家庭",
    "url": "details/movie-1998.html",
    "cover": "48.jpg",
    "oneLine": "石器时代的原始人们继续用恐龙当车、石板当手机，笨拙而热闹地过着“现代生活”。"
  },
  {
    "title": "无雌雄大对决",
    "year": 2025,
    "region": "中国台湾",
    "type": "电影",
    "genre": "剧情",
    "url": "details/movie-1999.html",
    "cover": "49.jpg",
    "oneLine": "跨性别拳手与顺性别女拳王在擂台上对决，裁判还没敲钟，舆论已经打出了第一拳。"
  },
  {
    "title": "王牌特派员",
    "year": 2023,
    "region": "美国",
    "type": "电影",
    "genre": "喜剧",
    "url": "details/movie-2000.html",
    "cover": "50.jpg",
    "oneLine": "一个痴迷于有线电视的狂热少年，为了得到免费频道，不惜绑架了拥有卫星天线的暴躁邻居。"
  }
];

const searchForm = document.querySelector('[data-search-form]');
const searchInput = document.querySelector('[data-search-input]');
const searchResults = document.querySelector('[data-search-results]');

function renderResults(items) {
  if (!searchResults) {
    return;
  }

  if (!items.length) {
    searchResults.innerHTML = '<p class="muted">没有找到匹配影片，可以尝试输入地区、年份、类型或片名关键词。</p>';
    return;
  }

  searchResults.innerHTML = items.slice(0, 12).map((item) => `
    <a class="search-result" href="${item.url}">
      <img src="${item.cover}" alt="${item.title}" width="54" height="72" loading="lazy">
      <span>
        <strong>${item.title}</strong><br>
        <small>${item.year} · ${item.region} · ${item.type} · ${item.genre}</small><br>
        <small>${item.oneLine}</small>
      </span>
    </a>
  `).join('');
}

function runSearch() {
  const query = (searchInput && searchInput.value || '').trim().toLowerCase();
  if (!query) {
    renderResults(MOVIE_SEARCH_INDEX.slice(0, 6));
    return;
  }

  const terms = query.split(/\s+/).filter(Boolean);
  const results = MOVIE_SEARCH_INDEX.filter((item) => {
    const haystack = `${item.title} ${item.year} ${item.region} ${item.type} ${item.genre} ${item.oneLine}`.toLowerCase();
    return terms.every((term) => haystack.includes(term));
  });

  renderResults(results);
}

if (searchForm) {
  searchForm.addEventListener('submit', (event) => {
    event.preventDefault();
    runSearch();
  });
}

if (searchInput) {
  searchInput.addEventListener('input', runSearch);
  renderResults(MOVIE_SEARCH_INDEX.slice(0, 6));
}
