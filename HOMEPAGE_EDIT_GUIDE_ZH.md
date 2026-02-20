# 涓婚〉淇敼瓒呰缁嗚鏄庯紙鎸夊尯鍧楀畾浣嶏級

杩欎唤鏂囨。鍛婅瘔浣狅細濡傛灉瑕佹敼涓婚〉鐨勬瘡涓儴鍒嗭紝搴旇鏀瑰摢涓枃浠躲€佸摢涓瓧娈点€佸摢娈典唬鐮併€?

## 1. 鍏堢悊瑙ｉ」鐩粨鏋勶紙浣犱細缁忓父鏀瑰埌鐨勬枃浠讹級

- `App.tsx`锛氭€诲竷灞€銆侀〉闈㈠垏鎹€佹繁娴呰壊妯″紡寮€鍏抽€昏緫銆?
- `constants.tsx`锛氬ぇ閮ㄥ垎鍐呭鏁版嵁婧愶紙涓汉淇℃伅銆佽鏂囥€佹棩蹇椼€佸浘鐗囧銆佹妧鑳界瓑锛夈€?
- `components/Sidebar.tsx`锛氬乏渚т釜浜烘爮锛堝ご鍍忋€佸鍚嶃€佸崟浣嶃€佸湴鐐广€佺ぞ浜ら摼鎺ャ€佷富棰樻寜閽級銆?
- `components/Navigation.tsx`锛氶《閮ㄥ鑸紙Profile / Research / Log锛夈€?
- `components/views/About.tsx`锛歅rofile 椤甸潰涓讳綋銆?
- `components/views/Research.tsx`锛歊esearch 鍒楄〃椤点€?
- `components/views/ResearchDetail.tsx`锛歊esearch 璇︽儏椤碉紙鍙姞杞?markdown锛夈€?
- `components/views/Log.tsx`锛歀og 鍒楄〃 + Moments 鍥剧墖澧欍€?
- `components/views/LogDetail.tsx`锛歀og 璇︽儏椤碉紙鍙姞杞?markdown锛夈€?
- `public/content/research/*.md`锛氳鏂囪鎯?markdown 鏂囦欢銆?
- `public/content/bpost/*.md`锛氭棩蹇楄鎯?markdown 鏂囦欢銆?
- `index.html`锛氱綉椤垫爣棰樸€佸瓧浣撳姞杞姐€乀ailwind锛堣繍琛屾椂锛変富棰橀厤缃€?
- `tailwind.config.js`锛歍ailwind锛堟瀯寤烘椂锛変富棰橀厤缃€?

---

## 2. 涓€寮犺〃锛氫綘鎯虫敼浠€涔堬紝鍘诲摢閲屾敼

