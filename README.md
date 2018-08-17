# PS3 Controller Raspberry Pi NodeJS

A basic example of interfacing a PS3 controller on a Raspberry Pi using NodeJS.

[![Demo](resources/demo.gif?raw=true)](https://youtu.be/3plB-zhrj8k)

## Prerequisites

### [1. Have a PS3 controller paired](https://wouterdeschuyter.be/blog/configure-a-ps3-controller-to-automatically-connect-to-a-raspberry-pi)

### [2. Have NodeJS installed](https://wouterdeschuyter.be/blog/install-latest-version-of-nodejs-on-raspberry-pi)

Note: at the moment of writing it doesn't work yet with NodeJS 10, use latest version of 9 instead (I used `9.9.0`).

### 3. Packages

```bash
sudo apt-get update
sudo apt-get install joystick -y
```

## Wiring

![Wiring](resources/sketch_bb.jpg?raw=true)

## Install

```bash
npm i
```

## Usage

```bash
sudo node .
```

We need to use `sudo` because we can't communicate with the GPIO otherwise, there's ways around this but out of scope.
