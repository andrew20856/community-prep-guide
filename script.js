const checklistStorageKey = 'handa-tayo-kit-checklist';
const householdStorageKey = 'handa-tayo-household-plan';

function readStorage(key, fallback) {
	try {
		const savedValue = localStorage.getItem(key);
		return savedValue ? JSON.parse(savedValue) : fallback;
	} catch {
		return fallback;
	}
}

function writeStorage(key, value) {
	try {
		localStorage.setItem(key, JSON.stringify(value));
		return true;
	} catch {
		return false;
	}
}

function initializeChecklist() {
	const checkboxes = [...document.querySelectorAll('[data-item]')];
	const progressCount = document.querySelector('#progress-count');
	const progressBar = document.querySelector('.progress-track');
	const progressFill = document.querySelector('#progress-fill');
	const resetButton = document.querySelector('#reset-checklist');
	const savedItems = readStorage(checklistStorageKey, {});

	function updateProgress() {
		const checkedCount = checkboxes.filter((checkbox) => checkbox.checked).length;
		const totalCount = checkboxes.length;
		progressCount.textContent = `${checkedCount} of ${totalCount}`;
		progressFill.style.width = `${(checkedCount / totalCount) * 100}%`;
		progressBar.setAttribute('aria-valuemax', String(totalCount));
		progressBar.setAttribute('aria-valuenow', String(checkedCount));
	}

	checkboxes.forEach((checkbox) => {
		checkbox.checked = Boolean(savedItems[checkbox.dataset.item]);
		checkbox.addEventListener('change', () => {
			const currentItems = Object.fromEntries(checkboxes.map((item) => [item.dataset.item, item.checked]));
			writeStorage(checklistStorageKey, currentItems);
			updateProgress();
		});
	});

	resetButton.addEventListener('click', () => {
		checkboxes.forEach((checkbox) => { checkbox.checked = false; });
		try {
			localStorage.removeItem(checklistStorageKey);
		} catch {
			writeStorage(checklistStorageKey, {});
		}
		updateProgress();
	});

	updateProgress();
}

function initializeHouseholdPlan() {
	const form = document.querySelector('#family-form');
	const fields = [...form.querySelectorAll('input')];
	const saveStatus = document.querySelector('#save-status');
	const savedPlan = readStorage(householdStorageKey, {});
let saveTimeout;

	fields.forEach((field) => {
		field.value = savedPlan[field.name] || '';
		field.addEventListener('input', () => {
			const currentPlan = Object.fromEntries(fields.map((planField) => [planField.name, planField.value]));
			const didSave = writeStorage(householdStorageKey, currentPlan);
			saveStatus.textContent = didSave ? 'Saving your details on this device...' : 'Could not save here. Keep a written copy of these details.';
			saveStatus.classList.toggle('is-saving', didSave);
			window.clearTimeout(saveTimeout);
			if (didSave) {
				saveTimeout = window.setTimeout(() => {
					saveStatus.textContent = 'Details saved on this device.';
					saveStatus.classList.remove('is-saving');
				}, 500);
			}
		});
	});
}

initializeChecklist();
initializeHouseholdPlan();