- 鏀圭綉绔欐祻瑙堝櫒鏍囬锛坱itle锛夛細`index.html:6`
- 鏀瑰乏渚уご鍍忥細`constants.tsx:27` 鐨?`PROFILE.avatar`
- 鏀瑰鍚嶏細`constants.tsx:20` 鐨?`PROFILE.name`
- 鏀逛腑鏂囧悕锛歚constants.tsx:21` 鐨?`PROFILE.chineseName`
- 鏀瑰ご琛旓紙Researcher锛夛細`constants.tsx:22` 鐨?`PROFILE.title`
- 鏀瑰崟浣嶏細`constants.tsx:23` 鐨?`PROFILE.affiliation`
- 鏀逛釜浜虹畝浠嬶細`constants.tsx:24` 鐨?`PROFILE.bio`
- 鏀归偖绠憋細`constants.tsx:25` + `constants.tsx:32` 鐨?`mailto`
- 鏀规墍鍦ㄥ湴锛歚constants.tsx:26`
- 鏀?CV 閾炬帴锛歚constants.tsx:28`
- 鏀圭ぞ浜ら摼鎺ワ細`constants.tsx:31` 鍒?`constants.tsx:36`
- 鏀归《閮ㄥ鑸枃妗堬紙Profile/Research/Log锛夛細`components/Navigation.tsx:10` 鍒?`components/Navigation.tsx:14`
- 鏀归椤甸粯璁ゆ墦寮€椤甸潰锛歚App.tsx:10`锛坄useState<View>('about')`锛?
- 鏀规瘡涓〉闈㈠唴瀹瑰搴︼細`App.tsx:52` 鍒?`App.tsx:56`
- 鏀?About 椤堕儴澶ф爣棰樺彞瀛愶細`components/views/About.tsx:51` 鍒?`components/views/About.tsx:53`
- 鏀?About 鈥淎bout Me鈥濇鏂囷細`constants.tsx:24` + `components/views/About.tsx:58`
- 鏀?Focus 鍒楄〃锛歚constants.tsx:141` 鍒?`constants.tsx:146`
- 鏀?Research Skills 鍒楄〃锛歚constants.tsx:148` 鍒?`constants.tsx:151`
- 鏀?Education 鍖哄潡锛歚components/views/About.tsx:92` 鍒?`components/views/About.tsx:120`
- 鏀?Publications 鏁版嵁锛歚constants.tsx:38` 鍒?`constants.tsx:71`
- 鏀?Conferences 鏁版嵁锛歚constants.tsx:73` 鍒?`constants.tsx:97`
- 鏀硅鏂囪鎯?markdown 璺緞锛歚constants.tsx:54`锛堟瘡鏉?`fileUrl`锛?
- 鏀?Research 鍗＄墖甯冨眬鏍峰紡锛歚components/views/Research.tsx:16` 鍒?`components/views/Research.tsx:64`
- 鏀?Research 璇︽儏椤垫牱寮忥細`components/views/ResearchDetail.tsx:11` 鍒?`components/views/ResearchDetail.tsx:213`
- 鏀?Log 鍒楄〃鏁版嵁锛歚constants.tsx:99` 鍒?`constants.tsx:129`
- 鏀?Moments 鍥剧墖澧欐暟鎹細`constants.tsx:131` 鍒?`constants.tsx:139`
- 鏀?Log 鍗＄墖甯冨眬鏍峰紡锛歚components/views/Log.tsx:26` 鍒?`components/views/Log.tsx:63`
- 鏀?Log 璇︽儏椤垫牱寮忥細`components/views/LogDetail.tsx:11` 鍒?`components/views/LogDetail.tsx:113`
- 鏀瑰叏绔欓鑹?瀛椾綋锛堣繍琛屾椂锛夛細`index.html:9` 鍒?`index.html:57`銆乣index.html:58`
- 鏀?Tailwind 涓婚锛堟瀯寤烘椂锛夛細`tailwind.config.js:8` 鍒?`tailwind.config.js:55`
- 鏀规繁娴呰壊鍒囨崲閫昏緫锛歚App.tsx:14` 鍒?`App.tsx:40`

---

## 3. 璇︾粏鎷嗚В锛氭寜椤甸潰鍖哄潡淇敼

## 3.1 澶栧眰妗嗘灦锛堜晶杈规爮 + 椤堕儴瀵艰埅 + 涓诲唴瀹癸級

### 3.1.1 椤甸潰鍒囨崲閫昏緫
- 鏂囦欢锛歚App.tsx:42` 鍒?`App.tsx:49`
- 璇存槑锛?
  - `currentView = 'about' | 'research' | 'log'`
  - `renderContent()` 鍐冲畾褰撳墠娓叉煋 `About` / `Research` / `Log`

濡傛灉浣犺鏂板绗洓涓〉闈紙姣斿 `projects`锛夛細
1. 鍦?`types.ts:3` 鐨?`View` 鑱斿悎绫诲瀷閲屽姞 `'projects'`
2. 鍦?`App.tsx:42` 鍒?`App.tsx:49` 鐨?`switch` 閲屽姞 case
3. 鍦?`components/Navigation.tsx:10` 鍒?`components/Navigation.tsx:14` 鐨?tabs 閲屽姞涓€椤?

### 3.1.2 椤甸潰瀹藉害
- 鏂囦欢锛歚App.tsx:52` 鍒?`App.tsx:56`
- 璇存槑锛?
  - research锛歚max-w-[1800px]`
  - log锛歚max-w-7xl`
  - about锛歚max-w-3xl`

濡傛灉浣犺寰楁煇涓〉闈㈠お绐?澶锛屽氨鏀硅繖閲屻€?

### 3.1.3 娣辨祬鑹叉ā寮?
- 鍒濆鍖栵細`App.tsx:14` 鍒?`App.tsx:25`
- 鍒囨崲锛歚App.tsx:28` 鍒?`App.tsx:40`
- 鍘熺悊锛氱粰 `document.documentElement` 鍔?鍒?`dark` class锛屽悓鏃跺啓鍏?`localStorage.theme`

