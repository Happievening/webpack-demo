echo "------0/4 Update source code------"
sh ./autoupdate.sh
echo "------1/4 Yarn build------"
yarn && yarn build
echo "------2/4 git checkout------"
git checkout master
git branch gh-pages;git checkout gh-pages
echo "------3/4 Preparing files------"
ls | grep -v dist | xargs rm -r
cp ./dist/* ./
rm -r ./dist
echo "------4/4 Push to github gh-pages branch------"
git add .
git commit -m "Auto Deployed."
git remote add origin git@github.com:Happievening/webpack-demo.git
git push origin gh-pages --force
echo "------Done. Switch back to master branch.------"
git checkout master
