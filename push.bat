@echo off

set /p text="업데이트 내용 >> "

git add *
git commit -m "%text%"
git push origin master

pause