---

## 3.2 宸︿晶 Sidebar锛堝ご鍍忋€佸鍚嶃€佺ぞ浜わ級

### 3.2.1 鏁版嵁鏉ユ簮
- 鍏ㄩ儴鏉ヨ嚜 `constants.tsx` 鐨?`PROFILE` 鍜?`SOCIAL_LINKS`锛?
  - `PROFILE`锛歚constants.tsx:19` 鍒?`constants.tsx:29`
  - `SOCIAL_LINKS`锛歚constants.tsx:31` 鍒?`constants.tsx:36`

### 3.2.2 鍖哄潡瀵瑰簲鍏崇郴
- 澶村儚锛歚components/Sidebar.tsx:20` 鍒?`components/Sidebar.tsx:25`锛坄src={PROFILE.avatar}`锛?
- 鑻辨枃鍚嶏細`components/Sidebar.tsx:32` 鍒?`components/Sidebar.tsx:36`
- 涓枃鍚嶏細`components/Sidebar.tsx:38`
- 澶磋锛歚components/Sidebar.tsx:40` 鍒?`components/Sidebar.tsx:42`
- 鍗曚綅锛歚components/Sidebar.tsx:47` 鍒?`components/Sidebar.tsx:53`
- 鍦扮偣锛歚components/Sidebar.tsx:55` 鍒?`components/Sidebar.tsx:60`
- CV锛歚components/Sidebar.tsx:62` 鍒?`components/Sidebar.tsx:72`
- 绀句氦鍥炬爣锛歚components/Sidebar.tsx:88` 鍒?`components/Sidebar.tsx:101`
- 涓婚鎸夐挳锛歚components/Sidebar.tsx:77` 鍒?`components/Sidebar.tsx:83`銆乣components/Sidebar.tsx:104` 鍒?`components/Sidebar.tsx:110`

### 3.2.3 閲嶈缁嗚妭
- 濮撳悕鏄寜绌烘牸鎷嗗垎涓よ鏄剧ず锛歚components/Sidebar.tsx:34` 鍒?`components/Sidebar.tsx:35`
  - 濡傛灉浣犲悕瀛椾笉鏄€滃悕 + 濮撯€濅袱涓崟璇嶏紝寤鸿鏀规垚鐩存帴鏄剧ず `PROFILE.name`锛屽惁鍒欏彲鑳芥樉绀轰笉瀹屾暣銆?

---

## 3.3 椤堕儴 Navigation锛圥rofile / Research / Log锛?

- 鏂囦欢锛歚components/Navigation.tsx:10` 鍒?`components/Navigation.tsx:14`
- 浣犲彧闇€鏀?`label` 鏂囨锛屼笉寤鸿闅忎究鏀?`id`锛堥櫎闈炰綘鍚屾鏀?`View` 绫诲瀷鍜?`App.tsx` switch锛?

娲昏穬 tab 鏍峰紡鍦細
- `components/Navigation.tsx:24` 鍒?`components/Navigation.tsx:28`

---

## 3.4 About 椤甸潰锛圥rofile 椤甸潰涓讳綋锛?

鏂囦欢锛歚components/views/About.tsx`

### 3.4.1 绉诲姩绔釜浜轰俊鎭潡
- 鍖哄潡锛歚components/views/About.tsx:10` 鍒?`components/views/About.tsx:47`
- 鏁版嵁鏉ユ簮浠嶇劧鏄?`PROFILE` 鍜?`SOCIAL_LINKS`

### 3.4.2 椤堕儴澶ф爣棰橈紙璇楀彞锛?
- 鏂囨浣嶇疆锛歚components/views/About.tsx:51` 鍒?`components/views/About.tsx:53`
- 杩欓噷鏄洿鎺ョ‖缂栫爜鏂囨湰锛屽拰 `constants.tsx` 鏃犲叧

