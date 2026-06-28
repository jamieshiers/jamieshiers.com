---
title: "What a school server room and a cruise ship in the middle of the Atlantic taught me about technology"
description: "Six years keeping school networks alive on no budget, and seasons managing guest services on ships with satellite internet and globally distributed systems. Here's what that taught me about how small organisations really use technology."
pubDate: 2026-06-28
category: "Operations"
draft: false
---

There's a moment every IT technician knows. You're halfway through your lunch, and someone appears at the door of the server room with the particular expression that means something has stopped working and thirty people are waiting. You put your sandwich down. You go and fix it. You come back to find your tea is cold.

I spent six years having that moment, more or less daily, as an IT technician at a secondary school in the West Midlands. And then I spent seasons at sea with P&O Cruises, managing guest services with up to 6,000 guests onboard — ships that were, from a technology perspective, some of the most constrained and fascinating environments I've ever worked in.

Neither of these experiences looks impressive on a traditional tech CV. There are no unicorn startups, no enterprise transformation programmes, no six-figure infrastructure projects. What there is, I've come to realise, is something more useful: a very clear picture of how real organisations — small ones, under-resourced ones, ones where technology is a means to an end rather than the point — actually live with their systems.

## The school server room

A secondary school is a masterclass in constrained IT. With over a thousand users, a significant portion of whom are actively trying to circumvent your controls at any given moment. You have a network that needs to be simultaneously locked down enough for safeguarding compliance and open enough for teachers to actually get their work done. You have a budget that would make a small business owner wince.

And you have one person. Maybe one and a half, on a good year.

What you learn very quickly in that environment is that elegant solutions are a luxury. What matters is: does it work, is it maintainable by one person under pressure, and what happens when it breaks at 8:45 on a Monday morning?

I learned to build things that were boring in the best possible way. Reliable, documented, recoverable. I learned that the fanciest solution is usually the wrong one when the person who has to support it is also the person who has to explain to a deputy head why the projector isn't working in H6.

I also learned something about trust. Teachers and support staff don't want to understand technology. They want technology to work, and they want someone they can call when it doesn't. That relationship — built over years of turning up, fixing things, and not making people feel stupid for not knowing — is worth more than any technical certification.

The school never had a security strategy. What it had was me, keeping an eye on things, knowing which machines were ancient, knowing which users would click on anything, and making pragmatic decisions about where to spend limited time and money. It wasn't pretty. But it worked.

## A week  from port, with no internet

My role on P&O wasn't technical. I was Customer Services Manager — responsible for the guest experience, handling complaints, managing the front-of-house operation on a ship carrying two and half thousand guests. IT was explicitly not my job.

Which is why it's instructive to look at how much of it I ended up doing anyway.

The most clarifying experience was a world cruise. We were weeks into the voyage — genuinely weeks from the nearest port — when our C-band satellite system failed completely. C-band was the primary link: passenger internet, crew communications, operational data, everything. What we had left was K-band, a slower and less reliable backup system with a fraction of the capacity.

There's no IT helpdesk you can call in that situation. There's no engineer you can fly out. You're in the middle of an ocean and you have to manage with what you've got.

What followed was essentially a triage exercise. K-band couldn't carry everything, so everything had to be prioritised. Operational systems that the ship needed to function got bandwidth first. Crew communications came next. Guest internet — the thing passengers had paid for and were now asking about at the front desk in increasing numbers — got whatever was left, which for stretches of the voyage was effectively nothing.

Managing that guest-facing reality — explaining, calmly and repeatedly, that the internet wasn't working and wouldn't be working, to passengers who had paid significant sums for a world cruise and were not entirely sympathetic — was its own kind of pressure. But the more interesting lesson was the systems one: the ship kept functioning because the critical systems were designed to work in a degraded state. They didn't assume connectivity. They were built for the reality of being at sea, not the ideal case of being in an office with a reliable broadband connection.

The second thing that shaped how I think about technology on ships was a piece of software I was never supposed to be responsible for.

P&O ran a custom-built Access database for certain shipboard operations. It had been built years earlier by someone who understood the specific workflow, and it was genuinely useful — but it was old, it was unsupported, and the internal IT teams at head office had quietly stopped engaging with it. When something went wrong, there was nobody to call.

Except, as it turned out, me. Not because I was an IT person, but because I'd spent enough time with the system to understand how it worked and what it needed. Over time, I became the fleet SME for a database that officially had no support. That's a situation that will be immediately recognisable to anyone who's ever worked in a small organisation — the person who knows how the critical system works is rarely the person whose job it is to know. They're just the person who paid attention.

That's a pattern I've noticed throughout my career: in constrained environments, the job description is always a starting point, never a boundary.

## What both of these have in common

Looking back at both experiences from where I sit now — working in aerospace manufacturing, implementing quality management systems and cyber security frameworks, building an IT consultancy — the thread is obvious.

Neither of my early careers was technically supposed to involve IT. School IT technician is the closest, but even there you're a one-person department covering everything from network infrastructure to broken keyboards. On the ships, I was Customer Services Manager — IT was explicitly not my job, and yet I ended up being the fleet SME for a legacy database, and managing the guest communications fallout from a satellite system failure.

The consistent pattern is this: in constrained environments, technology problems don't wait for the right person to be available. They get solved by whoever is there, understands the situation, and is willing to figure it out.

Most small businesses are living some version of this. They're not running enterprise infrastructure with dedicated security teams and change management processes. They're running Microsoft 365 on a mix of devices, supported by someone who also does three other jobs, making decisions based on gut feel and whatever they last read. Their critical processes sometimes run on software that one person built years ago and nobody else fully understands. When something breaks, they fix it themselves or it stays broken.

That's not a failure. That's just reality. And the problem with most technology advice — most security frameworks, most IT guidance, most consulting — is that it's written for the other kind of organisation. The one with the budget, the team, and the time.

## Why this matters for what I'm building

I started Parola Development because I think small businesses deserve better than the choice between enterprise-grade complexity they can't implement and consumer-grade tools that don't meet their actual needs.

And I write here — on this site, separately from Parola — because I think there's value in documenting what working in these environments actually teaches you. Not the theoretical frameworks, but the practical reality of keeping technology working when you're one person, the budget is tight, and forty people are waiting.

The school server room and the satellite link in the middle of the Atlantic are, it turns out, better preparation for that than most people would expect.

---

*I'm currently working as Operations & Quality Manager at a small UK aerospace manufacturer, leading AS9100D certification, Cyber Essentials implementation, and supply chain compliance — while building [Parola Development](https://parola.dev) on the side. If any of this resonates, I'd be glad to connect on [LinkedIn](#).*
