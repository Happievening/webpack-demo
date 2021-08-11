echo "------1/3 git checkout------"
git checkout master
git branch -D gh-pages
git checkout gh-pages
echo "------2/3 Preparing files------"
ls |grep -v dist|xargs rm -r
cp ./dist/* ./
rm -r ./dist
echo "------3/3 Push to github gh-pages branch------"
git add .
git commit -m "Auto Deployed."
git remote add origin git@github.com:Happievening/webpack-demo.git
git push origin gh-pages
echo "------Done. Switch back to master branch.------"
git checkout master