### 3.4.3 About Me 绠€浠?
- 娓叉煋锛歚components/views/About.tsx:58`
- 鍐呭锛歚constants.tsx:24` 鐨?`PROFILE.bio`

### 3.4.4 Focus 鍒楄〃
- 娓叉煋寰幆锛歚components/views/About.tsx:67` 鍒?`components/views/About.tsx:73`
- 鏁版嵁锛歚constants.tsx:141` 鍒?`constants.tsx:146`

### 3.4.5 Research Skills 鍒楄〃
- 娓叉煋寰幆锛歚components/views/About.tsx:81` 鍒?`components/views/About.tsx:87`
- 鏁版嵁锛歚constants.tsx:148` 鍒?`constants.tsx:151`

### 3.4.6 鏁欒偛鑳屾櫙
- 褰撳墠鏄‖缂栫爜锛屼笉鍦?`constants.tsx`锛?
  - `components/views/About.tsx:92` 鍒?`components/views/About.tsx:120`
- 瑕佹敼瀛︽牎銆佸浣嶃€佸勾浠斤紝鐩存帴鏀硅繖娈垫枃鏈?

---

## 3.5 Research 椤甸潰锛堣鏂囧垪琛?+ 浼氳鍒楄〃锛?

鏂囦欢锛歚components/views/Research.tsx`

### 3.5.1 鏁版嵁婧?
- Publications锛歚RESEARCH_DATA`锛坄constants.tsx:38` 鍒?`constants.tsx:71`锛?
- Conferences锛歚CONFERENCE_DATA`锛坄constants.tsx:73` 鍒?`constants.tsx:97`锛?

### 3.5.2 鍗＄墖涓婃瘡涓瓧娈垫潵鑷摢閲?
- 鍥剧墖锛歚item.image`锛坄components/views/Research.tsx:25` 鍒?`components/views/Research.tsx:30`锛?
- 鏍囩锛歚item.tags`锛坄components/views/Research.tsx:39` 鍒?`components/views/Research.tsx:40`锛?
- 骞翠唤锛歚item.year`锛坄components/views/Research.tsx:43`锛?
- 鏍囬锛歚item.title`锛坄components/views/Research.tsx:46` 鍒?`components/views/Research.tsx:48`锛?
- 鎽樿锛歚item.abstract`锛坄components/views/Research.tsx:50` 鍒?`components/views/Research.tsx:52`锛?
- 浣滆€咃細`item.authors`锛坄components/views/Research.tsx:55` 鍒?`components/views/Research.tsx:56`锛?
- 浼氳鍚嶏細`item.conference`锛坄components/views/Research.tsx:57` 鍒?`components/views/Research.tsx:59`锛?

### 3.5.3 涓や釜鏍忕洰鏍囬
- 鈥淪elected Publications鈥濓細`components/views/Research.tsx:76`
- 鈥淐onferences鈥濓細`components/views/Research.tsx:84`

---

## 3.6 Research 璇︽儏椤碉紙鐐瑰嚮璁烘枃鍚庣殑椤甸潰锛?

鏂囦欢锛歚components/views/ResearchDetail.tsx`

### 3.6.1 璇︽儏鍐呭鏉ユ簮閫昏緫
- 濡傛灉 `paper.fileUrl` 鏈夊€硷紝鍒?`fetch` 瀵瑰簲 markdown锛歚components/views/ResearchDetail.tsx:37` 鍒?`components/views/ResearchDetail.tsx:55`
- markdown 鍐呭娓叉煋锛歚components/views/ResearchDetail.tsx:157` 鍒?`components/views/ResearchDetail.tsx:161`
- 濡傛灉 `fileUrl` 涓虹┖锛屾樉绀哄崰浣嶆彁绀猴細`components/views/ResearchDetail.tsx:163` 鍒?`components/views/ResearchDetail.tsx:165`

### 3.6.2 濡備綍缁欒鏂囨帴鍏?markdown
1. 鍦?`public/content/research/` 涓嬫柊澧炴枃浠讹紙渚嬪 `my-paper.md`锛?
2. 鍦ㄥ搴旇鏂囧璞￠噷璁剧疆锛?
   - `fileUrl: "/content/research/my-paper.md"`锛堢ず渚嬭 `constants.tsx:54`锛?
