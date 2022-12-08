# [110-1] Web Programming Final
## (Group 35) Moose the Record
#### Deployed 連結 : https://moosetherecord.onrender.com/signin
#### Demo 連結 :

## 描述這個服務在做什麼
* **清晰有條理地記帳** 
    * **紀錄詳細資料** :
      每天都能將自己的花費、收入詳細的紀錄在這邊。**Moose the Record**會將用戶本月的收支狀況，在月曆上以預覽的方式呈現大略的收支金額。點擊就能查詢詳細資料，類別、備註都將會顯示，自己在哪邊在哪裡花了什麼錢都能一目了然
      不會發生到了月底卻不知道自己的錢到底花在哪邊的狀況
    * **每月統計圖表** :
      **Moose the Record**會將用戶每個月的收支分類統計成圖表，能快速地看出自己在哪邊花費最多、哪邊最少，在下個月能快速地做出省錢計畫，調整自己的花費習慣
      
## 操作/使用方式
* **Register** : 輸入帳號，密碼
* **Login** : 輸入帳號，密碼
* **Mainpage** 
    * **+** :
        1. 首先選擇紀錄的是項是屬於支出還是收入
        2. 在下方的分類中選擇欲紀錄的類別，若想自訂類別可按下最右邊的**+**號
        3. 選擇想記錄的日期(預設是今日)
        4. 輸入備註(可不填)以及金額
        5. 按下確認後會跳轉至日曆，即會顯示剛新增的資料
    * **日曆** :
        1. 日曆上每日能預覽當天的收支狀況
        2. 點擊日期即會顯示該日詳細資料
        3. 若想刪除資料請按下該日詳細資料最右方的Delete，他將會刪除該筆資料
        4. 右上角可切換年月，切換至年時能顯示該月收支狀況，但考慮詳細資料會太多，故點擊月份時不顯示詳細資料
    * **圖表** :
        1. 選擇想要顯示的圖表(支出、收入)
        2. 選擇想要查詢的月份
        3. 下方即會顯示該月份各類別的花費以及所佔的比例
    * **資產** :
        1. 總共顯示三筆資料，目前帳戶的淨資產、目前的總收入、總支出，以及當月的收支總和
    * **登出** :
        1. 點擊確認會跳轉至Sign in畫面，完成登出
## 安裝與測試步驟
* **Frontend**
    * 至**frontend**子目錄下輸入
        ``` 
        yarn 
        ```
    *   到上層目錄執行yarn start
        ``` 
        cd ..
        yarn start 
        ```
* **Backend**
    * **.env**
        ```
        MONGO_URL= //your database url
        ```
    * 至**backend**子目錄下輸入
        ```
        yarn
        ```
     * 到上層目錄執行yarn server
        ``` 
        cd ..
        yarn server
        ```

## 工作分配
* **蔡孟錡** : 
    * 前端設計(日曆)
    * 影片錄製
* **李哲言** : 
    * 前端設計(圖表、Sign in、Register)
    * 前後端連接
    * 後端架構
* **黃科維** : 
    * 前端架構、調整Css
    * 前端設計(工具列、新增項目、資產)
    * 報告撰寫

## 使用套件
### 前端
* React.js
* React Hooks
* React Router Dom
* react-spinners
* Antd Design
* Apex charts
* moment
### 前後端連接
* Axios
### 後端
* Node.js
* Express.js
* Mongoose
* Bcrypt

### database
* MongoDB

## 專題製作心得

 * **蔡孟錡** : 
 * **李哲言** :
 * **黃科維** : 這是我第一次接觸全端Project，深刻感受到團隊合作以及分工的重要性，前後端的分工及溝通大大影響開發的速度及順暢度。從一開始刻前端畫面、定義後端資料到把前後端連接起來，前前後後修改了
 不少次資料的型態。花了很多時間在查資料、研究套件如何使用，以及不斷地找出Bug並修正，過程跌跌撞撞，甚至中途還有些灰心，但最後還是將這項Project做出來了。經過這次的磨練，靠自己從無到有生出一個網站，
 讓我對網路服務的前後端有更深刻的理解。這次的網站我們有努力站在**使用者**的角度在設計網頁，希望這次的專題能讓**使用者**們有不錯的體驗。
