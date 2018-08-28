# Project 專案設計書
## Coding Style
* 不加分號
* 須寫unit test
* 縮排2 space

## MVC 架構

M:
* Player
    - Gun
    - bullet
* Monster
* Field
    - Wall
* Stuff
* Card
    - 技能 Plugin

V: 

C:
按鍵監聽
碰撞檢測
物件更新

> 構想：每個物件有著 update 方法，在update進行物件更新，不管碰撞，等所有物件update結束，由Control做全部的碰撞檢測，將結果與碰到之物件呼叫物件的touch方法，即可減少重複之碰撞檢測。

依賴架構:

Position
GameObject, physical
Player