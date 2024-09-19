# **Steps to Add a New Paper**

### 1. **Update the `index.html`**

Create a new section or list item to display the new paper's details:

```html
<div>
    <ul class="fa-ul mb-0">
        <li>
            <span class="fa-li"><i class="fas fa-book"></i></span>
            <p class="lead md-5" style="display: flex; justify-content: space-between; align-items: center;">
                <span>
                    <b>Your Paper Title Here</b>
                </span>
            </p>
            <div style="display: inline-block;">
                <p class="text-body m-md-0" style="font-weight: normal; line-height: 1.8;">
                    <b>Your Conference/Journal Name</b><br />
                    Your Author Names
                </p>
            </div>
            <p class="fw-semibold link-info" style="line-height: 1.8; margin-top: 10px;">
                [<a href="YourPaper.pdf"><i class="fa fa-download"></i>&nbsp;Paper</a>]&nbsp;
                [<a href="javascript:void(0);" onclick="showYourNewPaperCitation();" style="text-decoration: none !important;">
                    <i class="fas fa-quote-right"></i>&nbsp;Cite</a>]&nbsp;
                [<a href="YourCodeRepositoryLink" class="icon-link" target="_blank" style="text-decoration: none !important;">
                    <i class="fab fa-github"></i>&nbsp;Code</a>]
            </p>
        </li>
    </ul>
</div>
```

### 2. **Update the JavaScript File (`scripts.js`)**

#### **Add the Citation Information:**

In the `citations` object in your JavaScript file, add a new entry for the paper you want to include. Replace `yourPaperId` with a unique identifier for this paper.

```javascript
const citations = {
    yourPaperId: {
        bibtex: `@inproceedings{yourCitationKey,
  title={Your Paper Title},
  author={Your Author Names},
  booktitle={Proceedings of Your Conference},
  year={2024}
}`,
        ieee: `Your Author Names, "Your Paper Title," in Proceedings of the Your Conference, 2024.`,
        acm: `Your Author Names. 2024. Your Paper Title. In Proceedings of the Your Conference, 2024.`,
        apa: `Your Author Names. (2024). Your Paper Title. In Proceedings of the Your Conference.`
    },
    // Existing papers
};
```

#### **Add a Function to Show the Citation Modal:**

Create a new function to show the citation modal for your new paper.

```javascript
function showYourNewPaperCitation() {
    document.getElementById('citation-container').style.display = 'block';
    document.getElementById('overlay').style.display = 'block';
    updateCitationStyleBar('yourPaperId');  // Update the citation style bar for your new paper
    showCitation('yourPaperId', 'bibtex');  // Default to BibTeX and set it as active
}
```

### 3. **(Optional) Update the CSS File (`styles.css`)**

If your design or layout is standardized, you may not need to update the CSS file. However, if you want to apply specific styles to this new section or make any visual changes (e.g., custom styling for certain publications), you can add or modify styles as needed.

**Example:**
If you need a new class for a special paper:

```css
.special-paper {
    background-color: #f9f9f9;
    border-left: 5px solid #007bff;
    padding: 10px;
}
```