3. 鍒锋柊椤甸潰锛岀偣鍑昏璁烘枃鍗冲彲鏄剧ず markdown

### 3.6.3 鎿嶄綔鎸夐挳鏄剧ず鏉′欢
- 鈥淩ead Paper鈥?鎸夐挳锛氫粎褰?`paper.pdfUrl` 瀛樺湪涓斾笉绛変簬 `#` 鎵嶆樉绀猴紙`components/views/ResearchDetail.tsx:99`锛?
- 鈥淰iew Code鈥?鎸夐挳锛氫粎褰?`paper.codeUrl` 瀛樺湪鏃舵樉绀猴紙`components/views/ResearchDetail.tsx:110`锛?

### 3.6.4 BibTeX 鐢熸垚
- 妯℃澘鍦細`components/views/ResearchDetail.tsx:176` 鍒?`components/views/ResearchDetail.tsx:181`
- 閿悕鍙栫涓€浣滆€呯殑濮擄紙`split(' ')[1]`锛? 骞翠唤锛岀壒娈婂鍚嶅彲鑳借鎵嬪姩璋冩暣

### 3.6.5 markdown 鏄剧ず鏍峰紡锛堟爣棰樸€佹钀姐€佷唬鐮佸潡锛?
- `MarkdownComponents` 瀹氫箟鍦細`components/views/ResearchDetail.tsx:11` 鍒?`components/views/ResearchDetail.tsx:30`
- 浣犲彲浠ュ湪杩欓噷鏀?h1/h2/p/code 绛夋覆鏌撴牱寮?

---

## 3.7 Log 椤甸潰锛堟棩蹇楀崱鐗?+ Moments 鍥剧墖澧欙級

鏂囦欢锛歚components/views/Log.tsx`

### 3.7.1 宸︿晶鏃ュ織鍒楄〃鏁版嵁
- 鏁版嵁锛歚LOG_DATA`锛坄constants.tsx:99` 鍒?`constants.tsx:129`锛?
- 鍒楄〃娓叉煋锛歚components/views/Log.tsx:27` 鍒?`components/views/Log.tsx:64`
- 鏍囬 鈥淢ukj1's Log鈥濓細`components/views/Log.tsx:23`

姣忔潯鏃ュ織鍗＄墖瀛楁锛?
- 鏃ユ湡锛歚log.date`锛坄components/views/Log.tsx:47` 鍒?`components/views/Log.tsx:49`锛?
- 鏍囬锛歚log.title`锛坄components/views/Log.tsx:51` 鍒?`components/views/Log.tsx:53`锛?
- 鎽樿锛歚log.summary`锛坄components/views/Log.tsx:55` 鍒?`components/views/Log.tsx:57`锛?
- 灏侀潰锛歚log.image`锛坄components/views/Log.tsx:35` 鍒?`components/views/Log.tsx:40`锛?

### 3.7.2 鍙充晶 Moments 鍥剧墖澧?
- 鏁版嵁锛歚GALLERY_IMAGES`锛坄constants.tsx:131` 鍒?`constants.tsx:139`锛?
- 娓叉煋锛歚components/views/Log.tsx:76` 鍒?`components/views/Log.tsx:92`
- 灏鹃儴鏂囨 鈥淐aptured on iPhone ...鈥濓細`components/views/Log.tsx:95` 鍒?`components/views/Log.tsx:97`

鐐瑰嚮鍥剧墖浼氭墦寮€ Lightbox锛?
- `components/views/Log.tsx:103` 鍒?`components/views/Log.tsx:106`
- Lightbox 缁勪欢鍦?`components/Lightbox.tsx`

---

## 3.8 Log 璇︽儏椤?

鏂囦欢锛歚components/views/LogDetail.tsx`

### 3.8.1 鍐呭鏉ユ簮閫昏緫
- 鑻?`entry.fileUrl` 鏈夊€硷細鍔犺浇 markdown锛坄components/views/LogDetail.tsx:36` 鍒?`components/views/LogDetail.tsx:50`锛?
- 鑻?`entry.fileUrl` 涓虹┖锛氬洖閫€鍒?`entry.summary`锛坄components/views/LogDetail.tsx:51` 鍒?`components/views/LogDetail.tsx:53`锛?

