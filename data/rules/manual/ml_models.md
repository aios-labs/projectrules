---
description: "Guidelines for ml_models"
globs: "**/*"
__meta__type: "guideline"
__meta__repo: "alecpos/sentimentModel"
__meta__tags: ["Machine Learning","Model Implementation","Python","Data Science","Best Practices"]
__meta__rate: 9
---
# Model Implementation Standards

## Architecture
- Implement model classes with consistent interfaces
- Separate model definition from training logic
- Include preprocessing in model pipeline
- Ensure reproducibility through fixed seeds

## Model Types
- Ad scoring: Gradient boosting or neural networks preferred
- Account health: Time series models with anomaly detection
- Feature importance: Always include SHAP or similar
- Ensemble methods encouraged for critical predictions

## Documentation
- Document all hyperparameters with rationale
- Include training and validation metrics
- List feature dependencies explicitly
- Document model limitations clearly

## Example
```python
# Good example - well-structured model class
class AdScoreModel:
    """Model for predicting ad effectiveness scores.

    This model combines NLP features from ad content with historical
    performance metrics to predict effectiveness on a 0-100 scale.

    Attributes:
        feature_columns: List of features used by the model
        model_type: Type of model (gradient_boosting, neural_network)
        version: Model version identifier
    """

    def __init__(self, model_type="gradient_boosting", random_state=42):
        """Initialize the model with specified type.

        Args:
            model_type: Type of model to use
            random_state: Seed for reproducibility
        """
        self.model_type = model_type
        self.random_state = random_state
        self.model = self._initialize_model()
        self.feature_columns = []
        self.version = "1.0.0"

    def _initialize_model(self):
        """Create the underlying model based on model_type."""
        if self.model_type == "gradient_boosting":
            return XGBRegressor(random_state=self.random_state)
        elif self.model_type == "neural_network":
            return MLPRegressor(random_state=self.random_state)
        else:
            raise ValueError(f"Unsupported model type: {self.model_type}")

    def fit(self, X, y):
        """Train the model on provided data.

        Args:
            X: Feature matrix
            y: Target values

        Returns:
            Self for method chaining
        """
        self.feature_columns = list(X.columns)
        self.model.fit(X, y)
        return self

    def predict(self, X):
        """Generate predictions for input data.

        Args:
            X: Feature matrix

        Returns:
            Array of predicted ad scores
        """
        return self.model.predict(X)

    def get_feature_importance(self):
        """Return feature importance metrics.

        Returns:
            DataFrame with feature importance values
        """
        if hasattr(self.model, "feature_importances_"):
            return pd.DataFrame({
                'feature': self.feature_columns,
                'importance': self.model.feature_importances_
            }).sort_values('importance', ascending=False)
        else:
            return None