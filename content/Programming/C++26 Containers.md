![[C++26 Container Decision Tree.webp]]
I made this handy decision tree for [all data structures in C++26](https://cppreference.com/w/cpp/container.html) using [Draw.io](https://www.drawio.com/) 🙂

It's based on [an old C++11 version](https://share.google/images/iUEoGunuUfEKDOa2C) somebody else made.

**Update (December 27, 2025)**: I fixed an error where the "Allow Duplicates" decision was the wrong way around; `multiset` and `multimap` allow duplicate keys, while `set` and `map` do not (the same applies to the `unordered` versions). And I added a little additional context to "Lookup by Key" because sometimes you just want to use a `set` (or `map`) and traverse it using iterators, no keys required. I also marked `stack`, `queue`, and `priority_queue` because they can be used as container adapters (by default `stack` and `queue` use `deque` and `priority_queue` uses `vector` under the hood). Also, fun fact, apparently "adaptor" is the U.K. spelling, but it's already on there and that's what [cppreference.com](https://cppreference.com/w/cpp/container.html#Container_adaptors) uses.