### 3.8.2 濡備綍缁欐棩蹇楁帴鍏?markdown
1. 鍦?`public/content/bpost/` 涓嬫柊寤?`xxx.md`
2. 鍦?`constants.tsx` 瀵瑰簲鏃ュ織瀵硅薄璁撅細
   - `fileUrl: "/content/bpost/xxx.md"`锛堢ず渚嬶細`constants.tsx:109`锛?

### 3.8.3 markdown 鏍峰紡
- `LogMarkdownComponents` 鍦?`components/views/LogDetail.tsx:11` 鍒?`components/views/LogDetail.tsx:29`

---

## 4. 閲嶇偣鏁版嵁鏂囦欢锛歚constants.tsx` 瀛楁璇存槑

## 4.1 `PROFILE`锛坄constants.tsx:19` 鍒?`constants.tsx:29`锛?
- `name`锛氳嫳鏂囧悕锛堜晶杈规爮/鍙兘鐢ㄤ簬 AI 鏂囨锛?
- `chineseName`锛氫腑鏂囧悕
- `title`锛氳亴浣嶅ご琛?
- `affiliation`锛氭満鏋?
- `bio`锛氫釜浜轰粙缁?
- `email`锛氶偖绠憋紙娉ㄦ剰绀句氦閲岀殑 mailto 涔熻涓€璧锋敼锛?
- `location`锛氬湴鐐?
- `avatar`锛氬ご鍍?URL
- `cvLink`锛欳V 鍦板潃

## 4.2 `RESEARCH_DATA` / `CONFERENCE_DATA`
- 鏍稿績瀛楁锛?
  - `id`锛氬敮涓€ ID锛屼笉鑳介噸澶?
  - `title`
  - `authors`锛堝瓧绗︿覆鏁扮粍锛?
  - `conference`
  - `year`锛堟暟瀛楋級
  - `abstract`
  - `tags`锛堟暟缁勶級
  - `image`
  - `pdfUrl`
  - `codeUrl`
  - `doi`
  - `fileUrl`锛坢arkdown 璺緞锛屾牸寮忛€氬父鏄?`/content/...`锛?

## 4.3 `LOG_DATA`
- `id`锛氬敮涓€ ID
- `date`锛氬缓璁?`YYYY-MM-DD`
- `title`
- `summary`
- `category`锛氬彧鑳芥槸 `'Dev' | 'Life' | 'Reading'`锛堣 `types.ts:24`锛?
- `image`
- `fileUrl`

---

## 5. markdown 鏂囦欢搴旇鏀惧摢閲?

- 璁烘枃璇︽儏锛歚public/content/research/`
- 鏃ュ織璇︽儏锛歚public/content/bpost/`
- 鍦ㄦ暟鎹噷鐢ㄧ粷瀵圭珯鐐硅矾寰勫紩鐢紝渚嬪锛?
  - `/content/research/social-dynamics.md`
  - `/content/bpost/optimizing-pandas.md`

鍙傝€冪幇鏈夛細
- `public/content/research/social-dynamics.md`
- `public/content/bpost/optimizing-pandas.md`

---

## 6. 鍏ㄧ珯鏍峰紡锛堥鑹层€佸瓧浣撱€佸姩鐢伙級鎬庝箞鏀?

## 6.1 瀛椾綋鍜岄鑹?
- `index.html:9` 鍒?`index.html:57`锛歍ailwind 杩愯鏃?config
- `index.html:58`锛欸oogle Fonts 寮曞叆
- `tailwind.config.js:11` 鍒?`tailwind.config.js:41`锛氭瀯寤烘椂瀛椾綋鍜岄鑹?

寤鸿锛?
- 鑻ヤ綘鍙敼鏂囨鍜屽唴瀹癸紝涓嶉渶瑕佸姩杩欎袱澶勩€?
- 鑻ヤ綘瑕佺郴缁熸敼瑙嗚椋庢牸锛屾渶濂藉悓鏃舵敼 `index.html` 鍜?`tailwind.config.js`锛岄伩鍏嶅紑鍙?鏋勫缓鐜涓嶄竴鑷淬€?

