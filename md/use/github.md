# Github

### Collaborative Process Rundown

1. Fork the repository on your own account.
2. Clone the repository to your local machine.
3. Check out a new "topic branch"
4. Make changes.
5. Push your topic branch to your fork.
6. Create a pull request.
7. Make any requested changes.
8. Merge the pull request into master branch. Topic branch is deleted. 

## Step 1: Forking

On the [Github Repository page](https://github.com/andyruwruw/STEM4Kids), the option to fork the repository should appear at the top right, next to "Watch" and "Star" options.

This should create a version of the repository owned by your account but still linked to the original.

## Step 2: Cloning

Open up your [command line](./commandprompt.md) program of choice.

I usually use iTerm for my macbook, but whimp out and use the [Github Desktop Application](https://desktop.github.com/) on my Windows desktop because of its ease of use.

Once in a directory you wish to download the repository locally, enter the following with your forked-repositories link. Link is found in a green button on your repository page - "Clone or download".

```
git clone https://github.com/andyruwruw/STEM4Kids.git
```

The files should load into a new file, which is linked to the repository.

## Step 3: Adding the Upstream Route

Use command line to enter the newly created folder.

Enter the following to add the original repository as a remote.

```
git remote add upstream git@github.com:andyruwruw/STEM4Kids.git
```

You'll be able to pull from the original repository to load my new code as well, by using the following lines while within the local folder for the repository in command line.

```
git fetch upstream
git merge upstream/master
```

That should load any new changes made to the original repository on my account and merge them with your forked repository.

## Step 4: Check Out a Topic Branch

Before you make any suggestions, they say to "checkout a topic branch".

No Clue.

But you can do that by -

```
git checkout -b name_of_whatever_youre_working_on
```

## Step 5: Committing

Once you're done with some workable changes, add those changes to a commit.

To check what files have been altered.
```
git status
```
To add files to a new commit.
```
git add file_path
```
or honestly just add every changed file -
```
git add -A
```

## Step 6: Pushing

Push the topic branch to your own fork.

```
git push origin name_of_whatever_youre_working_on
```

## Step 7: Creating a Pull Request

Last but not least, create a pull reqest.

Go to your Github online and to your forked version of the repository.

If you see "your recently pushed branches" you can click "Compare and Pull Request".

Or select your branch fromt the dropdown, and click "Pull Request" or "Compare" at the top right.

Text me and I'll accept the request and the changes will be made.

## A Concluding Post Script
I looked all of that up online because I mostly work with myself. It looks like a huge pain so if we want to do something else to share files I'm all for it.




