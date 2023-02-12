# Based on OpenAI API Quickstart - Node.js example app

This is the modifed exmaple based on the "pet name generator app" in the OpenAI API [quickstart tutorial](https://beta.openai.com/docs/quickstart). It uses the [Next.js](https://nextjs.org/) framework with [React](https://reactjs.org/). Check out the tutorial or follow the instructions below to get set up.

It is to demo for network automation students using devnet environment.

## Setup

1. If you don’t have Node.js installed, [install it from here](https://nodejs.org/en/)
      
    for you use ubuntu Linux devasc virtualbox, you can install nodejs version 18+ using this [link](https://www.digitalocean.com/community/tutorials/how-to-install-node-js-on-ubuntu-22-04), using the option2.

2. Clone this repository
   ```bash
   git clone https://github.com/wyonghao/openai_api_demo.git
   ```

3. Navigate into the project directory

   ```bash
   $ cd openai_api_demo
   ```

4. Install the requirements

   ```bash
   $ npm install
   ```

5. Make a copy of the example environment variables file

   ```bash
   $ cp .env.example .env
   ```

6. Add your [API key](https://beta.openai.com/account/api-keys) to the newly created `.env` file. The Key shall start with `sk-****`
      
   ```bash
   nano .env
   ```
      
7. Run the app

   ```bash
   $ npm run dev
   ```

8. Setup the port forward in virtualbox settings to forward 3000 to the port that the host using for example you can use 5555 as the below picture:

![Screenshot](virtualboxportforwarding.JPG?raw=true "portforwarding in virtualbox")

You should now be able to access the app at [http://localhost:5555](http://localhost:5555), which maps to the guest OS' [http://localhost:3000](http://localhost:3000)! For the full context behind this example app, check out the [tutorial](https://beta.openai.com/docs/quickstart).
