@echo off

set /p text="������Ʈ ���� >> "

git add *
git commit -m "%text%"
git push origin master

pause