/*
Most of our users only care about the magic damage for their wand. After all, what's the point of doing awesome spells at low levels? Let's find out how many wands we have for each damage.magic score.

Write an aggregate that groups wands by their damage.magic.

Add an accumulator with a wand_count field to count the number of wands per damage.magic score.
*/
db.wands.aggregate([{"$group":
                     {"_id":"$damage.magic", "wand_count":{"$sum":1}}
                    }])