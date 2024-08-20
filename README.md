## UNDER DEVELOPMENT

TODO - full stack boilerplate - typescript, express, nodejs
fully create boiler plate what i think
ask chatgpt and claude


see examples in github
make changes
verify all packages
test - use ava or jest
push to github


<!-- client -->
hooks - custom hooks such as useAuth, useTheme
context - auth, theme, 
compoentns - charts 
pages - home, about, contact, login, register, dashboard
api - interact with backend with jwt token auth
utils - helper functions
services - interact with api - supabase, firebase, ai apis for frontend 
config - env, api urls
assets




<!-- server -->

#### caution - dont start the server without any chagnes made by you, this is just a boilerplate.

https://chatgpt.com/c/c66363f1-adf2-411c-8cbe-9dcffea7a766 - still running 
https://sandydev.medium.com/what-is-redis-and-how-to-use-it-with-node-js-b1835c36e3c9
https://github.com/sahat/hackathon-starter

request flow
user sends request
routes -> middleware -> controllers -> services -> res.send

routes - define routes  -- interact with controllers and middleware
middleware - check auth, check if user is admin, check if user is valid, cors, etc
controllers - get data from services, send data to services  -- interact with services not database
services - get data from db, send data to controllers  -- directly interact with database



keep everything seperate for ai - ai.controller, ai.service - since ai login can be complex