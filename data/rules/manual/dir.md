---
description: "Guidelines for dir"
globs: "**/*"
__meta__type: "feature"
__meta__repo: "ewail/FreeMat"
__meta__tags: ["FreeMat","MATLAB","Directory Management","File System","Command Line"]
__meta__rate: 7
---

 Usage

In some versions of FreeMat (pre 3.1), the dir function was
aliased to the ls function. Starting with version 3.1, the
dir function has been rewritten to provide compatibility
with MATLAB. The general syntax for its use is

    dir

in which case, a listing of the files in the current
directory are output to the console. Alternately, you can
specify a target via

    dir('name')

or using the string syntax

    dir name

If you want to capture the output of the dir command, you
can assign the output to an array

    result = dir('name')

(or you can omit 'name' to get a directory listing of the
current directory. The resulting array result is a structure
array containing the fields:

* name the filename as a string
* date the modification date and time stamp as a string
* bytes the size of the file in bytes as a uint64
* isdir a logical that is 1 if the file corresponds to a
  directory.

Note that 'name' can also contain wildcards (e.g., dir *.m
to get a listing of all FreeMat scripts in the current
directory.

* FreeMat_Documentation
* Operating_System_Functions
* Generated on Thu Jul 25 2013 17:17:45 for FreeMat by
  doxygen_ 1.8.1.1