## 6.2 鍔ㄧ敾
- `animate-slide-in` 瀹氫箟锛?
  - `tailwind.config.js:43` 鍒?`tailwind.config.js:50`
  - `index.html:45` 鍒?`index.html:53`

---

## 7. 鐩墠浠ｇ爜閲屼綘瑕佺壒鍒敞鎰忕殑鐐?

- `constants.tsx:21` 鐨?`chineseName` 鍦ㄥ綋鍓嶆枃浠堕噷鏈夌紪鐮?瀛楃涓插紓甯歌抗璞★紙鏄剧ず涔辩爜鍜屽紩鍙蜂笉瀹屾暣锛夛紝浣犱慨鏀规椂寤鸿鐩存帴鏀规垚鏍囧噯 UTF-8 瀛楃涓诧紝渚嬪 `"鏉ㄧ澘椹?`銆?
- 澶氬鍑虹幇 `閳?` / `婕廯 杩欑被涔辩爜瀛楃锛堝 `components/views/Research.tsx:40`銆乣components/views/Log.tsx:96`銆乣components/Sidebar.tsx:113`锛夛紝濡傛灉浣犺鍋氬唴瀹规竻鐞嗭紝鍙粺涓€鏇挎崲涓烘甯哥鍙凤紙濡?`鈥銆乣漏`銆乣-`锛夈€?
- `components/GeminiChat.tsx` 鍜?`components/Logo.tsx` 褰撳墠娌℃湁鍦?`App.tsx` 涓寕杞斤紱浣犳敼瀹冧滑涓嶄細褰卞搷涓婚〉锛岄櫎闈炰綘鎶婄粍浠跺紩鍏ュ苟娓叉煋鍒?`App.tsx`銆?

---

## 8. 鏈€甯歌鏀瑰姩鐨勨€滄渶鐭矾寰勨€?

## 8.1 鍙敼涓汉淇℃伅锛堝悕瀛?绠€浠?澶村儚/CV锛?
- 鍙敼 `constants.tsx` 鐨?`PROFILE` 鍖哄潡锛坄constants.tsx:19` 鍒?`constants.tsx:29`锛?

## 8.2 鏂板涓€绡囪鏂囷紙甯﹁鎯?markdown锛?
1. 鍦?`constants.tsx` 鐨?`RESEARCH_DATA` 鏂板瀵硅薄锛堝弬鑰?`constants.tsx:39` 鍒?`constants.tsx:55`锛?
2. 鍦?`public/content/research/` 鏂板缓 markdown
3. 璁剧疆 `fileUrl: "/content/research/浣犵殑鏂囦欢鍚?md"`

## 8.3 鏂板涓€鏉℃棩蹇楋紙甯﹁鎯?markdown锛?
1. 鍦?`constants.tsx` 鐨?`LOG_DATA` 鏂板瀵硅薄锛堝弬鑰?`constants.tsx:100` 鍒?`constants.tsx:110`锛?
2. 鍦?`public/content/bpost/` 鏂板缓 markdown
3. 璁剧疆 `fileUrl: "/content/bpost/浣犵殑鏂囦欢鍚?md"`

## 8.4 鏀瑰鑸枃妗?
- 鏀?`components/Navigation.tsx:10` 鍒?`components/Navigation.tsx:14` 鐨?`label`

## 8.5 鏀?About 椤甸潰鏁欒偛缁忓巻
- 鐩存帴鏀?`components/views/About.tsx:92` 鍒?`components/views/About.tsx:120` 鏂囨湰

---

濡傛灉浣犳効鎰忥紝鎴戜笅涓€姝ュ彲浠ュ熀浜庤繖浠借鏄庯紝甯綘鎶婂綋鍓嶄富椤靛唴瀹瑰叏閮ㄦ浛鎹㈡垚浣犵殑鐪熷疄淇℃伅锛堜腑鑻辨枃濮撳悕銆佸鏍°€佺爺绌舵柟鍚戙€佽鏂囥€佹棩蹇椼€佸浘鐗囷級骞堕『鎵嬩慨鎺変贡鐮佸瓧绗︺€?

