function highlight(section) {
    // ყველა label-ის აქტიური კლასის მოხსნა
    document.querySelectorAll('.popover-label').forEach(label => {
      label.classList.remove('active');
    });
  
    // აქტიური label-ის ფერის შეცვლა
    const activeLabel = document.querySelector(`[onclick="highlight('${section}')"]`);
    if (activeLabel) {
      activeLabel.classList.add('active');
    }
  }
  