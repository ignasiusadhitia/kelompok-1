import React from "react";

const Footer = () => {
  return (
    <footer class="bg-gray-100 text-gray-600 py-4">
      <div class="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-6">
        <div>
          <h2 class="text-lg font-semibold text-gray-600 mb-4">
            About BlueSky Community
          </h2>
          <p class="text-sm">
            BlueSky Community is a platform for individuals passionate about
            growth, knowledge, and building connections. Join us to connect,
            learn, and grow together.
          </p>
        </div>
        <div>
          <h2 class="text-lg font-semibold text-gray-600 mb-4">Quick Links</h2>
          <ul class="space-y-2 text-sm">
            <li>
              <a href="#" class="hover:text-sky-600">
                Home
              </a>
            </li>
            <li>
              <a href="#" class="hover:text-sky-600">
                About Us
              </a>
            </li>
            <li>
              <a href="#" class="hover:text-sky-600">
                Contact Us
              </a>
            </li>
            <li>
              <a href="#" class="hover:text-sky-600">
                Profile
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h2 class="text-lg font-semibold text-gray-600 mb-4">
            Contact Information
          </h2>
          <p class="text-sm">
            <strong>Address:</strong> 123 Blue Avenue, Indonesia
          </p>
          <p class="text-sm">
            <strong>Email:</strong>{" "}
            <a
              href="mailto:support@bluesky.com"
              class="text-blue-400 hover:text-gray-600"
            >
              support@bluesky.com
            </a>
          </p>
          <p class="text-sm">
            <strong>Phone:</strong> +123 456 789
          </p>
        </div>
        <div>
          <h2 class="text-lg font-semibold text-gray-600 mb-4">Follow Us</h2>
          <p class="text-sm mb-4">Stay connected with us on social media:</p>
          <div class="flex space-x-4">
            <a href="#" class="text-gray-400 hover:text-gray-600">
              <img
                src="https://cdn-icons-png.flaticon.com/256/124/124010.png"
                alt="Facebook"
                class="w-8 h-8"
              />
            </a>
            <a href="#" class="text-gray-400 hover:text-gray-600">
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAhFBMVEUEBAT6+voAAAD///8ODg4ZGRlGRkaSkpIRERH19fUzMzP5+fnLy8vT09Pq6urm5ubDw8N2dnaIiIhkZGTw8PAqKira2trg4OA7Ozu2traYmJi8vLyQkJCAgIDV1dVeXl6tra1NTU1vb28iIiKjo6M/Pz9XV1d7e3umpqYlJSUcHBxKSkpRs/0VAAAJ9ElEQVR4nO1da1fbOBB1lIQkBEKhoQmB0pZHy+P//791MFhXHlmRNTNsd8/csx+2J8H2jWXNnaerymAwGAwGg8FgMBgMBoPBYDAYDAaDwWAwGAwGg8FgMBgM/1e4XOidVfTI9FTb16McvN5LXoibvJ91W2OqS9E9jvOwfpG7EOc2cOBL7Zv4fTzKwfhabDk5d+LPuThWJhieLknxXOhSnPvpzzj+rU2wPuHxOovhaCG0nNwNEPxTdMzJwDP+ybyJJyLr1N0BwV3ZEYcydNeZFL8LMHS/4IBXhb/ZQIaVm2au0zHfZLjpov05x6eli2Iow8p9hZtIDYX/6Ja7Tp078wTP5qVHG8ywclftec+uv+xx0uC0xi2wL3xu2vO4U09wXW4nChi61ceZ11Oi167gDr9yKAaHWjLsxHCG9fP/cWr6cAD90fgbZ526GdtONChgWLmHluKse2r3Gy7sofzC3DnfTjQoYlhLxY/l84tQfIB1Wry43O+lJ1hqJxqUMKzca3v2DV2nG9gBC6+t1k4CdqJBEcPK7dp1Slai28L6+ll0caGdmPD25EKGficf/yAUL4Ai+TTr6LdgJ7gKt4xhfaMWH9ewpusUPBDyacaxpexEg0KGcKNqZ7D72aVXdvTTw4feCdmJBsUM/Y2izmCw1d8NvEZ0X7i6aI9ShpV7btcpcQYDD2Q9TIK7H2Anfgr4YMUM4UZRZ9BNVv4yvwy5TLeVsxMNyhlW7ktL8SYpbQa4iq4641vTEByGrt1QlkeE4lNJACn0J2SCkgyG4CpSkR0Y7dzVFjy/VBCWgcXQG64D0oas4p4D7hh7cB84DCs3b28UjfRhmGz0mHO5gZ3I/FEOg8Ww3trbK1qlpE2Wq+gPJmQnGvAYwoYSkTbHC3/Fh013bSf812WCkW/gMvS+En1wglVHdtvul6ewNRGfjAEmw9pVbK9r2U0M4dZ4yLihnRgtmQ5TAC5DdBWptKkgapN0FQM7Mc7al3LBZ+i+JaTND7jur4nrxthH8ovDwWZYbyh+naakzXjVn97EtN34QjbDxGeIriKJcwdRm96IUnCr5exEAwmG4CpSafMIF9+TVYSAwUBPJAcCDNHwpaVNXEu7F6kochQSDMHwUaMQuAuxGwRblZg/gZhLHMSBq3hFozawBmnYBf62/nwrn8cWYVgvtFZxpaXNqHuPHDqSRbHHQ5BhiOnoRTfTF0ib7m4bBFeF7UQDIYaQVYxImylsJaEqwHzr+Eml5EmMoVv13wrksURJ5rYQWBO3Ew2kGGLsaUF0JVTFoD1wUwis3VY61TJiDNFVjEgbcI1aVRDYiZVWQZcgQ8+C+rsYtRm9h5gCOzE65D8WQ45h5Y78HUlJm3dVEBZ0adiJBiKa5h3gKp51H6pA2uzFtQsKuiTqi3ogeA8x70f93SBqU9+xoKDrSbEkT5JhvU69BCduLEqblQsS9Up2ooEoQ3zaFnSdgrS5RrHKrp5KQpghZL9PyE289wmpERBUsxMNZBnWjkS7+OjuEZTEtaChD1kIMwyeNuIKoX3of2CFIc2wgpBGUtp8fEnFn0DIM5z4/ZRKm6MOQ1U70UCcYWDoqLTZBRR17UQDBYbgKm6oybgFiqL5iT7IM0SHNyZtvKUfKduJBgoM0SpEpM33QNoonL4DDYZoFRZ0P/U+0yfsM1oMIatIpc0LZEI/oQtGhSE2SkSkzd2nrlMdhpgtW5JqGozalBWgDoEWQ1in6aiNtmjTYohZxYi0+eU/TGQVZaDFMMg50XJ3L21ookMYegzBVUyXu0sVP/VAjWHgKlJpcwlZRcGe2gj0GKJ6SUobZfmtyRDUy5ompEDa8Iu5E1BkiBXt9X3qfvjspc1SU4FrMsSKdnqfQNqMT/+zDCGASO4TtlVoxjJUGVZuvob7lIra6HXa6zIMlmJS2uhFhZUZYk9tWtoI9I7Eoc4Q/P2ItPmW4C8E7VUKGadIyZo79h/KV0M1UN5pJkEIOCJtfLEJp6c2BWVrcYoEa5c+KW10QhqqmiboXX8jQaUN6B6ZLqAuVBnuOgSjnXx3yiGNz/EtAMSlR2nzF9e1RRAU/iZMO7arkeiqAPR8fAjfj0986C02pMB/cXhP7UGoRaKwEWEzTZp2CD2KjV/yUIsmQsP5ausgahHr5PP85ad5KcW8g0bCvZ1D006yFRh6FA9pKDHEBpG7psbrJLFlIn9pV1EnMxNpEHH3Pvud7OSTHsqmnD8EK46mnUysc1PPX6SD20MjB/yIdqK93CBqkRpSINc++gaFPP59T4MIdhhGOvmAv2hPgny1SX/hL3rDNGoDPcWiBQyS9aV7BIW/i45xx8RhqpNP1FUUZ4gNIl2HF6Nr6U4+wZCGMMMDDSLQUxuTNj6rKugqCldfhg0ikS/sMqWNnKsoXCN8qPA32IeS0kYs+y1ayX55uJHQbf1vQBLcmFUVy34LMnQV2om+RkK8T6RtFjr5mFPaPOQYhnait+E8kOC0k+888WEZBBliAXDiKcKu36S0WcusUzGG+Y2EmOCmNWFQ2EhCj0WQYhjYiYfkIxREgWknH0gbkZCGEEMw5YeneUNWMTIhAqWNxDqVYRhMcjycCkRXMSltJFxFmW71OdqJjMEk6CpFhhRkPtB5EJk4gHaCliJG/wImSlNpA71F/DEnIlMj0E7kJZCgp5aOeUZpw1+nEgxLGglxP6HS5tkXjLGz3wLTW/LtBP5VsnYPR0ty26L4E3igDWaIloRC6eSQAnZIgz0nCmeVDnpo0FUkNVFu7qUNM6TBnfU12SS2jPSfYmojNaSAGdJgTqTjvEEE46qRTj6/FfEK+nlTBYOG88E/NXawJ6UNq1Cax5A3GT7oYKfS5tUfmxPSYM2+5L5BxN37ZRqJ2vjfjxTgDgBnQutrmZ3AQ/xJ6FmcBMfIfjPmCL9AYK1UXKGrSKXN1J+g3FUsnwWNjS+b0kGH+FKXZEKqPPtdPs9b5g0i+CynpmaXZ79Lp85LTYYPsmp0/pIf5VY8HKSUIU78ZYVTgrmlNCHlpU2W4xlB4bsRcPYqKQEaeCz0TbrSBjRF6W5W9gYPX8UkEJvGrGKqQ6owpFH0FhYcTMKf+Bvsyk/k7UNH/lxF67TkXUH4PiCJhHQgHc6P97jc4+3/jl/8Oi06Wcn7nrCgS6T4Jdi3Uu8BK3EVh7+VjBR08YEhjTQ+ofdb0E7gQbcJVoDPGDMRFHQx7QQe9ibvJurPKFCaDE+r+nsp6g12ay4ER5KJ1p8FE0FSDHVnFEAETPyRyH5PrWbvt6vw1bzPsmfaJz/yIF8o7S9iO7uZzWa7N7Bebhg9+uWMYhf86+biov5Ps7td9w3Z/85bvw0Gg8FgMBgMBoPBYDAYDAaDwWAwGAwGg8FgMBgMhr8S2eU0wzDwKiaKmE9V8A9RGXTvDxY5rQAAAABJRU5ErkJggg=="
                alt="Twitter"
                class="w-8 h-8"
              />
            </a>
            <a href="#" class="text-gray-400 hover:text-gray-600">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/1024px-Instagram_icon.png"
                alt="Instagram"
                class="w-8 h-8"
              />
            </a>
            <a href="#" class="text-gray-400 hover:text-gray-600">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkAsKpAkX1x-5LnYdaCQ3md14sHz7T5NSWaQ&s"
                alt="LinkedIn"
                class="w-8 h-8"
              />
            </a>
          </div>
        </div>
      </div>
      <div class="mt-4 border-t border-sky-600">
        <p class="text-center text-gray-500 text-sm mt-3">
          &copy; 2023 BlueSky Community. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
