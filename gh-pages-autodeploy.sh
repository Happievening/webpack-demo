echo "------1/6 git checkout------"
git checkout gh-pages
echo "------2/6 Preparing files------"
ls |grep -v (.git|dist)|xargs rm -rf
echo "------Done. Switch back to master branch.------"