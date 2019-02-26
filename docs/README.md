## Steps to prepare the build

```
git clone https://github.com/segmentio/analytics-react-native.git
cd analytics-react-native
# apply patch https://github.com/segmentio/analytics-react-native/issues/16#issuecomment-439326062
yarn install
rm -rf packages/core/build
yarn core build
cd packages/core
git init
echo "node_modules" >> .gitignore
git remote add origin https://github.com/Nabobil/segment-analytics-react-native-core.git
git add -a && git commit
git push --force
```

