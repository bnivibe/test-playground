# test-playground

Test repository for experimenting.

## Commands Used to Set Up This Repository

### 1. Authenticate & verify GitHub account
```bash
gh auth status
gh api user --jq '.login'
```

### 2. Create repository
```bash
gh repo create test-playground --public --description "Test repository for experimenting" --add-readme
```

### 3. Clone repository
```bash
mkdir -p /tmp/test-playground
git clone https://github.com/[USERNAME]/test-playground.git .
```

### 4. Configure git user
```bash
git config user.email "[EMAIL]"
git config user.name "[USERNAME]"
```

### 5. Create sample files & commit
```bash
# Created hello.py and utils.js manually
git add hello.py utils.js
git commit -m "[bnivibe] feat: add sample Python and JavaScript utility files"
```

### 6. Push to remote
```bash
gh auth setup-git
git push origin main
```
